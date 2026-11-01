import { motion } from "framer-motion";
import { FileText, Download, ArrowUpRight } from "lucide-react";
import "./Resume.css";

function Resume() {
  return (
    <section className="resume-section" id="resume">
      <div className="section-container">
        <motion.div
          className="resume-card"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="resume-icon">
            <FileText size={35} />
          </div>

          <span className="section-label">MY PROFESSIONAL PROFILE</span>

          <h2>
            Interested in my <span>journey?</span>
          </h2>

          <p>
            Explore my resume to learn more about my education, technical
            skills, internship experience, projects, and achievements.
          </p>

          <div className="resume-actions">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="resume-view-btn"
            >
              View Resume <ArrowUpRight size={17} />
            </a>

            <a
              href="/resume.pdf"
              download="BURRA_SHIVA_DIKSHITHA.pdf"
              className="resume-download-btn"
            >
              <Download size={17} /> Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Resume;