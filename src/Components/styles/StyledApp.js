import styled from "styled-components";

const StyledApp = styled.div`
  height: 100vh;
  background: linear-gradient(-10deg, #ff8d47 60%, #ffda2e 100%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  -webkit-transform: scale(1);
  transition: -webkit-transform 0.1s;
  &:hover {
    -webkit-transform: scale(1);
  }

  .region-name {
    padding-bottom: 10px;
    font-size: 3rem;
    font-weight: 400;
    color: #e7691c;
  }

  @media (orientation: landscape) and (max-height: 550px) {
    main {
      position: relative;
      flex-direction: row wrap;
      justify-content: flex-start;
      align-items: flex-start;
      height: 70%;
    }

    .region-name {
      padding-bottom: 0px;
      text-align: left;
    }
  }
`;

export default StyledApp;
