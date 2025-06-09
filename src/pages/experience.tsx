
import React from 'react';
import { Briefcase, Calendar, MapPin, ArrowRight, Building, Code, Users, Lightbulb } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Full Stack Developer Intern",
      company: "YatriCabs",
      location: "Mumbai, India",
      period: "2024",
      type: "Internship",
      description: "Leading development of scalable web applications using React, Node.js, and cloud technologies. Mentoring junior developers and architecting solutions for complex business requirements.",
      achievements: [
        "Increased application performance by 40%",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
        "Architected microservices handling 10k+ daily requests"
      ],
      technologies: ["React", "Node.js", "AWS", "Docker", "TypeScript"],
      icon: <Code className="w-5 h-5" />,
      color: "from-purple-500 to-blue-500"
    },
    {
      id: 2,
      title: "Data Science Intern",
      company: "Recode Hive",
      location: "Australia",
      period: "2025 - present",
      type: "Internship",
      description: "Developing data-driven solutions to enhance user experience and optimize business processes. Collaborating with cross-functional teams to implement machine learning models and data analytics.",
      achievements: [
        "Built predictive models improving user engagement by 30%",
        "Automated data processing pipelines reducing manual effort by 50%",
        "Presented findings to stakeholders leading to strategic decisions"
      ],
      technologies: ["Python", "Pandas", "Scikit-learn", "TensorFlow", "SQL"],
      icon: <Building className="w-5 h-5" />,
      color: "from-purple-600 to-pink-500"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50 dark:from-black dark:to-gray-900 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent mb-6">
            Experience
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            My professional journey through various roles, challenges, and growth opportunities
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-8 rounded-full"></div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 to-pink-400"></div>

          {/* Experience Items */}
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`relative flex items-center mb-16 animate-fade-in ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
              style={{ 
                animationDelay: `${index * 200}ms`,
                animation: `fade-in 0.8s ease-out ${index * 200}ms both`
              }}
            >
              {/* Timeline Dot */}
              <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-white dark:border-black shadow-lg z-10"></div>

              {/* Content Card */}
              <div className={`w-full md:w-1/2 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <div className="group bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-purple-100 dark:border-gray-700">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${exp.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                        {exp.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-800 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                          {exp.title}
                        </h3>
                        <div className="flex items-center space-x-2 text-purple-600 dark:text-purple-400 font-medium">
                          <Building className="w-4 h-4" />
                          <span>{exp.company}</span>
                        </div>
                      </div>
                    </div>
                    <span className="text-sm bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full font-medium">
                      {exp.type}
                    </span>
                  </div>

                  {/* Meta Info */}
                  <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-slate-600 dark:text-slate-300">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4 text-purple-500" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4 text-purple-500" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-800 dark:text-white mb-3 flex items-center">
                      <ArrowRight className="w-4 h-4 text-purple-500 mr-2" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-slate-600 dark:text-slate-300">
                          <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold text-slate-800 dark:text-white mb-3 flex items-center">
                      <Code className="w-4 h-4 text-purple-500 mr-2" />
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-xs font-medium bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full border border-purple-200 dark:border-purple-700 hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-colors duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-20 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-purple-100 dark:border-gray-700 animate-fade-in" style={{ animationDelay: '1000ms' }}>
          <h3 className="text-2xl font-bold text-center text-slate-800 dark:text-white mb-8">
            Career Highlights
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                3+
              </div>
              <div className="text-slate-600 dark:text-slate-300 text-sm uppercase tracking-wide">
                Years Experience
              </div>
            </div>
            <div className="text-center group">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                2
              </div>
              <div className="text-slate-600 dark:text-slate-300 text-sm uppercase tracking-wide">
                Companies
              </div>
            </div>
            <div className="text-center group">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                19+
              </div>
              <div className="text-slate-600 dark:text-slate-300 text-sm uppercase tracking-wide">
                Technologies
              </div>
            </div>
            <div className="text-center group">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                39+
              </div>
              <div className="text-slate-600 dark:text-slate-300 text-sm uppercase tracking-wide">
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
