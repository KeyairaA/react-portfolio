import { motion } from "framer-motion";
import { TECHNOLOGIES } from "../constants";
import { fadeInLeft, viewportOnce } from "../lib/motion";

const Technologies = () => {
  return (
    <section id="technologies" className="section">
      <motion.div variants={fadeInLeft} initial="hidden" whileInView="visible" viewport={viewportOnce}>
        <h6 className="section-eyebrow">Technologies</h6>
        <h2 className="section-title section-title--tall">What I build with</h2>
        <div className="tech-row">
          {TECHNOLOGIES.map((tech) => (
            <span key={tech} className="tag tag-outline tech-tag">{tech}</span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Technologies;
