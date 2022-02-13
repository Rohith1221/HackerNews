import React, { useState } from "react";
import SecondCard from "../SecondCard/SecondCard";
import "./NameCard.css";
function NameCard({ data }) {
  const [objId, setObjId] = useState("");
  const [clicked, setClicked] = useState(false);

  const [info, setInfo] = useState([]);
  const [children, setChildren] = useState([]);
  const url_2 = "https://hn.algolia.com/api/v1/items/";

  const getData = (e) => {
    fetch(url_2 + `${e}`)
      .then((response) => response.json())
      .then((json) => {
        setInfo(json);
        setChildren(json.children);
        console.log(json);
      });
  };

  return (
    <div className="namecard-container">
      {clicked == true && (
        <SecondCard id={objId} info={info} child={children} />
      )}
      <ul className="nc-author">
        {data.map((item, index) => {
          return (
            <li
              key={index}
              className="nc-li"
              onClick={(e) => {
                setObjId(item.objectID);
                setClicked(true);
                getData(item.objectID);
                window.scrollTo({ top: 0, behavior: "smooth", transition: 5 });
              }}
            >
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
