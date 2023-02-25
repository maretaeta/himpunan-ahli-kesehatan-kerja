import About from './components/About';
import Event from './components/Event';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar'
import Pricing from './components/Pricing';
import Support from './components/Support'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Support />
      <Event />
      <Pricing />
      <Footer />
    </>
  );
}

export default App;