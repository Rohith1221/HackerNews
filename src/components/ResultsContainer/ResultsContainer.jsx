import React from "react";
import NameCard from "../NameCard/NameCard";
import "./ResultsContainer.css";
function ResultsContainer({ data }) {
  return (
    <div className="results-container">
      <NameCard data={data}></NameCard>
    </div>
  );
}

export default ResultsContainer;
