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
    title: "Funky Cursor",
    href: "https://funky-cursor-docs.vercel.app",
    tags: ["NextJs", "TypeScript", "Tailwind", "Framer Motion", "Webpack"],
    image: {
      LIGHT: "/images/projects/Npm.webp",
      DARK: "/images/projects/Npm.webp",
    },
  },
  {
    index: 2,
    title: "Ecommerce App",
    href: "https://full-stack-ecommerce-with-admin-dashboard-ak.vercel.app",
    tags: ["NextJs", "Javascript", "MongoDB", "Redux", "Firebase"],
    image: {
      LIGHT: "/images/projects/ecommercelight.jpg",
      DARK: "/images/projects/ecommerce.jpg",
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
    name: "NLP QuizBot",
    favicon: "/images/projects/logos/mcqlogo.jpeg",
    imageUrl: ["/images/projects/quizbot.png"],
    description:
      "This is a MCQ generator application using Next.js with Framer Motion for a modern, animated frontend. The backend, built with Flask, integrates Natural Language Processing to dynamically generate questions. This project effectively combines web development with advanced ML techniques, creating an interactive and intelligent application.",
    sourceCodeHref: "https://github.com/AyushKatre05/NLP-QuizBot-Frontend.git",
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
  {
    name: "Imagica",
    favicon: "/images/projects/logos/interview.png",
    imageUrl: ["/images/projects/AiImage.png"],
    description:
      "A tools which automatically generate free images as per your need. It is widely used for any website to generate the images according to thier needs",
    sourceCodeHref: "https://github.com/AyushKatre05/Imagica.git",
    liveWebsiteHref: "https://imagica-ak.vercel.app",
  },
];
