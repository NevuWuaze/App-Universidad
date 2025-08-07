import React, { useState, useEffect } from 'react';
import SplashScreen from './components/SplashScreen';
import MainScreen from './components/MainScreen';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showSplash ? <SplashScreen /> : <MainScreen />}
    </>
  );
}

export default App;
