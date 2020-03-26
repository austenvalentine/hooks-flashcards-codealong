import styles, { keyframes } from "styled-components";

const checkNetwork = keyframes`
0% {
  opacity: 0;
}
100%{
  opacity: 1;
}
}
`;

const promptEnter = keyframes`
0% {
  opacity: 0;
}

100% {
  opacity: 1;
}
`;

const glimmer = keyframes`
0% {
  opacity: 0;
  transform: rotate3d(-1,1,0, 40deg);
}
10% {
  opacity: 1;
  background-position-y: 100%;
  
}

15% {
  background-position-y: 0%;
  transform: rotate3d(1, -1, 0, 40deg);

  
}

65% {
  background-position-y: 100%;
  transform: rotate3d(-1, 1, 0, 40deg);

}

85% {
  opacity: 1;
  background-position-y: 0%;
}

90% {
  background-position-y: 0%;
  transform: rotate3d(1, -1, 0, 40deg);

}

95% {
  opacity: 0;
}

100% {
  opacity: 0;
  background-position-y: 0%;
  transform: rotate3d(1, -1, 0, 40deg);
}
`;

const answerShow = keyframes`
0% {
  opacity: 0;
  background-position: 0%;
}
100% {
  opacity: 1;
  background-position: 100%;
}
`;

const StyledCard = styles.div`
font-size: 1.6rem;
line-height: 1.6;
text-align: center;
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;

.reconnect-message {
  height: 100%;
  color: #fae896;
  font-size: 2rem;
  font-weight; 400;
  opacity: 0;
  animation: ${checkNetwork} 3s linear 2s forwards;
  display: flex;
  flex-direction: column;
  justify-content: center;
  }
}

.answer-container {
  height: 95%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 1.7rem;
}

.prompt {
  animation: ${promptEnter} linear .3s forwards;
}

.question-mark {
  font-size: 15rem;
  font-weight: 700;
  height: 320px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: linear-gradient(-20deg, #ff4d07 39.5%, #fae896 39.5%,
    #fae896 40%, #ff4d07 40%, #ff4d07 41%, #fae896 41%, #fae896 43%, #ff4d07 43%);
  background-size: 100% 250%;
  background-position-y: 100%;
  background-clip: text;
  color: transparent;
  animation: ${glimmer} linear 6s both;
}

.answer .country-name, .answer .country-flag {
  opacity: 0;
  animation: ${answerShow} linear 1s forwards;
}

.capital-name {
  color: #883311;
}

.capital-name span,
.country-name {
  font-weight: bold;
  color: #fae896;
  
}

.country-name {
  min-height: 70px;
}

.country-flag {
  width: 100%;
  height: 250px;
  filter: drop-shadow(0 0 2rem #883311cc);
}

.country-flag img {
  object-fit: scale-down;
  object-position: top;
  width: 100%;
  height: 100%;
  
}

.buttons {
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: stretch;
  margin-top: 20px;
}

button {
  font-weight: 600;
  width: 45%;
  border-radius: 10px;
  background-color: #fae896;
  color: #883311cc;
  border: none;
  padding: 8px;
  transition: background-color .2s, color .2s;
  
  &:hover {
    background-color: transparent;
    color: #fae896;
    border: 3px solid #fae896;
    padding: 5px;
  }
  
  &:active {
    color: #ff8d47;
    border: none;
    padding: 8px;
    background-color: #8ffedb;
  }

}

@media (orientation: landscape) and (max-height: 550px) {
  .question-mark {
    height: auto;
    font-size: 10rem;
    order: 20;
    text-align: right;
  }

  .capital-name {
    align-self: flex-end;
  }

  .country-flag {
    max-width: 45vw;
    width: 100%;
    max-height: 120px;
  }

  .answer-container {
    height: 100%;
  }

  .country-name {
    min-height: 40px;
  }

  .country-flag img {
    object-position: right bottom;
  }

  .buttons {
    margin-top: 0px;
    flex-flow: column;
    justify-content: flex-end;
    align-items: flex-start;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  button {
    margin-top: 10px;
  }

  .answer {
    display: flex;
    flex-flow: column;
    justify-content: flex-end;
    align-items: flex-end;
    height: 100%;
  }
}

@media (min-height: 768px) {
  .answer-container {
    font-size: 2rem;
  }
}

`;

export default StyledCard;
