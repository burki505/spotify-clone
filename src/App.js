import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import Home from "./pages/home";
import { Routes, Route, useLocation } from "react-router-dom";
import "./index.css";
import Signup from "./pages/signup";
import Login from "./pages/login";
import PlaylistContentPage from "./pages/playlist-content";
import SearchPage from "./pages/search";
import LibraryPage from "./pages/library";
import FavoritePage from "./pages/favorite";
import GenrePage from "./pages/genre";
import useColor from "./hooks/useColor";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { authActions } from "./store/auth/authSlice";

// heroImage="https://images.genius.com/03077cf6e86f1c29f942b9da25dcbe28.640x640x1.jpg"

function App() {
  const { currentBackground } = useColor();
  const location = useLocation();
  const dispatch = useDispatch();

  const showSideAndHeader = useSelector(
    (state) => state.auth.showSideAndHeader
  );

  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  useEffect(() => {
    if (
      location.pathname.trim() === "/login" ||
      location.pathname.trim() === "/signup"
    ) {
      dispatch(authActions.hideHeaderAndSidebar());
    } else {
      dispatch(authActions.showHeaderAndSidebar());
    }
  });



  return (
    <div className="App">
      {showSideAndHeader && <Sidebar />}
      <div className="main-content">
        {showSideAndHeader && <Header currentBackground={currentBackground} />}
        <div className="routes">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/playlist/:playlistId"
              element={
                <PlaylistContentPage currentBackground={currentBackground} />
              }
            />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/collection/library" element={<LibraryPage />} />
            <Route
              path="/collection/tracks"
              element={<FavoritePage currentBackground={currentBackground} />}
            />
            <Route
              path="/genre/:genreId"
              element={<GenrePage currentBackground={currentBackground} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
