import { SOCIALS } from "../constants";

const Navbar = () => {
  return (
    <nav className="nav site-nav">
      <a href="#" className="nav-brand">KA</a>
      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <a href={SOCIALS.linkedin} className="nav-social">LinkedIn</a>
        <a href={SOCIALS.github}>GitHub</a>
      </div>
    </nav>
  );
};

export default Navbar;
