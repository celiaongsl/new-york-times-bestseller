import React from "react";
import DomineHeader2 from "../Typography/Domine/DomineHeader2";
import LibreText1 from "../Typography/LibreFranklin/LibreText1";
import LibreText2 from "../Typography/LibreFranklin/LibreText2";
import LibreText3 from "../Typography/LibreFranklin/LibreText3";

const BookListCard = () => {
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
      }}
    >
      <DomineHeader2 customStyles={{ color: "#828282" }}>1</DomineHeader2>

      <img
        src={process.env.PUBLIC_URL + "/img/background_image.png"}
        style={{ height: "141px", width: "93px" }}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "65%",
          textAlign: "left",
          position: "relative",
        }}
      >
        <LibreText3>6 WEEKS ON THE LIST</LibreText3>
        <LibreText1 customStyles={{ fontWeight: 700 }}>
          TITLE IS HERE
        </LibreText1>
        <LibreText2>Author is here</LibreText2>
        <LibreText2 customStyles={{ bottom: 0, position: "absolute" }}>
          MORE INFO
        </LibreText2>
      </div>
    </div>
  );
};

export default BookListCard;
