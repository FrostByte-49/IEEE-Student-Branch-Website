import { Moon, Sun } from 'lucide-react';
import { useState, useEffect } from 'react';
interface HeaderProps {
  title?: string;
  showBack?: boolean;
  onBack?: () => void;
}
const Header: React.FC<HeaderProps> = ({showBack = false, onBack }) => {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('ieee-dark-mode');
      if (saved !== null) return JSON.parse(saved);
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });
  // Toggle Dark Mode Class On Html Element
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('ieee-dark-mode', 'true');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('ieee-dark-mode', 'false');
    }
  }, [darkMode]);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <header className="sticky top-0 z-40 bg-background border-b border-border">
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Left side: Logo */}
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 flex items-center justify-center">
              <img
                src="https://res.cloudinary.com/dhn92qb61/image/upload/v1768981698/IEEE_Logo_ghxnop.webp"
                alt="IEEE Logo"
                className="w-10 h-10 scale-[1.3] object-contain"
              />
            </div>
            
            <div>
              <h1 className="text-lg md:text-xl font-bold text-foreground">
                IEEE Student Branch
              </h1>
              <p className="text-xs text-muted-foreground">VPPCOE & VA</p>
            </div>
          </div>
          
          {/* Right side: Join, Theme Toggle Button */}
          <div className="flex items-center gap-3">
            {/* Join Button */}
            {/* <button className="hidden sm:flex items-center gap-2 px-3 py-1.75 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors">
              <Users className="w-4 h-4" />
              Join IEEE
            </button>
            
            {title && (
              <span className="text-foreground font-medium hidden md:block">
                {title}
              </span>
            )} */}
            
            {/* Theme Toggle */}
            <button
              onClick={toggleDarkMode}
              className="w-10 h-10 flex items-center justify-center rounded-xl border border-border hover:bg-accent transition-colors cursor-pointer"
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? (
                <Sun className="w-4 h-4 text-amber-500" />
              ) : (
                <Moon className="w-4 h-4 text-muted-foreground" />
              )}
            </button>
            
            {/* Back Button */}
            {showBack && onBack && (
              <button 
                onClick={onBack}
                className="w-10 h-10 flex items-center justify-center rounded-lg border border-border hover:bg-accent transition-colors"
              >
                <span className="text-foreground font-bold">←</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;