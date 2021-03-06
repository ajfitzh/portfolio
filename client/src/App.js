import './App.css';
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Values from "./components/Values"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  return (
    <div>
      <Navbar />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Values />
        <Contact />
        <Footer />
      
    </div>
  );
}

export default App;
