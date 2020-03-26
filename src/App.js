import React, { useState, useEffect } from "react";
import BackgroundOverlay from "./components/styles/BackgroundOverlay";
import Wrapper from "./components/Wrapper";
import Card from "./components/Card";
import Header from "./components/Header";
import Main from "./components/Main";
import StyledApp from "./components/styles/StyledApp";
import Dropdown from "./components/Dropdown";

function App() {
  const [regionChoice, setRegionChoice] = useState("");
  const [countries, setCountries] = useState([]);

  // get the region name from the select menu
  function chooseRegion(e) {
    console.log(e.target);
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
      <BackgroundOverlay>
        <Wrapper>
          <Header />
          <Main>
            {regionChoice === "" && (
              <>
                <Dropdown>
                  <select
                    className="region-choice"
                    value={regionChoice}
                    onChange={chooseRegion}
                  >
                    <option value={""}>Explore a Region</option>
                    <option value="africa">Africa</option>
                    <option value="americas">Americas</option>
                    <option value="asia">Asia</option>
                    <option value="europe">Europe</option>
                    <option value="oceania">Oceania</option>
                  </select>
                </Dropdown>
              </>
            )}
            {/* Make sure the data is ready before rendering the card component */}
            {regionChoice && countries && (
              <>
                <h2 className="regionName">
                  {(regionChoice === "americas" ? "in The " : "in ") +
                    regionChoice.charAt(0).toUpperCase() +
                    regionChoice.slice(1)}
                </h2>
                <Card
                  returnToRegionMenu={returnToRegionMenu}
                  countries={countries}
                />
              </>
            )}
          </Main>
        </Wrapper>
      </BackgroundOverlay>
    </StyledApp>
  );
}

export default App;
