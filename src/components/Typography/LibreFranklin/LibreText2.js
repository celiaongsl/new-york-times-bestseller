import React from "react";

const LibreText2 = (props) => {
  const { children, customStyles } = props;
  return (
    <div
      style={{
        fontFamily: "Libre Franklin",
        fontWeight: "400",
        fontSize: "15px",
        letterSpacing: "2%",
        ...customStyles,
      }}
    >
      {children}
    </div>
  );
};

export default LibreText2;
