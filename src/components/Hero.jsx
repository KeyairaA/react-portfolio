import { motion } from "framer-motion";
import heroPhoto from "../assets/aboutka.jpg";
import { HERO_EYEBROW } from "../constants";

const Hero = () => {
  return (
    <section className="hero">
      <motion.div
        className="hero-copy"
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h6 className="hero-eyebrow">{HERO_EYEBROW}</h6>
        <h1 className="hero-title">Keyaira Austin</h1>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#projects">View projects</a>
          <a className="btn btn-secondary" href="#contact">Get in touch</a>
        </div>
      </motion.div>
      <motion.figure
        className="lighten hero-photo"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
      >
        <img src={heroPhoto} alt="Keyaira Austin" />
      </motion.figure>
    </section>
  );
};

export default Hero;
