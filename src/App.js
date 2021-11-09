import "./App.css";
import Home from "./Components/Home/Home";
import { Routes, Route, Link } from "react-router-dom";
import ContactUs from "./Components/ContactUs/ContactUs";
import NotFound from "./Components/NotFound/NotFound";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/home"  /> */}

        <Route path="/contact_us" element={<ContactUs />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
