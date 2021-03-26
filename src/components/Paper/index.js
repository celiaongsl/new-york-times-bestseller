import React from "react";

const Paper = (props) => {
  const { children, customStyles } = props;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "500px",
        backgroundColor: "#fff",
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.17)",
        borderRadius: "10px",
        justifyContent: "space-around",
        padding: "20px 5px",
        ...customStyles,
      }}
    >
      {children}
    </div>
  );
};

export default Paper;
