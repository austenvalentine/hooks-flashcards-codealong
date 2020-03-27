import React from "react";
import StyledHelpButton from "./styles/StyledHelpButton";

function HelpButton({ onClick, showButton }) {
  return (
    // button-wrapper hack to fix styled-components styled.button rendering glitch on chrome mobile
    <button
      onClick={onClick}
      style={{
        padding: "0",
        margin: "0",
        border: "none",
        background: "none",
        color: "none"
      }}
    >
      <StyledHelpButton display={showButton ? "block" : "none"}>
        ?<span className="sr-only">help</span>
      </StyledHelpButton>
    </button>
  );
}

export default HelpButton;
