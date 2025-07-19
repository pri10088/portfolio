import React, { useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Extras from './components/Extras';
import Contact from './components/Contact';
import Navigation from './components/Navigation';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const sections = [
    { id: 'hero', label: 'Home', component: <Hero onNavigate={setActiveSection} /> },
    { id: 'about', label: 'About', component: <About /> },
    { id: 'projects', label: 'Projects', component: <Projects /> },
    { id: 'skills', label: 'Skills', component: <Skills /> },
    { id: 'education', label: 'Education', component: <Education /> },
    { id: 'achievements', label: 'Achievements', component: <Achievements /> },
    { id: 'extras', label: 'Extras', component: <Extras /> },
    { id: 'contact', label: 'Contact', component: <Contact /> },
  ];

  const currentSection = sections.find(section => section.id === activeSection);

  return (
    <div className="min-h-screen bg-dark-bg text-white relative overflow-hidden">
      {/* Background particles */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-10 left-10 w-2 h-2 bg-neon rounded-full animate-pulse"></div>
        <div className="absolute top-1/4 right-20 w-1 h-1 bg-neon rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 bg-neon rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-10 right-10 w-1 h-1 bg-neon rounded-full animate-pulse delay-3000"></div>
      </div>

      <Navigation 
        sections={sections} 
        activeSection={activeSection} 
        setActiveSection={setActiveSection} 
        onCollapseChange={setSidebarCollapsed}
      />

      <main className={`relative z-10 min-h-screen transition-all duration-300 ${
        sidebarCollapsed ? 'lg:ml-20' : 'lg:ml-80'
      }`}>
        <div className="transition-all duration-500 ease-in-out">
          {currentSection?.component}
        </div>
      </main>
    </div>
  );
}

export default App;