import styled from "styled-components";
import skyline from "../../assets/resources/skyline.svg";

const BackgroundUnderlay = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  background-image: url(${skyline});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 20% bottom;
  filter: blur(4px);
`;

export default BackgroundUnderlay;
