import { SiExpress, SiNextdotjs } from "react-icons/si";
import { FramerMotionIcon, ReactRouterDomIcon } from "@/components/icons";
import { type SkillsShowcaseProps } from "@/components/skills/skills-showcase";

// Languages
import HtmlSvg from "@/public/icons/html.svg";
import CsssSvg from "@/public/icons/css.svg";
import SassSvg from "@/public/icons/sass.svg";
import JavascriptSvg from "@/public/icons/javascript.svg";
import TypescriptSvg from "@/public/icons/typescript.svg";
import PythonSvg from "@/public/icons/python.svg";

// Libraries
import ReactjsSvg from "@/public/icons/reactjs.svg";

import ReduxSvg from "@/public/icons/redux.svg";
import TailwindcssSvg from "@/public/icons/tailwindcss.svg";
import MuiSvg from "@/public/icons/mui.svg";
import ViteSvg from "@/public/icons/vite.svg";
import ShadcnSvg from "@/public/icons/shadcnui.svg";
import Jupyter from "@/public/icons/jupyter-svgrepo-com.svg";

// Backend
import NodejsSvg from "@/public/icons/nodejs.svg";
import Flask from "@/public/icons/flask-svgrepo-com.svg"
import FastApi from "@/public/icons/fastapi-svgrepo-com.svg"

// Database and ORMS
import MongoDBSvg from "@/public/icons/mongodb.svg";
import PostgressSvg from "@/public/icons/postgresql.svg";
import MySQL from "@/public/icons/mysql-svgrepo-com.svg"
import Firebase from "@/public/icons/firebase-svgrepo-com.svg"
import Cloudinary from "@/public/icons/cloudinary-svgrepo-com.svg"
import Prisma from "@/public/icons/prisma.svg"
import Mongoose from "@/public/icons/mongoose-svgrepo-com.svg"

// Tools and Tech
import GitSvg from "@/public/icons/git.svg";
import Redis from "@/public/icons/redis-svgrepo-com.svg";
import DockerSvg from "@/public/icons/docker.svg";
import Jenkins from "@/public/icons/jenkins-svgrepo-com.svg";
import Kubernetes from "@/public/icons/kubernetes-svgrepo-com.svg";
import YAML from "@/public/icons/light-yaml-svgrepo-com.svg";
import Linux from "@/public/icons/linux-svgrepo-com.svg";
import PostmanSvg from "@/public/icons/postman.svg";
import NPM from "@/public/icons/npm-svgrepo-com.svg";
import GitHub from "@/public/icons/github.svg";
import Figma from "@/public/icons/figma-svgrepo-com.svg";
import Canva from "@/public/icons/canva-svgrepo-com.svg";

// Deployment
import Netlify from "@/public/icons/netlify-svgrepo-com.svg"
import Vercel from "@/public/icons/vercel-icon-svgrepo-com.svg"
import Render from "@/public/icons/return-svgrepo-com.svg"

export const SKILLS_DATA: SkillsShowcaseProps["skills"] = [
  {
    sectionName: "Frontend",
    skills: [
      {
        name: "Nextjs",
        icon: SiNextdotjs,
      },
      {
        name: "Reactjs",
        icon: ReactjsSvg,
      },
      {
        name: "Javascript",
        icon: JavascriptSvg,
      },
      {
        name: "Typescript",
        icon: TypescriptSvg,
      },
      {
        name: "Python",
        icon: PythonSvg,
      },
      {
        name: "HTML",
        icon: HtmlSvg,
      },
      {
        name: "CSS",
        icon: CsssSvg,
      },
      {
        name: "SASS",
        icon: SassSvg,
      },
      {
        name: "React Router Dom",
        icon: ReactRouterDomIcon,
      },
      {
        name: "Redux",
        icon: ReduxSvg,
      },
      {
        name: "Tailwindcss",
        icon: TailwindcssSvg,
      },
      {
        name: "MUI",
        icon: MuiSvg,
      },
      {
        name: "Framer motion",
        icon: FramerMotionIcon,
      },
      {
        name: "Vite",
        icon: ViteSvg,
      },
      {
        name: "ShadCN",
        icon: ShadcnSvg,
      },
    ],
  },
  {
    sectionName: "Backend",
    skills: [
      {
        name: "Nodejs",
        icon: NodejsSvg,
      },
      {
        name: "Express",
        icon: SiExpress,
      },
      {
        name: "Flask",
        icon: Flask,
      },
      {
        name: "FastApi",
        icon: FastApi,
      },
    ],
  },
  {
    sectionName: "Databases and ORMs",
    skills: [
      {
        name: "MongoDB",
        icon: MongoDBSvg,
      },
      {
        name: "Postgress",
        icon: PostgressSvg,
      },
      {
        name: "MySQL",
        icon: MySQL,
      },
      {
        name: "Firebase",
        icon: Firebase,
      },
      {
        name: "Cloudinary",
        icon: Cloudinary,
      },
      {
        name: "Prisma",
        icon: Prisma,
      },
      {
        name: "Mongoose",
        icon: Mongoose,
      },
    ],
  },
  {
    sectionName: "Tools and Technologies",
    skills: [
      {
        name: "Git",
        icon: GitSvg,
      },
      {
        name: "GitHub",
        icon: GitHub,
      },
      {
        name: "Redis",
        icon: Redis,
      },
      {
        name: "Docker",
        icon: DockerSvg,
      },

      {
        name: "Kubernetes",
        icon: Kubernetes,
      },
      {
        name: "Jenkins",
        icon: Jenkins,
      },
      {
        name: "Linux",
        icon: Linux,
      },
      {
        name: "YAML",
        icon: YAML,
      },
      {
        name: "Postman",
        icon: PostmanSvg,
      },
      {
        name: "NPM",
        icon: NPM,
      },
      {
        name: "Figma",
        icon: Figma,
      },
      {
        name: "Canva",
        icon: Canva,
      },
      {
        name: "Jupyter",
        icon: Jupyter,
      },
    ],
  },
  {
    sectionName: "Deployments",
    skills: [
      {
        name: "Vercel",
        icon: Vercel,
      },
      {
        name: "Render",
        icon: Render,
      },
      {
        name: "Netlify",
        icon: Netlify,
      },
    ],
  },
];
