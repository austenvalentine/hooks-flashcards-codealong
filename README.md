# React Hooks Flashcard Code Along

## Part 1: Fetching Data

### The Select Menu

Start by deleting the contents of the `<div className="App"></div>` element. Replace the contents with JSX for the select menu:

```
div>h2{Choose a region to study}+select>option[value=""]*6
```

Insert the following values, each corresponding with one option:

```
{null}
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

### `useEffect` for Fetching Data Asynchronously

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

## Part 2: Timed Flashcards

### Setting Up Component Files

Create a `/src/Components/Card.js` component file and a `/src/Components/Card.css` stylesheet.

Copy the following rule sets in to the stylesheet.

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

}

export default Card;
```
