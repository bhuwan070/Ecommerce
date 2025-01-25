import React from "react";
import { GrCart } from "react-icons/gr";

const AddtoCartButton = (props) => {
    const {buttonClass, text} = props
  return (
    <>
      <button className={buttonClass}>
        <GrCart />
        {text}
      </button>
    </>
  );
};

export default AddtoCartButton;
