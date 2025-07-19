import React from 'react';
import { Code, Palette, TrendingUp, Users } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Technical Skills", 
      icon: <Code className="w-6 h-6" />,
      skills: ["HTML", "CSS", "JavaScript", "Java", "SQL", "React", "Node.js"]
    },
    {
      title: "Design & Creative",
      icon: <Palette className="w-6 h-6" />,
      skills: ["UI/UX Design", "Sketch Art", "Figma", "Digital Art", "Typography"]
    },
    {
      title: "Marketing",
      icon: <TrendingUp className="w-6 h-6" />,
      skills: ["Digital Marketing", "Content Writing", "SEO", "Social Media", "Analytics"]
    },
    {
      title: "Soft Skills",
      icon: <Users className="w-6 h-6" />,
      skills: ["Communication", "Time Management", "Creativity", "Leadership", "Problem Solving"]
    }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-6 sm:px-4 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 neon-text">Skills</h2>
          <div className="w-24 h-1 bg-neon mx-auto rounded-full"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="glass-card p-6 rounded-2xl card-hover">
              {/* Category Title */}
              <div className="flex items-center gap-3 mb-6">
                <div className="text-neon">{category.icon}</div>
                <h3 className="text-xl font-semibold text-neon">{category.title}</h3>
              </div>

              {/* Skill Badges */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    aria-label={`Skill: ${skill}`}
                    className="px-4 py-2 glass-card rounded-full text-sm font-medium hover:bg-neon/20 hover:text-neon hover:scale-105 transition-all duration-300 cursor-default animate-fadeIn"
                    style={{ animationDelay: `${skillIndex * 100}ms` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Text */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 text-lg">
            Always learning, always growing. 
            <span className="text-neon"> The journey never ends.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
