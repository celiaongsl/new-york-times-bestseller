import React from "react";
import { capitalizeString } from "../../helper/utils";
import TextButton from "../Button/TextButton";
import DomineHeader2 from "../Typography/Domine/DomineHeader2";

const Header = (props) => {
  const { buttonText, categoryText } = props;
  return (
    <React.Fragment>
      <div style={{ textAlign: "left" }}>
        <TextButton>&lt; {buttonText}</TextButton>
      </div>
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        {" "}
        <img
          style={{ width: "417px", height: "auto" }}
          src={process.env.PUBLIC_URL + "/img/new_york_times_logo.png"}
          alt="The New York Times Logo"
        />
        <DomineHeader2>{capitalizeString(categoryText)}</DomineHeader2>
      </div>
    </React.Fragment>
  );
};

export default Header;
