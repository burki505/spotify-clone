import React from 'react';
import Footer from '../Footer/Footer';
import classes from "./Search.module.css";
import SearchItem from './SearchItem';

const Search = () => {
  return (
    <div className={classes.search}>
            <h2>Browse all</h2>
            <div className={classes.container}>
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            </div>
            <Footer className={classes.footer}/>
    </div>
  )
}

export default Search