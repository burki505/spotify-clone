import React from "react";
import PlaylistContent from "../components/Playlist/PlaylistContent";

const PlaylistContentPage = ({ currentBackground }) => {
  return (
    <>
      <PlaylistContent
        description={true}
        infos={true}
        isPublic={true}
        heroImage="https://images.genius.com/03077cf6e86f1c29f942b9da25dcbe28.640x640x1.jpg"
        currentBackground={currentBackground}
        title="Daily Mix"
      />
    </>
  );
};

export default PlaylistContentPage;
