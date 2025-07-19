import React, { memo, useState } from 'react';
import { Copy, Check } from 'lucide-react';

const CodeViewer = memo(({ 
  code, 
  language = 'html',
  className = '' 
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy code:', error);
    }
  };

  return (
    <div className={`relative group ${className}`}>
      <button
        onClick={handleCopy}
        className="absolute top-4 right-4 cursor-pointer bg-white/10 hover:bg-white/20 border border-white/20 text-white/70 hover:text-white px-3 py-2 rounded-lg text-sm transition-all duration-200 flex items-center space-x-2 z-10"
      >
        <span>
          {copied ? <Check className='w-4 h-4 text-green-400' /> : <Copy className='w-4 h-4' />}
        </span>
        <span>{copied ? 'Copied!' : 'Copy'}</span>
      </button>
      <pre className="bg-[#0a0a0a] text-green-400 text-sm p-6 rounded-2xl overflow-x-auto border border-white/10 shadow-inner">
        <code>{code}</code>
      </pre>
    </div>
  );
});

CodeViewer.displayName = 'CodeViewer';

export default CodeViewer; 