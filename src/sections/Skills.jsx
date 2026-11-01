import { motion } from "framer-motion";
import {
  Server,
  Layout,
  Database,
  BrainCircuit,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import { skillCategories } from "../data/portfolioData.js";
import TiltCard from "../components/TiltCard.jsx";
import "./Skills.css";

const iconMap = {
  "Backend Development": Server,
  "Frontend Development": Layout,
  "Databases": Database,
  "AI and Generative AI": BrainCircuit,
  "Cybersecurity": ShieldCheck,
  "Development Tools": Wrench,
};

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="section-container">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">TECHNICAL COMPETENCIES</span>
          <h2>
            Skills & <span>engineering toolkit.</span>
          </h2>
          <p>
            Technologies and frameworks I utilize to architect dependable web systems, intelligent AI features, and secure software.
          </p>
        </motion.div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => {
            const IconComponent = iconMap[category.title] || Server;

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <TiltCard className="skill-category-card" maxTilt={6}>
                  <div className="skill-card-header">
                    <div className="skill-icon-box">
                      <IconComponent size={22} />
                    </div>
                    <span className="skill-card-index">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="skill-card-title">{category.title}</h3>
                  <p className="skill-card-desc">{category.description}</p>

                  <div className="skill-pill-list">
                    {category.skills.map((skill) => (
                      <span key={skill} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
