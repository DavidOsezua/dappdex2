import React from "react";
import styles from "./FormTwo.module.css";
import { useModal } from "../pages/walletPage";
import { NavLink } from "react-router-dom";
import { check } from "../assets";

const SuccessForm = ({ selectedNetwork }) => {
  const { modalHandler } = useModal();

  return (
    <div className="flex flex-col items-center">
      <img src={check} />

      <h2 className={`${styles.successTitle} mt-[0.7rem]`}>
        Wallet registered succefully
      </h2>

      <button className={`${styles.btn} max-w-[350px] `} onClick={modalHandler}>
        Close
      </button>

      <button className={`${styles.btnTransparent} max-w-[350px] `}>
        <NavLink to="/">Home</NavLink>
      </button>
    </div>
  );
};

export default SuccessForm;
