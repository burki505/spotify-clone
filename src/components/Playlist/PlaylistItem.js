import React from "react";
import PlaylistCard from "./PlaylistCard";
import { NavLink } from "react-router-dom";
import "./PlaylistItem.css";

const CARD_INFOS = [
  {
    id: "c1",
    img: "https://upload.wikimedia.org/wikipedia/en/9/90/Scorpion_by_Drake.jpg",
    title: "Today's Top Hits",
    description: "Drake & 21 savage are on top of the hottest",
  },
  {
    id: "c2",
    img: "https://upload.wikimedia.org/wikipedia/en/9/90/Scorpion_by_Drake.jpg",
    title: "Today's Top Hits",
    description: "Drake & 21 savage are on top of the hottest",
  },
  {
    id: "c3",
    img: "https://upload.wikimedia.org/wikipedia/en/9/90/Scorpion_by_Drake.jpg",
    title: "Today's Top Hits",
    description: "Drake & 21 savage are on top of the hottest",
  },
  {
    id: "c4",
    img: "https://upload.wikimedia.org/wikipedia/en/9/90/Scorpion_by_Drake.jpg",
    title: "Today's Top Hits",
    description: "Drake & 21 savage are on top of the hottest",
  },
  {
    id: "c5",
    img: "https://upload.wikimedia.org/wikipedia/en/9/90/Scorpion_by_Drake.jpg",
    title: "Today's Top Hits",
    description: "Drake & 21 savage are on top of the hottest",
  },
  {
    id: "c6",
    img: "https://upload.wikimedia.org/wikipedia/en/9/90/Scorpion_by_Drake.jpg",
    title: "Today's Top Hits",
    description: "Drake & 21 savage are on top of the hottest",
  },
];

let content = CARD_INFOS.map((c) => {
  return (
    <PlaylistCard
    key={c.id}
      id={c.id}
      img={c.img}
      title={c.title}
      description={c.description}
    />
  );
});

const PlaylistItem = ({title}) => {
  return (
    <div className="each-playlist">
      <div className="title">
        <h2>Spotify Playlists</h2>
        <NavLink className="link-seeAll">SEE ALL</NavLink>
      </div>
      <div className="playlist-container">{content}</div>
    </div>
  );
};

export default PlaylistItem;
