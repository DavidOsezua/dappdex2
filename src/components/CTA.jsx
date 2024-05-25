import React from "react";
import styles from "./CTA.module.css";

const CTA = () => {
  return (
    <section className={`${styles.section}`}>
      <hr className={`${styles.line}`} />
      <div className={`${styles.container}`}>
        <p className={`${styles.littleText}`}>- Wallet Rectify -</p>
        <h1 className={`${styles.text}`}>
          We make sure that everyone is able to securely use their wallet
        </h1>
      </div>
      <hr className={`${styles.line}`} />
    </section>
  );
};

export default CTA;
