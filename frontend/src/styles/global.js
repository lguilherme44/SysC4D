import { createGlobalStyle } from 'styled-components';

// paleta de cores
// #E85D75
// #02394A
// #043565
// #5158BB
// #F26DF9

// paleta de cores alternativa
// #393B44
// #27272B
// #B0D235
// #7E8085
// #FF9A5C
// #E8486B
// #E8C148
// #B74FFF

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
  font-size: 0.9rem;
}

html, body, #root {
  min-height: 100%;
}

body {
  background-image: linear-gradient(to right, #27272B, #393B44);
  -webkit-font-smothing: antialiased !important;

  overflow-x: hidden; /* Hide horizontal scrollbar */
}

body::-webkit-scrollbar {
  width: .5px;
}
body::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.1);
}

body::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  outline: 1px solid slategrey;
}

body, input, button {
  color: #222;
  font-size: 1.4rem;
  font-family: 'Montserrat', sans-serif;
}

button {
  cursor: pointer;
}

.btn-secondary{
    background-color: #B0D235;
    border: 0.2px solid #B0D235;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.4);
}

.card {
  border: 0.2px solid #7c7c7d;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
  margin: 0 0 30px;
}

.jumbotron {
  border: 0.2px solid #7c7c7d;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
}

.bg-light {
  background-image: linear-gradient(to right, #27272B, #393B44);
}

.navbar {
  box-shadow: 0 0 3px rgba(255, 255, 255, 0.4);
  padding: 20px;
}

.navbar a {
  color: #b0d235!important
}

.navbar a:hover {
  color: transparent!important
}

.navbar-light .navbar-nav .nav-link {
  color: rgba(0, 0, 0, 1)!important;
}

.dropdown-menu {
  background-color: #2d2d33!important;
}



`;
