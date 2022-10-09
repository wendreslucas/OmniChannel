import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { LeftMenuContextProvider } from './context/LeftMenuContext';
import { GlobalStyle } from './styles/GlobalStyle';
import { Root } from './pages/Root/index';
import { CallProvider } from './context/CallProvider';

function App() {
  return (
    <BrowserRouter>
      <CallProvider>
        <LeftMenuContextProvider>
          <GlobalStyle />
          <Root />
        </LeftMenuContextProvider>
      </CallProvider>
    </BrowserRouter>
  );
}

export default App;
