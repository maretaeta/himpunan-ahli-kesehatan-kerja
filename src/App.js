import Aos from "aos";
import "aos/dist/aos.css";
import Home from "./components/Pages/Home";
import Detail from "./components/Pages/Detail";
import Login from "./components/Pages/Login";
import Registered from "./components/Pages/Registered";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Router, Routes, BrowserRouter } from "react-router-dom";

function App() {
  Aos.init({
    duration: 1800,
    offset: 0,
    once: true,
  });

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Registered" element={<Registered />} />
        <Route path="/Detail" element={<Detail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
