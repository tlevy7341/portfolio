import {useRef, useEffect } from 'react';

import "./App.css";
import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {

    useEffect(()=>{
       document.title = 'Tyrail Leverett';

    },[])

    const aboutRef = useRef(null);
    const skillsRef = useRef(null);
    const projectsRef = useRef(null);

  return (
    <>
      <Hero myRefs={[aboutRef,skillsRef,projectsRef]} />
      <Skills myRef={skillsRef} />
      <Projects myRef={projectsRef} />
      <About myRef={aboutRef} />
      <Footer />
    </>
  );
}

export default App;
