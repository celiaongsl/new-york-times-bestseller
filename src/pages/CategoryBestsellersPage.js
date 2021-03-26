import React from "react";
import BookListCard from "../components/BookListCard";
import Header from "../components/Header";

const CategoryBestsellersPage = (props) => {
  const { params } = props;
  const { bookData, categoryOption } = params;
  return (
    <div style={{ width: "85%", margin: "0 auto" }}>
      <Header buttonText="BACK TO CATEGORIES" categoryText={categoryOption} />
      <div
        style={{
          display: "grid",
          gridGap: "50px",
          gridTemplateColumns: "auto auto",
          paddingBottom: "50px",
        }}
      >
        {bookData.map((item) => {
          return (
            <BookListCard
              position={item.position}
              weeksOnList={item.weeksOnList}
              title={item.title}
              author={item.author}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CategoryBestsellersPage;
