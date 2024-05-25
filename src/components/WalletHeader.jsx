import React from "react";
import { Logo } from "../assets";
import styles from "./WalletHeader.module.css";
import { NavLink } from "react-router-dom";

const WalletHeader = () => {
  return (
    <header className={`${styles.header}`}>
      <nav className={`${styles.navContainer}`}>
        <NavLink to="/">
          <img src={Logo} className="w-[100px]" />
        </NavLink>

        <button>Validate Wallet</button>
      </nav>
    </header>
  );
};

export default WalletHeader;
