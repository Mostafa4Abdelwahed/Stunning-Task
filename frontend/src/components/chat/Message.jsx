import React, { memo } from 'react';
import { User, Bot, File } from 'lucide-react';

const Message = memo(({ 
  message, 
  index, 
  onFileClick 
}) => {
  const isUser = message.role === 'user';
  
  return (
    <div
      className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className={`flex items-start space-x-3 max-w-[85%] group ${isUser ? 'flex-row-reverse space-x-reverse' : ''}`}>
        {/* Avatar */}
        <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold shadow-lg transition-transform ${
          isUser
            ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
            : 'bg-gradient-to-r from-emerald-400 to-cyan-500 text-white'
        }`}>
          {isUser ? <User className='w-5 h-5' /> : <Bot className="w-5 h-5" />}
        </div>

        {/* Message Content */}
        <div className={`relative px-6 py-4 rounded-2xl shadow-lg backdrop-blur-sm transition-all duration-300 group-hover:shadow-xl ${
          isUser
            ? 'bg-gradient-to-r from-blue-500/90 to-purple-600/90 text-white border border-white/20 rounded-br-md'
            : 'bg-white/10 text-slate-100 border border-white/10 rounded-bl-md'
        }`}>
          <div className="relative z-10">
            {message.isFile ? (
              <button
                onClick={() => onFileClick(message.sections)}
                className="flex items-center cursor-pointer space-x-1 text-blue-300 hover:text-blue-100 transition-colors duration-200 underline decoration-dotted underline-offset-2"
              >
                <span className="text-lg"><File className='w-4 h-4' /></span>
                <span className="font-medium">{message.content}</span>
              </button>
            ) : message.isHtml ? (
              <div dangerouslySetInnerHTML={{ __html: message.content }} />
            ) : (
              <p className="whitespace-pre-line leading-relaxed">{message.content}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
});

Message.displayName = 'Message';

export default Message; 