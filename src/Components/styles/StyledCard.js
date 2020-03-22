import styles from "styled-components";

const StyledCard = styles.div`
font-size: 2rem;
text-align: center;
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
.prompt {
  padding-top: 1rem;
  height: 5rem;
}
.answer-container {
  height: 85%;
  display: flex;
  flex-direction: column;
  justify-content: center;

}

.question-mark {
  font-size: 15rem;
  font-weight: 700;
  height: 20rem;
  padding-top: 4rem;
  padding-bottom: 2rem;
  background-image: linear-gradient(0deg, #fae896 50%, #ff4d07 50%);
  background-size: 100% 200%;
  background-position: 50% 90%;
  background-clip: text;
  color: transparent;
  animation: time-drain linear 5s forwards;
}

@keyframes time-drain {
  0% {
    opacity: 0;
  }
  5% {
    opacity: 1;
    background-position: 50% 90%;
  }

  85% {
    opacity: 1;
  }

  95% {
    opacity: 0;
    background-position: 50% 10%;
  }

  100% {
    opacity: 0;
    background-position: 50% 10%;
  }

}


.answer {
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
  height: 6rem;
}

.country-flag {
  width: 100%;
  height: 20rem;
  filter: drop-shadow(0 0 2rem #883311cc);
  z-index: -1;
}

.country-flag img {
  object-fit: scale-down;
  object-position: top;
  width: 100%;
  height: 100%;
  
}

.buttons {
  z-index: 10;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: stretch;
}

button {
  font-weight: 600;
  width: 45%;
  border-radius: 1rem;
  background-color: #fae896;
  color: #ff8d47;
  border: none;
  padding: 8px;
  transition: background-color .2s, color .2s;
  
  &:hover {
    background-color: transparent;
    color: #fae896;
    border: .3rem solid #fae896;
    padding: .5rem;
  }
  
  &:active {
    color: #ff8d47;
    border: none;
    padding: .8rem;
    background-color: #8ffedb;
  }
}
`;

export default StyledCard;
