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
          <Route
            path="/productDetail"
            element={
              <div
                style={{
                  width: "100%",
                  height: "100vh",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <h1>Product Detail</h1>
                <p>
                  This Page Still Develop. Please wait For Update, thank you for
                  visiting
                </p>
                <Link to={"/"}>Back To Home</Link>
                <Link to={"https://linkedin.com/in/muhamad-kopal"}></Link>
              </div>
            }
          />
          <Route
            path="/booking"
            element={
              <div
                style={{
                  width: "100%",
                  height: "100vh",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <h1>Booking</h1>
                <p>
                  This Page Still Develop. Please wait For Update, thank you for
                  visiting
                </p>
                <Link to={"/"}>Back To Home</Link>
                <Link to={"https://linkedin.com/in/muhamad-kopal"}>
                  Go to my Linked In
                </Link>
              </div>
            }
          />
          <Route
            path="/aboutUs"
            element={
              <div
                style={{
                  width: "100%",
                  height: "100vh",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <h1>About Us</h1>
                <p>
                  This Page Still Develop. Please wait For Update, thank you for
                  visiting
                </p>
                <Link to={"/"}>Back To Home</Link>
                <Link to={"https://linkedin.com/in/muhamad-kopal"}>
                  Go to my Linked In
                </Link>
              </div>
            }
          />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
