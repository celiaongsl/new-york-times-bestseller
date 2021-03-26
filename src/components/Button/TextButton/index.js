import React from "react";
import LibreText3 from "../../Typography/LibreFranklin/LibreText3";

const TextButton = (props) => {
  const { children, onClick } = props;
  return (
    <button
      style={{
        height: "30px",
        borderRadius: "50px",
        backgroundColor: "transparent",
        border: "none",
      }}
      onClick={onClick}
    >
      <LibreText3>{children}</LibreText3>
    </button>
  );
};

export default TextButton;
