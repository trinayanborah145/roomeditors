import { useEffect, useState } from 'react';
import './LoadingScreen.css';

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if the page has already loaded
    if (document.readyState === 'complete') {
      setIsLoading(false);
      return;
    }

    // Set a maximum loading time (5 seconds) to ensure it doesn't get stuck
    const maxLoadTime = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = 'auto';
    }, 5000);

    // Handle page load
    const handleLoad = () => {
      clearTimeout(maxLoadTime);
      setIsLoading(false);
      document.body.style.overflow = 'auto';
    };

    // Add event listeners
    window.addEventListener('load', handleLoad);
    window.addEventListener('DOMContentLoaded', handleLoad);

    // Cleanup
    return () => {
      clearTimeout(maxLoadTime);
      window.removeEventListener('load', handleLoad);
      window.removeEventListener('DOMContentLoaded', handleLoad);
      document.body.style.overflow = 'auto';
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div className="loading-screen">
      <div className="loading-content">
        <div className="loading-spinner"></div>
        <h1 className="loading-text">Room Editors</h1>
      </div>
    </div>
  );
};

export default LoadingScreen;
