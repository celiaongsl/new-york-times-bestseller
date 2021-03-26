import React from "react";
import Paper from "../Paper";
import DomineHeader2 from "../Typography/Domine/DomineHeader2";
import LibreText1 from "../Typography/LibreFranklin/LibreText1";
import LibreText2 from "../Typography/LibreFranklin/LibreText2";
import LibreText3 from "../Typography/LibreFranklin/LibreText3";

const BookListCard = () => {
  return (
    <Paper>
      <DomineHeader2 customStyles={{ color: "#828282" }}>1</DomineHeader2>

      <img
        src={process.env.PUBLIC_URL + "/img/background_image.png"}
        style={{ height: "141px", width: "93px" }}
        alt="The Book Cover"
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
    </Paper>
    // {/* </div> */}
  );
};

export default BookListCard;
