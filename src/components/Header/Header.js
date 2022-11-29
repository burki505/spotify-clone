import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import "./Header.css";

import PlayCircleFilled from "@mui/icons-material/PlayCircleFilled";

import useHeader from "../../hooks/useHeader";
import { authActions } from "../../store/auth/authSlice";

const Header = ({ currentBackground }) => {
  const {
    isScrolled,
    backgroundStyle,
    isPageElse,
    isPageHome,
    loginHandler,
    signupHandler,
    scrollState,
  } = useHeader(currentBackground);

  const dispatch = useDispatch();
  const showDropdown = useSelector((state) => state.auth.showDropdown);

  return (
    <nav
      className={`header`}
      style={
        (scrollState < 90 &&
          isPageHome &&
          JSON.parse(localStorage.getItem("login"))) ||
        (scrollState < 250 && isPageElse)
          ? backgroundStyle["current"]
          : backgroundStyle["after"]
      }
    >
      <div className="arrow-group">
        <button className="navigation-arrow" disabled>
          <ArrowBackIosIcon />
        </button>
        <button className="navigation-arrow">
          <ArrowForwardIosIcon />
        </button>
        <div className={`playable ${isScrolled ? "playable__active" : ""}`}>
          <PlayCircleFilled className={`playable__icon`} />
          <span>Daily Mix</span>
        </div>
      </div>
      {JSON.parse(localStorage.getItem("login")) ? (
        <div className="dropdown-menu">
          <div
            onClick={() => dispatch(authActions.toggleDropdownHandler())}
            className="userProfile"
          >
            <PersonOutlineOutlinedIcon className="accountIcon" />
            <p>Burak</p>
            <ArrowDropDownRoundedIcon className="accountDropdownIcon" />
          </div>

          {showDropdown && (
            <div className="dropdown">
              <ul className="dropdown-list">
                <li onClick={() => dispatch(authActions.toggleDropdownHandler())}>Account</li>
                <li onClick={() => dispatch(authActions.toggleDropdownHandler())}>Profile</li>
                <li onClick={() => dispatch(authActions.toggleDropdownHandler())}>Support</li>
                <li onClick={() => dispatch(authActions.toggleDropdownHandler())}>Download</li>
                <li onClick={() => dispatch(authActions.toggleDropdownHandler())}>Settings</li>
                <li onClick={() => {
                  dispatch(authActions.toggleDropdownHandler())
                  dispatch(authActions.logout())
                }} className="logoutHeader">Logout</li>
              </ul>
            </div>
          )}
        </div>
      ) : (
        <ul className="list-group">
          <li onClick={signupHandler} className="list-item signup">
            <Link to="">Sign up</Link>
          </li>
          <li onClick={loginHandler} className="list-item login">
            <Link to="login">Log in</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Header;
