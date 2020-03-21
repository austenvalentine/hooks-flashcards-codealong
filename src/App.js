import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import StyledApp from "./components/styles/StyledApp";

function App() {
  const [regionChoice, setRegionChoice] = useState("");
  const [countries, setCountries] = useState([]);

  // get the region name from the select menu
  function chooseRegion(e) {
    setRegionChoice(e.target.value);
    setCountries([]);
  }

  // the Card calls this to go back to the region menu
  function returnToRegionMenu() {
    setRegionChoice("");
  }

  // fetch data when a region is chosen
  useEffect(
    function() {
      if (regionChoice !== "") {
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
    <StyledApp>
      <Wrapper>
        <Header />
        {regionChoice === "" && (
          <>
            <h2>Explore a Region</h2>
            <select
              className="region-choice"
              value={regionChoice}
              onChange={chooseRegion}
            >
              <option value={""}>---</option>
              <option value="africa">Africa</option>
              <option value="americas">Americas</option>
              <option value="asia">Asia</option>
              <option value="europe">Europe</option>
              <option value="oceania">Oceania</option>
            </select>
          </>
        )}
        {/* Make sure the data is ready before rendering the card component */}
        {regionChoice && countries && (
          <>
            <h2>
              of {regionChoice.charAt(0).toUpperCase() + regionChoice.slice(1)}
            </h2>
            <Card
              returnToRegionMenu={returnToRegionMenu}
              countries={countries}
            />
          </>
        )}
      </Wrapper>
    </StyledApp>
  );
}

export default App;
