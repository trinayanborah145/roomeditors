import { useEffect, useState } from 'react';
import * as AOS from 'aos';
import 'aos/dist/aos.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import LoadingScreen from './components/LoadingScreen';

import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import Portfolio from './sections/Portfolio';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });

    // Hide loading screen after all assets are loaded
    window.addEventListener('load', () => {
      setTimeout(() => {
        setIsLoading(false);
        document.body.style.overflow = 'auto';
      }, 2000); // Match this with the loading screen duration
    });

    // Prevent scrolling while loading
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('load', () => {});
    };
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;