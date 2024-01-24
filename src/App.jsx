// ! Import Styling
import "./App.scss";

// ! Import Utils
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// ! Import Components
import Navbar from "./components/Fragments/Navbar/Navbar";
import Footer from "./components/Fragments/Footer/Footer";
import Home from "./pages/Home/Home";

// ? Framer Motion
import { motion, useScroll } from "framer-motion";
import AboutUs from "./pages/AboutUs/AboutUs";
import Booking from "./pages/Booking/Booking";
import ProductDetail from "./pages/ProductDetail/ProductDetail";

function App() {
  // ToDo Scrollbar Progress
  const { scrollYProgress } = useScroll();

  return (
    <>
      <Router>
        <motion.div
          className="progress-bar"
          style={{ scaleX: scrollYProgress }}
        />
        <Navbar />
        <Routes>
          <Route index exact path="/" element={<Home />} />
          <Route path="/productDetail" element={<ProductDetail />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/aboutUs" element={<AboutUs />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
