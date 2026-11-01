import { motion } from "framer-motion";
import { Award, ExternalLink, Sparkles } from "lucide-react";
import { certificationsData } from "../data/portfolioData.js";
import "./Certifications.css";

function Certifications() {
  return (
    <section className="certifications-section" id="certifications">
      <div className="section-container">

        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">MY ACHIEVEMENTS</span>

          <h2>
            Certifications & <span>Learning</span>
          </h2>

          <p>
            Professional certifications and continuous learning experiences
            that strengthen my technical foundation.
          </p>
        </motion.div>

        <div className="certifications-grid">
          {certificationsData.map((cert, index) => (
            <motion.article
              className="certification-card"
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="certification-top">
                <div className="certification-icon">
                  <Award size={26} />
                </div>

                <Sparkles className="certification-sparkle" size={19} />
              </div>

              <span className="certification-year">{cert.detail}</span>

              <h3>{cert.title}</h3>

              <p className="certification-issuer">{cert.issuer}</p>

              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="certification-link"
                >
                  View Certificate
                  <ExternalLink size={15} />
                </a>
              )}
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Certifications;