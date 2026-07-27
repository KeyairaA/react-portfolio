import { motion } from "framer-motion";
import { PROJECTS } from "../constants";
import { fadeInLeft, viewportOnce } from "../lib/motion";

const Projects = () => {
  return (
    <section id="projects" className="section">
      <motion.div variants={fadeInLeft} initial="hidden" whileInView="visible" viewport={viewportOnce}>
        <h6 className="section-eyebrow">Projects</h6>
        <h2 className="section-title section-title--tallest">{"What I've been building"}</h2>
      </motion.div>
      <div className="projects-grid">
        {PROJECTS.map((project) => (
          <motion.div
            className="card elev-md project-card"
            key={project.title}
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <div className="card-kicker">{project.kicker}</div>
            <div className="card-title project-title">{project.title}</div>
            <p className="card-body project-body">{project.description}</p>
            <div className="card-meta project-tags">
              {project.technologies.map((tech) => (
                <span key={tech} className="tag tag-accent">{tech}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
