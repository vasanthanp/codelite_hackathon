import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import routes from "./routes";

function App() {
  return (
    // <h1>Hellop</h1>
    <Router>{routes}</Router>
  );
}

export default App;
