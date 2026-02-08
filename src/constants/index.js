import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";

export const HERO_CONTENT = `I am currently an sales specialist aiming to transition into a software engineering role. I currently have three years of hands-on experience as an IT specialist, I\’ve cultivated a deep understanding of technology and problem-solving. Now, I\’m channeling that expertise into my next exciting challenge: becoming a software engineer. Through rigorous self-improvement and a passion for innovation, I’m ready to leverage my IT background to create impactful software solutions.`;

export const ABOUT_TEXT = `I am an sales specialist aiming to transition into a software engineering role with three years of experience in the field. I graduated in 2021 with a Bachelor's degree in Mathematics and Computer Science, which provided me with a strong foundation in analytical thinking, problem-solving, and technical skills.`;

export const EXPERIENCES = [
  {
    year: "2025 - Present",
    role: "Sales Specialist",
    company: "Apple",
    description: `I am a customer focused Sales Specialist that delivers exceptional retail experiences in a fast paced environment using my extensive knowledge of Apple's products and ecosystem.`,
    technologies:[]
  },
  {
    year: "2021 - 2025",
    role: "Technology Specialist I",
    company: "Gibsons Restaurant Group",
    description: `I was a level 1 IT specialist that provided comprehensive IT help desk support, troubleshooting and resolving technical issues efficiently to the users within the organization.`,
    technologies: ["Active Directory", "Google Workspace", "Google Cloud"],
  },
];

export const PROJECTS = [
  {
    title: "File Sorter",
    image: project1,
    description:
      "A python script that automatically sorts files based on their type.",
    technologies: ["Python"],
  },
  {
    title: "WNBA Stats Analyzer",
    image: project2,
    description:
      "A python script that scrapes data from wnba.com/stats and analyses it.",
    technologies: ["Python"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "Tailwind CSS", "React"],
  },
  // {
  //   title: "Blogging Platform",
  //   image: project4,
  //   description:
  //     "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
  //   technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  // },
];

export const CONTACT = {
  address: "Bolingbrook, IL ",
  phoneNo: "+1 630 835 2041 ",
  email: "keyaira.austin@gmail.com",
};
