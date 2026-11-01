import { motion } from "framer-motion";
import { GraduationCap, Code2, BrainCircuit, ShieldCheck, Award } from "lucide-react";
import { profile } from "../data/portfolioData.js";
import TiltCard from "../components/TiltCard.jsx";
import "./About.css";

const pillars = [
  {
    icon: Code2,
    title: "Full Stack Engineering",
    description:
      "Designing clean RESTful backends in Python and Django REST Framework paired with modular, reactive frontends in React.",
  },
  {
    icon: BrainCircuit,
    title: "AI & Generative AI",
    description:
      "Harnessing LLM APIs and Groq AI to build intelligent, autonomous features like project health analyzers and resume evaluators.",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity Mindset",
    description:
      "Applying core principles of cryptography, symmetric encryption (Fernet), secure authentication, and access control.",
  },
];

function About() {
  const { education } = profile;

  return (
    <section className="about-section" id="about">
      <div className="section-container">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">ABOUT ME</span>
          <h2>
            Engineering with <span>purpose and security.</span>
          </h2>
          <p>
            A dedicated developer focused on combining Python full-stack engineering with modern AI capabilities and cybersecurity principles.
          </p>
        </motion.div>

        <div className="about-layout">
          {/* Left Column: Bio & Verified Education */}
          <motion.div
            className="about-bio-card-wrapper"
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="about-bio-card">
              <div className="bio-header">
                <div className="bio-avatar-badge">SD</div>
                <div>
                  <h3> Burra Shiva Dikshitha </h3>
                  <span className="bio-subtitle">Full Stack & AI Developer</span>
                </div>
              </div>

              <div className="bio-text">
                <p>
                  I am an engineering student pursuing my B.Tech in Computer Science and Engineering with a specialization in Cybersecurity at Narasimha Reddy Engineering College.
                </p>
                <p>
                  My passion lies in crafting end-to-end applications: architecting scalable backend APIs with Python and Django, designing responsive user interfaces with React, and embedding cutting-edge Generative AI features into practical solutions.
                </p>
              </div>

              {/* Verified Education Card */}
              <div className="education-banner">
                <div className="education-icon-box">
                  <GraduationCap size={22} />
                </div>
                <div className="education-info">
                  <div className="education-top">
                    <span className="education-badge">ACADEMIC BACKGROUND</span>
                    <span className="education-cgpa">
                      <Award size={13} />
                      <span>CGPA: {education.cgpa}</span>
                    </span>
                  </div>
                  <h4>{education.degree}</h4>
                  <p className="education-college">{education.college}</p>
                  <div className="education-meta">
                    <span>Specialization: {education.specialization}</span>
                    <span className="meta-separator">•</span>
                    <span>{education.period}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Three Focus Pillars with TiltCard Depth */}
          <div className="about-pillars">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                >
                  <TiltCard className="pillar-card" maxTilt={5}>
                    <div className="pillar-icon">
                      <Icon size={22} />
                    </div>
                    <div className="pillar-content">
                      <h4>{pillar.title}</h4>
                      <p>{pillar.description}</p>
                    </div>
                  </TiltCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
