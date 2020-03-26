import React from "react";
import StyledHelpButton from "./styles/StyledHelpButton";

function HelpButton({ onClick, showButton }) {
  return (
    <StyledHelpButton onClick={onClick} display={showButton ? "block" : "none"}>
      ?<span className="sr-only">help</span>
    </StyledHelpButton>
  );
}

export default HelpButton;
