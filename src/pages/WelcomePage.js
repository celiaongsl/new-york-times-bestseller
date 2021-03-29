import React from "react";
import RoundButton from "../components/Button/RoundButton";
import DomineHeader1 from "../components/Typography/Domine/DomineHeader1";
import DomineHeader2 from "../components/Typography/Domine/DomineHeader2";

const WelcomePage = (props) => {
  const { interactiveCanvas } = props;

  const onClick = (chosenCategory) => {
    interactiveCanvas.sendTextQuery(chosenCategory);
  }

  return (
    <div>
      <div style={{marginTop: '20px'}}>
        <img
          style={{ width: "417px", height: "auto" }}
          src={process.env.PUBLIC_URL + "/img/new_york_times_logo.png"}
          alt="The New York Times Logo"
        />
        <DomineHeader2>BESTSELLERS LIST</DomineHeader2>
      </div>

      <div style={{ marginTop: "5%", marginBottom: "7%" }}>
        <DomineHeader1>Choose a Category:</DomineHeader1>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <RoundButton 
        onClick={() => onClick('fiction')}
        >FICTION</RoundButton>
        <RoundButton 
        onClick={() => onClick('non-fiction')}
        >NON-FICTION</RoundButton>
      </div>
      
    </div>
  );
};

export default WelcomePage;
