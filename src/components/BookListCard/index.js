import React from "react";
import Paper from "../Paper";
import DomineHeader2 from "../Typography/Domine/DomineHeader2";
import LibreText1 from "../Typography/LibreFranklin/LibreText1";
import LibreText2 from "../Typography/LibreFranklin/LibreText2";
import LibreText3 from "../Typography/LibreFranklin/LibreText3";
import "./BookListCard.css";

const BookListCard = (props) => {
  const { position, weeksOnList, title, author, bookCoverURL, onClick } = props;

  return (
    <Paper onClick={onClick}>
      <DomineHeader2 customStyles={{ color: "#828282" }}>
        {position}
      </DomineHeader2>

      <img src={bookCoverURL} className="BookListImage" alt="The Book Cover" />

      <div
        className="BookListDiv"
      >
        <LibreText3>{weeksOnList.toUpperCase()}</LibreText3>
        <LibreText1 customStyles={{ fontWeight: 700 }}>
          {title.toUpperCase()}
        </LibreText1>
        <LibreText2>{author}</LibreText2>
        <LibreText2 customStyles={{ bottom: 0, position: "absolute" }}>
          MORE INFO
        </LibreText2>
      </div>
    </Paper>
  );
};

export default BookListCard;
