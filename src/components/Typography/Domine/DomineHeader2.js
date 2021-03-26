import React from "react";

const DomineHeader2 = (props) => {
  const { children, customStyles } = props;
  return (
    <div
      style={{
        fontFamily: "Domine",
        fontWeight: "700",
        fontSize: "30px",
        letterSpacing: "3%",
        ...customStyles,
      }}
    >
      {children}
    </div>
  );
};

export default DomineHeader2;
