import { BrowserRouter } from "react-router-dom";
//Components
import { Header } from "./components/organisms/Header/Header";
import { AppRouter } from "./navigation/AppRouter";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
