import React from 'react';
import { Link } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import classes from "./Footer.module.css";

const Footer = ({className}) => {
  return (
    <footer className={`${classes.footer} ${className}`}>
    <div className={classes.links}>
    <div className={classes.linksGroup}>
        <div className={classes.linkGroup}>
            <h4>Company</h4>
            <ul>
                <li>About</li>
                <li>Jobs</li>
                <li>For the Record</li>
            </ul>
        </div>
        <div className={classes.linkGroup}>
            <h4>Communities</h4>
            <ul>
                <li>For Artists</li>
                <li>Developers</li>
                <li>Advertising</li>
                <li>Investors</li>
                <li>Vendors</li>
            </ul>
        </div>
        <div className={classes.linkGroup}>
            <h4>Useful Links</h4>
            <ul>
                <li>Support</li>
                <li>Free Mobile App</li>
              
            </ul>
        </div>
        </div>
        <div className={classes.socialGroup}>
            <ul>
                <li><Link><InstagramIcon className={classes.icon} /></Link></li>
                <li><Link><TwitterIcon className={classes.icon} /></Link></li>
                <li><Link><FacebookRoundedIcon className={classes.icon} /></Link></li>
            </ul>
        </div>
        </div>
        <div className={classes.seperator} />
        <div className={classes.underlines}>
            <ul>
                <li>Legal</li>
                <li>Privacy Center</li>
                <li>Privacy Policy</li>
                <li>Cookies</li>
                <li>About Ads</li>
            </ul>
            <div className={classes.brand}>
                &copy; 2022 Spotify AB
            </div>
        </div>
    </footer>
  )
}

export default Footer