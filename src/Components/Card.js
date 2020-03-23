import React, { useState, useEffect } from "react";
import StyledCard from "./styles/StyledCard";

function Card({ countries, returnToRegionMenu }) {
  const [country, setCountry] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [timerID, setTimerID] = useState(null);

  // Pick a country.
  useEffect(() => {
    if (!country && showAnswer === false) {
      const randomIndex = Math.floor(Math.random() * countries.length);
      // const randomIndex = 11; // Americas: United States Minor Outlying Islands
      const newCountry = countries[randomIndex];
      setCountry(newCountry);
    }
  }, [country, countries, showAnswer]);

  // Check if card needs a new timer every time there's a change to the timer
  // state. That includes when the Card component first mounts.
  useEffect(() => {
    // don't call a new setTimeout unless the previous setTimeout clears and
    // the answer is hidden
    if (showAnswer === false && timerID === null) {
      const timer = setTimeout(() => {
        setShowAnswer(true);
        setTimerID(null);
      }, 6000);
      setTimerID(timer);
    }
    return function() {
      // Clear timeout before unmounting Card component to prevent memory leak.
      clearTimeout(timerID);
    };
  }, [timerID, showAnswer]);

  function handleNextClick() {
    // Don't accept clicks if timer is running.
    if (showAnswer === false) {
      return null;
    }
    setCountry(null);
    setShowAnswer(false);
  }

  // Ensure the data was fetched.
  if (!country) {
    return (
      <p>
        <strong>
          Please reconnect to the internet and refresh the browser.
        </strong>
      </p>
    );
  }

  return (
    <StyledCard>
      <div className="answer-container">
        {showAnswer === false && (
          <div className="answer">
            <p className="prompt">
              <span className="capital-name">
                {country.capital ? country.capital : country.name}
              </span>{" "}
              is the capital of
            </p>
            <div className="question-mark">?</div>
          </div>
        )}
        {/* Data is ready and timer must be complete before rendering answer. */}
        {showAnswer === true && (
          <div className="answer">
            <p>
              <span className="capital-name">
                {country.capital ? country.capital : country.name}
              </span>{" "}
              is the capital of
            </p>
            <p className="country-name">{country.name}</p>
            <div className="country-flag">
              <img
                // src="https://restcountries.eu/data/npl.svg"
                src={country.flag}
                alt={`flag of ${country.name}`}
              ></img>
            </div>
          </div>
        )}
      </div>
      <div className="buttons">
        <button onClick={returnToRegionMenu}>New Region</button>
        <button onClick={handleNextClick}>Next Capital</button>
      </div>
    </StyledCard>
  );
}

export default Card;
