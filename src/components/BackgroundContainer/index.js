import React from "react";

const BackgroundContainer = (props) => {
  const { marginTop, children } = props;
  return (
    <div
      style={{
        marginTop,
        backgroundImage: `url(${
          process.env.PUBLIC_URL + "/img/background_image.png"
        })`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        
      }}
    >
      {children}
    </div>
  );
};

export default BackgroundContainer;
