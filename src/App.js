import { useEffect } from "react";
import "./App.css";
import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  useEffect(() => {
    document.title = "Tyrail Leverett";
  }, []);

  return (
    <>
      <Hero />
      <Skills />
      <Projects />
      <About />
      <Footer />
    </>
  );
}

export default App;
