/* eslint-disable react/prop-types */
import React, { useState } from "react";
import styles from "./WalletCard.module.css";

const WalletCard = ({ wallet, onSelection, selectedWallet }) => {
  const isSelected = selectedWallet?.id === wallet.id;

  return (
    <>
      <div
        className={`${styles.card} cursor-pointer`}
      >
        <img src={wallet.image} className={`${styles.walletImg}`} />
        <div>
          <h2 className={`${styles.title}`}>{wallet.title}</h2>
          <p className={`${styles.text}`}>{wallet.link}</p>
        </div>
      </div>
    </>
  );
};

export default WalletCard;
