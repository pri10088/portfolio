import React from 'react';
import { Trophy, Star, Users, BookOpen } from 'lucide-react';

const Achievements: React.FC = () => {
  const achievements = [
    {
      title: "ICSTSDG 2024",
      description: "Research paper: 'StaySmart Booking System'",
      icon: <BookOpen className="w-6 h-6" />,
      type: "Research",
      date: "2024"
    },
    {
      title: "Special Mention",
      description: "TCE Paper Presentation Excellence",
      icon: <Star className="w-6 h-6" />,
      type: "Academic",
      date: "2024"
    },
    {
      title: "Infosys Springboard",
      description: "Path to Future - On-campus Cohort",
      icon: <Users className="w-6 h-6" />,
      type: "Professional",
      date: "2024"
    }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 neon-text">Achievements</h2>
          <div className="w-24 h-1 bg-neon mx-auto rounded-full"></div>
        </div>

        <div className="space-y-6">
          {achievements.map((achievement, index) => (
            <div key={index} className="glass-card p-6 rounded-2xl card-hover group">
              <div className="flex items-start gap-4">
                <div className="text-neon mt-1 group-hover:scale-110 transition-transform duration-300">
                  {achievement.icon}
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-neon group-hover:neon-text transition-all duration-300">
                      {achievement.title}
                    </h3>
                    <span className="text-gray-400 text-sm">{achievement.date}</span>
                  </div>
                  
                  <p className="text-gray-300 mb-3">{achievement.description}</p>
                  
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-neon/20 text-neon text-xs rounded-full">
                    <Trophy size={12} />
                    {achievement.type}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="glass-card p-6 rounded-2xl">
            <p className="text-lg text-gray-300">
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