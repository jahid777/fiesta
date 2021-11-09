import "./App.css";
import Home from "./Components/Home/Home";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./Components/Shared/Navbar/Navbar";
import Footer from "./Components/Shared/Footer/Footer";
import ContactUs from "./Components/ContactUs/ContactUs";
import Bag from "./Components/AllProducts/Bag";
import NotFound from "./Components/NotFound/NotFound";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" />
        <Route path="/home" element={<Home />} />
        <Route path="/contact_us" element={<ContactUs />} />
        <Route path="/bag" element={<Bag />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
