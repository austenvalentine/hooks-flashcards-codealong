import styles from "styled-components";

const Wrapper = styles.div`
  height: 100%;
  width: 85%;
  max-width: 1200px;
  min-width: 290px;
  margin: 0 auto;
  position: relative;
  
  @media (orientation: landscape) and (max-height: 550px) {
    max-width: 600px;
  }
`;

export default Wrapper;
