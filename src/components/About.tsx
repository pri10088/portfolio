import React from 'react';
import { Heart, Coffee, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="glass-card p-6 sm:p-8 md:p-12 rounded-2xl card-hover">
          {/* Title */}
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 neon-text">
              About Me
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-neon mx-auto rounded-full"></div>
          </div>

          {/* Text Content */}
          <div className="space-y-4 sm:space-y-6 text-base sm:text-lg md:text-xl leading-relaxed text-gray-300">
            <p>
              <span className="text-neon font-semibold">
                Code is my toolkit. Creativity is my compass.
              </span>
            </p>

            <p>
              Whether it's building a blog app or sketching on paper, I'm always chasing what clicks —
              <span className="text-neon"> visually and logically.</span>
            </p>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8 sm:mt-12">
              {/* Card 1 */}
              <div className="text-center p-4 sm:p-6 glass-card rounded-xl hover:bg-neon/10 transition-all duration-300">
                <Heart className="w-10 h-10 sm:w-12 sm:h-12 text-neon mx-auto mb-4" />
                <h3 className="font-semibold mb-2 text-neon text-lg">Passionate</h3>
                <p className="text-gray-400 text-sm sm:text-base">
                  Every line of code tells a story. Every sketch captures a moment.
                </p>
              </div>

              {/* Card 2 */}
              <div className="text-center p-4 sm:p-6 glass-card rounded-xl hover:bg-neon/10 transition-all duration-300">
                <Coffee className="w-10 h-10 sm:w-12 sm:h-12 text-neon mx-auto mb-4" />
                <h3 className="font-semibold mb-2 text-neon text-lg">Dedicated</h3>
                <p className="text-gray-400 text-sm sm:text-base">
                  Late nights with lo-fi beats, turning ideas into reality.
                </p>
              </div>

              {/* Card 3 */}
              <div className="text-center p-4 sm:p-6 glass-card rounded-xl hover:bg-neon/10 transition-all duration-300">
                <Lightbulb className="w-10 h-10 sm:w-12 sm:h-12 text-neon mx-auto mb-4" />
                <h3 className="font-semibold mb-2 text-neon text-lg">Innovative</h3>
                <p className="text-gray-400 text-sm sm:text-base">
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
