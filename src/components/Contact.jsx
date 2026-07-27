import { motion } from "framer-motion";
import { CONTACT } from "../constants";
import { fadeInLeft, viewportOnce } from "../lib/motion";

const Contact = () => {
  return (
    <section id="contact" className="section section--contact">
      <motion.div variants={fadeInLeft} initial="hidden" whileInView="visible" viewport={viewportOnce}>
        <h6 className="section-eyebrow">Contact</h6>
        <h2 className="section-title section-title--tall">Get in touch</h2>
        <div className="contact-info">
          <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
