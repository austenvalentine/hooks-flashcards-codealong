# React Hooks Flashcard Code Along

## Part 0: Getting Prepared

Have [emmet for JSX enabled in VSCode settings](https://code.visualstudio.com/docs/editor/emmet#_emmet-abbreviations-in-other-file-types).

## Part 1: Fetching Data

### The Select Menu

Start by deleting the contents of the `<div className="App"></div>` element. Replace the contents with JSX for the select menu:

```
div>h2{Choose a region to study}+select>option[value=""]*6
```

Insert the following values, each corresponding with one option:

```
{""}
africa
americas
asia
europe
oceania
```

Insert the following content, each corresponding with one option:

```
---
Africa
Americas
Asia
Europe
Oceania
```

Change state with the select input by using the `useState` hook.
Import `useState` in line 1 of your `App.js`.

```
import React, { useState } from 'react';
```

Create a `regionChoice` state variable by calling useState at the top of the definition of the `App` functional component.

```
const [regionChoice, setRegionChoice] = useState(null);
```

Add an `onChange` event handler to the `select` input. Call it `chooseRegion`. Control the select input with `regionChoice` as the `value`.

```
<select className="region-choice" onChange={chooseRegion} value={regionChoice}>
```

Under the useState call at the top of the App component definition, write the function definition for the `chooseRegion` event handler. Open the browser console and test the onChange event with the select element.

```
function App() {
  const [regionChoice, setRegionChoice] = useState(null);

  function chooseRegion(e) {
    console.log("chooseRegion: change!")
    setRegionChoice(e.target.value);
    setCountries([]);
  }
```

### `useEffect` for Fetching Data

Add another state variable to store fetched data.

```
function App() {
  const [regionChoice, setRegionChoice] = useState(null);
  const [countries, setCountries] = useState([]);

```

Go back to line 1 of `App.js` to import useEffect.

```
import React, { useState, useEffect } from 'react';
```

Before the component's `return` statement, set up a `useEffect` to be triggered by changes to the `regionChoice` state. The useEffect's callback will fetch data when a region is chosen.

```
useEffect(
  function() {
    if (regionChoice !== null) {
      fetch(`https://restcountries.eu/rest/v2/region/${regionChoice}`)
        .then(response => response.json())
        .then(newCountries => {
          console.log(newCountries);
          setCountries(newCountries);
        });
    }
  },
  [regionChoice]
);
```

### Conditional Rendering

Once the region data has been fetched, use conditional rendering to remove the select menu html from the DOM.

```
{regionChoice === null && (
  <div>
    <h2>Select a region to study.</h2>
    <select
      className="region-choice"
      value={regionChoice}
      onChange={chooseRegion}
    >
      <option value={null}>---</option>
      <option value="africa">Africa</option>
      <option value="americas">Americas</option>
      <option value="asia">Asia</option>
      <option value="europe">Europe</option>
      <option value="oceania">Oceania</option>
    </select>
  </div>
)}
```

Although it hasn't yet been built, import the `Card` component near the top of `App.js`.

```
import React, { useState, useEffect } from "react";
import Card from "./Components/Card";
```

Once a region is chosen and the data is fetched, conditionally render the `Card` component. `Card` will accept
`countries` as a prop.

```
          </select>
        </div>
      )}

      {regionChoice && countries && (
        <Card
          countries={countries}
        ></Card>
      )}
    </div>
  );
}
```

## Part 2: Timed Flashcards

### Setting Up Component Files

Create a `/src/Components/Card.js` component file and a `/src/Components/Card.css` stylesheet.

Copy the following rule sets into the stylesheet.

```
.answer-container {
  min-height: 150px;
}

.question-mark {
  padding-left: 40px;
  font-size: 80px;
  font-weight: bold;
}

.answer {
  opacity: 0;
  animation-name: answer-show;
  animation-timing-function: linear;
  animation-duration: 1s;
  animation-fill-mode: forwards;
}

@keyframes answer-show {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.capital-name,
.country-name {
  font-weight: bold;
}

.country-flag {
  height: 100px;
}

.country-flag img {
  height: 100%;
}

```

In `Card.js`, import React and `Card.css`. Write a function
declaration for the `Card` component. Export the component.

```
import React from 'react';
import 'Card.css';

function Card () {
  return (
    <div className="card"></div>
  )
}

export default Card;
```

`Card` destructures the props object to reference `countries`.
`console.log(countries)` to verify that data is being fetched and passed to
`Card` via props.

```
function Card ({ countries }) {
  console.log(countries);
```

Create JSX for the `Card` component.

```
.card>.prompt>p>span.capital-name^{ is the capital of}^.answer-container
```

Import `useState` and create a state variable called `country`. `country` will hold the value of the country to be learned.

```
import React, { useState } from "react";
import "./Card.css";

function Card({ countries, returnToRegionMenu }) {
  const [country, setCountry] = useState(null)
```

Import `useEffect` and call it to pick the first country when the component mounts.

```
import React, { useState, useEffect } from "react";
...

...
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * countries.length);
    const newCountry = countries[randomIndex];
    setCountry(newCountry);
  }, [country, countries]);

```

If `country` doesn't contain data, display an error message to the user.

```
if (!country) {
  return <p><strong>Please reconnect to the internet and refresh the browser.</strong></p>;
}

return (
  <div className="card">
```

Insert an expression into the JSX to display the capital of the current country.

```
return (
  <div className="card">
    <div className="prompt">
      <p>
        <span className="capital-name">{country.capital}</span> is the capital
        of
      </p>
    </div>
```
