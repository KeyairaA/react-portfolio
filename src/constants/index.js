import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am currently an IT specialist aiming to transition into a software engineering role. With three years of hands-on experience as an IT specialist, I\’ve cultivated a deep understanding of technology and problem-solving. Now, I\’m channeling that expertise into my next exciting challenge: becoming a software engineer. Through rigorous self-improvement and a passion for innovation, I’m ready to leverage my IT background to create impactful software solutions.`;

export const ABOUT_TEXT = `I am an IT specialist aiming to transition into a software engineering role with three years of experience in the field. I graduated in 2021 with a Bachelor's degree in Mathematics and Computer Science, which provided me with a strong foundation in analytical thinking, problem-solving, and technical skills.`;

export const EXPERIENCES = [
  {
    year: "2021 - Present",
    role: "Technology Specialist I",
    company: "Gibsons Restuarant Group",
    description: `I am a level 1 IT specialist that provides comprehensive IT help desk support, troubleshooting and resolving technical issues efficiently to the users within the organization.`,
    technologies: ["Active Directory", "Google Workspace", "Google Cloud"],
  },
  // {
  //   year: "2022 - 2023",
  //   role: "Frontend Developer",
  //   company: "Adobe",
  //   description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
  //   technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  // },
  // {
  //   year: "2021 - 2022",
  //   role: "Full Stack Developer",
  //   company: "Facebook",
  //   description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
  //   technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  // },
  // {
  //   year: "2020 - 2021",
  //   role: "Software Engineer",
  //   company: "Paypal",
  //   description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
  //   technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  // },
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
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+1 630 835 2041 ",
  email: "keyaira.austin@gmail.com",
};
