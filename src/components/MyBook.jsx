import React from "react";
import HTMLFlipBook from "react-pageflip";
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import image4 from "../images/image4.jpg";
import "../styles/book.css";

function MyBook(props) {
  return (
    <HTMLFlipBook className="book" width={600} height={600}>
      <div className="demoPage">
        <img src={image1} alt="Page 1" />
        <div className="pageText">Text for Page 1</div>
      </div>
      <div className="demoPage">
        <img src={image2} alt="Page 2" />
        <div className="pageText">Text for Page 2</div>
      </div>
      <div className="demoPage">
        <img src={image3} alt="Page 3" />
        <div className="pageText">Text for Page 3</div>
      </div>
      <div className="demoPage">
        <img src={image4} alt="Page 4" />
        <div className="pageText">Text for Page 4</div>
      </div>
    </HTMLFlipBook>
  );
}

export default MyBook;
