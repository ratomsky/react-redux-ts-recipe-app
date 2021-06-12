import { BrowserRouter } from "react-router-dom";
//Components
import { Header } from "./components/organisms/Header/Header";
import { AppRouter } from "./navigation/AppRouter";
import {GlobalStyle, Container} from "./styles/GlobalStyles";

function App() {
  return (
    <BrowserRouter>
    <GlobalStyle/>
    <Header />
    <Container>
      <AppRouter />
    </Container>
    </BrowserRouter>
  );
}

export default App;
