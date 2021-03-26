import React from "react";
import BookListCard from "../components/BookListCard";
import TextButton from "../components/Button/TextButton";
import DomineHeader2 from "../components/Typography/Domine/DomineHeader2";

const CategoryBestsellersPage = () => {
  return (
    <div style={{ width: "85%", margin: "0 auto" }}>
      <div style={{ textAlign: "left" }}>
        <TextButton>&lt; BACK TO CATEGORIES</TextButton>
      </div>
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        {" "}
        <img
          style={{ width: "417px", height: "auto" }}
          src={process.env.PUBLIC_URL + "/img/new_york_times_logo.png"}
        />
        <DomineHeader2>Category</DomineHeader2>
      </div>
      <div
        style={{
          display: "grid",
          gridGap: "50px",
          gridTemplateColumns: "auto auto",
        }}
      >
        <BookListCard /> <BookListCard /> <BookListCard /> <BookListCard />
        <BookListCard /> <BookListCard /> <BookListCard /> <BookListCard />
      </div>
    </div>
  );
};

export default CategoryBestsellersPage;
