import React, { createContext, useContext, useState } from 'react';

const RainbowContext = createContext();

export const useRainbow = () => {
  const context = useContext(RainbowContext);
  if (!context) {
    throw new Error('useRainbow must be used within a RainbowProvider');
  }
  return context;
};

export const RainbowProvider = ({ children }) => {
  const [currentRainbowColor, setCurrentRainbowColor] = useState(0);
  const [rainbowColors] = useState([
    { name: 'red', hex: '#FF3B30', darkHex: '#ff6b6b' },
    { name: 'orange', hex: '#FF9500', darkHex: '#ff9e4a' },
    { name: 'yellow', hex: '#FFCC00', darkHex: '#ffd166' },
    { name: 'green', hex: '#4CD964', darkHex: '#5de06c' },
    { name: 'cyan', hex: '#5AC8FA', darkHex: '#6ee7ff' },
    { name: 'blue', hex: '#007AFF', darkHex: '#4a9eff' },
    { name: 'purple', hex: '#5856D6', darkHex: '#8a88ff' },
  ]);

  const getRainbowColor = (index) => {
    return rainbowColors[index % rainbowColors.length];
  };

  const value = {
    currentRainbowColor,
    setCurrentRainbowColor,
    rainbowColors,
    getRainbowColor
  };

  return (
    <RainbowContext.Provider value={value}>
      {children}
    </RainbowContext.Provider>
  );
};