import React from "react";
import BookListCard from "../components/BookListCard";
import Header from "../components/Header";

const CategoryBestsellersPage = (props) => {
  const { params, interactiveCanvas } = props;
  const { bookData, categoryOption } = params;

  const onClick = (instructions) => {
    interactiveCanvas.sendTextQuery(instructions);
  };

  return (
    <div style={{ width: "85%", margin: "0 auto" }}>
      <Header
        onClick={() => onClick("go back to category list")}
        buttonText="BACK TO CATEGORIES"
        categoryText={categoryOption}
      />
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
              interactiveCanvas={interactiveCanvas}
              position={item.position}
              weeksOnList={item.weeksOnList}
              title={item.title}
              author={item.author}
              bookCoverURL={item.bookCoverURL}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CategoryBestsellersPage;
