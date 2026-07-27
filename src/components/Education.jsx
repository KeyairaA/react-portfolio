import { motion } from "framer-motion";
import { EDUCATION } from "../constants";
import { fadeInLeft, viewportOnce } from "../lib/motion";

const Education = () => {
  return (
    <section id="education" className="section">
      <motion.div variants={fadeInLeft} initial="hidden" whileInView="visible" viewport={viewportOnce}>
        <h6 className="section-eyebrow">Education</h6>
        <h2 className="section-title section-title--tallest">Where I studied</h2>
      </motion.div>
      <motion.div
        className="entry-grid"
        variants={fadeInLeft}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <div className="card-meta entry-date entry-date--right">{EDUCATION.year}</div>
        <div>
          <div className="card-title entry-role">{EDUCATION.degree}</div>
          <p className="text-muted entry-desc">{EDUCATION.school}</p>
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
