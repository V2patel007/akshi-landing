import React, { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import ComparisonSection from './components/ComparisonSection';
import DreamSection from './components/DreamSection';
import AboutSection from './components/AboutSection';
import ConnectSection from './components/ConnectSection';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  // Load custom fonts
  useEffect(() => {
    const link1 = document.createElement('link');
    link1.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap';
    link1.rel = 'stylesheet';
    document.head.appendChild(link1);

    return () => {
      document.head.removeChild(link1);
    };
  }, []);

  if (isLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a23] via-[#1a1a3a] to-[#000000] text-white">
      <Navigation />
      <main>
        <HeroSection />
        <ComparisonSection />
        <DreamSection />
        <AboutSection />
        <ConnectSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;