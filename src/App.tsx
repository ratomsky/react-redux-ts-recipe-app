import { BrowserRouter } from 'react-router-dom';
//Components
import { Header } from './components/organisms/Header/Header';
import { AppRouter } from './navigation/AppRouter';
import CssBaseline from '@material-ui/core/CssBaseline';
//Style
import { GlobalStyle, Container } from './styles/GlobalStyles';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <CssBaseline />
      <Header />
      <Container>
        <AppRouter />
      </Container>
    </BrowserRouter>
  );
}

export default App;
