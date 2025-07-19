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
    const newTitle = sketchTitles[randomIndex];
    setCurrentTitle(newTitle);
  };
  const quirks = [
    {
      title: "Sketchbook Addict",
      description: "I draw late at night with lo-fi beats",
      icon: <Palette className="w-8 h-8" />,
      emoji: "🎨",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Design Nerd",
      description: "Fonts, colors, layout... I obsess in Figma",
      icon: <Heart className="w-8 h-8" />,
      emoji: "💡",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Marketer in Training",
      description: "Understanding what clicks, literally and emotionally",
      icon: <Coffee className="w-8 h-8" />,
      emoji: "📈",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Night Owl Coder",
      description: "Best code happens after midnight",
      icon: <Music className="w-8 h-8" />,
      emoji: "🌙",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 neon-text">Extras</h2>
          <div className="w-24 h-1 bg-neon mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4">The quirky side of creativity</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {quirks.map((quirk, index) => (
            <div key={index} className="glass-card p-6 rounded-2xl card-hover group cursor-pointer">
              <div className="text-center">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {quirk.emoji}
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-neon group-hover:neon-text transition-all duration-300">
                  {quirk.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed">
                  {quirk.description}
                </p>
                
                <div className="mt-4 flex justify-center">
                  <div className="text-neon group-hover:scale-110 transition-transform duration-300">
                    {quirk.icon}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="glass-card p-8 rounded-2xl">
            <h3 className="text-2xl font-semibold mb-4 text-neon">Random Sketch Title Generator</h3>
            <div className="mb-6 p-4 glass-card rounded-lg min-h-[60px] flex items-center justify-center">
              <p className="text-lg font-medium text-center text-neon italic">
                "{currentTitle}"
              </p>
            </div>
            <button 
              onClick={generateRandomTitle}
              className="px-6 py-3 bg-neon text-black font-semibold rounded-lg hover:bg-neon-dark transition-all duration-300 neon-glow hover:scale-105 active:scale-95"
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