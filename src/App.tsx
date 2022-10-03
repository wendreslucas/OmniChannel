import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './styles/GlobalStyle';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <h1>INICIO</h1>
    </BrowserRouter>
  );
}

export default App;
