import React from "react";

const LibreText3 = (props) => {
  const { children, customStyles } = props;
  return (
    <div
      style={{
        fontFamily: "Libre Franklin",
        fontWeight: "400",
        fontSize: "13px",
        letterSpacing: "2%",
        ...customStyles,
      }}
    >
      {children}
    </div>
  );
};

export default LibreText3;
