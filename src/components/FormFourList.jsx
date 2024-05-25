/* eslint-disable react/prop-types */
import React from "react";
import styles from "./FormFourList.module.css";

const FormFourList = ({ network, onSelection }) => {
  return (
    <button onClick={() => onSelection(network)} className={styles.btn}>
      {network.blockchainNetwork}
    </button>
  );
};

export default FormFourList;
