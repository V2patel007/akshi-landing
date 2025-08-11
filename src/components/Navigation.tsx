import React from 'react';

const Navigation: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-transparent">
      <nav className="container mx-auto px-6 py-6">
        <div className="flex justify-center items-center">
          <div className="text-white text-2xl font-bold tracking-wider">
            AKSHI
            <div className="text-xs text-gray-400 font-normal tracking-normal">
              YOUR PERSONAL AI
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;