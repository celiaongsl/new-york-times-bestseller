import React from "react";

const BackgroundContainer = (props) => {
  const { marginTop, children } = props;
  return <div style={{ marginTop }}>{children}</div>;
};

export default BackgroundContainer;
