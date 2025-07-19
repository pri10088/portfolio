import React from 'react';
import { Heart, Coffee, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl mx-auto">
        <div className="glass-card p-8 md:p-12 rounded-2xl card-hover">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 neon-text">About Me</h2>
            <div className="w-24 h-1 bg-neon mx-auto rounded-full"></div>
          </div>

          <div className="space-y-6 text-lg md:text-xl leading-relaxed">
            <p className="text-gray-300">
              <span className="text-neon font-semibold">Code is my toolkit. Creativity is my compass.</span>
            </p>
            
            <p className="text-gray-300">
              Whether it's building a blog app or sketching on paper, I'm always chasing what clicks — 
              <span className="text-neon"> visually and logically.</span>
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="text-center p-6 glass-card rounded-xl hover:bg-neon/10 transition-all duration-300">
                <Heart className="w-12 h-12 text-neon mx-auto mb-4" />
                <h3 className="font-semibold mb-2 text-neon">Passionate</h3>
                <p className="text-gray-400 text-sm">
                  Every line of code tells a story. Every sketch captures a moment.
                </p>
              </div>

              <div className="text-center p-6 glass-card rounded-xl hover:bg-neon/10 transition-all duration-300">
                <Coffee className="w-12 h-12 text-neon mx-auto mb-4" />
                <h3 className="font-semibold mb-2 text-neon">Dedicated</h3>
                <p className="text-gray-400 text-sm">
                  Late nights with lo-fi beats, turning ideas into reality.
                </p>
              </div>

              <div className="text-center p-6 glass-card rounded-xl hover:bg-neon/10 transition-all duration-300">
                <Lightbulb className="w-12 h-12 text-neon mx-auto mb-4" />
                <h3 className="font-semibold mb-2 text-neon">Innovative</h3>
                <p className="text-gray-400 text-sm">
                  Always exploring new ways to blend technology with creativity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;