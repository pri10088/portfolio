import React from 'react';
import { Code, Palette, Zap, ArrowRight } from 'lucide-react';

interface HeroProps {
  onNavigate?: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative">
      <div className="max-w-3xl lg:max-w-4xl mx-auto text-center px-4">
        
        {/* Main Heading */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-snug">
            <span className="block text-white">Hey, I'm</span>
            <span className="block text-neon neon-text break-words">Shanmuga Priya AR</span>
          </h1>

          {/* Subtext */}
          <div className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 max-w-[90%] mx-auto">
            <p className="typing-animation">
              Sketchbook in one hand, keyboard in the other.
            </p>
          </div>
          <p className="text-sm sm:text-base md:text-lg text-gray-400 mb-8 max-w-[90%] mx-auto">
            I build, design, market, and sometimes just vibe.
          </p>
        </div>

        {/* Subtitle with icons */}
        <div className="flex flex-wrap justify-center items-center gap-4 mb-12 text-neon text-sm sm:text-base">
          <div className="flex items-center gap-2">
            <Code size={18} />
            <span>Software Engineer</span>
          </div>
          <div className="hidden md:block w-1 h-1 bg-neon rounded-full"></div>
          <div className="flex items-center gap-2">
            <Zap size={18} />
            <span>Digital Marketer</span>
          </div>
          <div className="hidden md:block w-1 h-1 bg-neon rounded-full"></div>
          <div className="flex items-center gap-2">
            <Palette size={18} />
            <span>Sketch Artist</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => onNavigate?.('projects')}
            className="group px-6 py-3 sm:px-8 sm:py-4 bg-neon text-black font-semibold rounded-lg neon-glow hover:bg-neon-dark transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
          >
            View Work
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => onNavigate?.('contact')}
            className="px-6 py-3 sm:px-8 sm:py-4 glass-card font-semibold rounded-lg hover:bg-neon/20 hover:text-neon transition-all duration-300 text-sm sm:text-base"
          >
            Get in Touch
          </button>
        </div>

        {/* Floating Elements - Only on XL Screens */}
        <div className="hidden xl:block absolute top-20 left-20 float-animation">
          <div className="w-14 h-14 glass-card rounded-full flex items-center justify-center">
            <Code size={24} className="text-neon" />
          </div>
        </div>
        <div className="hidden xl:block absolute bottom-20 right-20 float-animation" style={{ animationDelay: '2s' }}>
          <div className="w-12 h-12 glass-card rounded-full flex items-center justify-center">
            <Palette size={20} className="text-neon" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
