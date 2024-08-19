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
    name: "Form Builder Using AI",
    favicon: "/images/projects/logos/formbuilder.png",
    imageUrl: ["/images/projects/formbuilder.jpg"],
    description:
      "Form builder was developed using Next.js for a modern, server-side rendered frontend, and Clerk for secure user authentication and management. NeonDB was utilized for scalable and flexible database management, handling form data and user interactions efficiently. ShadCN was integrated to enhance the user interface with sleek, customizable components. The app leverages AI to dynamically generate and customize forms based on user inputs and requirements, providing an intuitive and adaptive form-building experience.",
    sourceCodeHref: "https://github.com/AyushKatre05/Form-Maker.git",
    liveWebsiteHref: "https://google-form-clone-builder.vercel.app",
  },
  {
    name: "Interview Preperation App",
    favicon: "/images/projects/logos/interview.png",
    imageUrl: ["/images/projects/interview.jpeg"],
    description:
      "The AI-driven interview preparation app was developed using Next.js for a robust and scalable frontend, with Drizzle ORM and PostgreSQL handling the backend data management. Drizzle ORM simplifies database interactions and integrates seamlessly with PostgreSQL to manage user data and interview content. The app leverages AI to generate personalized interview questions and provide feedback, enhancing the preparation process.",
    sourceCodeHref:
      "https://github.com/AyushKatre05/Interview-Preperation-App.git",
    liveWebsiteHref: "https://interview-preperation-app.vercel.app",
  },
  {
    name: "LinkedIn Clone",
    favicon: "/images/projects/logos/linkedin.png",
    imageUrl: ["/images/projects/linkedin.jpg"],
    description:
      "The LinkedIn-style application was built using JavaScript with Next.js for a modern and performant server-side rendering experience. MongoDB was used for scalable data storage, handling user profiles, connections, and posts. The application features user authentication, profile management, and a dynamic feed of posts and updates. Next.js's API routes and MongoDB flexible schema enabled efficient data handling and real-time updates.",
    sourceCodeHref: "https://github.com/AyushKatre05/LinkedIn.git",
    liveWebsiteHref: "https://linked-in-ak.vercel.app",
  },
  {
    name: "WhatsApp Chat Analyzer",
    favicon: "/images/projects/logos/chat.png",
    imageUrl: ["/images/projects/whatsapp.png"],
    description:
      "The WhatsApp chat analyzer was developed using Python, leveraging libraries such as Pandas for data manipulation and Matplotlib for visualization. The tool processes exported WhatsApp chat logs, extracting key metrics such as message frequency, active times, and word usage. Natural Language Processing (NLP) techniques are employed to analyze sentiment and identify common themes, providing insightful summaries and visual representations of chat data.",
    sourceCodeHref:
      "https://github.com/AyushKatre05/Whatsapp-Chat-Analysis.git",
    liveWebsiteHref: "https://whatsapp-chat-analysis-ak.streamlit.app",
  },
  {
    name: "Snake Game",
    favicon: "/images/projects/logos/snake.png",
    imageUrl: ["/images/projects/snakegame.png"],
    description:
      "The Snake game was developed using React, utilizing its component-based structure to manage game state and rendering. The game logic, including snake movement and collision detection, is handled with React hooks for a smooth and responsive experience. User inputs are captured via event handlers, and the game features dynamic updates and real-time interactions to create an engaging and nostalgic gameplay experience.",
    sourceCodeHref: "https://github.com/AyushKatre05/Snake-Game.git",
    liveWebsiteHref: "https://snakegamebyak.netlify.app",
  },
  {
    name: "AI MCQ Generator",
    favicon: "/images/projects/logos/mcqlogo.jpeg",
    imageUrl: ["/images/projects/mcq.jpg"],
    description:
      "This is a MCQ generator application using Next.js with Framer Motion for a modern, animated frontend. The backend, built with Flask, integrates machine learning to dynamically generate questions. This project effectively combines web development with advanced ML techniques, creating an interactive and intelligent application.",
    sourceCodeHref: "https://github.com/AyushKatre05/MCQ-ML-Frontend.git",
    liveWebsiteHref: "https://mcq-ml-app-ayush.vercel.app",
  },
];
