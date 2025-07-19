import React, { memo, forwardRef } from 'react';

const Input = memo(forwardRef(({ 
  value, 
  onChange, 
  placeholder, 
  disabled = false, 
  className = '',
  type = 'text',
  ...props 
}, ref) => {
  const baseClasses = 'w-full p-5 bg-white/10 backdrop-blur-sm border-white/20 text-white rounded-2xl border-2 transition-all duration-300 placeholder-white/40 focus:outline-none focus:bg-white/15 focus:border-blue-400/50 focus:shadow-lg focus:shadow-blue-500/25';
  
  return (
    <input
      ref={ref}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      className={`${baseClasses} ${className}`}
      {...props}
    />
  );
}));

Input.displayName = 'Input';

export default Input; 