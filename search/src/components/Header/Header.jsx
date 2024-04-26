import React from 'react';
import Search from '../SearchBar/Search';
import * as styles from "./Header.module.css";
import Data from '../../data/Data';

function Header() {
  return (
    <div className={styles.container}>
        <Search placeholder="Enter lamp type..." data={Data}/>
    </div>
  )
}

export default Header