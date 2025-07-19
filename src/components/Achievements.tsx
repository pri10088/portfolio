import React from 'react';
import { Trophy, Star, Users, BookOpen } from 'lucide-react';

const Achievements: React.FC = () => {
  const achievements = [
    {
      title: "ICSTSDG 2024",
      description: "Research paper: 'StaySmart Booking System'",
      icon: <BookOpen className="w-6 h-6 sm:w-8 sm:h-8" />,
      type: "Research",
      date: "2024"
    },
    {
      title: "Special Mention",
      description: "TCE Paper Presentation Excellence",
      icon: <Star className="w-6 h-6 sm:w-8 sm:h-8" />,
      type: "Academic",
      date: "2024"
    },
    {
      title: "Infosys Springboard",
      description: "Path to Future - On-campus Cohort",
      icon: <Users className="w-6 h-6 sm:w-8 sm:h-8" />,
      type: "Professional",
      date: "2024"
    }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 neon-text">Achievements</h2>
          <div className="w-20 sm:w-24 h-1 bg-neon mx-auto rounded-full"></div>
        </div>

        {/* Achievements List */}
        <div className="space-y-4 sm:space-y-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="glass-card p-4 sm:p-6 rounded-2xl card-hover group"
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="text-neon mt-1 group-hover:scale-110 transition-transform duration-300">
                  {achievement.icon}
                </div>

                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-lg sm:text-xl font-semibold text-neon group-hover:neon-text transition-all duration-300">
                      {achievement.title}
                    </h3>
                    <span className="text-gray-400 text-sm">{achievement.date}</span>
                  </div>

                  <p className="text-gray-300 mb-2 sm:mb-3 text-sm sm:text-base">
                    {achievement.description}
                  </p>

                  <span className="inline-flex items-center gap-1 px-2 sm:px-3 py-1 bg-neon/20 text-neon text-xs rounded-full">
                    <Trophy size={12} />
                    {achievement.type}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Message */}
        <div className="mt-8 sm:mt-12 text-center">
          <div className="glass-card p-4 sm:p-6 rounded-2xl">
            <p className="text-base sm:text-lg text-gray-300">
              <span className="text-neon font-semibold">Recognition drives passion.</span>
              <br />
              Each achievement is a stepping stone to greater heights.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
