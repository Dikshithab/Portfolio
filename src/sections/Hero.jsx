import { motion } from "framer-motion";
import { useRef, useState } from "react";
import {
  Github,
  Linkedin,
  ArrowRight,
  MessageSquare,
  Sparkles,
} from "lucide-react";

import { profile } from "../data/portfolioData.js";
import "./Hero.css";

const corePills = [
  "Python",
  "Django",
  "React",
  "Generative AI",
  "Cybersecurity",
  "MySQL",
];

function Hero() {
  const photoRef = useRef(null);
const [tilt, setTilt] = useState({ x: 0, y: 0 });

const handleMouseMove = (e) => {
  if (!photoRef.current) return;

  const rect = photoRef.current.getBoundingClientRect();

  const x = (e.clientX - rect.left) / rect.width;
  const y = (e.clientY - rect.top) / rect.height;

  setTilt({
    x: (0.5 - y) * 12,
    y: (x - 0.5) * 12,
  });
};

const resetTilt = () => setTilt({ x: 0, y: 0 });
  return (
    <section className="hero" id="home">
      <div className="hero-container">

        {/* Left: Name and Professional Summary */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hero-eyebrow">
            <span className="eyebrow-dot" />
            <span>HELLO, I'M</span>
          </div>

        <h1 className="hero-name-title">
  <span className="hero-surname">Burra </span>
  <span className="hero-firstname">Shiva Dikshitha</span>
</h1>


          <h2 className="hero-headline">
            Full Stack Developer
            <span className="gradient-highlight">
              {" "} & AI Enthusiast
            </span>
          </h2>

          <p className="hero-supporting-text">
            I'm a Computer Science and Cybersecurity student passionate
            about building modern web applications and intelligent
            AI-powered solutions. I work with Python, Django, React,
            and Generative AI to turn ideas into useful digital
            experiences.
          </p>

          {/* Technology badges */}
          <div
            className="hero-pills-row"
            aria-label="Core technologies"
          >
            {corePills.map((tech) => (
              <span key={tech} className="hero-pill">
                {tech}
              </span>
            ))}
          </div>

          {/* Action buttons */}
          <div className="hero-actions">
            <a href="#projects" className="btn-primary-glow">
              <span>Explore My Projects</span>
              <ArrowRight size={18} />
            </a>

            <a href="#contact" className="btn-secondary-glass">
              <MessageSquare size={17} />
              <span>Let's Connect</span>
            </a>
          </div>

          {/* Social links */}
          <div className="hero-social-strip">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-pill"
              aria-label="GitHub profile"
            >
              <Github size={18} />
              <span>GitHub</span>
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-pill"
              aria-label="LinkedIn profile"
            >
              <Linkedin size={18} />
              <span>LinkedIn</span>
            </a>
          </div>
        </motion.div>

        {/* Right: Your Profile Photo */}
        <motion.div
  className="hero-photo-section"
  initial={{ opacity: 0, scale: 0.85 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1, delay: 0.2 }}
>
  <div className="hero-orbit orbit-one"></div>
  <div className="hero-orbit orbit-two"></div>

  <div className="hero-photo-glow"></div>

  <div
    className="hero-photo-frame"
    ref={photoRef}
    onMouseMove={handleMouseMove}
    onMouseLeave={resetTilt}
    style={{
      transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
    }}
  >
    <img
      src="/photo.jpeg"
      alt="Shiva Dikshitha Burra"
      className="hero-profile-photo"
    />

    <div className="photo-inner-glow"></div>
  </div>

  <div className="photo-floating-card photo-card-top">
    <Sparkles size={17} />
    <div>
      <strong>AI & Innovation</strong>
      <span>Building intelligent solutions</span>
    </div>
  </div>

  <div className="photo-floating-card photo-card-bottom">
    <span className="photo-status-dot"></span>
    <div>
      <strong>Full Stack Development</strong>
      <span>Python · Django · React</span>
    </div>
  </div>

  <div className="hero-photo-caption">
    <span>CREATIVITY MEETS TECHNOLOGY</span>
  </div>
</motion.div>
      </div>
    </section>
  );
}

export default Hero;
