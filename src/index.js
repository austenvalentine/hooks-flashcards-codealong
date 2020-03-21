import React from "react";
import ReactDOM from "react-dom";
import { Normalize } from "styled-normalize";
import GlobalStyle from "./components/styles/GlobalStyle";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

function Root() {
  return (
    <>
      <Normalize />
      <GlobalStyle />
      <App />
    </>
  );
}

ReactDOM.render(<Root />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
