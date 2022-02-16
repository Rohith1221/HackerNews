import React, { useEffect, useState } from "react";
import { Children } from "react/cjs/react.production.min";
import "./SecondCard.css";
function SecondCard({ id, info, child }) {
  return (
    <div className="sc-container">
      <ul>
        <li className="sc-li">
          <h2>More details about the article by {info.author}:</h2>
          <b>Author :</b>
          {info.author}
          <br></br>
          <b>Title: </b>
          {info.title == null ? "TITLE NOT FOUND" : info.title}
          <br></br>
          <b>Points: </b>
          {info.points == null ? "POINTS NOT FOUND" : info.points}
          <br></br>
          <b>Article Link</b>
          <a href={info.url == null ? "URL NOT FOUND" : info.url}>Click here</a>

          {child.map((item, index) => {
            return (
              <li className="sc-comment" key={index}>
                <b>
                  Comment By{" "}
                  {item.author == null ? "AUTHOR NOT FOUND" : item.author} :
                </b>
                <li dangerouslySetInnerHTML={{ __html: item.text }}></li>
              </li>
            );
          })}
        </li>
      </ul>
    </div>
  );
}

export default SecondCard;
