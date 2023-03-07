import About from "./components/About";
import Event from "./components/Event";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Support from "./components/Support";
import { motion } from "framer-motion";
import Aos from "aos";
import "aos/dist/aos.css";

let easeing = [0.6, -0.05, 0.01, 0.99];
const stagger = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};
const header = {
  initial: {
    y: -60,
    opacity: 0,
    transition: { duration: 0.05, ease: easeing },
  },
  animate: {
    y: 0,
    opacity: 1,
    animation: {
      duration: 0.6,
      ease: easeing,
    },
  },
};
const fadeInUp = {
  initial: {
    y: -60,
    opacity: 0,
    transition: {
      duration: 0.6,
      ease: easeing,
    },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      delay: 0.5,
      ease: easeing,
    },
  },
};

function App() {
  Aos.init({
    duration: 1800,
    offset: 0,
    once: true,
  });

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Support />
      <Event />
      <Footer />
    </>
  );
}

export default App;
