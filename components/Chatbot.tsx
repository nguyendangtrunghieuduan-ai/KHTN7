
import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Zap } from 'lucide-react';
import { ChatMessage } from '../types';
import { sendMessageToGemini } from '../services/geminiService';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Helu các bạn trẻ! Thầy Hiếu GenZ đây ⚡. Thắc mắc gì về KHTN thì hỏi ngay, thầy cân tất! 🚀' }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!inputText.trim()) return;

    const userMsg: ChatMessage = { role: 'user', text: inputText };
    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsLoading(true);

    const replyText = await sendMessageToGemini(inputText);
    
    const botMsg: ChatMessage = { role: 'model', text: replyText };
    setMessages(prev => [...prev, botMsg]);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
      {/* Chat Window */}
      <div 
        className={`bg-white w-80 md:w-96 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 origin-bottom-right pointer-events-auto border border-violet-200 ${
          isOpen ? 'opacity-100 scale-100 mb-4 translate-y-0' : 'opacity-0 scale-95 translate-y-10 h-0 mb-0'
        }`}
        style={{ maxHeight: '500px', display: isOpen ? 'flex' : 'none', flexDirection: 'column' }}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-violet-600 to-indigo-600 p-4 text-white flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-white/20 p-2 rounded-full border border-white/30 backdrop-blur-md">
              <Zap size={20} className="text-yellow-300 fill-current" />
            </div>
            <div>
              <h3 className="font-extrabold text-lg leading-none">Thầy Hiếu GenZ ⚡</h3>
              <p className="text-xs text-indigo-100 font-bold mt-1">Đam mê - Sáng tạo 🚀</p>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1 rounded-lg transition">
            <X size={20} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 bg-slate-50 space-y-4 h-80">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div 
                className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm shadow-sm whitespace-pre-wrap leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-violet-600 text-white rounded-br-none' 
                    : 'bg-white text-slate-800 border border-slate-200 rounded-bl-none'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white border border-slate-200 rounded-2xl rounded-bl-none px-4 py-3 shadow-sm">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-violet-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 bg-violet-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-2 h-2 bg-violet-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-3 bg-white border-t border-slate-100 flex items-center gap-2">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Hỏi thầy một câu thật khó xem..."
            className="flex-1 bg-slate-100 text-slate-800 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 transition"
          />
          <button 
            onClick={handleSend}
            disabled={isLoading || !inputText.trim()}
            className="bg-violet-600 text-white p-2.5 rounded-full hover:bg-violet-700 disabled:opacity-50 disabled:cursor-not-allowed transition shadow-md"
          >
            <Send size={18} />
          </button>
        </div>
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="pointer-events-auto bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white p-4 rounded-full shadow-lg hover:shadow-violet-500/30 transition-all duration-300 transform hover:scale-110 flex items-center justify-center group border-2 border-white"
      >
        {isOpen ? <X size={28} /> : <div className="relative"><MessageCircle size={28} /><span className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 border-2 border-white rounded-full animate-pulse"></span></div>}
        {!isOpen && (
          <span className="absolute right-full mr-4 bg-slate-900 text-white px-4 py-2 rounded-xl text-sm font-bold shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            Chat với Thầy Hiếu! ⚡
          </span>
        )}
      </button>
    </div>
  );
};

export default Chatbot;
