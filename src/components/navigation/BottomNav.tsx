import { Home, Users, Calendar, Mail, BookText } from 'lucide-react';

interface BottomNavProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ currentPage, onNavigate }) => {
  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'about', icon: BookText, label: 'About' },
    { id: 'events', icon: Calendar, label: 'Events' },
    { id: 'team', icon: Users, label: 'Team' },
    { id: 'contact', icon: Mail, label: 'Contact' },
  ];

  return (
    <nav className="fixed bottom-[-0.025rem] left-0 right-0 z-50 bg-background border-t border-border">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-1.5">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPage === item.id;

            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`flex flex-col items-center px-2 py-1 rounded-lg transition-colors cursor-pointer ${
                  isActive
                    ? 'text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <Icon className={`w-4.5 h-4.5 ${
                  isActive 
                    ? 'text-foreground' 
                    : 'text-muted-foreground'
                }`} />
                <span className="text-xs font-medium mt-1">{item.label}</span>
                {isActive && (
                  <div className="w-6 h-0.5 bg-foreground rounded-full mt-1"></div>
                )}
              </button>
            );
          })}
        </div>
      </div>

    </nav>
  );
};

export default BottomNav;