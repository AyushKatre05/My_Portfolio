import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "@/components/projects/project-card";
import { PROJECTS_CARD } from "@/data/projects";
import { siteMetadata } from "@/data/siteMetaData.mjs";

// FadeUp animation component
const FadeUp = ({
  children,
  duration = 0.6,
  delay = 0,
}: {
  children: React.ReactNode;
  duration?: number;
  delay?: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default function Projects() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50 px-4 py-16 dark:from-black dark:to-gray-900">
      <div className="mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="animate-fade-in mb-16 text-center">
          <FadeUp>
            <h1 className="mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-5xl font-bold text-transparent dark:from-purple-400 dark:to-pink-400 md:text-7xl">
              Projects
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-slate-600 dark:text-slate-300">
              Some of the projects I&apos;d like to share
            </p>
            <div className="mx-auto mt-8 h-1 w-24 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></div>
          </FadeUp>
        </div>

        {/* Projects Grid */}
        <FadeUp delay={0.4}>
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 lg:grid-cols-2">
            {PROJECTS_CARD.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                className="group"
              >
                <ProjectCard {...card} />
              </motion.div>
            ))}
          </div>
        </FadeUp>

        {/* Call to Action Section */}
        <FadeUp delay={0.8}>
          <div className="mx-auto mt-20 max-w-5xl text-center">
            <div className="rounded-2xl border border-purple-100 bg-white/80 p-8 shadow-lg backdrop-blur-sm transition-all duration-500 hover:shadow-2xl dark:border-gray-700 dark:bg-gray-900/80">
              <h2 className="mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-2xl font-bold text-transparent dark:from-purple-400 dark:to-pink-400 md:text-3xl">
                I am currently building new projects.
              </h2>
              <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300 md:text-xl">
                Visit my github to see some of the latest projects{" "}
                <a
                  href={`${siteMetadata.github}?tab=repositories`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-purple-600 underline underline-offset-2 transition-colors duration-300 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300"
                >
                  Github
                </a>
              </p>
            </div>
          </div>
        </FadeUp>
      </div>
    </div>
  );
}
