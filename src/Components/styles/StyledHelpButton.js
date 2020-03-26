import styled from "styled-components";

const StyledHelpButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 4px;
  margin: 5px;
  font-size: 3rem;
  color: #883311cc;
  font-weight: 600;
  background-color: #fae896;
  border: 3px solid transparent;
  border-radius: 100%;
  width: 40px;
  height: 40px;
  position: absolute;
  left: 20px;
  bottom: 20px;
  cursor: pointer;
  display: ${props => props.display};
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.2, 1.2);
  }
  &:focus {
    outline: 3px cyan solid;
  }

  .sr-only {
    opacity: 0;
    position: absolute;
    left: -99999999999999px;
    top: -99999999999999px;
  }
`;

export default StyledHelpButton;
