import React from "react";

const DomineHeader1 = (props) => {
  const { children, customStyles } = props;
  return (
    <div
      style={{
        fontFamily: "Domine",
        fontWeight: "700",
        fontSize: "50px",
        letterSpacing: "3%",
        ...customStyles,
      }}
    >
      {children}
    </div>
  );
};

export default DomineHeader1;
