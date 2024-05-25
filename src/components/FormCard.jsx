/* eslint-disable react/prop-types */
import React from "react";
import styles from "./FormCard.module.css";

const FormCard = ({ children }) => {
  return <div className={`${styles.formCard}`}>{children}</div>;
};

export default FormCard;
