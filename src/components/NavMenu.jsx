import React from "react";
import { buttonLinks } from "../data/data";

import Button from "./Button";
import { Logo, ham } from "../assets";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const NavMenu = ({ toggle, toggleHandler }) => {
  return (
    <div className={styles.menuContainer}>
      <ul className={`${styles.navMenu} ${toggle && styles.showMenu} `}>
        <button
          className={`bg-[#631b94] px-[0.6rem] py-[0.5rem] rounded-md  text-[#fff]`}
        >
          All
        </button>

        {buttonLinks.map((buttonLink) => (
          <Button key={buttonLink.link} toggleHandler={toggleHandler}>
            {buttonLink.link}
          </Button>
        ))}
      </ul>
      <NavLink to="wallet">
        {" "}
        <button
          className={`bg-[#631b94] px-[0.6rem] py-[0.5rem] rounded-md w-full text-[#fff]`}
        >
          CONNECT WALLET
        </button>
      </NavLink>
    </div>
  );
};

export default NavMenu;
