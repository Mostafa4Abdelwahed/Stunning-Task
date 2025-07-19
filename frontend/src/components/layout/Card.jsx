import React, { memo } from 'react';

const Card = memo(({ 
  children, 
  className = '', 
  maxWidth = 'max-w-lg',
  padding = 'p-10'
}) => {
  return (
    <div
      className={`relative w-full ${maxWidth} bg-white/5 backdrop-blur-xl border border-white/10 ${padding} rounded-3xl shadow-2xl transform transition-all duration-300 hover:shadow-3xl ${className}`}
      style={{
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.05)',
      }}
    >
      {/* Floating particles */}
      <div className="absolute -top-2 -left-2 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-60" />
      <div className="absolute -top-1 -right-3 w-2 h-2 bg-gradient-to-r from-pink-400 to-red-500 rounded-full opacity-40" />
      <div className="absolute -bottom-3 left-10 w-3 h-3 bg-gradient-to-r from-green-400 to-cyan-500 rounded-full opacity-50" />

      {children}

      {/* Subtle glow effect */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-xl -z-10 opacity-50" />
    </div>
  );
});

Card.displayName = 'Card';

export default Card; 