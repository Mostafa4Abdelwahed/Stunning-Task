import React, { memo } from 'react';

const LoadingMessage = memo(() => {
  return (
    <div className="flex justify-start">
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-500 flex items-center justify-center text-white">
          🤖
        </div>
        <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl rounded-bl-md px-6 py-4">
          <div className="flex items-center space-x-2">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-slate-400 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-slate-400 rounded-full animate-pulse" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-2 h-2 bg-slate-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            </div>
            <span className="text-slate-300 text-sm">AI is thinking...</span>
          </div>
        </div>
      </div>
    </div>
  );
});

LoadingMessage.displayName = 'LoadingMessage';

export default LoadingMessage; 