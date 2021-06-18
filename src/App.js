import { BrowserRouter } from "react-router-dom";
//Components
import { Header } from "./components/organisms/Header/Header";
import { AppRouter } from "./navigation/AppRouter";
import {GlobalStyle, Container} from "./styles/GlobalStyles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { useState } from "react";
//Style

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle/>
      <CssBaseline />
      <Header />
      <Container>
        <AppRouter />
      </Container>
    </BrowserRouter>
  );
}

export default App;
