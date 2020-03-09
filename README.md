# React Hooks Flashcard Code Along

## Part 0: Getting Prepared

[Enable emmet for JSX in VSCode settings](https://code.visualstudio.com/docs/editor/emmet#_emmet-abbreviations-in-other-file-types).

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

```javascript
import React, { useState } from "react";
```

Create a `regionChoice` state variable by calling useState at the top of the definition of the `App` functional component.

```javascript
const [regionChoice, setRegionChoice] = useState(null);
```

Add an `onChange` event handler to the `select` input. Call it `chooseRegion`. Control the select input with `regionChoice` as the `value`.

```javascript
<select className="region-choice" onChange={chooseRegion} value={regionChoice}>
```

Under the useState call at the top of the App component definition, write the function definition for the `chooseRegion` event handler. Open the browser console and test the onChange event with the select element.

```javascript
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

```javascript
function App() {
  const [regionChoice, setRegionChoice] = useState(null);
  const [countries, setCountries] = useState([]);

```

Go back to line 1 of `App.js` to import useEffect.

```javascript
import React, { useState, useEffect } from "react";
```

Before the component's `return` statement, set up a `useEffect` to be triggered by changes to the `regionChoice` state. The useEffect's callback will fetch data when a region is chosen.

```javascript
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

```javascript
{
  regionChoice === null && (
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
  );
}
```

Although it hasn't yet been built, import the `Card` component near the top of `App.js`.

```javascript
import React, { useState, useEffect } from "react";
import Card from "./Components/Card";
```

Once a region is chosen and the data is fetched, conditionally render the `Card` component. `Card` will accept
`countries` as a prop.

```javascript
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

```css
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

```javascript
import React from "react";
import "Card.css";

function Card() {
  return <div className="card"></div>;
}

export default Card;
```

Create JSX for the `Card` component.

```
.card>.prompt>p>span.capital-name^{ is the capital of}^.answer-container>.answer>p.country-name+.country-flag>img
```

### Receiving Props and Picking a Country

`Card` destructures the props object to reference `countries`.
`console.log(countries)` to verify that data is being fetched and passed to
`Card` via props.

```javascript
function Card ({ countries }) {
  console.log(countries);
```

Import `useState` and create a state variable called `country`. `country` will hold the value of the country to be learned.

```javascript
import React, { useState } from "react";
import "./Card.css";

function Card({ countries, returnToRegionMenu }) {
  const [country, setCountry] = useState(null)
```

Import `useEffect` and call it to pick the first country when the component mounts.

```javascript
import React, { useState, useEffect } from "react";
...

...javascript
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * countries.length);
    const newCountry = countries[randomIndex];
    setCountry(newCountry);
  }, [countries, country]);

```

If `country` doesn't contain data, display an error message to the user.

```javascript
if (!country) {
  return <p><strong>Please reconnect to the internet and refresh the browser.</strong></p>;
}

return (
  <div className="card">
```

Insert expressions into the JSX displaying the capital of the current
country, the country name, and the country flag.

```javascript
return (
    <div className="card">
      <div className="prompt">
        <p>
          <span className="capital-name">{country.capital}</span> is the capital
          of
        </p>
      </div>
      <div className="answer-container">
        <div className="answer">
          <p className="country-name">{country.name}</p>
          <div className="country-flag">
            <img src={country.flag} alt={`flag of ${country.name}`}></img>
          </div>
        </div>
      </div>
```

### Hiding the Answer

Conditionally render the answer with a new state variable, `showAnswer`. Declare `showAnswer` after `country`, near the top of the component definition.

```javascript
function Card({ countries, returnToRegionMenu }) {
  const [country, setCountry] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
```

Setting the value to `false` shows a question mark. Setting the value to
`true` reveals the answer.

```javascript
<div className="answer-container">
  {showAnswer === false && <div className="question-mark">?</div>}
  {showAnswer === true && (
    <div className="answer">
      <p className="country-name">{country.name}</p>
      <div className="country-flag">
        <img src={country.flag} alt={`flag of ${country.name}`}></img>
      </div>
    </div>
  )}
</div>
```

### Delaying the Answer

Set a timeout to delay the answer reveal by 5000 milliseconds. Only create a
timeout when the answer gets hidden.

```javascript
useEffect(() => {
  if (showAnswer === false) {
    setTimeout(() => {
      setShowAnswer(true);
    }, 5000);
  }
}, [showAnswer]);
```

### Pick Another Country

Create a `Next Capital` button at the bottom of the component definition.

```javascript
        <img src={country.flag} alt={`flag of ${country.name}`}></img>
      </div>
    </div>
  )}
</div>
<button onClick={handleNextClick}>Next Capital</button>
```

With the click event handler, give the user the ability to randomly pick a new country and reset the timer. Clear the value of the current country and hide the answer. The handler has logic to prevent `country` from being reset multiple times while the answer is hidden.

```javascript
    }, 5000);
  }
}, [showAnswer]);

function handleNextClick() {
  if (showAnswer === false) {
    return null;
  }
  setCountry(null);
  setShowAnswer(false);
}
```

### Pick Another Region

Create a `Change Region` button at the bottom of the component definition.

```javascript
<button onClick={handleNextClick}>Next Capital</button>
      <button onClick={returnToRegionMenu}>Change Region</button>
    </div>
  );
}
```

The click handler will be defined in the parent component, `App`, because setting the `regionChoice` in `App` to an empty string will render the `select` menu instead of rendering the `Card` component. For `Card` click events to modify the state of `App.js`, `returnToRegionMenu` must be passed to `Card` as a prop.

In `Card.js`, reference `returnToRegionMenu` by destructuring the props object.

```javascript
function Card({ countries, returnToRegionMenu }) {
```

In `App.js`, define `returnToRegionMenu` and pass it to `Card` as a prop.

```javascript
function returnToRegionMenu() {
  setRegionChoice("");
}

...

<Card
  returnToRegionMenu={returnToRegionMenu}
  countries={countries}
></Card>


```

### Stopping Memory Leaks

When `Card` is unmounted, the timeout is not cleared from memory. This leads to a memory leak whenever `returnToRegionMenu` is called.

Declare a state variable, `timerID`, to keep a reference to the timeout whenever `setTimeout` is called. Its default value must be null until a timer starts.

```javascript
function Card({ countries, returnToRegionMenu }) {
  const [country, setCountry] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [timerID, setTimerID] = useState(null);
```

In the timer `useEffect`, assign the timeout reference from `setTimeout` to a variable.
Store the reference in the `timerID` state in case `returnToRegionMenu` is called.

```javascript
useEffect(() => {
  if (showAnswer === false) {
    const timer = setTimeout(() => {
      setShowAnswer(true);
      setTimerID(null);
    }, 5000);
    setTimerID(timer);
  }
```

When the `Card` component unmounts, return a cleanup function from the useEffect to clear the timeout. `timerID` must be added as a dependency of the useEffect.

```javascript
    }, 5000);
    setTimerID(timer);
  }
  return function() {
    // Clear timeout before unmounting Card component to prevent memory leak.
    clearTimeout(timerID);
  };
}, [timerID, showAnswer]);
```

Finally, use the `timerID` make stricter conditions for when a new `setTimeout` can be called.

```javascript
    if (showAnswer === false && timerID === null) {
```
