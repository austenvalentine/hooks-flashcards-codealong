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

  @media (orientation: landscape) {
    h1 {
      text-align: left;
      margin-bottom: 10px;
    }
  }
`;

export default StyledHeader;
