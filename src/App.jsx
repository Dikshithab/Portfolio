import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import BackgroundEffects from "./components/BackgroundEffects.jsx";

import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Skills from "./sections/Skills.jsx";
import Interests from "./sections/Interests.jsx";
import Projects from "./sections/Projects.jsx";
import Experience from "./sections/Experience.jsx";
import Certifications from "./sections/Certifications.jsx";
import Resume from "./sections/Resume.jsx";
import Contact from "./sections/Contact.jsx";

import "./App.css";

function App() {
  return (
    <>
      <BackgroundEffects />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Interests />
        <Projects />
        <Experience />
        <Certifications />
        <Resume />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;