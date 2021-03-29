import React from "react";
import "./Paper.css";

const Paper = (props) => {
  const { children, customStyles, onClick } = props;
  return (
    <div
      onClick={onClick}
      className="PaperDiv"
      style={{
        ...customStyles,
      }}
    >
      {children}
    </div>
  );
};

export default Paper;
