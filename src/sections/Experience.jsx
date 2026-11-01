import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  GraduationCap,
  Award,
} from "lucide-react";
import {
  experienceData,
  certificationsData,
  profile,
} from "../data/portfolioData.js";
import "./Experience.css";

function Experience() {
  const { education } = profile;

  return (
    <section className="experience-section" id="experience">
      <div className="section-container">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">TRACK RECORD</span>
          <h2>
            Experience & <span>credentials.</span>
          </h2>
          <p>
            Practical engineering exposure, verified academic training, and professional technical certifications.
          </p>
        </motion.div>

        <div className="experience-layout">
          {/* Column 1: Experience & Education Timeline */}
          <div className="experience-column">
            <div className="column-header">
              <div className="column-icon-box">
                <BriefcaseBusiness size={20} />
              </div>
              <h3>Practical Experience</h3>
            </div>

            <div className="timeline-container">
              {experienceData.map((item, index) => (
                <motion.article
                  className="timeline-item-card"
                  key={item.role}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <span className="timeline-node" />
                  <div className="timeline-badge-row">
                    <span className="exp-type-badge">{item.type}</span>
                    <span className="exp-period-badge">{item.period}</span>
                  </div>

                  <h4 className="exp-role-title">{item.role}</h4>
                  <p className="exp-org-name">{item.organization}</p>
                  <p className="exp-desc">{item.description}</p>
                </motion.article>
              ))}
            </div>

            {/* Academic Education in the Journey */}
            <motion.div
              className="timeline-education-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="edu-icon-badge">
                <GraduationCap size={22} />
              </div>
              <div className="edu-details">
                <div className="timeline-badge-row">
                  <span className="exp-type-badge edu-type">ACADEMIC DEGREE</span>
                  <span className="exp-period-badge">{education.period}</span>
                </div>
                <h4 className="exp-role-title">{education.degree}</h4>
                <p className="exp-org-name">{education.college}</p>
                <div className="edu-specialization-row">
                  <span>Specialization: <strong>{education.specialization}</strong></span>
                  <span className="edu-cgpa-pill">CGPA: {education.cgpa}</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Column 2: Certifications */}
          <div className="certifications-column">
            <div className="column-header">
              <div className="column-icon-box">
                <Award size={20} />
              </div>
              <h3>Verified Certifications</h3>
            </div>

            <div className="certifications-grid">
              {certificationsData.map((cert, index) => (
                <motion.article
                  className="cert-card"
                  key={cert.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.1 }}
                >
                  <div className="cert-icon-box">
                    <Award size={20} />
                  </div>
                  <div className="cert-body">
                    <span className="cert-issuer">{cert.issuer}</span>
                    <h4 className="cert-title">{cert.title}</h4>
                    <span className="cert-meta">{cert.detail}</span>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* Continuous Learning Callout */}
            <motion.div
              className="continuous-learning-card"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.35 }}
            >
              <div className="learning-pulse-dot" />
              <div>
                <h4>Continuous Professional Growth</h4>
                <p>
                  Constantly strengthening Python backend performance, LLM workflow integrations, and application vulnerability defense through active project building.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
