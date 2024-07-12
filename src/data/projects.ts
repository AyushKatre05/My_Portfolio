import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "Interview Preperation App",
    href: "/projects",
    tags: ["NextJs", "JavaScript", "ShadCN", "Clerk", "Postgresql"],
    image: {
      LIGHT: "images/projects/interview.webp",
      DARK: "images/projects/interview.webp",
    },
  },
  {
    index: 1,
    title: "AI Content Generator",
    href: "/projects",
    tags: ["NextJs", "TypeScript", "Drizzle", "Postgresql", "ShadCN"],
    image: {
      LIGHT: "/images/projects/contentgenerator.png",
      DARK: "/images/projects/contentgenerator.png",
    },
  },
  {
    index: 2,
    title: "Chat App",
    href: "/projects",
    tags: ["NextJs", "TypeScript", "Redis", "Cloudinary"],
    image: {
      LIGHT: "/images/projects/chat.png",
      DARK: "/images/projects/chat.png",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "Coursera Course Recommendor",
    favicon: "/images/projects/logos/a.ico",
    imageUrl: [
      "/images/projects/Coursera.png",
      "/images/projects/Coursera Light.png",
    ],
    description:
      "I developed a Coursera course recommender using Python, leveraging machine learning algorithms to analyze user preferences and suggest relevant courses. This tool enhances the learning experience by providing personalized course recommendations based on individual interests and past behavior",
    sourceCodeHref:
      "https://github.com/AyushKatre05/Course-Recommendation-For-Coursera.git",
  },
  {
    name: "Expense Tracker",
    favicon: "/images/projects/logos/b.ico",
    imageUrl: ["/images/projects/Expense tracker.png"],
    description:
      "I created an expense tracker using Python that helps users monitor and manage their spending. This tool features easy data input, categorization of expenses, and detailed reports, enabling users to maintain better control over their finances.",
    sourceCodeHref: "https://github.com/AyushKatre05/Expense-Tracker.git",
  },
  {
    name: "WhatsApp Chat Analysis",
    favicon: "/images/projects/logos/e.ico",
    imageUrl: ["/images/projects/whatsapp-analyzer.png"],
    description:
      "I created a WhatsApp chat analyzer using Python to help users gain insights from their chat history. This tool processes and visualizes chat data, providing statistics on message frequency, active times, and user participation. It also identifies key trends and patterns in conversations, making it easier to understand communication dynamics within the chat.",
    sourceCodeHref:
      "https://github.com/AyushKatre05/Whatsapp-Chat-Analysis.git",
  },
  {
    name: "Snake Game",
    favicon: "/favicon.ico",
    imageUrl: ["/images/projects/snake-game.webp"],
    description:
      "I developed a Snake game using React and TypeScript, providing a modern twist on the classic game. The project features smooth animations, responsive controls, and an intuitive user interface. Leveraging the strengths of React for efficient rendering and TypeScript for type safety, this game offers an engaging and seamless user experience.",
    sourceCodeHref: "https://github.com/AyushKatre05/Snake-Game.git",
    liveWebsiteHref: "https://snakegamebyak.netlify.app/",
  },
  {
    name: "Language Translator",
    favicon: "/images/projects/logos/c.ico",
    imageUrl: ["/images/projects/translator.jpg"],
    description:
      "I created a language translator using JavaScript, designed to provide quick and accurate translations between multiple languages. The tool utilizes APIs to fetch translations and offers a user-friendly interface for easy text input and output. This project demonstrates the power of JavaScript in building interactive and functional web applications.",
    sourceCodeHref: "https://github.com/AyushKatre05/Language-Translator.git",
    liveWebsiteHref: "https://languageappbyak.netlify.app/",
  },
  {
    name: "Speech Recognition TODO app",
    favicon: "/images/projects/logos/d.ico",
    imageUrl: ["/images/projects/todo.jpg"],
    description:
      "I developed a speech recognition to-do list application using JavaScript, allowing users to manage their tasks hands-free. The app leverages modern web APIs to capture and interpret voice commands, enabling users to add, complete, and delete tasks with ease. This project showcases the integration of speech recognition technology to enhance productivity and user experience.",
    sourceCodeHref:
      "https://github.com/AyushKatre05/Speech-Recognition-Todo.git",
    liveWebsiteHref: "https://todoappbyak.netlify.app/",
  },
];
