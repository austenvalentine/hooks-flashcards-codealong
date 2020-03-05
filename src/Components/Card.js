import React, { useState, useEffect } from "react";
import "./Card.css";

function Card({ countries, changeRegion }) {
  const PLAY = "PLAY";
  const STOP = "STOP";

  const [country, setCountry] = useState(null);
  const [animation, setAnimation] = useState(PLAY);
  const [timerID, setTimerID] = useState(null);

  useEffect(() => {
    setCountry(countries[Math.floor(Math.random() * countries.length)]);
    const timer = setTimeout(() => {
      setAnimation(STOP);
    }, 4000);
    setTimerID(timer);
  }, [countries]);

  useEffect(() => {
    return function() {
      // clear timeout before unmounting card component
      // to prevent memory leak
      clearTimeout(timerID);
    };
  });

  function handleNextClick() {
    if (animation === PLAY) {
      return null;
    }
    setCountry(countries[Math.floor(Math.random() * countries.length)]);
    setAnimation(PLAY);
    const timer = setTimeout(() => {
      setAnimation(STOP);
    }, 4000);
    setTimerID(timer);
  }

  return (
    <div className="card">
      <div className="prompt">
        <p>
          <span className="capital-name">{country && country.capital}</span> is
          the capital of
        </p>
      </div>
      <div className="answer">
        {country && animation === PLAY && (
          <span>
            <p className="country-name country-name-play">
              {country && country.name}
            </p>
            <div className="country-flag country-flag-play">
              <img
                src={country && country.flag}
                alt={`flag of ${country && country.name}`}
              ></img>
            </div>
            <div className="progress-bar progress-play"></div>
          </span>
        )}
      </div>
      {country && animation === STOP && (
        <span>
          <p className="country-name country-name-stop">
            {country && country.name}
          </p>
          <div className="country-flag country-name-stop">
            <img
              src={country && country.flag}
              alt={`flag of ${country && country.name}`}
            ></img>
          </div>
          <div className="progress-bar progress-stop"></div>
        </span>
      )}
      <button onClick={handleNextClick}>Next Capital</button>
      <button onClick={changeRegion}>Change region</button>
    </div>
  );
}

export default Card;
