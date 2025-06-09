import React from "react";
import { Calendar, MapPin, ArrowRight, Building, Code } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Full Stack Developer Intern",
      company: "YatriCabs",
      location: "Mumbai, India",
      period: "2024",
      type: "Internship",
      description:
        "Leading development of scalable web applications using React, Node.js, and cloud technologies. Mentoring junior developers and architecting solutions for complex business requirements.",
      achievements: [
        "Increased application performance by 40%",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
        "Architected microservices handling 10k+ daily requests",
      ],
      technologies: ["React", "Node.js", "AWS", "Docker", "TypeScript"],
      icon: <Code className="h-5 w-5" />,
      color: "from-purple-500 to-blue-500",
    },
    {
      id: 2,
      title: "Data Science Intern",
      company: "Recode Hive",
      location: "Australia",
      period: "2025 - present",
      type: "Internship",
      description:
        "Developing data-driven solutions to enhance user experience and optimize business processes. Collaborating with cross-functional teams to implement machine learning models and data analytics.",
      achievements: [
        "Built predictive models improving user engagement by 30%",
        "Automated data processing pipelines reducing manual effort by 50%",
        "Presented findings to stakeholders leading to strategic decisions",
      ],
      technologies: ["Python", "Pandas", "Scikit-learn", "TensorFlow", "SQL"],
      icon: <Building className="h-5 w-5" />,
      color: "from-purple-600 to-pink-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50 px-4 py-16 dark:from-black dark:to-gray-900">
      <div className="mx-auto max-w-6xl">
        {/* Header Section */}
        <div className="animate-fade-in mb-16 text-center">
          <h1 className="mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-5xl font-bold text-transparent dark:from-purple-400 dark:to-pink-400 md:text-7xl">
            Experience
          </h1>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-slate-600 dark:text-slate-300">
            My professional journey through various roles, challenges, and
            growth opportunities
          </p>
          <div className="mx-auto mt-8 h-1 w-24 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute bottom-0 left-8 top-0 w-0.5 transform bg-gradient-to-b from-purple-400 to-pink-400 md:left-1/2 md:-translate-x-px"></div>

          {/* Experience Items */}
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`animate-fade-in relative mb-16 flex items-center ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
              style={{
                animationDelay: `${index * 200}ms`,
                animation: `fade-in 0.8s ease-out ${index * 200}ms both`,
              }}
            >
              {/* Timeline Dot */}
              <div className="absolute left-8 z-10 h-4 w-4 -translate-x-1/2 transform rounded-full border-4 border-white bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg dark:border-black md:left-1/2"></div>

              {/* Content Card */}
              <div
                className={`ml-16 w-full md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                }`}
              >
                <div className="group rounded-2xl border border-purple-100 bg-white/80 p-8 shadow-lg backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:shadow-2xl dark:border-gray-700 dark:bg-gray-900/80">
                  {/* Header */}
                  <div className="mb-6 flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div
                        className={`rounded-xl bg-gradient-to-br p-3 ${exp.color} text-white transition-transform duration-300 group-hover:scale-110`}
                      >
                        {exp.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-800 transition-colors duration-300 group-hover:text-purple-600 dark:text-white dark:group-hover:text-purple-400">
                          {exp.title}
                        </h3>
                        <div className="flex items-center space-x-2 font-medium text-purple-600 dark:text-purple-400">
                          <Building className="h-4 w-4" />
                          <span>{exp.company}</span>
                        </div>
                      </div>
                    </div>
                    <span className="rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-700 dark:bg-purple-900 dark:text-purple-300">
                      {exp.type}
                    </span>
                  </div>

                  {/* Meta Info */}
                  <div className="mb-6 flex flex-wrap items-center gap-4 text-sm text-slate-600 dark:text-slate-300">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4 text-purple-500" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4 text-purple-500" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mb-6 leading-relaxed text-slate-600 dark:text-slate-300">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="mb-3 flex items-center font-semibold text-slate-800 dark:text-white">
                      <ArrowRight className="mr-2 h-4 w-4 text-purple-500" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li
                          key={idx}
                          className="flex items-start space-x-2 text-slate-600 dark:text-slate-300"
                        >
                          <div className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-purple-500"></div>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="mb-3 flex items-center font-semibold text-slate-800 dark:text-white">
                      <Code className="mr-2 h-4 w-4 text-purple-500" />
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="rounded-full border border-purple-200 bg-purple-50 px-3 py-1 text-xs font-medium text-purple-700 transition-colors duration-200 hover:bg-purple-100 dark:border-purple-700 dark:bg-purple-900/30 dark:text-purple-300 dark:hover:bg-purple-900/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div
          className="animate-fade-in mt-20 rounded-2xl border border-purple-100 bg-white/80 p-8 shadow-lg backdrop-blur-sm dark:border-gray-700 dark:bg-gray-900/80"
          style={{ animationDelay: "1000ms" }}
        >
          <h3 className="mb-8 text-center text-2xl font-bold text-slate-800 dark:text-white">
            Career Highlights
          </h3>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div className="group text-center">
              <div className="mb-2 text-3xl font-bold text-purple-600 transition-transform duration-300 group-hover:scale-110 dark:text-purple-400">
                3+
              </div>
              <div className="text-sm uppercase tracking-wide text-slate-600 dark:text-slate-300">
                Years Experience
              </div>
            </div>
            <div className="group text-center">
              <div className="mb-2 text-3xl font-bold text-purple-600 transition-transform duration-300 group-hover:scale-110 dark:text-purple-400">
                2
              </div>
              <div className="text-sm uppercase tracking-wide text-slate-600 dark:text-slate-300">
                Companies
              </div>
            </div>
            <div className="group text-center">
              <div className="mb-2 text-3xl font-bold text-purple-600 transition-transform duration-300 group-hover:scale-110 dark:text-purple-400">
                19+
              </div>
              <div className="text-sm uppercase tracking-wide text-slate-600 dark:text-slate-300">
                Technologies
              </div>
            </div>
            <div className="group text-center">
              <div className="mb-2 text-3xl font-bold text-purple-600 transition-transform duration-300 group-hover:scale-110 dark:text-purple-400">
                39+
              </div>
              <div className="text-sm uppercase tracking-wide text-slate-600 dark:text-slate-300">
                Projects
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
