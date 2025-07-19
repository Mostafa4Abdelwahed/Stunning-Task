import React, { memo } from 'react';
import { Lightbulb } from 'lucide-react';

const Header = memo(({ 
  title = "Spark Your Vision", 
  subtitle = "Transform ideas into digital reality",
  icon = <Lightbulb className='w-5 h-5 text-white' />
}) => {
  return (
    <div className="text-center mb-8">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-4 shadow-lg">
        <span className="text-2xl">{icon}</span>
      </div>
      <h1 className="text-white text-3xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-2">
        {title}
      </h1>
      <p className="text-white/60 text-sm font-medium">
        {subtitle}
      </p>
    </div>
  );
});

Header.displayName = 'Header';

export default Header; 