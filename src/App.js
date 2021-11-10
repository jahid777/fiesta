import "./App.css";
import Home from "./Components/Home/Home";
import { Routes, Route, Link } from "react-router-dom";
import ContactUs from "./Components/ContactUs/ContactUs";
import Bag from "./Components/AllProducts/Bag/Bag";
import NotFound from "./Components/NotFound/NotFound";
import Navbar from "./Components/Shared/Navbar/Navbar";
import Footer from "./Components/Shared/Footer/Footer";
import Shoe from "./Components/AllProducts/Shoe/Shoe";
import Belt from "./Components/AllProducts/Belt/Belt";
import Wallet from "./Components/AllProducts/Wallet/Wallet";
import Accessories from "./Components/AllProducts/Accessories/Accessories";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact_us" element={<ContactUs />} />
        <Route path="/bag" element={<Bag />} />
        <Route path="/shoe" element={<Shoe />} />
        <Route path="/belt" element={<Belt />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/accessories" element={<Accessories />} />

        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
