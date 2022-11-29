import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useColorChanger from "./useColorChanger";
import { authActions } from "../store/auth/authSlice";
import { useDispatch } from "react-redux";

const useHeader = (currentBackground) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollState, backgroundStyle } = useColorChanger(currentBackground);
  let isPageHome = false;
  let isPageElse = false;

  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  if (
    location.pathname.trim() === "/" ||
    location.pathname.trim() === "/search" ||
    location.pathname.trim() === "/collection/library"
  ) {
    isPageHome = true;
    isPageElse = false;
  } else {
    isPageElse = true;
    isPageHome = false;
  }

  if (location.pathname.trim().split("/")[1] === "playlist") {
  }

  const loginHandler = () => {
    dispatch(authActions.hideHeaderAndSidebar());
    navigate("/login");
  };
  const signupHandler = () => {
    dispatch(authActions.hideHeaderAndSidebar());
    navigate("/signup");
  };

  useEffect(() => {
    if (
      location.pathname.trim() !== "/" &&
      location.pathname.trim() !== "/search" &&
      location.pathname.trim() !== "/collection/library"
    ) {
      if (scrollState >= 250) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    } else {
      setIsScrolled(false);
    }
  }, [location.pathname, scrollState]);

  return {
    isScrolled,
    backgroundStyle,
    isPageElse,
    isPageHome,
    loginHandler,
    signupHandler,
    scrollState,
  };
};

export default useHeader;
