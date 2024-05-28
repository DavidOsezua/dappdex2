/* eslint-disable react/prop-types */
import React from "react";
import styles from "./Modal2.module.css";
import { NavLink } from "react-router-dom";
import { close, usdt } from "../assets";

const Modal2 = ({ modalHandler, claimer }) => {
  return (
    <div className={`${styles.overlay}`}>
      <div className={`${styles.overlay2}`} onClick={modalHandler}></div>
      <div className={`${styles.formContainer}`}>
        <div>
          <div className={`${styles.formWrapper}`}>
            <img src={close} className={styles.close} onClick={modalHandler} />

            <div className={styles.textContainer}>
              <div className="flex gap-2 justify-center">
                <h2 className={styles.title}>300</h2>
                <img src={usdt} className="w-[20px]" />
                <h2 className={styles.title}>Rewards!!</h2>
              </div>
              <p>
                Register your wallet today and receive{" "}
                <span className={styles.title}>300 USDT.</span>within the next
                24 hours. invite friends nad family, and earn
                <span className={styles.title}>100 USDT</span>as a referral
                reward.
              </p>
            </div>

            <div className="flex gap-1">
              <NavLink>
                <button
                onClick={claimer}
                  className={`bg-[#FFC107] text-[#000000] px-[1rem] py-[0.5rem] rounded-md`}
                >
                  Register Now
                </button>
              </NavLink>

              <NavLink >
                <button
                  className={`bg-[#fff] text-[#000000] px-[1rem] py-[0.5rem] rounded-md`}
                  onClick={claimer}
                >
                  Refer Now
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal2;
