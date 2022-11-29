import React from 'react';
import {useSelector} from "react-redux";
import PlaylistItem from './PlaylistItem';
import { DUMMY_INFOS } from '../../utils/dummy-infos';
import "./Playlist.css";
import Footer from '../Footer/Footer';


const Playlist = () => {

  let playlistStyle = {};

  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  if(!JSON.parse(localStorage.getItem("login")) || !isLoggedIn){
    playlistStyle = {
      paddingTop: "5rem"
    }
  }

  return (
    <div className='overall-playlist' style={playlistStyle} >
      {DUMMY_INFOS.map(i => {
        return <PlaylistItem key={i.id} id={i.id} title={i.title} />
      })}
      <Footer />
    </div>
  )
}

export default Playlist