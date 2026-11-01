import {
  ArrowUpRight,
  Brain,
  Bot,
  Code2,
  ShieldCheck,
  Lightbulb,
  Rocket,
} from "lucide-react";

import { interestsData } from "../data/portfolioData.js";
import "./Interests.css";

const iconMap = {
  Brain,
  Bot,
  Code2,
  ShieldCheck,
  Lightbulb,
  Rocket,
};

const colorMap = [
  "purple",
  "blue",
  "cyan",
  "green",
  "orange",
  "pink",
];

function Interests() {
  return (
    <section className="interests-section" id="interests">
      <div className="section-container">
        <div className="interests-heading">
          <span className="section-label">BEYOND DEVELOPMENT</span>

          <h2>
            What Drives My <span>Curiosity</span>
          </h2>

          <p>
            Technology is an endless learning journey. Here are the areas
            that inspire me to explore, experiment, and build.
          </p>
        </div>

        <div className="interests-grid">
          {interestsData.map((interest, index) => {
            const Icon = iconMap[interest.icon];

            return (
              <article
                className={`interest-card interest-${colorMap[index % colorMap.length]}`}
                key={interest.title}
              >
                <div className="interest-card-top">
                  <span className="interest-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <ArrowUpRight className="interest-arrow" size={20} />
                </div>

                <div className="interest-icon">
                  {Icon && <Icon size={27} strokeWidth={1.7} />}
                </div>

                <h3>{interest.title}</h3>

                <p>{interest.description}</p>

                <div className="interest-card-line"></div>
              </article>
            );
          })}
        </div>

        <div className="interests-footer">
          <span className="interests-pulse"></span>
          Always curious. Always learning. Always building.
        </div>
      </div>
    </section>
  );
}

export default Interests;