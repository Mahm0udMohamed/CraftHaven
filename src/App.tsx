import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FeaturedProducts } from './components/FeaturedProducts';
import { MeetArtisans } from './components/MeetArtisans';
import { Footer } from './components/Footer';
import { ShopPage } from './components/ShopPage';
import { useDarkMode } from './hooks/useDarkMode';

function App() {
  const [isDark, setIsDark] = useDarkMode();

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  return (
    <div className="min-h-screen bg-craft-light-bg dark:bg-craft-dark-bg transition-colors duration-200">
      <Header isDark={isDark} toggleDarkMode={toggleDarkMode} />
      <main>
        {/* For now, we'll show both pages. Later we'll add routing */}
        <Hero />
        <FeaturedProducts />
        <MeetArtisans />
        <ShopPage />
      </main>
      <Footer />
    </div>
  );
}

export default App;