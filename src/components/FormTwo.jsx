import React, { useState } from "react";
import FormOne from "./FormOne";
import FormThree from "./FormThree";
import styles from "./FormTwo.module.css";

const FormTwo = () => {
  const [back, setBack] = useState(false);
  const [front, setFront] = useState(false);
  const backHandler = () => {
    setBack(true);
  };

  const frontHandler = () => {
    setFront(true);
  };
  return (
    <>
      {back ? (
        <FormOne />
      ) : front ? (
        <FormThree />
      ) : (
        <div className={`${styles.container}`}>
          <p className={`${styles.error}`}>
            An error occurred... Please try again or connect manually
          </p>
          <div className="flex flex-col items-center text-center">
            <button
              onClick={backHandler}
              className={`${styles.btnTransparent}`}
            >
              Try Again
            </button>
            <button onClick={frontHandler} className={`${styles.btn}`}>
              Register Manually
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default FormTwo;
