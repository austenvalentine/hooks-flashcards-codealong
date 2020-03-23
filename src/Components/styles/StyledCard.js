import styles from "styled-components";

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
  padding-top: 40px;
  height: 95%;
  display: flex;
  flex-direction: column;
  justify-content: center;

}

.answer .prompt {
  animation-name: prompt-enter linear 2s forwards;
}

@keyframes prompt-enter {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}



.question-mark {
  font-size: 15rem;
  font-weight: 700;
  height: 320px;
  background-image: linear-gradient(0deg, #fae896 50%, #ff4d07 50%);
  background-size: 100% 200%;
  background-position-y: 90%;
  background-clip: text;
  color: transparent;
  animation: time-drain linear 6s forwards;
}

@keyframes time-drain {
  0% {
    opacity: 0;
  }
  5% {
    opacity: 1;
    background-position-y: 90%;
  }

  85% {
    opacity: 1;
  }

  95% {
    opacity: 0;
    background-position-y: 10%;
  }

  100% {
    opacity: 0;
    background-position-y: 10%;
  }

}


.answer .country-name, .answer .country-flag {
  opacity: 0;
  animation-name: answer-show;
  animation-timing-function: linear;
  animation-duration: 1s;
  animation-fill-mode: forwards;
}

@keyframes answer-show {
  0% {
    opacity: 0;
    background-position: 0%;
  }
  100% {
    opacity: 1;
    background-position: 100%;
  }
}


.capital-name,
.country-name {
  font-weight: bold;
  color: #fae896;
  
}

.country-name {
  height: 70px;
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
