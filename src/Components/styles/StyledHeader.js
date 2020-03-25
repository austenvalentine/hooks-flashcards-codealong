import styles from "styled-components";

const StyledHeader = styles.header`
  text-align: center;
  padding-top: 20px;
  h1 {
    margin-bottom: 20px;
    font-size: 4rem;
    font-weight: 400;
    color: #e7691c;
  }

  @media (orientation: landscape) and (max-height: 550px) {
    h1 {
      text-align: left;
      margin-bottom: 10px;
    }
  }

  @media (min-height: 768px) and (min-width: 420px) {
    padding-top: 60px;
    h1{
      font-size: 5rem;
    }
  }
`;

export default StyledHeader;
