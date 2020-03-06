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

Go back to line 1 of `App.js` to import useEffect.

```
import React, { useState, useEffect } from 'react';
```

Before the component's `return` statement, set up a `useEffect` to be triggered by changes to the `regionChoice` state. The useEffect's callback will fetch data.

```
  useEffect(
    function() {
      if (regionChoice !== null) {
        fetch(`https://restcountries.eu/rest/v2/region/${regionChoice}`)
          .then(response => response.json())
          .then(newCountries => {
            setCountries(newCountries);
          });
      }
    },
    [regionChoice]
  );

```
