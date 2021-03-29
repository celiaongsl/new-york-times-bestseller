import React from "react";
import Header from "../components/Header";
import Paper from "../components/Paper";
import DomineHeader2 from "../components/Typography/Domine/DomineHeader2";
import LibreText1 from "../components/Typography/LibreFranklin/LibreText1";
import LibreText2 from "../components/Typography/LibreFranklin/LibreText2";
import LibreText3 from "../components/Typography/LibreFranklin/LibreText3";

import "./BookDetailsPage.css";

const BookDetailsPage = (props) => {
  const { params, interactiveCanvas } = props;
  const { chosenBookDetails, categoryOption } = params;

  const onClick = (instructions) => {
    interactiveCanvas.sendTextQuery(instructions);
  };

  return (
    <div style={{ width: "85%", margin: "0 auto" }}>
      <Header
        onClick={() => onClick("go back to book list")}
        buttonText="BACK TO BOOK LIST"
        categoryText={categoryOption}
      />
      <div className="BookDetailsGrid">
        <Paper customStyles={{ width: "600px" }}>
          <div style={{ width: "5%", float: "left" }}>
            <DomineHeader2 customStyles={{ color: "#828282" }}>
              {chosenBookDetails.position}
            </DomineHeader2>
          </div>
          <div
            style={{
              width: "85%",
              textAlign: "left",
            }}
          >
            <div
              style={{
                height: "80px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                marginBottom: "20px",
              }}
            >
              <LibreText2>
                {" "}
                {chosenBookDetails.weeksOnList.toUpperCase()}
              </LibreText2>
              <LibreText1 customStyles={{ fontWeight: 700 }}>
                {chosenBookDetails.title.toUpperCase()}
              </LibreText1>
              <LibreText2>by {chosenBookDetails.author}</LibreText2>
            </div>
            <LibreText3 customStyles={{ whiteSpace: "pre-line", width: "90%" }}>
              {chosenBookDetails.longSummary}
            </LibreText3>
          </div>
        </Paper>
        <div>
          <img
            src={chosenBookDetails.bookCoverURL}
            alt="The Book Cover"
            className="BookCoverImage"
          />
        </div>
      </div>
    </div>
  );
};

export default BookDetailsPage;
