import { motion } from "framer-motion";
import { ABOUT_TEXT } from "../constants";
import { fadeInLeft, viewportOnce } from "../lib/motion";

const About = () => {
  return (
    <section id="about" className="section">
      <motion.div variants={fadeInLeft} initial="hidden" whileInView="visible" viewport={viewportOnce}>
        <h6 className="section-eyebrow">About</h6>
        <h2 className="section-title max-20ch">From the sales floor to the codebase</h2>
        <p className="text-muted about-copy">{ABOUT_TEXT}</p>
      </motion.div>
    </section>
  );
};

export default About;
