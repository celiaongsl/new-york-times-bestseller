import React from "react";
import { capitalizeString } from "../../helper/utils";
import TextButton from "../Button/TextButton";
import DomineHeader2 from "../Typography/Domine/DomineHeader2";

import "./Header.css";

const Header = (props) => {
  const { buttonText, categoryText, onClick } = props;
  return (
    <React.Fragment>
      <div style={{ textAlign: "left" }}>
        <TextButton onClick={onClick}>&lt; {buttonText}</TextButton>
      </div>
      <div className="HeaderTitle">
        {" "}
        <img
          className="HeaderNewYorkTimesLogo"
          src={process.env.PUBLIC_URL + "/img/new_york_times_logo.png"}
          alt="The New York Times Logo"
        />
        <DomineHeader2>{capitalizeString(categoryText)}</DomineHeader2>
      </div>
    </React.Fragment>
  );
};

export default Header;
