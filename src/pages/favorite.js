import React from 'react'
import PlaylistContent from '../components/Playlist/PlaylistContent'

const FavoritePage = ({currentBackground}) => {
  return (
    <div>
        <PlaylistContent currentBackground={currentBackground} />
    </div>
  )
}

export default FavoritePage