import React from "react";
import "./Paper.css";

const Paper = (props) => {
  const { children, customStyles, onClick, className } = props;
  return (
    <div
      onClick={onClick}
      className={`PaperDiv ${className}`}
      style={{
        ...customStyles,
      }}
    >
      {children}
    </div>
  );
};

export default Paper;
