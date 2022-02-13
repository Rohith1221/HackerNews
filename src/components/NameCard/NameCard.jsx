import React from "react";
import "./NameCard.css";
function NameCard({ data }) {
  return (
    <div className="namecard-container">
      <ul className="nc-author">
        {data.map((item, index) => {
          return (
            <li key={index} className="nc-li">
              <b>Author: </b>
              {item.author}
              <br></br>
              <b>Title: </b>
              {item.title == null ? "NO TITLE FOUND" : item.title}
              <br></br>
              <b>Article Link: </b>
              {item.url == null ? (
                "NO URL FOUND"
              ) : (
                <a href={item.url}>Click Here</a>
              )}
              <br></br>
              <b>Date Created: </b>
              {item.created_at == null ? "DATA NOT FOUND" : item.created_at}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default NameCard;
