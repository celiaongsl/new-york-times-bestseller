import React from "react";

const LibreText1 = (props) => {
  const { children, customStyles } = props;
  return (
    <div
      style={{
        fontFamily: "Libre Franklin",
        fontWeight: "400",
        fontSize: "20px",
        letterSpacing: "2%",
        ...customStyles,
      }}
    >
      {children}
    </div>
  );
};

export default LibreText1;
