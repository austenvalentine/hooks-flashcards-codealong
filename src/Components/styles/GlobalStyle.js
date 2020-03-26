import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

html {
  font-size: 62.5%;
  
}

h1, h2, h3, h4, h5, h6, div, p {
  margin: 0;
  font-family: 'Spartan';
}

.swal2-modal {
  width: 310px;
  border-radius: 10px;
  background-color: #fae896;
  padding: 15px;
}

.swal2-title {
  color: #883311cc;
  font-size: 2.9rem;
}

.swal2-content {
  color: #883311cc;
  font-size: 2rem;
  font-weight: 400; 
}

.swal2-styled.swal2-confirm {
  color: #fae896;
  background-color: #ff8d47;
  font-weight: 400;
  transition: all .3s;
  &:hover {
    transform: scale(1.2, 1.2);
  }
}



`;

export default GlobalStyle;
