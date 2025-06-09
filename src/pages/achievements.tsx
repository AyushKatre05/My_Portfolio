import React from "react";
import { Trophy, Award, Star, Medal, Target } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      title: "SIH 24 Runner-Up",
      category: "Hackathon",
      year: "2024",
      description: "Led cross-functional teams to deliver exceptional results",
      icon: <Trophy className="h-6 w-6" />,
      color: "from-purple-600 to-blue-500",
    },
    {
      id: 2,
      title: "GFG 400+ days of Streak",
      category: "Learning",
      year: "2025",
      description:
        "Achieved over 400 days of continuous coding practice on GeeksforGeeks",
      icon: <Star className="h-6 w-6" />,
      color: "from-purple-400 to-indigo-500",
    },
    {
      id: 3,
      title: "Qualified Gate 2025 Data Science and AI",
      category: "Examination",
      year: "2025",
      description:
        "Secured a top rank in the prestigious GATE exam in Data Science and AI",
      icon: <Medal className="h-6 w-6" />,
      color: "from-purple-500 to-violet-500",
    },
    {
      id: 4,
      title: "Won 7 Hackathons",
      category: "Hackathon",
      year: "2025",
      description:
        "Demonstrated exceptional problem-solving skills and innovation in multiple hackathons",
      icon: <Target className="h-6 w-6" />,
      color: "from-purple-600 to-purple-400",
    },
    {
      id: 5,
      title: "Open Source Contributor",
      category: "Open Source",
      year: "2025",
      description:
        "Contributed to various open source projects, enhancing community-driven development",
      icon: <Award className="h-6 w-6" />,
      color: "from-purple-500 to-purple-700",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50 px-4 py-16 dark:from-black dark:to-gray-900">
      <div className="mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="animate-fade-in mb-16 text-center">
          <h1 className="mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-5xl font-bold text-transparent dark:from-purple-400 dark:to-pink-400 md:text-7xl">
            Achievements
          </h1>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-slate-600 dark:text-slate-300">
            A collection of milestones, recognitions, and accomplishments that
            define my professional journey
          </p>
          <div className="mx-auto mt-8 h-1 w-24 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></div>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.id}
              className="animate-fade-in group relative rounded-2xl border border-purple-100 bg-white/80 p-8 shadow-lg backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:shadow-2xl dark:border-gray-700 dark:bg-gray-900/80"
              style={{
                animationDelay: `${index * 150}ms`,
                animation: `fade-in 0.6s ease-out ${index * 150}ms both`,
              }}
            >
              {/* Gradient Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${achievement.color} rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-5`}
              ></div>

              {/* Icon */}
              <div
                className={`inline-flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br ${achievement.color} mb-6 text-white transition-transform duration-300 group-hover:scale-110`}
              >
                {achievement.icon}
              </div>

              {/* Content */}
              <div className="relative z-10">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-sm font-semibold uppercase tracking-wide text-purple-600 dark:text-purple-400">
                    {achievement.category}
                  </span>
                  <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                    {achievement.year}
                  </span>
                </div>

                <h3 className="mb-3 text-xl font-bold text-slate-800 transition-colors duration-300 group-hover:text-purple-600 dark:text-white dark:group-hover:text-purple-400">
                  {achievement.title}
                </h3>

                <p className="leading-relaxed text-slate-600 dark:text-slate-300">
                  {achievement.description}
                </p>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-4">
          <div
            className="animate-fade-in group text-center"
            style={{ animationDelay: "800ms" }}
          >
            <div className="mb-2 text-4xl font-bold text-purple-600 transition-transform duration-300 group-hover:scale-110 dark:text-purple-400">
              9+
            </div>
            <div className="text-sm uppercase tracking-wide text-slate-600 dark:text-slate-300">
              Awards Won
            </div>
          </div>
          <div
            className="animate-fade-in group text-center"
            style={{ animationDelay: "900ms" }}
          >
            <div className="mb-2 text-4xl font-bold text-purple-600 transition-transform duration-300 group-hover:scale-110 dark:text-purple-400">
              39+
            </div>
            <div className="text-sm uppercase tracking-wide text-slate-600 dark:text-slate-300">
              Projects Completed
            </div>
          </div>
          <div
            className="animate-fade-in group text-center"
            style={{ animationDelay: "1000ms" }}
          >
            <div className="mb-2 text-4xl font-bold text-purple-600 transition-transform duration-300 group-hover:scale-110 dark:text-purple-400">
              72%
            </div>
            <div className="text-sm uppercase tracking-wide text-slate-600 dark:text-slate-300">
              Success Rate
            </div>
          </div>
          <div
            className="animate-fade-in group text-center"
            style={{ animationDelay: "1100ms" }}
          >
            <div className="mb-2 text-4xl font-bold text-purple-600 transition-transform duration-300 group-hover:scale-110 dark:text-purple-400">
              3+
            </div>
            <div className="text-sm uppercase tracking-wide text-slate-600 dark:text-slate-300">
              Years Experience
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
