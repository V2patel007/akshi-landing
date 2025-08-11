import React from 'react';

const Navigation: React.FC = () => {
  return (
    <header 
      className="absolute top-0 left-0 right-0 z-40">
      <nav className="container mx-auto px-6 py-6">
        <div className="flex justify-between items-center">
          <div className="flex-1"></div>
          <img
            src="https://res.cloudinary.com/dy9hjd10h/image/upload/v1754862550/Hi_1_hgycbl.svg"
            alt="AKSHI Logo"
            className="h-20 w-auto"
          />
          <div className="flex-1"></div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
