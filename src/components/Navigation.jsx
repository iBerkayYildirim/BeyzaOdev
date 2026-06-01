import React, { useState } from 'react';
import { Coffee, Map, Store, LogIn, Menu, X } from 'lucide-react';

const Navigation = ({ currentView, setCurrentView }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: <Coffee className="w-5 h-5 mr-1" /> },
    { id: 'bridge', label: 'The Bridge', icon: <Map className="w-5 h-5 mr-1" /> },
    { id: 'eco-market', label: 'Eco-Market', icon: <Store className="w-5 h-5 mr-1" /> },
    { id: 'cafe-portal', label: 'Cafe Portal', icon: <Coffee className="w-5 h-5 mr-1" /> },
  ];

  const handleNavClick = (id) => {
    setCurrentView(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer" 
            onClick={() => handleNavClick('home')}
          >
            <div className="bg-primary text-white p-2 rounded-full mr-2">
              <Coffee className="w-6 h-6" />
            </div>
            <span className="font-bold text-xl text-secondary">ReCoffee</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center text-sm font-medium transition-colors duration-200 border-b-2 px-1 py-5 ${
                  currentView === item.id
                    ? 'border-primary text-primary'
                    : 'border-transparent text-text-muted hover:text-primary hover:border-primary/50'
                }`}
              >
                {item.icon}
                {item.label}
              </button>
            ))}
          </nav>

          {/* Login Button (Desktop) */}
          <div className="hidden md:flex">
            <button
              onClick={() => handleNavClick('login')}
              className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                currentView === 'login'
                  ? 'bg-primary-dark text-white'
                  : 'bg-primary/10 text-primary hover:bg-primary hover:text-white'
              }`}
            >
              <LogIn className="w-4 h-4 mr-2" />
              Sign In
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-text-muted hover:text-primary focus:outline-none p-2"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg absolute w-full left-0 z-40">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center w-full px-3 py-4 rounded-md text-base font-medium ${
                  currentView === item.id
                    ? 'bg-primary/10 text-primary'
                    : 'text-text-muted hover:bg-gray-50 hover:text-primary'
                }`}
              >
                {item.icon}
                <span className="ml-2">{item.label}</span>
              </button>
            ))}
            <button
              onClick={() => handleNavClick('login')}
              className={`flex items-center w-full px-3 py-4 rounded-md text-base font-medium mt-4 ${
                currentView === 'login'
                  ? 'bg-primary text-white'
                  : 'bg-primary/10 text-primary hover:bg-primary hover:text-white'
              }`}
            >
              <LogIn className="w-5 h-5 mr-2" />
              Sign In
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
