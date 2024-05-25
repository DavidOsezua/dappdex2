/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { buttonLinks } from "../data/data";
import styles from "./Navbar.module.css";
import Button from "./Button";
import { Logo, ham } from "../assets";
import { NavLink } from "react-router-dom";
import "../App.css";
import NavMenu from "./NavMenu";

const Navbar = ({toggleHandler}) => {



  return (
    <header className={`${styles.header}`}>
      <nav className={`${styles.navContainer}`}>
        {/**************** LOGO   ********************/}
        <div className={`${styles.logoContainer}`}>
          <img src={Logo} className={`${styles.logo}`} />
          <p>Home - All Interconnect</p>
        </div>

        {/**************** BUTTON LINKS  ********************/}
        <div className={styles.check}>
          <NavMenu />
        </div>
        <button className={`${styles.ham}`} onClick={toggleHandler}>
          <img src={ham} />
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
