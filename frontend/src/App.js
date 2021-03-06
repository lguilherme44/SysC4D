import React from 'react';
import Routes from './routes';
import GlobalStyle from './styles/global';

import 'bootstrap/dist/css/bootstrap.css';

import { ToastContainer } from 'react-toastify';

import './styles/global.css';
function App() {
  return (
    <>
      <Routes />
      <GlobalStyle />
      <ToastContainer
        autoClose={2000}
        position="top-right"
        closeOnClick
        draggable
        className="toast-container"
        toastClassName="dark-toast"
      ></ToastContainer>
    </>
  );
}

export default App;
