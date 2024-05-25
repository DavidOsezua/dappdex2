import React, { useState, useEffect } from "react";
import FormCard from "./FormCard";
import FormTwo from "./FormTwo";
import styles from "./FormOne.module.css";

const FormOne = ({ selectedWallet }) => {
  const [loading, setLoading] = useState();

  useEffect(function () {
    async function fetch() {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 5000));

      setLoading(false);
    }

    fetch();
  }, []);
  return (
    <div>
      {loading ? (
        <div className="text-center">
          <div className={`${styles.loader}`}></div>
          <p className="font-bold">Starting secure connection </p>
          <p className="italic">Please wait...</p>
        </div>
      ) : (
        <FormTwo />
      )}
    </div>
  );
};

export default FormOne;
