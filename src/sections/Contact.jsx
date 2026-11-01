import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  ArrowUpRight,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import { profile } from "../data/portfolioData.js";
import TiltCard from "../components/TiltCard.jsx";
import "./Contact.css";

const contactChannels = [
  {
    name: "LinkedIn",
    handle: "burra-shiva-dikshitha",
    description: "Professional networking, roles & recommendations",
    url: profile.linkedin,
    icon: Linkedin,
  },
  {
    name: "GitHub",
    handle: "Dikshithab",
    description: "Open source contributions, repositories & commits",
    url: profile.github,
    icon: Github,
  },
];

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="section-container">
        <motion.div
          className="contact-card-outer"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <TiltCard className="contact-card-wrapper" maxTilt={3}>
            <div className="contact-glow-orb" aria-hidden="true" />

            <span className="section-label">
              <Sparkles size={13} />
              GET IN TOUCH
            </span>

            <h2 className="contact-title">
              Let's discuss opportunities & <span>collaboration.</span>
            </h2>

            <p className="contact-description">
              I am actively open to Python full-stack engineering opportunities, AI/GenAI product roles,
              and software developer positions. Reach out directly through LinkedIn or explore my work on GitHub.
            </p>

            <div className="contact-cta-row">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="btn-contact-primary"
                aria-label="Connect on LinkedIn"
              >
                <MessageSquare size={18} />
                <span>Connect on LinkedIn</span>
                <ArrowUpRight size={17} />
              </a>

              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="btn-contact-secondary"
                aria-label="Explore GitHub profile"
              >
                <Github size={18} />
                <span>Explore GitHub</span>
                <ArrowUpRight size={17} />
              </a>
            </div>

            <div className="contact-divider" aria-hidden="true" />

            <div className="contact-channels-grid">
              {contactChannels.map((channel) => {
                const Icon = channel.icon;

                return (
                  <a
                    key={channel.name}
                    href={channel.url}
                    target="_blank"
                    rel="noreferrer"
                    className="channel-card"
                    aria-label={`Open ${channel.name} in a new tab`}
                  >
                    <div className="channel-icon-box">
                      <Icon size={22} />
                    </div>

                    <div className="channel-details">
                      <div className="channel-title-row">
                        <h4>{channel.name}</h4>
                        <ArrowUpRight size={16} className="channel-arrow" />
                      </div>
                      <span className="channel-handle">@{channel.handle}</span>
                      <p className="channel-desc">{channel.description}</p>
                    </div>
                  </a>
                );
              })}
            </div>
          </TiltCard>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
