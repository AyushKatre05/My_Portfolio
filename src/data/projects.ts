/* eslint-disable */
import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "Excalidraw",
    href: "https://excalidraw-ak.vercel.app",
    tags: ["NextJs", "TypeScript", "ShadCN", "Convex", "Kinde"],
    image: {
      LIGHT: "images/projects/drawlight.png",
      DARK: "images/projects/draw.jpg",
    },
  },
  {
    index: 1,
    title: "Ecommerce App",
    href: "https://full-stack-ecommerce-with-admin-dashboard-ak.vercel.app",
    tags: ["NextJs", "Javascript", "MongoDB", "Redux", "Firebase"],
    image: {
      LIGHT: "/images/projects/ecommercelight.jpg",
      DARK: "/images/projects/ecommerce.jpg",
    },
  },
  {
    index: 2,
    title: "Funky Cursor",
    href: "https://funky-cursor-docs.vercel.app",
    tags: ["NextJs", "TypeScript", "Tailwind", "Framer Motion"],
    image: {
      LIGHT: "/images/projects/chatlight.jpg",
      DARK: "/images/projects/chat.png",
    },
  },
  {
    index: 2,
    title: "Chat App",
    href: "https://chat-application-ak.vercel.app",
    tags: ["NextJs", "TypeScript", "Redis", "Cloudinary", "Framer Motion"],
    image: {
      LIGHT: "/images/projects/chatlight.jpg",
      DARK: "/images/projects/chat.png",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "SiteSynth - AI game builder",
    favicon: "/images/projects/logos/sitesynthlogo.png",
    imageUrl: ["/images/projects/sitesynth.png"],
    description:
      "SiteSynth is an AI-powered game development platform that enables users to build, preview, and modify games in real time. With live previews, downloadable code, and in-preview customization, SiteSynth streamlines the creation of interactive games from concept to completion.",
    sourceCodeHref: "https://github.com/AyushKatre05/SiteSynth-AI.git",
    liveWebsiteHref: "https://sitesynth-ai.onrender.com",
  },
  {
    name: "Doodle AI",
    favicon: "/images/projects/logos/doodle.png",
    imageUrl: ["/images/projects/doodleAI.avif"],
    description:
      "Created a Doodle AI that interpret user drawings and return the identified object or concept. Implement a web interface with a canvas for drawing, connecting it to a backend that processes the doodle and provides responses.",
    sourceCodeHref: "https://github.com/AyushKatre05/Doodle-AI.git",
    liveWebsiteHref: "https://ak-doodle-ai.vercel.app",
  },
  {
    name: "",
    favicon: "/images/projects/logos/cursor.jpeg",
    imageUrl: ["/images/projects/Npm.webp"],
    description:
      "I developed the funky cursor npm package using Node.js and TypeScript, leveraging TypeScript's type safety to create customizable cursor trail effects. The package includes dynamic trail options like particles, sparkles, and glowing lines, ensuring smooth and visually engaging user interactions.",
    sourceCodeHref: "https://github.com/AyushKatre05/Funky-Cursor-Docs.git",
    liveWebsiteHref: "",
  },
  {
    name: "Funky Cursor",
    favicon: "/images/projects/logos/cursor.jpeg",
    imageUrl: ["/images/projects/Npm.webp"],
    description:
      "I developed the funky cursor npm package using Node.js and TypeScript, leveraging TypeScript's type safety to create customizable cursor trail effects. The package includes dynamic trail options like particles, sparkles, and glowing lines, ensuring smooth and visually engaging user interactions.",
    sourceCodeHref: "https://github.com/AyushKatre05/Funky-Cursor-Docs.git",
    liveWebsiteHref: "https://funky-cursor-docs.vercel.app",
  },
  {
    name: "WhatsApp Chat Analyzer",
    favicon: "/images/projects/logos/chat.png",
    imageUrl: ["/images/projects/whatsapp.png"],
    description:
      "The WhatsApp chat analyzer was developed using Python, leveraging libraries such as Pandas for data manipulation and Matplotlib for visualization. The tool processes exported WhatsApp chat logs, extracting key metrics such as message frequency, active times, and word usage. Natural Language Processing (NLP) techniques are employed to analyze sentiment and identify common themes, providing insightful summaries and visual representations of chat data.",
    sourceCodeHref: "https://github.com/AyushKatre05/Whatsapp-Chat-Analysis.git",
    liveWebsiteHref: "https://whatsapp-chat-analysis-ak.streamlit.app",
  },
  {
    name: "ML MCQ Generator",
    favicon: "/images/projects/logos/mcqlogo.jpeg",
    imageUrl: ["/images/projects/mcq.jpg"],
    description:
      "This is a MCQ generator application using Next.js with Framer Motion for a modern, animated frontend. The backend, built with Flask, integrates machine learning to dynamically generate questions. This project effectively combines web development with advanced ML techniques, creating an interactive and intelligent application.",
    sourceCodeHref: "https://github.com/AyushKatre05/MCQ-ML-Frontend.git",
    liveWebsiteHref: "https://mcq-ml-app-ayush.vercel.app",
  },
  {
    name: "CMS for Social Media",
    favicon: "/images/projects/logos/cmslogo.png",
    imageUrl: ["/images/projects/cms.png"],
    description:
      "AI Driven Content Management System is a project aimed at providing organizations with tools to automatically generate content for their social media posts and gain insights from the posts' performance. It simplifies content creation and enables data-driven decision-making by Content Generation and Insights",
    sourceCodeHref: "https://github.com/AyushKatre05/Team-Omega-Hackathon-2024.git",
    liveWebsiteHref: "https://team-omega-hackathon-2024.vercel.app",
  },
];
