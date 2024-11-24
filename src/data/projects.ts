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
      LIGHT: "/images/projects/cursortrail.png",
      DARK: "/images/projects/cursortrail.png",
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
    name: "AuraSpace",
    favicon: "/images/projects/logos/auraspace-logo.jpeg",
    imageUrl: ["/images/projects/auraspace.png"],
    description:
      "AuraSpace is a modern portfolio builder designed to showcase your work with creativity and elegance. Featuring a sleek interface and glowing aura-inspired design, it empowers professionals and creatives to craft visually stunning online portfolios effortlessly. AuraSpace is the perfect blend of innovation and simplicity, tailored for tech-savvy users.",
    sourceCodeHref: "https://github.com/AyushKatre05/AuraSpace.git",
    liveWebsiteHref: "https://auraspace.vercel.app",
  },
  {
    name: "Innova",
    favicon: "/images/projects/logos/interview.jpg",
    imageUrl: ["/images/projects/innova.png"],
    description:
      "Innova is an AI-driven interview preparation platform that redefines the way candidates prepare for job opportunities. Combining intelligent algorithms with a professional interface, it provides personalized feedback and insights to help users ace their interviews. Innova is the ultimate tool for anyone looking to elevate their career prospects through advanced technology.",
    sourceCodeHref: "https://github.com/AyushKatre05/Innova.git",
    liveWebsiteHref: "https://innova-ai.vercel.app",
  },
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
    imageUrl: ["/images/projects/doodleAI.png"],
    description:
      "Created a Doodle AI that interpret user drawings and return the identified object or concept. Implement a web interface with a canvas for drawing, connecting it to a backend that processes the doodle and provides responses.",
    sourceCodeHref: "https://github.com/AyushKatre05/Doodle-AI.git",
    liveWebsiteHref: "https://ak-doodle-ai.vercel.app",
  },
  {
    name: "LinkedIn",
    favicon: "/images/projects/logos/linkedin-logo.png",
    imageUrl: ["/images/projects/linkedin.png"],
    description:
      "Built a LinkedIn-inspired web application using Next.js, MongoDB, and Cloudinary. The platform enables users to create professional profiles, connect with others, and share posts with multimedia support. Seamlessly integrates optimized image uploads via Cloudinary for a smooth user experience.",
    sourceCodeHref: "https://github.com/AyushKatre05/LinkedIn.git",
    liveWebsiteHref: "https://linkedin-ak.vercel.app",
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
    favicon: "/images/projects/logos/imagica-logo.jpg",
    imageUrl: ["/images/projects/AiImage.png"],
    description:
      "A tools which automatically generate free images as per your need. It is widely used for any website to generate the images according to thier needs",
    sourceCodeHref: "https://github.com/AyushKatre05/Imagica.git",
    liveWebsiteHref: "https://imagica-ak.vercel.app",
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
];
