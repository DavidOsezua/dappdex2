import React from "react";
import { Logo, ham, search } from "../assets";
import styles from "./NewsLetter.module.css";

const NewsLetter = () => {
  return (
    <section className={`${styles.section}`}>
      {/* CONTAINER */}

      <div className={`${styles.container}`}>
        {/*FIRST COL  */}
        <div className={`${styles.firstCol}`}>
          <div className={`${styles.logoContainer}`}>
            <img src={Logo} className={`${styles.logo}`} />
            <p>Wallet Rectify</p>
          </div>
          <div className={`${styles.contentContainer}`}>
            <p className={`${styles.text}`}>
              Open and decentralized protocol for syncing various Wallets to
              Dapps Secure Server. This is not an app but a protocol that
              establishes a remote connection between two/more apps and/or
              devices
            </p>

            <p className={`${styles.text}`}>
              Every digital artwork on Upside is authentic and truly unique.
              Blockchain technology makes this new aproch to digital ownership
              possible. Open and decentralized protocol for syncing various
              Wallets issues on Secure Server. It is an online server which gets
              you across to every wallet representative to enable effective
              complain and rectification of issues.
            </p>
          </div>
        </div>

        {/* SECOND COL */}
        <div className="pb-[1rem]">
          <img src={search} className="w-[500px] mx-[auto]" />
        </div>
      </div>

      <hr className={`${styles.line}`} />
    </section>
  );
};

export default NewsLetter;
