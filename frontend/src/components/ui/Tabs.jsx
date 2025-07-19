import React, { memo } from 'react';

const Tabs = memo(({ 
  tabs, 
  activeTab, 
  onTabChange, 
  className = '' 
}) => {
  return (
    <div className={`flex space-x-2.5 p-6 pb-0 ${className}`}>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center space-x-2 ${
            activeTab === tab.id
              ? 'bg-purple-600 to-pink-600 text-white shadow-lg'
              : 'text-white/60 hover:text-white bg-white/10 cursor-pointer'
          }`}
        >
          <span>{tab.icon}</span>
          <span>{tab.label}</span>
        </button>
      ))}
    </div>
  );
});

Tabs.displayName = 'Tabs';

export default Tabs; 