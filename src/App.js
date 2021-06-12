import { BrowserRouter } from "react-router-dom";
//Components
import { Header } from "./components/organisms/Header/Header";
import { AppRouter } from "./navigation/AppRouter";
import GlobalStyle from "./styles/GlobalStyles";

function App() {
  return (
    <BrowserRouter>
    <GlobalStyle/>
      <Header />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
