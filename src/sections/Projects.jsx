import { motion } from "framer-motion";

import {
  Github,
  ArrowUpRight,
  BrainCircuit,
  BriefcaseBusiness,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  FileText,
  Target,
  TrendingUp,
  ExternalLink,
} from "lucide-react";

import { projects } from "../data/portfolioData.js";
import TiltCard from "../components/TiltCard.jsx";

import "./Projects.css";

// Project icons
const projectIcons = {
  "AI-Powered Kanban": BrainCircuit,
  "HireSphere Job Portal": BriefcaseBusiness,
  CipherVault: ShieldCheck,
};

function Projects() {
  // Always feature HireSphere as the main project
  const featuredProject =
    projects.find((project) => project.title === "HireSphere Job Portal") ||
    projects.find((project) => project.featured) ||
    projects[0];

  // Display remaining projects in the secondary grid
  const secondaryProjects = projects.filter(
    (project) => project !== featuredProject
  );

  // Avoid rendering if there are no projects
  if (!featuredProject) return null;

  const FeaturedIcon =
    projectIcons[featuredProject.title] || BriefcaseBusiness;

  return (
    <section className="projects-section" id="projects">
      <div className="section-container">

        {/* ================= SECTION HEADING ================= */}

        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">
            PORTFOLIO WORK
          </span>

          <h2>
            Featured <span>engineering projects.</span>
          </h2>

          <p>
            Building practical full-stack applications, intelligent
            AI-powered solutions, and cybersecurity tools that solve
            real-world problems.
          </p>
        </motion.div>

        {/* ================= FEATURED PROJECT ================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <TiltCard
            className="featured-project-card"
            maxTilt={3}
          >
            <div className="featured-content">

              {/* Project Badge */}

              <div className="project-badge-row">
                <span className="featured-tag">
                  <Sparkles size={13} />
                  FEATURED PROJECT
                </span>

                <span className="project-category-tag">
                  {featuredProject.category}
                </span>
              </div>

              {/* Project Title */}

              <h3 className="featured-title">
                {featuredProject.title}
              </h3>

              {/* Project Description */}

              <p className="featured-description">
                {featuredProject.description}
              </p>

              {/* Project Features */}

              <div className="feature-checklist">
                <span className="checklist-heading">
                  Key Implemented Features:
                </span>

                <div className="checklist-grid">
                  {featuredProject.features.map((feature) => (
                    <div
                      key={feature}
                      className="checklist-item"
                    >
                      <CheckCircle2
                        size={16}
                        className="checklist-icon"
                      />

                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}

              <div className="project-tech-pills">
                {featuredProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="tech-pill"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Live Demo and GitHub Buttons */}

              <div className="project-actions">

                {featuredProject.live && (
                  <a
                    href={featuredProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-github-action"
                    aria-label={`Open ${featuredProject.title} live demo`}
                  >
                    <ExternalLink size={17} />
                    <span>Live Demo</span>
                    <ArrowUpRight size={16} />
                  </a>
                )}

                {featuredProject.github && (
                  <a
                    href={featuredProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-github-action"
                    aria-label={`View ${featuredProject.title} source code on GitHub`}
                  >
                    <Github size={18} />
                    <span>View Repository</span>
                    <ArrowUpRight size={16} />
                  </a>
                )}

              </div>
            </div>

            {/* ================= HIRESPHERE DASHBOARD PREVIEW ================= */}

            <div
              className="featured-preview"
              aria-hidden="true"
            >
              <div className="preview-terminal">

                {/* Dashboard Header */}

                <div className="preview-terminal-header">

                  <div className="terminal-dots">
                    <span className="dot dot-red" />
                    <span className="dot dot-yellow" />
                    <span className="dot dot-green" />
                  </div>

                  <div className="terminal-title">
                    <FeaturedIcon size={13} />
                    <span>hiresphere-ai-engine</span>
                  </div>

                  <span className="terminal-status">
                    AI Engine Active
                  </span>

                </div>

                {/* Dashboard Content */}

                <div className="preview-terminal-content">

                  {/* Resume Metrics */}

                  <div className="metric-row">

                    <div className="metric-box">
                      <span className="metric-label">
                        Resume Analysis
                      </span>

                      <strong className="metric-val text-cyan">
                        AI Powered
                      </strong>
                    </div>

                    <div className="metric-box">
                      <span className="metric-label">
                        ATS Evaluation
                      </span>

                      <strong className="metric-val text-violet">
                        Smart Scoring
                      </strong>
                    </div>

                  </div>

                  {/* AI Insights */}

                  <div className="ai-insight-box">

                    <div className="insight-header">
                      <Sparkles
                        size={13}
                        className="text-violet"
                      />

                      <span>AI Resume Insights</span>
                    </div>

                    <p>
                      "Analyze your resume, identify matching skills,
                      discover missing competencies, and improve your
                      job application strategy with AI-powered insights."
                    </p>

                  </div>

                  {/* Resume Workflow */}

                  <div className="kanban-mini-columns">

                    <div className="mini-col">
                      <FileText size={17} />

                      <span className="col-title">
                        Resume Upload
                      </span>

                      <div className="col-bar col-bar-todo" />
                    </div>

                    <div className="mini-col">
                      <Target size={17} />

                      <span className="col-title">
                        AI Analysis
                      </span>

                      <div className="col-bar col-bar-prog" />
                    </div>

                    <div className="mini-col">
                      <TrendingUp size={17} />

                      <span className="col-title">
                        Job Matching
                      </span>

                      <div className="col-bar col-bar-done" />
                    </div>

                  </div>

                </div>
              </div>
            </div>

          </TiltCard>
        </motion.div>

        {/* ================= SECONDARY PROJECTS ================= */}

        <div className="projects-secondary-grid">

          {secondaryProjects.map((project, index) => {

            const Icon =
              projectIcons[project.title] || BriefcaseBusiness;

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.12,
                }}
              >
                <TiltCard
                  className="grid-project-card"
                  maxTilt={5}
                >

                  {/* Project Header */}

                  <div className="grid-project-header">

                    <div className="grid-icon-box">
                      <Icon size={22} />
                    </div>

                    <span className="project-category-tag">
                      {project.category}
                    </span>

                  </div>

                  {/* Project Title */}

                  <h3 className="grid-project-title">
                    {project.title}
                  </h3>

                  {/* Project Description */}

                  <p className="grid-project-desc">
                    {project.description}
                  </p>

                  {/* Project Features */}

                  <div className="grid-feature-list">

                    <span className="checklist-heading">
                      Key Features:
                    </span>

                    {project.features.map((feature) => (
                      <div
                        key={feature}
                        className="grid-feature-item"
                      >
                        <CheckCircle2
                          size={15}
                          className="checklist-icon"
                        />

                        <span>{feature}</span>
                      </div>
                    ))}

                  </div>

                  {/* Technologies */}

                  <div className="project-tech-pills">

                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="tech-pill"
                      >
                        {tech}
                      </span>
                    ))}

                  </div>

                  {/* Live Demo and GitHub Buttons */}

                  <div className="project-actions">

                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-github-action"
                        aria-label={`Open ${project.title} live demo`}
                      >
                        <ExternalLink size={17} />
                        <span>Live Demo</span>
                        <ArrowUpRight size={16} />
                      </a>
                    )}

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-github-action"
                        aria-label={`View ${project.title} source code on GitHub`}
                      >
                        <Github size={17} />
                        <span>View Repository</span>
                        <ArrowUpRight size={16} />
                      </a>
                    )}

                  </div>

                </TiltCard>
              </motion.div>
            );
          })}

        </div>

        {/* ================= EXPLORE GITHUB ================= */}

        <motion.div
          className="projects-more-cta"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >

          <p>
            Interested in exploring more of my work and development journey?
          </p>

          <a
            href="https://github.com/Dikshithab"
            target="_blank"
            rel="noopener noreferrer"
            className="explore-github-link"
          >
            <span>Explore all projects on GitHub</span>
            <ArrowUpRight size={16} />
          </a>

        </motion.div>

      </div>
    </section>
  );
}

export default Projects;