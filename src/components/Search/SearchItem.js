import React from "react";
import { NavLink } from "react-router-dom";
import useColor from "../../hooks/useColor";
import classes from "./SearchItem.module.css";

const SearchItem = () => {

  const {currentBackground} = useColor();

  return (
    <NavLink
      style={{ background: currentBackground }}
      className={classes.item}
      to="/genre/p1"
    >
      <h3>Podcasts</h3>
      <div className={classes.itemImage}>
        <img src="https://memberdata.s3.amazonaws.com/hi/hitsdd/photos/hitsdd_photo_gal__photo_378602312.png" alt="" />
      </div>
    </NavLink>
  );
};

export default SearchItem;
