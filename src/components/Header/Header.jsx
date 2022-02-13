import React from "react";
import "./header.css";
import img from "../assets/news.png";
function Header({ headerExpanded }) {
  return (
    <div className="header-container">
      <img
        src={img}
        className={`header-img ${
          headerExpanded ? "header-img-exp" : "header-img-con"
        }`}
        // className="header-img header-img-exp"
      ></img>
      <div
        className={`head-text ${
          headerExpanded ? "head-text-exp" : "head-text-con"
        }`}
      >
        <i className="italics">Hacker</i> News
      </div>
    </div>
  );
}

export default Header;
// object is key value pair
