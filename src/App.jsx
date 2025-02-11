import { useEffect, useRef } from "react";
import "./app.scss";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";

const App = () => {
  const projectsRef = useRef(null);

  return (
    <div>
      <section id="Homepage">
        <Navbar projectsRef={projectsRef}/>
        <Hero />
      </section>
      <section id="About">
        <About />
      </section>
      <section id="Skills">
        <Skills/>
      </section>
      <Projects ref={projectsRef}/>
      <section id="Contact">
        <Contact/>
      </section>
    </div>
  );
};

export default App;
