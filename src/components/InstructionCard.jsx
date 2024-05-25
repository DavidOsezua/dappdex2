/* eslint-disable react/prop-types */
import React from "react";
import styles from "./InstructionCard.module.css";

const InstructionCard = ({ instruction }) => {
  return (
    <div className={`${styles.card}`}>
      <img src={instruction.image} />
      <div className={`${styles.content}`}>
        <h2 className={`${styles.title}`}>{instruction.title}</h2>
        <p className={`${styles.text}`}>{instruction.content}</p>
      </div>
    </div>
  );
};

export default InstructionCard;
