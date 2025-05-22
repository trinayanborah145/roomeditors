import { useEffect, useState } from 'react';
import './LoadingScreen.css';

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (you can adjust the duration)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds

    return () => clearTimeout(timer);
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
