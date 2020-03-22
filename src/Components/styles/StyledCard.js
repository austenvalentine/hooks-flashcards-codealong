import styles from "styled-components";

const StyledCard = styles.div`
font-size: 2rem;
text-align: center;
margin-top: 20px;
height: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
.prompt {
  margin: 20px 0;
}
.answer-container {
  min-height: 150px;
  height: 100%;
}

.question-mark {
  font-size: 15rem;
  font-weight: 700;
  height: 40%;
  max-height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  
}

.country-name {
  margin-bottom: 20px;
}

.country-flag {
  width: 100%;
  
}

.country-flag img {
  width: 100%;
}
`;

export default StyledCard;
