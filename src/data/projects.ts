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
    href: "https://funkycursor.ayushkatre.tech",
    tags: ["NextJs", "TypeScript", "Tailwind", "Framer Motion", "Webpack"],
    image: {
      LIGHT: "/images/projects/cursortrail.png",
      DARK: "/images/projects/cursortrail.png",
    },
  },
  {
    index: 2,
    title: "Replix",
    href: "https://replix.ayushkatre.tech",
    tags: ["NextJs", "FastAPI", "LLM", "Python", "TypeScript"],
    image: {
      LIGHT: "/images/projects/replix.png",
      DARK: "/images/projects/replix-dark.png",
    },
  },
  {
    index: 3,
    title: "PixelUI",
    href: "https://pixelui.ayushkatre.tech",
    tags: ["NextJs", "TypeScript", "ShadCN", "MDX", "v0"],
    image: {
      LIGHT: "/images/projects/pixelui.gif",
      DARK: "/images/projects/pixelui.gif",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "Innova",
    favicon: "/images/projects/innova.png",
    imageUrl: ["/images/projects/innova.png"],
    description:
      "Innova is a Interview Preparation Platform that helps students to prepare for interviews by providing them with a platform to practice  mock interviews. It is built using Next.js, PostgreSQL, and ShadCN. It provides a platform for students to practice mock interviews and get feedback from AI",
    sourceCodeHref: "https://github.com/AyushKatre05/Innova.git",
    liveWebsiteHref: "https://innova-ai.vercel.app",
  },
  {
    name: "Weblit",
    favicon: "/images/projects/weblit.png",
    imageUrl: ["/images/projects/weblit.png"],
    description:
      "Weblit is a code editor that allows users to write and run code in the browser. It is built using Next.js, TypeScript, and ShadCN. It provides a platform for users to write and run code in the browser without any setup.",
    sourceCodeHref: "https://github.com/AyushKatre05/Weblit.git",
    liveWebsiteHref: "https://weblit.vercel.app",
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
    name: "Colossus",
    favicon: "/images/projects/logos/sitesynthlogo.png",
    imageUrl: ["/images/projects/colossus.png"],
    description:
      "Colossus is an AI-powered form generator designed to create dynamic, customizable forms with minimal effort. It intelligently builds forms based on user input or prompts, streamlining data collection for surveys, applications, and more. With smart field detection and intuitive UI, Colossus saves time and boosts productivity.",
    sourceCodeHref: "https://github.com/AyushKatre05/Colossus.git",
    liveWebsiteHref: "https://colossus-ai.vercel.app",
  },
  {
    name: "CMS for Social Media",
    favicon: "/images/projects/logos/cmslogo.png",
    imageUrl: ["/images/projects/cms.png"],
    description:
      "AI Driven Content Management System is a project aimed at providing organizations with tools to automatically generate content for their social media posts and gain insights from the posts' performance",
    sourceCodeHref:
      "https://github.com/AyushKatre05/Team-Omega-Hackathon-2024.git",
    liveWebsiteHref: "https://team-omega-hackathon-2024.vercel.app",
  },
  {
    name: "DSA Prep",
    favicon: "/images/projects/logos/mcqlogo.jpeg",
    imageUrl: ["/images/projects/dsaprep.png"],
    description:
      "Compiled and solved company-wise DSA questions from LeetCode, targeting top tech firms such as Amazon, Google, and Microsoft. Covered a wide range of topics including arrays, trees, and dynamic programming.",
    sourceCodeHref:
      "https://github.com/AyushKatre05/DSA-Questions-CompanyWise.git",
    liveWebsiteHref: "https://dsa-companywise.streamlit.app",
  },
];
