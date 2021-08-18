import React from 'react';
import classes from './TopBar.module.css';
import logo from '../images/amazon.png';

const TopBar = (props) => {

  return(
    <header>
      <nav>
        <img src={logo} alt="amazon logo" className={classes.Logo} />
      </nav>
    </header>
  );
}

export default TopBar;