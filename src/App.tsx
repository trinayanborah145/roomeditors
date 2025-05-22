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
      disable: window.innerWidth < 768 // Disable AOS on mobile for better performance
    });

    // Handle window resize for AOS
    const handleResize = () => {
      AOS.refresh();
      if (window.innerWidth < 768) {
        AOS.refreshHard();
      }
    };

    // Add resize event listener
    window.addEventListener('resize', handleResize);

    // Check if page is already loaded
    if (document.readyState === 'complete') {
      setIsLoading(false);
      document.body.style.overflow = 'auto';
    } else {
      // Add load event listener
      const handleLoad = () => {
        setIsLoading(false);
        document.body.style.overflow = 'auto';
      };

      window.addEventListener('load', handleLoad);
      
      // Cleanup
      return () => {
        window.removeEventListener('load', handleLoad);
        window.removeEventListener('resize', handleResize);
        document.body.style.overflow = 'auto';
      };
    }

    // Cleanup for the case where page is already loaded
    return () => {
      window.removeEventListener('resize', handleResize);
      document.body.style.overflow = 'auto';
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