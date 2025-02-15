import Foonda from "../assets/foonda.webp";
import Certman from "../assets/certman.webp";
import BlackAndWhite from "../assets/blacknwhite.webp";

export type Project = {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  technologies: string[];
  liveUrl?: string;
  sourceCodeUrl?: string;
  date: string;
  role: string;
  tags?: string[];
};

export const liveProjects: Project[] = [
  {
    id: "1",
    title: "Certman",
    description:
      "A tool to automate SSL certificate issuance using the ZeroSSL ACME API. Provides a user-friendly interface for generating certificates and supports HTTP-01 and DNS-based challenges.",
    technologies: ["Next.js", "TypeScript", "acme-client"],
    liveUrl: "https://certman.ayamash.tech",
    sourceCodeUrl: "https://github.com/aya-mash/certman",
    imageUrl: Certman,
    date: "Jan 2025",
    role: "Full Stack Developer",
    tags: ["DevOps", "Security"],
  },
  {
    id: "2",
    title: "Foonda",
    description:
      "An innovative platform to help South Africans explore educational opportunities, bursaries, and career paths. Built with Next.js, TypeScript, Prisma, Tailwind, and Gemini AI.",
    technologies: ["Next.js", "Prisma", "Tailwind", "Gemini AI"],
    liveUrl: "https://foonda.ayamash.tech",
    sourceCodeUrl: "https://github.com/aya-mash/foonda",
    imageUrl: Foonda,
    date: "Dec 2024",
    role: "Full Stack Developer",
    tags: ["Education", "AI"],
  },
  {
    id: "3",
    title: "Black & White",
    description:
      "An online music collaboration platform connecting independent music producers, listeners, and contributors. Managed deployment, customization, and server administration for the PHP-based web version and Xamarin-based Android app.",
    technologies: ["PHP", "Xamarin", "Server Administration"],
    liveUrl: "https://blacknwhite6.com",
    sourceCodeUrl: "https://github.com/aya-mash/blacknwhite6",
    imageUrl: BlackAndWhite,
    date: "Jul 2020",
    role: "Webmaster / Server Administrator",
    tags: ["Music", "Collaboration"],
  },
];

export const otherProjects: Project[] = [
  {
    id: "4",
    title: "Vendizee",
    description:
      "A shoppable video platform built with Fluxbuilder (Flutter) to uplift informal vendors in South African townships. Developed for the FNB App of the Year Hackathon 2024.",
    technologies: ["Flutter", "Fluxbuilder"],
    sourceCodeUrl: "https://github.com/aya-mash/vendizee",
    date: "Oct 2024",
    role: "Full Stack Developer",
    tags: ["E-commerce", "Hackathon"],
  },
  {
    id: "5",
    title: "AgriLot",
    description:
      "An IoT project for managing farm appliances and monitoring conditions. Built with MQTT and a React frontend.",
    technologies: ["React", "MQTT", "IoT"],
    sourceCodeUrl: "https://github.com/aya-mash/agrilot",
    date: "Aug 2023",
    role: "IoT Developer",
    tags: ["IoT", "Agriculture"],
  },
  {
    id: "6",
    title: "Chuck Norris Jokes",
    description:
      "A mini project to explore server-side GraphQL. Built a backend with Apollo Server fetching data from the Chuck Norris Jokes API and consumed it using Apollo Client on the frontend.",
    technologies: ["React", "GraphQL", "Apollo Server", "Apollo Client"],
    sourceCodeUrl: "https://github.com/aya-mash/chuck-norris-frontend",
    date: "Aug 2021",
    role: "Full Stack Developer",
    tags: ["GraphQL", "API Integration"],
  },
  {
    id: "7",
    title: "E-Pharmacy Delivery System",
    description:
      "A capstone project for an e-pharmacy platform. Developed web and mobile frontends with React and React Native, integrated with a team-built API, and designed the database for scalability.",
    technologies: ["Java", "React", "React Native", "Spring Boot", "MySQL"],
    sourceCodeUrl: "https://github.com/aya-mash/ePharmacyDeliverySystem",
    date: "Feb 2020",
    role: "Full Stack Developer",
    tags: ["E-commerce", "Healthcare"],
  },
  {
    id: "8",
    title: "FindaDoctor",
    description:
      "An intermediate project applying SDLC and Design Thinking methodologies. Designed user-friendly UI/UX and developed a comprehensive System Requirements Specification (SRS) document. Won the MTN ICT Challenge 2019.",
    technologies: ["UI/UX Design", "SDLC", "Design Thinking"],
    date: "Jun 2019",
    sourceCodeUrl: "https://github.com/aya-mash/findadoctor",
    role: "UI/UX Designer & Developer",
    tags: ["Healthcare", "Booking System"],
  },
  {
    id: "9",
    title: "Unimoola Varsity Market",
    description:
      "An e-commerce platform for campus vendors to trade online. Designed, developed, and published the solution to enhance outreach and impact across university campuses.",
    technologies: ["E-commerce", "UI/UX Design"],
    date: "Feb 2019",
    role: "Full Stack Developer",
    sourceCodeUrl: "https://github.com/aya-mash/UniMoola",
    tags: ["E-commerce", "Education"],
  },
];
