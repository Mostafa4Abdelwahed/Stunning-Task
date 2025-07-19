import React, { memo, useState, useEffect } from 'react';

const Background = memo(({ children, className = '' }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <main className={`min-h-screen relative overflow-hidden bg-gradient-to-br from-[#0a0a0a] via-[#1a1a2e] to-[#16213e] flex items-center justify-center p-4 ${className}`}>
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-full blur-3xl"
          style={{
            left: `${Math.sin(Date.now() / 2000) * 20 + 10}%`,
            top: `${Math.cos(Date.now() / 3000) * 15 + 20}%`,
          }}
        />
        <div 
          className="absolute w-80 h-80 bg-gradient-to-r from-purple-500/15 to-pink-500/15 rounded-full blur-3xl"
          style={{
            right: `${Math.sin(Date.now() / 2500) * 25 + 15}%`,
            bottom: `${Math.cos(Date.now() / 3500) * 20 + 25}%`,
          }}
        />
        <div 
          className="absolute w-64 h-64 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 rounded-full blur-2xl"
          style={{
            left: mousePos.x / 30,
            top: mousePos.y / 30,
            transform: 'translate(-50%, -50%)',
          }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {children}
    </main>
  );
});

Background.displayName = 'Background';

export default Background; 