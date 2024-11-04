import ayla from "/public/image/ayla.jpg";
import crefin from "/public/image/crefin.jpg";
import realEstate from "/public/image/real-estate.jpg";
import travel from "/public/image/travel.jpg";

export const projectsData = [
  {
    id: 1,
    name: "ChatterForge",
    description:
      "Developed a real-time chat application using the MERN stack, incorporating features such as multi-cursor support and chat reactions to enhance user interaction and engagement.",
    tools: [
      "Express",
      "MongoDB",
      "Node JS",
      "React",
      "Redux",
      "Socket.IO",
      "JWT",
      "Nodemailer",
    ],
    role: "Backend Developer",
    code: "",
    demo: "https://chatterforge.onrender.com/",
    image: crefin,
  },
  {
    id: 2,
    name: "LogoForge",
    description:
      "Created an interactive platform for designing logos with React.js and Node.js, offering extensive customization options and image uploads for a seamless user experience.",
    tools: ["React", "Node.js", "Express", "MongoDB", "MUI", "CSS"],
    role: "Full Stack Developer",
    code: "",
    demo: "https://logoforge.vercel.app/",
    image: travel, // Use a relevant image for this project
  },
  {
    id: 3,
    name: "EvoIntern",
    description:
      "Built a responsive portfolio website to showcase startup projects and team members using Next.js, effectively highlighting the startup’s achievements and initiatives.",
    tools: ["Next.js", "React", "CSS", "AWS"],
    role: "Full Stack Developer",
    code: "",
    demo: "https://evo-website.vercel.app/",
    image: realEstate, // Use a relevant image for this project
  },
  {
    id: 4,
    name: "Creova - Lightweight Figma Clone",
    description:
      "Developed Creova, a minimalistic Figma-like tool for design and collaboration, utilizing React.js and TypeScript to provide a streamlined and user-friendly design experience.",
    tools: ["React", "TypeScript", "Node.js", "Express", "MongoDB"],
    role: "Full Stack Developer",
    code: "",
    demo: "https://creova.vercel.app/",
    image: ayla, // Use a relevant image for this project
  },
  {
    id: 5,
    name: "Center of Excellence Lab Website",
    description:
      "Led the development of a website for the Center of Excellence lab at Christ University, coordinating with faculty and peers to deliver a functional and visually appealing site that meets user needs.",
    tools: ["HTML", "CSS", "JavaScript", "React"],
    role: "Full Stack Developer",
    code: "",
    demo: "https://coe-e-mobility.vercel.app/",
    image: crefin, // Use a relevant image for this project
  },
];
