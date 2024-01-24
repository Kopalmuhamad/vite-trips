// ! Import Styling
import "./App.scss";

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
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}

export default App;
