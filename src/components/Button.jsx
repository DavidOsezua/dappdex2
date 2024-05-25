/* eslint-disable react/prop-types */
import React from "react";

const Button = ({ children, toggleHandler }) => {
  return (
    <button
      className={`bg-[#E4D2F3] px-[0.6rem] py-[0.5rem] rounded-md`}
      onClick={toggleHandler}
    >
      {children}
    </button>
  );
};

export default Button;
