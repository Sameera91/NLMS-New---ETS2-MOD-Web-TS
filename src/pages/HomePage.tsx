import React from 'react';
import Hero from '../components/home/Hero';
import FeaturedMods from '../components/home/FeaturedMods';
import Stats from '../components/home/Stats';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <FeaturedMods />
      <Stats />
    </div>
  );
};

export default HomePage;