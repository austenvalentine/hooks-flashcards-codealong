import styles from "styled-components";

const StyledCard = styles.div`
.answer-container {
  min-height: 150px;
}

.question-mark {
  font-size: 80px;
  font-weight: bold;
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

.country-flag {
  height: 100px;
}

.country-flag img {
  height: 100%;
}
`;

export default StyledCard;
