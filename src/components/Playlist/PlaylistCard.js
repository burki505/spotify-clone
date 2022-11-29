import React from "react";
import { NavLink } from "react-router-dom";
import "./PlaylistCard.css";

const PlaylistCard = ({ id, title, description, img }) => {
  return (
   
      <NavLink to={`/playlist/${id}`} key={id} className="playlist-card">
        <div className="playlist-card-item">
          <img src={img} alt="" />
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </NavLink>
    
  );
};

export default PlaylistCard;
