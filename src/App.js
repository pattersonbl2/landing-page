import React, { useState, useEffect } from 'react';
import './App.css'; // You can define your styles in this CSS file

const SplashPage = () => {
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingProgress(prevProgress => (prevProgress >= 100 ? 0 : prevProgress + 10));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="splash-container">
      <div className="loading-bar" style={{ width: `${loadingProgress}%` }}></div>
      <p className="coming-soon">Coming Soon</p>
      <p>Check out my GitHub profile:</p>
      <a href="https://github.com/pattersonbl2">GitHub Profile</a>
    </div>
  );
};

export default SplashPage;
