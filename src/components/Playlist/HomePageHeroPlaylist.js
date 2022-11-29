import React from "react";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";

import classes from "./HomePageHeroPlaylist.module.css";

const HomePageHeroPlaylist = () => {
  return (
    <div className={classes.playlistItem}>
      <div className={classes.left}>
        <img
          src="https://images.genius.com/03077cf6e86f1c29f942b9da25dcbe28.640x640x1.jpg"
          alt=""
        />
        <span>Türkçe Pop</span>
      </div>
      <PlayCircleFilledIcon className={classes.icon} />
    </div>
  );
};

export default HomePageHeroPlaylist;
