import React from "react";

const LibreHeader1 = (props) => {
  const { children, customStyles } = props;
  return (
    <div
      style={{
        fontFamily: "Libre Franklin",
        fontWeight: "600",
        fontSize: "28px",
        letterSpacing: "2%",
        ...customStyles,
      }}
    >
      {children}
    </div>
  );
};

export default LibreHeader1;
