import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Home from './views/Home';
import Login from './views/Login';
import CafePortal from './views/CafePortal';
import Bridge from './views/Bridge';
import EcoMarket from './views/EcoMarket';

function App() {
  const [currentView, setCurrentView] = useState('home');

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return <Home setCurrentView={setCurrentView} />;
      case 'login':
        return <Login setCurrentView={setCurrentView} />;
      case 'cafe-portal':
        return <CafePortal />;
      case 'bridge':
        return <Bridge />;
      case 'eco-market':
        return <EcoMarket />;
      default:
        return <Home setCurrentView={setCurrentView} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-text-main">
      <Navigation currentView={currentView} setCurrentView={setCurrentView} />
      <main className="flex-1 w-full max-w-7xl mx-auto p-4 md:p-8">
        {renderView()}
      </main>
      
      {/* Simple Footer */}
      <footer className="bg-secondary text-white py-6 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="opacity-90">© {new Date().getFullYear()} ReCoffee. Bridging cafes to a circular economy.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
