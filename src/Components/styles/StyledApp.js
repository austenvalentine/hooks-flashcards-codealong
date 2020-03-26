import styled from "styled-components";

const StyledApp = styled.div`
  height: 100vh;
  background: linear-gradient(-10deg, #ff8d47 60%, #ffda2e 100%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;

  .regionName {
    padding-bottom: 10px;
    font-size: 3rem;
    font-weight: 700;
    color: #e7691c;

    &:hover {
      tranform: ;
    }
  }

  @media (orientation: landscape) and (max-height: 550px) {
    main {
      position: relative;
      flex-direction: row wrap;
      justify-content: flex-start;
      align-items: flex-start;
      height: 70%;
    }

    .regionName {
      padding-bottom: 0px;
      text-align: left;
    }
  }
`;

export default StyledApp;
