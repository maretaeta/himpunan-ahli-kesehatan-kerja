import About from "./components/About";
import Event from "./components/Event";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Support from "./components/Support";
import Faq from "./components/Faq";
import Location from "./components/Location";
import Aos from "aos";
import "aos/dist/aos.css";


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
      <Location />
      <Faq />
      <Footer />
    </>
  );
}

export default App;
