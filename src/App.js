import React, { useState, useEffect } from "react";
import "./App.css";
import Card from "./Components/Card";

function App() {
  const [regionChoice, setRegionChoice] = useState(null);
  const [countries, setCountries] = useState([]);

  // get the region name from the select menu
  function chooseRegion(e) {
    setRegionChoice(e.target.value);
    setCountries([]);
  }

  // the Card calls this to go back to the region menu
  function returnToRegionMenu() {
    setRegionChoice(null);
  }

  // fetch data when a region is chosen
  useEffect(
    function() {
      if (regionChoice !== null) {
        fetch(`https://restcountries.eu/rest/v2/region/${regionChoice}`)
          .then(response => response.json())
          .then(newCountries => {
            setCountries(newCountries);
          });
      }
    },
    [regionChoice]
  );

  return (
    <div className="App">
      {regionChoice === null && (
        <div>
          <h2>Select a region to study.</h2>
          <select className="region-choice" onChange={chooseRegion}>
            <option value={null}>---</option>
            <option value="africa">Africa</option>
            <option value="americas">Americas</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
          </select>
        </div>
      )}
      {/* Make sure the data is ready before rendering the card component */}
      {regionChoice && countries && (
        <Card
          returnToRegionMenu={returnToRegionMenu}
          countries={countries}
        ></Card>
      )}
    </div>
  );
}

export default App;
