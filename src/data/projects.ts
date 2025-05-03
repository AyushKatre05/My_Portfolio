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
    title: "Innova",
    href: "https://innova-ai.vercel.app",
    tags: ["NextJs", "PostgreSQL", "ShadCN", "Drizzle-ORM", "TailwindCSS"],
    image: {
      LIGHT: "/images/projects/innova-light.png",
      DARK: "/images/projects/innova.png",
    },
  },
  {
    index: 3,
    title: "Weblit",
    href: "https://weblit.vercel.app",
    tags: ["NextJs", "CodeMirror", "NextAuth", "MongoDB", "TailwindCSS"],
    image: {
      LIGHT: "/images/projects/weblit-light.png",
      DARK: "/images/projects/weblit-dark.png",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
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
    name: "DSA Prep",
    favicon: "/images/projects/logos/mcqlogo.jpeg",
    imageUrl: ["/images/projects/dsaprep.png"],
    description:
      "Compiled and solved company-wise DSA questions from LeetCode, targeting top tech firms such as Amazon, Google, and Microsoft. Covered a wide range of topics including arrays, trees, and dynamic programming. Each problem includes optimized solutions and explanations. Designed to build interview-level coding proficiency and confidence.",
    sourceCodeHref: "https://github.com/AyushKatre05/DSA-Questions-CompanyWise.git",
    liveWebsiteHref: "https://dsa-companywise.streamlit.app",
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
];
