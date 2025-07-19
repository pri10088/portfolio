import React from 'react';
import { GraduationCap, Award, Book } from 'lucide-react';

const Education: React.FC = () => {
  const education = [
    {
      institution: "Velammal College of Engineering & Tech",
      degree: "B.Tech Information Technology",
      period: "2022 - 2026",
      grade: "Current",
      icon: <GraduationCap className="w-6 h-6" />
    },
    {
      institution: "Velammal Bodhi Campus",
      degree: "Higher Secondary Education",
      period: "2022",
      grade: "73.8%",
      icon: <Book className="w-6 h-6" />
    },
    {
      institution: "Mount Litera Zee School",
      degree: "Secondary Education",
      period: "2020",
      grade: "76.6%",
      icon: <Book className="w-6 h-6" />
    }
  ];

  const certifications = [
    "NPTEL Certification",
    "Infosys Springboard",
    "IBM Certification",
    "Meta Certification",
    "TCS iON Certification"
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 neon-text">Education</h2>
          <div className="w-24 h-1 bg-neon mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Education Timeline */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-neon mb-6 flex items-center gap-2">
              <GraduationCap className="w-6 h-6" />
              Academic Journey
            </h3>
            
            {education.map((edu, index) => (
              <div key={index} className="glass-card p-6 rounded-2xl card-hover">
                <div className="flex items-start gap-4">
                  <div className="text-neon mt-1">{edu.icon}</div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg mb-1">{edu.institution}</h4>
                    <p className="text-neon mb-2">{edu.degree}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-sm">{edu.period}</span>
                      <span className="px-3 py-1 bg-neon/20 text-neon text-sm rounded-full">
                        {edu.grade}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-semibold text-neon mb-6 flex items-center gap-2">
              <Award className="w-6 h-6" />
              Certifications
            </h3>
            
            <div className="glass-card p-6 rounded-2xl card-hover">
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 glass-card rounded-lg hover:bg-neon/10 transition-all duration-300">
                    <div className="w-2 h-2 bg-neon rounded-full pulse-glow"></div>
                    <span className="text-gray-300">{cert}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-neon/10 rounded-lg">
                <p className="text-sm text-gray-400">
                  <span className="text-neon font-semibold">Multiple certified courses</span> across 
                  various platforms, constantly updating skills and knowledge.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;