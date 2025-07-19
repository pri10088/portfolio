import React from 'react';
import { ExternalLink, Github, Chrome, BookOpen, Palette, Plane } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Airline Management System",
      description: "Comprehensive flight booking and management system with admin controls, passenger management, and real-time flight tracking.",
      icon: <Plane className="w-8 h-8" />,
      tech: ["Java", "Swing", "MySQL", "JDBC"],
      status: "Completed",
      link: null,
      github: "https://github.com/pri10088/airline-project.git"
    },
    {
      title: "Nebula Chrome Extension",
      description: "Turned new tab pages into beautiful, productive dashboards.",
      icon: <Chrome className="w-8 h-8" />,
      tech: ["JavaScript", "CSS", "Chrome APIs"],
      status: "Completed",
      link: "https://youtu.be/i4HwxsY49hA",
      github: "https://github.com/pri10088/nebula-extension.git"
    },
    {
      title: "Full Stack Blog App",
      description: "Fast, dynamic, SSR blog app with performance at its core.",
      icon: <BookOpen className="w-8 h-8" />,
      tech: ["React", "Node.js", "MongoDB"],
      status: "Completed",
      link: "https://youtu.be/w9WLl_WxP7g",
      github: "https://github.com/pri10088/Blog-App.git"
    },
    {
      title: "Sketch Portfolio",
      description: "Pages from my sketchbook in digital form.",
      icon: <Palette className="w-8 h-8" />,
      tech: ["React", "Framer Motion", "CSS"],
      status: "Coming Soon",
      link: null,
      github: "https://github.com/your-username/sketch-portfolio"
    }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 neon-text">Projects</h2>
          <div className="w-24 h-1 bg-neon mx-auto rounded-full"></div>
        </div>

        {/* Responsive Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-card p-6 rounded-2xl card-hover group flex flex-col justify-between"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="text-neon">{project.icon}</div>
                <div className="flex gap-2">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="View Project"
                      className="p-2 glass-card rounded-lg hover:bg-neon/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-neon/50"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="View Code on GitHub"
                    className="p-2 glass-card rounded-lg hover:bg-neon/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-neon/50"
                  >
                    <Github size={16} />
                  </a>
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-semibold mb-2 text-neon group-hover:neon-text transition-all duration-300">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-neon/20 text-neon text-xs rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Footer (Status & Indicator) */}
              <div className="flex items-center justify-between mt-auto">
                <span
                  className={`px-3 py-1 text-xs rounded-full font-medium ${
                    project.status === 'Completed'
                      ? 'bg-green-500/20 text-green-400'
                      : 'bg-yellow-500/20 text-yellow-400'
                  }`}
                >
                  {project.status}
                </span>
                <div className="w-2 h-2 bg-neon rounded-full animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
