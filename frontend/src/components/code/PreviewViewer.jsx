import React, { memo } from 'react';

const PreviewViewer = memo(({ 
  sections, 
  className = '' 
}) => {
  return (
    <div className={`bg-white rounded-2xl p-2.5 text-black shadow-inner ${className}`}>
      {sections?.map((section, i) => (
        <div key={i} dangerouslySetInnerHTML={{ __html: section.content }} />
      ))}
    </div>
  );
});

PreviewViewer.displayName = 'PreviewViewer';

export default PreviewViewer; 