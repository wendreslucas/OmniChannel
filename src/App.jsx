import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { UserContextProvider } from './context/UserContextProvider';
import { GlobalStyle } from './styles/GlobalStyle';
import { Root } from './pages/Root/index';

function App() {
  return (
    <BrowserRouter>
      <UserContextProvider>
        <GlobalStyle />
        <Root />
      </UserContextProvider>
    </BrowserRouter>
  );
}

export default App;
