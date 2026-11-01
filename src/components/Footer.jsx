import { Github, Linkedin, ArrowUp } from "lucide-react";
import { profile, navLinks } from "../data/portfolioData.js";
import "./Footer.css";

const CURRENT_YEAR = new Date().getFullYear();

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer" role="contentinfo">
      <div className="section-container">
        <div className="footer-top">
          {/* Logo & Headline */}
          <div className="footer-brand">
            <a href="#home" className="footer-logo" onClick={scrollToTop}>
              <span className="logo-bracket">&lt;</span>
              <span className="logo-text">{profile.initials}</span>
              <span className="logo-bracket">/&gt;</span>
            </a>
            <p className="footer-headline">
              {profile.name}
            </p>
            <p className="footer-subtext">
              Building intelligent, secure, and performant web applications.
            </p>
          </div>

          {/* Quick Section Links */}
          <div className="footer-nav">
            <span className="footer-nav-title">Navigation</span>
            <div className="footer-nav-links">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="footer-nav-link">
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Socials & Top Action */}
          <div className="footer-social-column">
            <span className="footer-nav-title">Connect</span>
            <div className="footer-socials">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile of Shiva Dikshitha Burra"
                className="footer-icon-btn"
              >
                <Github size={18} />
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile of Shiva Dikshitha Burra"
                className="footer-icon-btn"
              >
                <Linkedin size={18} />
              </a>

              <button
                type="button"
                onClick={scrollToTop}
                aria-label="Back to top of page"
                className="footer-icon-btn scroll-top-btn"
              >
                <ArrowUp size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            © {CURRENT_YEAR} {profile.name}. All rights reserved.
          </p>
          <p className="footer-craft">
            Designed & developed with precision.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
