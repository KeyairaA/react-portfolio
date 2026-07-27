import { motion } from "framer-motion";
import { EXPERIENCES } from "../constants";
import { fadeInLeft, viewportOnce } from "../lib/motion";

const Experience = () => {
  return (
    <section id="experience" className="section">
      <motion.div variants={fadeInLeft} initial="hidden" whileInView="visible" viewport={viewportOnce}>
        <h6 className="section-eyebrow">Experience</h6>
        <h2 className="section-title section-title--tallest">{"Where I've worked"}</h2>
      </motion.div>
      {EXPERIENCES.map((exp) => (
        <motion.div
          className="entry-grid"
          key={exp.company}
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <div className="card-meta entry-date">{exp.year}</div>
          <div>
            <div className="card-title entry-role">
              {exp.role} · <span className="entry-company">{exp.company}</span>
            </div>
            <p className={`text-muted entry-desc${exp.technologies.length ? " entry-desc--tagged" : ""}`}>
              {exp.description}
            </p>
            {exp.technologies.length > 0 && (
              <div className="entry-tags">
                {exp.technologies.map((tech) => (
                  <span key={tech} className="tag tag-accent-2">{tech}</span>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      ))}
    </section>
  );
};

export default Experience;
