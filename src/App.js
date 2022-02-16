import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Search from "./components/search/Search";
import "./App.css";
import ResultsContainer from "./components/ResultsContainer/ResultsContainer";
function App(props) {
  const [headExpanded, setHeadExpanded] = useState(true);
  const [Data, setData] = useState([]);

  const handleInputChange = (inputText) => {
    // alert("value changed");
    inputText.length > 0 ? setHeadExpanded(false) : setHeadExpanded(true);
    getData(inputText);
    console.log("text changed " + inputText);
  };

  const url = "https://hn.algolia.com/api/v1/search?query=";

  const getData = (e) => {
    fetch(url + `${e}`)
      .then((response) => response.json())
      .then((json) => {
        setData(json.hits);
        console.log(json.hits);
      });
  };
  return (
    <div className="app-container">
      <Header headerExpanded={headExpanded}></Header>
      <Search onInputChange={handleInputChange}></Search>
      <ResultsContainer data={Data}></ResultsContainer>
      <footer>
        <code>
          <center>
            made by rohith <i class="fa-solid fa-laptop"></i>
          </center>
        </code>
      </footer>
    </div>
  );
}

export default App;
