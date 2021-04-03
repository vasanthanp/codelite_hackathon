import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import routes from "./routes";
import helperService from "./Services/helperService";

function App() {
  return (
    <Router>{helperService.checkLogin()}{routes}</Router>
  );
}

export default App;
