import "./App.css";
import Home from "./Components/Home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
import ContactUs from "./Components/ContactUs/ContactUs";
function App() {
  return (
    <div className="App">
      <Home />
      <ContactUs />
    </div>
  );
}

export default App;
