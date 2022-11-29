import React from "react";
import {useSelector} from "react-redux";
import HomePageHeroPlaylist from "../components/Playlist/HomePageHeroPlaylist";
import Playlist from "../components/Playlist/Playlist";

import classes from "./Home.module.css";

// background: currentBackground

const Home = () => {
  

  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);


  return (
    <div className={classes.home}>
      {JSON.parse(localStorage.getItem("login")) && isLoggedIn &&  (
        <div
          className={classes.hero}
          style={{
            background: `linear-gradient(180deg, rgba(13, 38, 54, 1) 0%, rgba(20,20,20,1) 50%, rgba(21,21,21,1) 100%)`,
          }}
        >
          <h1>Good Afternoon</h1>
          <div className={classes.playlistGroup}>
            <HomePageHeroPlaylist />
            <HomePageHeroPlaylist />
            <HomePageHeroPlaylist />
            <HomePageHeroPlaylist />
          </div>
        </div>
      )}
      <Playlist />
    </div>
  );
};

export default Home;
