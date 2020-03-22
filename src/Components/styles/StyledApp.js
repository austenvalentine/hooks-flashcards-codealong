import styled from "styled-components";

const StyledApp = styled.div`
  height: 100vh;
  min-height: 56.8rem;
  background: linear-gradient(-10deg, #ff8d47 60%, #ffda2e 100%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2 {
    font-size: 3rem;
    font-weight: 600;
    color: #e7691c;
  }

  select {
    border: none;
    border-radius: 1rem;
    text-align: center;
    background: #fae896;
    width: 100%;
    font-size: 2rem;
    padding: 2rem;
    outline: none;
  }
`;

export default StyledApp;
