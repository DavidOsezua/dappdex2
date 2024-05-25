import React, { createContext, useContext, useState } from "react";
import { Modal, WalletCard, WalletHeader } from "../components";
import styles from "./WalletPage.module.css";
import { walletData } from "../data/data";

const ModalContext = createContext();

export const useModal = () => useContext(ModalContext);

const walletPage = () => {
  const [selectedWallet, setSelectedWallet] = useState(null);

  const handleSelection = (wallet) => {
    setSelectedWallet((curr) => (curr?.id === wallet.id ? "" : wallet));
  };

  const modalHandler = () => {
    setSelectedWallet((currentWallet) => {
      // Add any additional logic here if needed before clearing the selected wallet
      // For instance, logging the current wallet being deselected or performing cleanups
      console.log("Deselecting wallet:", currentWallet);

      // Finally, return null to clear the selected wallet
      return null;
    });
  };

  return (
    <>
      <WalletHeader />
      <ModalContext.Provider value={{ selectedWallet, modalHandler }}>
        <section className={`${styles.section}`}>
          {/* TITLE */}
          <div className={`${styles.select}`}>
            <h2 className={`${styles.title}`}>SELECT WALLET</h2>
            <div className={`${styles.loader}`}></div>
          </div>

          {/* WALLET CARDS */}
          <div className={`${styles.container}`}>
            <div className={`${styles.cardContainer}`}>
              {walletData.map((wallet, i) => (
                <WalletCard
                  key={wallet.id}
                  wallet={wallet}
                  num={i}
                  selectedWallet={selectedWallet}
                  onSelection={handleSelection}
                />
              ))}
            </div>
          </div>
          {selectedWallet ? (
            <Modal
              selectedWallet={selectedWallet}
              modalHandler={modalHandler}
            />
          ) : (
            ""
          )}
        </section>
      </ModalContext.Provider>
    </>
  );
};

export default walletPage;
