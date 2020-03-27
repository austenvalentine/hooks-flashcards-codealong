import styled from "styled-components";

const StyledHelpButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 5px;
  padding-left: 1px;
  margin: 0;
  font-size: 2.5rem;
  color: #883311cc;
  font-weight: 600;
  background-color: #fae896;
  border: 3px solid transparent;
  border-radius: 5px;
  width: 40px;
  height: 40px;
  position: absolute;
  left: 30px;
  bottom: 30px;
  cursor: pointer;
  display: ${props => props.showButton};
  transform: scale(1);
  transform-origin: bottom left;
  transition: background-color 0.3s, color 0.3s, transform 0.3s;
  backface-visibility: hidden;
  z-index: 30;
  opacity: 1;

  &:hover {
    color: #883311ff;
    transform: scale(1.1);
  }

  .sr-only {
    opacity: 0;
    position: absolute;
    left: -33333333px;
    top: -33333333px;
  }
`;

export default StyledHelpButton;
