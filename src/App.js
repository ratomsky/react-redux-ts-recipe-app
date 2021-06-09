import { BrowserRouter } from "react-router-dom";
//Components
import { Header } from "./components/organisms/Header/Header";
import { AppRouter } from "./navigation/AppRouter";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
//Style

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Header />
      <Container maxWidth="md">
        <AppRouter />
      </Container>
    </BrowserRouter>
  );
}

export default App;
