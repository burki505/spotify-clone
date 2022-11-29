import React from "react";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import classes from "./PlaylistContent.module.css";
import Footer from "../Footer/Footer";
import PlaylistSong from "./PlaylistSong";
import { NavLink } from "react-router-dom";


const PlaylistContent = ({
  heroImage,
  type,
  description,
  infos,
  urlTracker,
  currentBackground,
  title
}) => {

  

  return (
    <div className={classes.content}>
      <div className={classes.hero} style={{"background": currentBackground}}>
        {urlTracker === "genre" ? (
          <div className={classes.createdPlaylist}>
            <h1>Pop</h1>
          </div>
        ) : (
          <>
            <div className={classes.heroImage}>
              <img
                src={
                  heroImage ||
                  "https://community.spotify.com/t5/image/serverpage/image-id/55829iC2AD64ADB887E2A5/image-size/large?v=v2&px=999"
                }
                alt=""
              />
            </div>
            <div className={classes.descriptionGroup}>
              <div className={classes.topHero}>
                <h2>{type}</h2>
                <h1>{description || "My playlist #1"}</h1>
              </div>
              <div className={classes.heroMain}>
                {description && infos ? (
                  <>
                    <span className={classes.AlbumDefiner}>Playlist</span>
                    <p className={classes.AlbumTitle}>{title}</p>
                    <p className={classes.description}>
                      Sam smith & Kim Petras are on top of the Hottest 50!
                    </p>
                    <div className={classes.statics}>
                      <p>Spotify</p>
                      <p>.50 songs,</p>
                      <span>2 hr 34 min</span>
                    </div>
                  </>
                ) : (
                  <p className={classes.username}>Burak</p>
                )}
              </div>
            </div>
          </>
        )}
      </div>
      <div className={classes.playlist}>
        {description && infos && (
          <div className={classes.buttonGroup}>
            <PlayCircleFilledIcon className={classes.play} />
            <FavoriteBorderIcon className={classes.like} />
          </div>
        )}
        <div className={classes.musicTable}>
          {description && infos ? (
            <table className={classes.table}>
              <tr className={classes.header}>
                <th className={classes.idHeader}>#</th>
                <th className={classes.titleHeader}>TITLE</th>
                <th className={classes.albumHeader}>ALBUM</th>
                <th className={classes.dateHeader}>DATE ADDED</th>
                <th className={classes.durationHeader}>
                  <AccessTimeIcon />
                </th>
              </tr>
              <tr>
                <td className={classes.seperator}>
                  <div></div>
                </td>
              </tr>
              <PlaylistSong heroImage={heroImage} />
              <PlaylistSong heroImage={heroImage} />
              <PlaylistSong heroImage={heroImage} />
              <PlaylistSong heroImage={heroImage} />
              <PlaylistSong heroImage={heroImage} />
            </table>
          ) : (
            <NavLink to="/" className={classes.addTrack}>
              Add Songs
            </NavLink>
          )}
        </div>
      </div>
      <Footer className={classes.footer} />
    </div>
  );
};

export default PlaylistContent;
