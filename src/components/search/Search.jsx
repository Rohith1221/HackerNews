import React from "react";
import "./search.css";
function Search({ onInputChange }) {
  return (
    <div className="search-c">
      <div className="wrapper-c">
        <input
          type={"search"}
          placeholder="Search .."
          className="search"
          onChange={(e) => onInputChange(e.target.value)}
        ></input>
      </div>
    </div>
  );
}

export default Search;
