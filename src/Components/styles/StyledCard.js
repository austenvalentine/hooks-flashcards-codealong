import styles, { keyframes } from "styled-components";

const promptEnter = keyframes`
0% {
  opacity: 0;
}

100% {
  opacity: 1;
}
`;

const timeDrain = keyframes`
0% {
  opacity: 0;
}
10% {
  opacity: 1;
  background-position-y: 100%;
}

15% {
  background-position-y: 10%;
}

65% {
  background-position-y: 100%;
}

85% {
  opacity: 1;
  background-position-y: 100%;
}

90% {
  background-position-y: 10%;
}

95% {
  opacity: 0;
}

100% {
  opacity: 0;
  background-position-y: 10%;
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

.answer-container {
  height: 95%;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  background-image: linear-gradient(-30deg, #ff4d07 39.5%, #fae896 39.5%,
    #fae896 40%, #ff4d07 40%, #ff4d07 41%, #fae896 41%, #fae896 43%, #ff4d07 43%);
  background-size: 100% 250%;
  background-position-y: 100%;
  background-clip: text;
  color: transparent;
  animation: ${timeDrain} linear 6s both;
}


.answer .country-name, .answer .country-flag {
  opacity: 0;
  animation: ${answerShow} linear 1s forwards;
}



.capital-name,
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
  color: #ff8d47;
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

@media (orientation: landscape) {

}

`;

export default StyledCard;
