import React, { useState, useEffect } from "react";
import "./Card.css";

function Card({ countries, changeRegion }) {
  const [country, setCountry] = useState(null);

  useEffect(
    function() {
      const randomIndex = Math.floor(Math.random() * countries.length);
      setCountry(countries[randomIndex]);
    },
    [countries]
  );

  function pickNextCountry() {
    const randomIndex = Math.floor(Math.random() * countries.length);
    setCountry(countries[randomIndex]);

    const animated = document.querySelector(".animated");
    animated.classList.remove(".animated");
    const animatedCopy = animated.cloneNode(true);
    animated.parentNode.replaceChild(animatedCopy, animated);
    animatedCopy.classList.add(".animated");
  }

  return (
    <div className="card">
      <div className="prompt">
        <p>
          <span className="capital-name">{country && country.capital}</span> is
          the capital of
        </p>
      </div>
      <div className="animated">
        <div className="answer">
          <p className="country-name">{country && country.name}</p>
          <div className="country-flag">
            <img
              src={country && country.flag}
              alt={`flag of ${country && country.name}`}
            ></img>
          </div>
        </div>
        <div className="progress-bar"></div>
      </div>
      <button onClick={pickNextCountry}>Next Capital</button>
      <button onClick={changeRegion}>Change region</button>
    </div>
  );
}

export default Card;
