import React, { useState, useEffect } from "react";
import "./Card.css";

function Card({ countries, returnToRegionMenu }) {
  const [country, setCountry] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [timerID, setTimerID] = useState(null);

  // Check if card needs a new timer every time there's a change to the timer
  // state. That includes when the Card component first mounts.
  useEffect(() => {
    // don't call a new setTimeout unless the previous setTimeout clears and
    // the answer is hidden
    if (showAnswer === false && timerID === null) {
      const timer = setTimeout(() => {
        setShowAnswer(true);
        setTimerID(null);
      }, 5000);
      setTimerID(timer);
    }
    return function() {
      // Clear timeout before unmounting Card component to prevent memory leak.
      clearTimeout(timerID);
    };
  }, [timerID, showAnswer]);

  // Pick the first country when the component mounts.
  useEffect(() => {
    setCountry(countries[Math.floor(Math.random() * countries.length)]);
    setShowAnswer(false);
  }, [countries]);

  function handleNextClick() {
    // Don't accept clicks if timer is running.
    if (showAnswer === false) {
      return null;
    }
    setShowAnswer(false);
    setCountry(countries[Math.floor(Math.random() * countries.length)]);
  }

  return (
    <div className="card">
      <div className="prompt">
        <p>
          <span className="capital-name">{country && country.capital}</span> is
          the capital of
        </p>
      </div>
      <div className="answer-container">
        {country && showAnswer === false && (
          <div className="question-mark">?</div>
        )}
        {/* Data ready and timer must be done before rendering answer. */}
        {country && showAnswer === true && (
          <div className="answer">
            <p className="country-name">{country && country.name}</p>
            <div className="country-flag">
              <img
                src={country && country.flag}
                alt={`flag of ${country && country.name}`}
              ></img>
            </div>
          </div>
        )}
      </div>
      <button onClick={handleNextClick}>Next Capital</button>
      <button onClick={returnToRegionMenu}>Change region</button>
    </div>
  );
}

export default Card;
