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

Add an `onChange` event handler to the `select` element. Call it `chooseRegion`.

```
<select className="region-choice" onChange={chooseRegion}>
```

Under the useState call at the top of the App component definition, write the function definition for the `chooseRegion` event handler.

```
function App() {
  const [regionChoice, setRegionChoice] = useState(null);

  function chooseRegion(e) {
    setRegionChoice(e.target.value);
    setCountries([]);
  }

```
