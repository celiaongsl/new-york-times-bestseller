import React from "react";
import BookListCard from "../components/BookListCard";
import Header from "../components/Header";

const CategoryBestsellersPage = () => {
  return (
    <div style={{ width: "85%", margin: "0 auto" }}>
      <Header buttonText="BACK TO CATEGORIES" categoryText="Category" />
      <div
        style={{
          display: "grid",
          gridGap: "50px",
          gridTemplateColumns: "auto auto",
          paddingBottom: "50px",
        }}
      >
        <BookListCard /> <BookListCard /> <BookListCard /> <BookListCard />
        <BookListCard /> <BookListCard /> <BookListCard /> <BookListCard />
      </div>
    </div>
  );
};

export default CategoryBestsellersPage;
