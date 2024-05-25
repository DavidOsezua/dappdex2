/* eslint-disable react/prop-types */
import React from "react";
import styles from "./CardFeatures.module.css";

const CardFeatures = ({ feature }) => {
  return (
    <div className={`${styles.card}`}>
      <img src={feature.image} />
      <p className={`${styles.text}`}>{feature.text}</p>
    </div>
  );
};

export default CardFeatures;
