import React, { useState, useEffect } from "react";
import BackgroundUnderlay from "./components/styles/BackgroundUnderlay";
import Wrapper from "./components/Wrapper";
import Card from "./components/Card";
import Header from "./components/Header";
import Main from "./components/Main";
import StyledApp from "./components/styles/StyledApp";
import SelectMenu from "./components/SelectMenu";
import Swal from "sweetalert2";
import HelpButton from "./components/HelpButton";

const helpMessage = {
  title: "National Capitals Flash Cards",
  text: "Choose a region to learn the national capitals."
};

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

  useEffect(function() {
    // Swal.fire(helpMessage);
  }, []);

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
      <BackgroundUnderlay />
      <Wrapper>
        <Header />
        <Main>
          {regionChoice === "" && (
            <>
              <SelectMenu>
                <select
                  className="region-choice"
                  value={regionChoice}
                  onClick={chooseRegion}
                >
                  <option value={""}>Explore a Region</option>
                  <option value="africa">Africa</option>
                  <option value="americas">Americas</option>
                  <option value="asia">Asia</option>
                  <option value="europe">Europe</option>
                  <option value="oceania">Oceania</option>
                </select>
              </SelectMenu>
            </>
          )}
          {/* Make sure the data is ready before rendering the card component */}
          {regionChoice && countries && (
            <>
              <h2 className="region-name">
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
      {!regionChoice && (
        <HelpButton
          onClick={() => Swal.fire(helpMessage)}
          showButton={regionChoice ? true : false}
        />
      )}
    </StyledApp>
  );
}

export default App;
