import React from "react";
import LibreHeader1 from "../../Typography/LibreFranklin/LibreHeader1";

const RoundButton = (props) => {
  const { onClick, children } = props;
  return (
    <button
      onClick={onClick}
      style={{
        height: "80px",
        width: "350px",
        borderRadius: "50px",
        backgroundColor: "#fff",
        border: "2px solid #ebebeb",
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.17)",
      }}
    >
      <LibreHeader1>{children}</LibreHeader1>
    </button>
  );
};

export default RoundButton;
