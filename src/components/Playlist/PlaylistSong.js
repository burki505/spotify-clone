import React from 'react';
import classes from "./PlaylistSong.module.css";

const PlaylistSong = ({heroImage}) => {
  return (
    <tr>
          <td className={classes.id}>1</td>
              <td className={classes.title}>
                <img src={heroImage} alt="" />
                <div>
                  <h3>Glimpse of Us</h3>
                  <span>Joji</span>
                </div>
              </td>
              <td className={classes.album}>Glimpse of Us</td>
              <td className={classes.date}>15 gün önce</td>
              <td className={classes.duration}>3:53</td> 
    </tr>
  )
}

export default PlaylistSong