import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { LeftMenuContextProvider } from './context/LeftMenuContext';
import { GlobalStyle } from './styles/GlobalStyle';
import { Root } from './pages/Root/index';

function App() {
  return (
    <BrowserRouter>
      <LeftMenuContextProvider>
        <GlobalStyle />
        <Root />
      </LeftMenuContextProvider>
    </BrowserRouter>
  );
}

export default App;
