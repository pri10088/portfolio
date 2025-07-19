import React from 'react';
import { Palette, Coffee, Heart, Music } from 'lucide-react';

const Extras: React.FC = () => {
  const [currentTitle, setCurrentTitle] = React.useState("Click to discover what I might be sketching tonight");

  const sketchTitles = [
    "Midnight Coffee & Code Dreams",
    "Lo-fi Beats & Pixel Perfect Lines",
    "The Art of Debugging at 3AM",
    "Sketching Tomorrow's UI Today",
    "When CSS Meets Charcoal",
    "Digital Brushstrokes & Binary Thoughts",
    "The Poetry of Clean Code",
    "Wireframes in Watercolor",
    "Neon Lights & Night Sketches",
    "The Geometry of Good Design",
    "Caffeine-Fueled Creativity",
    "Sketching Between Commits",
    "The Rhythm of React & Pencil",
    "Moonlit Mockups",
    "The Dance of Design & Development",
    "Analog Dreams in a Digital World",
    "The Silence of Successful Deploys",
    "Sketching the Future, One Line at a Time",
    "The Beauty of Broken Builds",
    "When Inspiration Meets Implementation"
  ];

  const generateRandomTitle = () => {
    const randomIndex = Math.floor(Math.random() * sketchTitles.length);
    setCurrentTitle(sketchTitles[randomIndex]);
  };

  const quirks = [
    {
      title: "Sketchbook Addict",
      description: "I draw late at night with lo-fi beats",
      icon: <Palette className="w-6 h-6 sm:w-8 sm:h-8" />,
      emoji: "🎨"
    },
    {
      title: "Design Nerd",
      description: "Fonts, colors, layout... I obsess in Figma",
      icon: <Heart className="w-6 h-6 sm:w-8 sm:h-8" />,
      emoji: "💡"
    },
    {
      title: "Marketer in Training",
      description: "Understanding what clicks, literally and emotionally",
      icon: <Coffee className="w-6 h-6 sm:w-8 sm:h-8" />,
      emoji: "📈"
    },
    {
      title: "Night Owl Coder",
      description: "Best code happens after midnight",
      icon: <Music className="w-6 h-6 sm:w-8 sm:h-8" />,
      emoji: "🌙"
    }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 neon-text">Extras</h2>
          <div className="w-20 sm:w-24 h-1 bg-neon mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-3 sm:mt-4 text-sm sm:text-base">The quirky side of creativity</p>
        </div>

        {/* Quirks Grid */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {quirks.map((quirk, index) => (
            <div key={index} className="glass-card p-4 sm:p-6 rounded-2xl card-hover group cursor-pointer">
              <div className="text-center">
                <div className="text-4xl sm:text-6xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                  {quirk.emoji}
                </div>

                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-neon group-hover:neon-text transition-all duration-300">
                  {quirk.title}
                </h3>

                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-3">
                  {quirk.description}
                </p>

                <div className="flex justify-center">
                  <div className="text-neon group-hover:scale-110 transition-transform duration-300">
                    {quirk.icon}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Random Sketch Title Generator */}
        <div className="mt-10 sm:mt-12 text-center">
          <div className="glass-card p-6 sm:p-8 rounded-2xl">
            <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-neon">Random Sketch Title Generator</h3>
            <div className="mb-4 sm:mb-6 p-3 sm:p-4 glass-card rounded-lg min-h-[50px] sm:min-h-[60px] flex items-center justify-center">
              <p className="text-sm sm:text-lg font-medium text-center text-neon italic">
                "{currentTitle}"
              </p>
            </div>
            <button
              onClick={generateRandomTitle}
              className="px-4 sm:px-6 py-2 sm:py-3 bg-neon text-black font-semibold rounded-lg hover:bg-neon-dark transition-all duration-300 neon-glow hover:scale-105 active:scale-95 text-sm sm:text-base"
            >
              Generate Random Title
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Extras;
