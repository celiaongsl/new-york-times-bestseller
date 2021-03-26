import React from "react";
import LibreText2 from "../../Typography/LibreFranklin/LibreText2";

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
      <LibreText2>{children}</LibreText2>
    </button>
  );
};

export default TextButton;
