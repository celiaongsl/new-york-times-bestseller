import React from "react";
import Header from "../components/Header";
import Paper from "../components/Paper";
import DomineHeader2 from "../components/Typography/Domine/DomineHeader2";
import LibreText1 from "../components/Typography/LibreFranklin/LibreText1";
import LibreText2 from "../components/Typography/LibreFranklin/LibreText2";
import LibreText3 from "../components/Typography/LibreFranklin/LibreText3";

const LoremIpsumPara =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut semper sapien. Aliquam erat volutpat. Vestibulum id varius lacus, et posuere neque. Maecenas quis condimentum orci. Suspendisse mollis porttitor nunc, nec sollicitudin enim dignissim ut. Nulla metus nisi, ornare eget quam at, accumsan porta lectus. Proin sed nisl ut felis laoreet pharetra. Quisque sed tellus eu sem placerat efficitur. Proin lobortis hendrerit ullamcorper. Duis ullamcorper lobortis augue, vel tristique lectus pretium ac. Suspendisse tincidunt varius massa vel accumsan. Sed vel vehicula nibh, non eleifend turpis. Quisque ac sem at risus ultrices laoreet ut eget sem. Etiam quis tempor ante. Donec aliquam mauris eros, non vulputate purus tincidunt ac. Etiam tristique erat nulla, vel viverra purus vehicula sit amet. \n\n Ut scelerisque dui sed porta laoreet. Nulla facilisi. Mauris accumsan bibendum nunc, id consectetur nunc bibendum a. Aenean vitae viverra ex, id imperdiet mi. Donec vulputate, mauris eu vestibulum sollicitudin, urna turpis sodales nisl, sit amet pulvinar ipsum turpis non nisi. Vivamus placerat risus et dictum varius. Morbi varius porttitor velit, eu luctus risus iaculis sed. Aliquam volutpat lorem at velit placerat bibendum. Mauris turpis purus, malesuada sit amet risus quis, maximus pellentesque mi. Suspendisse risus justo, condimentum commodo nisi sed, varius condimentum augue. Fusce ligula felis, efficitur eget auctor sed, vulputate in libero. Nunc mollis placerat lacus, in dignissim nunc fringilla dignissim.";

const BookDetailsPage = (props) => {
  const { params } = props;
  const { chosenBookDetails, categoryOption } = params;

  return (
    <div style={{ width: "85%", margin: "0 auto" }}>
      <Header buttonText="BACK TO BOOK LIST" categoryText={categoryOption} />
      <div
        style={{
          display: "grid",
          gridGap: "50px",
          gridTemplateColumns: "auto auto",
        }}
      >
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
            style={{ height: "520px", width: "340px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default BookDetailsPage;
