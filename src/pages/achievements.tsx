import React from 'react';
import { Trophy, Award, Star, Medal, Target, Zap } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      title: "SIH 24 Runner-Up",
      category: "Hackathon",
      year: "2024",
      description: "Led cross-functional teams to deliver exceptional results",
      icon: <Trophy className="w-6 h-6" />,
      color: "from-purple-600 to-blue-500"
    },
    {
      id: 2,
      title: "GFG 400+ days of Streak",
      category: "Learning",
      year: "2025",
      description: "Achieved over 400 days of continuous coding practice on GeeksforGeeks",
      icon: <Star className="w-6 h-6" />,
      color: "from-purple-400 to-indigo-500"
    },
    {
      id: 3,
      title: "Qualified Gate 2025 Data Science and AI", 
      category: "Examination",
      year: "2025",
      description: "Secured a top rank in the prestigious GATE exam in Data Science and AI",
      icon: <Medal className="w-6 h-6" />,
      color: "from-purple-500 to-violet-500"
    },
    {
      id: 4,
      title: "Won 7 Hackathons",
      category: "Hackathon",
      year: "2025",
      description: "Demonstrated exceptional problem-solving skills and innovation in multiple hackathons",
      icon: <Target className="w-6 h-6" />,
      color: "from-purple-600 to-purple-400"
    },
    {
      id: 5,
      title: "Open Source Contributor",
      category: "Open Source",
      year: "2025",
      description: "Contributed to various open source projects, enhancing community-driven development",
      icon: <Award className="w-6 h-6" />,
      color: "from-purple-500 to-purple-700"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50 dark:from-black dark:to-gray-900 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent mb-6">
            Achievements
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            A collection of milestones, recognitions, and accomplishments that define my professional journey
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-8 rounded-full"></div>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.id}
              className="group relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-fade-in border border-purple-100 dark:border-gray-700"
              style={{ 
                animationDelay: `${index * 150}ms`,
                animation: `fade-in 0.6s ease-out ${index * 150}ms both`
              }}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}></div>
              
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${achievement.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {achievement.icon}
              </div>

              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-wide">
                    {achievement.category}
                  </span>
                  <span className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                    {achievement.year}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                  {achievement.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {achievement.description}
                </p>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center group animate-fade-in" style={{ animationDelay: '800ms' }}>
            <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2 group-hover:scale-110 transition-transform duration-300">
              9+
            </div>
            <div className="text-slate-600 dark:text-slate-300 uppercase tracking-wide text-sm">
              Awards Won
            </div>
          </div>
          <div className="text-center group animate-fade-in" style={{ animationDelay: '900ms' }}>
            <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2 group-hover:scale-110 transition-transform duration-300">
              39+
            </div>
            <div className="text-slate-600 dark:text-slate-300 uppercase tracking-wide text-sm">
              Projects Completed
            </div>
          </div>
          <div className="text-center group animate-fade-in" style={{ animationDelay: '1000ms' }}>
            <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2 group-hover:scale-110 transition-transform duration-300">
              72%
            </div>
            <div className="text-slate-600 dark:text-slate-300 uppercase tracking-wide text-sm">
              Success Rate
            </div>
          </div>
          <div className="text-center group animate-fade-in" style={{ animationDelay: '1100ms' }}>
            <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2 group-hover:scale-110 transition-transform duration-300">
              3+
            </div>
            <div className="text-slate-600 dark:text-slate-300 uppercase tracking-wide text-sm">
              Years Experience
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
