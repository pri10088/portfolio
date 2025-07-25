import React from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  sections: Array<{ id: string; label: string; component: React.ReactNode }>;
  activeSection: string;
  setActiveSection: (section: string) => void;
  onCollapseChange?: (collapsed: boolean) => void;
}

const Navigation: React.FC<NavigationProps> = ({
  sections,
  activeSection,
  setActiveSection,
  onCollapseChange
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isCollapsed, setIsCollapsed] = React.useState(false);

  // Notify parent on collapse change
  React.useEffect(() => {
    onCollapseChange?.(isCollapsed);
  }, [isCollapsed, onCollapseChange]);

  // Close sidebar on outside click (mobile only)
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const sidebar = document.getElementById('sidebar');
      const toggleButton = document.getElementById('sidebar-toggle');

      if (
        isOpen &&
        sidebar &&
        toggleButton &&
        !sidebar.contains(event.target as Node) &&
        !toggleButton.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-30 lg:hidden transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Toggle Button */}
      <button
        id="sidebar-toggle"
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 p-3 glass-card rounded-xl hover:bg-neon/20 transition-all duration-300 group lg:hidden"
      >
        <div className="relative w-6 h-6">
          <Menu
            size={24}
            className={`absolute inset-0 text-neon transition-all duration-300 ${
              isOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'
            }`}
          />
          <X
            size={24}
            className={`absolute inset-0 text-neon transition-all duration-300 ${
              isOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'
            }`}
          />
        </div>
      </button>

      {/* Sidebar */}
      <nav
        id="sidebar"
        className={`fixed top-0 left-0 h-full z-40 transition-transform duration-500 ease-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div
          className={`h-full glass-card backdrop-blur-xl border-r border-neon/20 flex flex-col transition-all duration-300 ${
            isCollapsed ? 'w-16' : 'w-72 sm:w-80'
          }`}
        >
          {/* Header */}
          <div className="p-4 sm:p-6 border-b border-neon/20 flex items-center gap-3">
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="w-10 h-10 bg-neon rounded-lg flex items-center justify-center hover:bg-neon-dark transition-all duration-300"
              title={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            >
              <span className="text-black font-bold text-base sm:text-lg">SP</span>
            </button>
            <div
              className={`transition-all duration-300 overflow-hidden ${
                isCollapsed ? 'opacity-0 w-0' : 'opacity-100'
              }`}
            >
              <h3 className="font-semibold text-neon text-sm sm:text-base">Shanmuga Priya</h3>
              <p className="text-xs text-gray-400">Software Engineer</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div
            className={`flex-1 p-2 sm:p-4 space-y-2 overflow-y-auto ${
              isCollapsed ? 'px-2' : 'px-3 sm:px-4'
            }`}
          >
            {sections.map((section, index) => (
              <button
                key={section.id}
                onClick={() => {
                  setActiveSection(section.id);
                  setIsOpen(false);
                }}
                className={`group w-full text-left py-3 rounded-xl font-medium relative transition-all duration-300 ${
                  isCollapsed ? 'px-2' : 'px-4'
                } ${
                  activeSection === section.id
                    ? 'bg-neon text-black neon-glow shadow-lg'
                    : 'hover:bg-neon/10 hover:text-neon'
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="relative z-10 flex items-center gap-3">
                  <div
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      activeSection === section.id ? 'bg-black' : 'bg-neon/50'
                    }`}
                  />
                  <span
                    className={`text-sm sm:text-base transition-all duration-300 ${
                      isCollapsed ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100'
                    }`}
                  >
                    {section.label}
                  </span>
                </div>
                {/* Hover Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r from-neon/20 to-transparent transition-all duration-300 ${
                    activeSection === section.id
                      ? 'opacity-100'
                      : 'opacity-0 group-hover:opacity-100'
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Footer */}
          <div
            className={`p-3 sm:p-4 border-t border-neon/20 ${
              isCollapsed ? 'px-2' : 'px-4'
            }`}
          >
            <div className="text-center">
              <div className="flex justify-center space-x-2 sm:space-x-4 mb-2 sm:mb-3">
                <div className="w-2 h-2 bg-neon rounded-full pulse-glow"></div>
                <div
                  className="w-2 h-2 bg-neon rounded-full pulse-glow"
                  style={{ animationDelay: '0.5s' }}
                ></div>
                <div
                  className="w-2 h-2 bg-neon rounded-full pulse-glow"
                  style={{ animationDelay: '1s' }}
                ></div>
              </div>
              <p
                className={`text-xs sm:text-sm text-gray-400 transition-all duration-300 ${
                  isCollapsed ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100'
                }`}
              >
                Always creating, always coding
              </p>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
