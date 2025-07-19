import React from 'react';
import { Code, Palette, Zap, ArrowRight } from 'lucide-react';

interface HeroProps {
  onNavigate?: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main heading */}
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="block text-white">Hey, I'm</span>
            <span className="block text-neon neon-text">Shanmuga Priya AR</span>
          </h1>
          <div className="text-xl md:text-2xl text-gray-300 mb-6 max-w-2xl mx-auto">
            <p className="typing-animation">
              Sketchbook in one hand, keyboard in the other.
            </p>
          </div>
          <p className="text-lg md:text-xl text-gray-400 mb-8">
            I build, design, market, and sometimes just vibe.
          </p>
        </div>

        {/* Subtitle with icons */}
        <div className="flex flex-wrap justify-center items-center gap-4 mb-12 text-neon">
          <div className="flex items-center gap-2">
            <Code size={20} />
            <span>Software Engineer</span>
          </div>
          <div className="hidden md:block w-1 h-1 bg-neon rounded-full"></div>
          <div className="flex items-center gap-2">
            <Zap size={20} />
            <span>Digital Marketer</span>
          </div>
          <div className="hidden md:block w-1 h-1 bg-neon rounded-full"></div>
          <div className="flex items-center gap-2">
            <Palette size={20} />
            <span>Sketch Artist</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => onNavigate?.('projects')}
            className="group px-8 py-4 bg-neon text-black font-semibold rounded-lg neon-glow hover:bg-neon-dark transition-all duration-300 flex items-center justify-center gap-2"
          >
            View Work
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button 
            onClick={() => onNavigate?.('contact')}
            className="px-8 py-4 glass-card font-semibold rounded-lg hover:bg-neon/20 hover:text-neon transition-all duration-300"
          >
            Get in Touch
          </button>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-20 float-animation">
          <div className="w-16 h-16 glass-card rounded-full flex items-center justify-center">
            <Code size={24} className="text-neon" />
          </div>
        </div>
        <div className="absolute bottom-20 right-20 float-animation" style={{ animationDelay: '2s' }}>
          <div className="w-12 h-12 glass-card rounded-full flex items-center justify-center">
            <Palette size={20} className="text-neon" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;