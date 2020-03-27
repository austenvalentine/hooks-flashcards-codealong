import React from "react";
import styled, { keyframes } from "styled-components";
import globe from "../assets/resources/map.svg";

// cache map image on load
new Image().src = globe;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }

  100%{
    opacity: 1;
  }
`;

const spinning = keyframes`
  0% {
    background-position: 0px 50%;
  }

  100% {
    background-position: 320px 50%;
  }
`;

const StyledSpinner = styled.div`
  display: flex;
  flex-direction: column;
  height: 80%;
  justify-content: center;
  align-items: center;
  opacity: 0;
  .globe {
    height: 100px;
    width: 100px;
    border-radius: 50%;
    background-image: url(${globe});
    background-size: 160% 160px;
    background-repeat: repeat-x;
    transform: scale(1.5) translate(0, 30px);
    animation: ${spinning} linear 12s infinite;
  }
  animation: ${fadeIn} linear 2s forwards 2s;
`;

function Spinner({ children }) {
  return (
    <StyledSpinner>
      {children}
      <div className="globe"></div>
    </StyledSpinner>
  );
}

export default Spinner;
