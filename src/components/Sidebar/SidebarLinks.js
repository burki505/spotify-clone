import React from 'react';
import { NavLink } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import LibraryBooksSharpIcon from '@mui/icons-material/LibraryBooksSharp';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from "@mui/icons-material/Home";

const SidebarLinks = () => {
  return (
    <div className="sidebar-menu-link">
    <NavLink to="/collection/library">
      {({ isActive }) => (
        <div className="menu-bar__d-flex">
          <LibraryBooksSharpIcon className={isActive ? "icon active" : "icon"} />
          <h3 className={isActive ? "active" : ""}>Your Library</h3>
        </div>
      )}
    </NavLink>
    <div className="loginError"></div>
    </div>
  )
}

export default SidebarLinks