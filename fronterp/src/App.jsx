import { BrowserRouter } from "react-router-dom";
import RoutesApp from "./router/RoutesApp";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <RoutesApp></RoutesApp>
    </BrowserRouter>
  );
}

export default App;
