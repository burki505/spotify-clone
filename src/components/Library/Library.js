import React from 'react';
import Footer from '../Footer/Footer';
import PlaylistItem from '../Playlist/PlaylistItem';
import classes from "./Library.module.css";

const Library = () => {
  return (
    <div className={classes.library}>
        <PlaylistItem />
        <Footer />
    </div>
  )
}

export default Library