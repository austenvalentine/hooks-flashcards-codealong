import React from "react";
import ReactDOM from "react-dom";
import { Normalize } from "styled-normalize";
import GlobalStyle from "./components/styles/GlobalStyle";
import { LiveAnnouncer } from "react-aria-live";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";

function Root() {
  return (
    <>
      <Normalize />
      <GlobalStyle />
      <LiveAnnouncer>
        <App />
      </LiveAnnouncer>
    </>
  );
}

ReactDOM.render(<Root />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
