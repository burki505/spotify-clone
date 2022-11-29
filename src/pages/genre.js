import React from "react";
import { useLocation } from "react-router-dom";
import PlaylistContent from "../components/Playlist/PlaylistContent";

const GenrePage = ({ currentBackground }) => {
  const location = useLocation();


  return (
    <div>
      <PlaylistContent
        description={true}
        infos={true}
        currentBackground={currentBackground}
        urlTracker={location.pathname.split("/")[1]}
        heroImage="https://images.genius.com/03077cf6e86f1c29f942b9da25dcbe28.640x640x1.jpg"
      />
    </div>
  );
};

export default GenrePage;
