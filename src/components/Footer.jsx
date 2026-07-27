import { SOCIALS } from "../constants";

const Footer = () => {
  return (
    <footer className="site-footer">
      <span className="text-muted footer-text">© {new Date().getFullYear()} Keyaira Austin</span>
      <div className="site-footer-links">
        <a href={SOCIALS.linkedin} className="footer-text">LinkedIn</a>
        <a href={SOCIALS.github} className="footer-text">GitHub</a>
      </div>
    </footer>
  );
};

export default Footer;
