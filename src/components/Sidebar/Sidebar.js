import React, {useState } from "react";
import "./Sidebar.css";
import { NavLink, useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import LibraryBooksSharpIcon from "@mui/icons-material/LibraryBooksSharp";
import AddBoxRoundedIcon from "@mui/icons-material/AddBoxRounded";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HomeIcon from "@mui/icons-material/Home";
import { useSelector } from "react-redux";
import Button from "../shared/Button";

const Sidebar = () => {
  const [displayError, setDisplayError] = useState(false);

  const [isError, setIsError] = useState({
    library: "",
    playlist: "",
    likedSongs: "",
  });

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const navigate = useNavigate();

  const clickHandler = (e) => {
    e.preventDefault();
    let linkId = e.currentTarget.getAttribute("id");

    if (JSON.parse(localStorage.getItem("login")) && isLoggedIn) {
      if (linkId === "library") {
        navigate("/collection/library");
      }
      if (linkId === "playlist") {
        navigate("/playlist/p3");
      }
      if (linkId === "likedSongs") {
        navigate("/collection/tracks");
      }
      setDisplayError(false);
    } else {
      setIsError({ [linkId]: { isInValidRequest: true, linkId: linkId } });
      setDisplayError(true);
    }
  };

  const displayErrorHandler = (e) => {
    setDisplayError(false);
  };

  // useEffect(() => {
  //   console.log(isError);
  //   console.log(displayError);
  // }, [isError, displayError]);

  return (
    <aside className="sidebar">
      <NavLink to="/">
        <img
          className="sidebar-brand"
          src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png"
          alt=""
        />
      </NavLink>
      <div className="sidebar-menu">
        <NavLink to="/" className="sidebar-menu-link">
          {({ isActive }) => (
            <>
              <HomeIcon className={isActive ? "icon active" : "icon"} />
              <h3 className={isActive ? "active" : ""}>Home</h3>
            </>
          )}
        </NavLink>
        <NavLink to="/search" className="sidebar-menu-link">
          {({ isActive }) => (
            <>
              <SearchIcon className={isActive ? "icon active" : "icon"} />
              <h3 className={isActive ? "active" : ""}>Search</h3>
            </>
          )}
        </NavLink>
        <div className="outer-menu-link">
          <div
            onClick={clickHandler}
            id="library"
            className="sidebar-menu-link"
          >
            <NavLink onClick={clickHandler} id="library">
              {({ isActive }) => (
                <div className="menu-bar__d-flex">
                  <LibraryBooksSharpIcon
                    className={isActive ? "icon active" : "icon"}
                  />
                  <h3 className={isActive ? "active" : ""}>Your Library</h3>
                </div>
              )}
            </NavLink>
          </div>
          {isError.library && (
            <>
              <div
                className={`loginError ${
                  isError && displayError ? "active" : ""
                }`}
              >
                <div className="errorShapes">
                  <div className="errorTitle">
                    <div className="top">
                      <h3 className="top__title">Enjoy Your Library</h3>
                      <p className="top__para">
                        Log in to see saved sngs, podcasts, artists and
                        playlists in Your Library
                      </p>
                    </div>
                    <div className="topButtonGroup">
                      <Button onClick={displayErrorHandler}>Not Now</Button>
                      <Button
                        onClick={() => navigate("/login")}
                        className="login"
                        type="click"
                      >
                        Log in
                      </Button>
                    </div>
                  </div>
                  <div className="triangle"></div>
                </div>
              </div>
            </>
          )}
        </div>
          <div className="outer-menu-link">
        <div
          onClick={clickHandler}
          id="playlist"
          className="sidebar-menu-link create-playlist"
        >
          <NavLink onClick={clickHandler} id="playlist">
            {({ isActive }) => (
              <div className="menu-bar__d-flex">
                <AddBoxRoundedIcon
                  className={isActive ? "icon active" : "icon"}
                />
                <h3 className={isActive ? "active" : ""}>Create Playlist</h3>
              </div>
            )}
          </NavLink>
          </div>
          {isError.playlist && (
            <div className={`loginError ${isError && displayError ? "active" : ""}`}>
              <div className="errorShapes">
                <div className="errorTitle">
                  <div className="top">
                    <h3 className="top__title">Create a playlist</h3>
                    <p className="top__para">
                      Log in to create and share playlists.
                    </p>
                  </div>
                  <div className="topButtonGroup">
                    <Button onClick={displayErrorHandler} type="click">
                      Not Now
                    </Button>
                    <Button
                      onClick={() => navigate("/login")}
                      className="login"
                      type="click"
                    >
                      Log in
                    </Button>
                  </div>
                </div>
                <div className="triangle"></div>
              </div>
            </div>
          )}
        
        </div>
        <div className="outer-menu-link">
        <div
          onClick={clickHandler}
          id="likedSongs"
          className="sidebar-menu-link"
        >
          <NavLink onClick={clickHandler} id="likedSongs">
            {({ isActive }) => (
              <div className="menu-bar__d-flex">
                <FavoriteIcon
                  className={
                    isActive ? "icon likeIcon active" : "icon likeIcon"
                  }
                />
                <h3 className={isActive ? "active" : ""}>Liked Songs</h3>
              </div>
            )}
          </NavLink>
          </div>
          {isError.likedSongs &&  (
            <div className={`loginError ${isError && displayError ? "active" : ""}`}>
              <div className="errorShapes">
                <div className="errorTitle">
                  <div className="top">
                    <h3 className="top__title">Enjoy Your Liked Songs</h3>
                    <p className="top__para">
                      Log in to see all the songs you've liked in one easy
                      playlist.
                    </p>
                  </div>
                  <div className="topButtonGroup">
                    <Button onClick={displayErrorHandler} type="click">
                      Not Now
                    </Button>
                    <Button
                      onClick={() => navigate("/login")}
                      className="login"
                      type="click"
                    >
                      Log in
                    </Button>
                  </div>
                </div>
                <div className="triangle"></div>
              </div>
            </div>
          )}
        
        </div>
        <div className="seperator"></div>
        <NavLink to="/playlist/c1" className="sidebar-menu-link playlist">
          {({ isActive }) => (
            <h3 className={isActive ? "active" : ""}>1. Çalma listem</h3>
          )}
        </NavLink>
        {/* <NavLink to="/playlist/c1" className="sidebar-menu-link playlist">
          {({ isActive }) => <h3 className={isActive ? "active" : ""}>2. Çalma listem</h3>}
        </NavLink> */}
      </div>
    </aside>
  );
};

export default Sidebar;
