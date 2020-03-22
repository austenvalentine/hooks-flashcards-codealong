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
  height: 6rem;
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
  color: #fae896;
  height: 200px;
  padding-top: 6rem;
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
  }
  100% {
    opacity: 1;
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
  height: 200px;
  filter: drop-shadow(0 0 2rem #883311cc);
  z-index: -1;
}

.country-flag img {
  object-fit: scale-down;
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
`;

export default StyledCard;
