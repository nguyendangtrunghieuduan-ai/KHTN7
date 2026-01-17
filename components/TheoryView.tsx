
import React from 'react';
import { ArrowLeft, BookOpen, AlertTriangle, List, Radio, MessageSquare } from 'lucide-react';
import { Lesson, TheorySection } from '../types';

interface TheoryViewProps {
  lesson: Lesson;
  onBack: () => void;
  onOpenChat: () => void; // Function to trigger chat with specific context if needed
}

const TheoryView: React.FC<TheoryViewProps> = ({ lesson, onBack, onOpenChat }) => {
  
  const renderSection = (section: TheorySection, index: number) => {
    switch (section.type) {
      case 'concept':
        return (
          <div key={index} className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg mb-6 shadow-sm">
            <h4 className="text-blue-800 font-bold mb-2 flex items-center gap-2">
              <BookOpen size={18} /> {section.title}
            </h4>
            <div className="text-slate-700 text-lg leading-relaxed whitespace-pre-line">
              {section.content}
            </div>
          </div>
        );
      case 'warning':
        return (
          <div key={index} className="bg-orange-50 border border-orange-200 p-4 rounded-lg mb-6 flex items-start gap-3">
            <AlertTriangle className="text-orange-500 shrink-0 mt-1" />
            <div>
              <h4 className="text-orange-800 font-bold mb-1">{section.title}</h4>
              <p className="text-orange-900 whitespace-pre-line">{section.content}</p>
            </div>
          </div>
        );
      case 'diagram':
        return (
          <div key={index} className="bg-white border-2 border-dashed border-slate-300 p-6 rounded-xl mb-6 text-center">
            <h4 className="text-slate-500 font-semibold mb-3 uppercase tracking-wider text-xs">{section.title}</h4>
            <div className="font-mono text-blue-600 bg-blue-50 p-4 rounded-lg inline-block shadow-inner whitespace-pre-wrap text-left md:text-center">
              {section.content}
            </div>
          </div>
        );
      case 'bullet':
        return (
          <div key={index} className="mb-6">
            <h4 className="text-lg font-bold text-slate-800 mb-3 flex items-center gap-2">
              <List size={20} className="text-green-600" /> {section.title}
            </h4>
            <ul className="list-disc list-inside space-y-2 text-slate-700 bg-white p-4 rounded-lg shadow-sm border border-slate-100">
              {section.content.trim().split('\n').map((line, idx) => (
                 line.trim().startsWith('-') || line.trim().startsWith('◦')
                 ? <li key={idx} className="pl-2">{line.replace(/^[-◦]/, '').trim()}</li>
                 : <p key={idx} className="font-semibold text-slate-800 mt-2">{line}</p>
              ))}
            </ul>
          </div>
        );
      default: // text
        return (
          <div key={index} className="mb-6">
            <h3 className="text-xl font-bold text-slate-800 mb-3 border-b pb-2">{section.title}</h3>
            <div className="prose text-slate-700 max-w-none whitespace-pre-line">
              {section.content}
            </div>
          </div>
        );
    }
  };

  return (
    <div className="max-w-4xl mx-auto pb-20">
      <button 
        onClick={onBack}
        className="mb-4 flex items-center gap-2 text-slate-500 hover:text-blue-600 transition font-semibold"
      >
        <ArrowLeft size={20} /> Quay lại danh sách
      </button>

      <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
        {/* Header Image/Banner Area */}
        <div className="bg-gradient-to-r from-emerald-400 to-cyan-500 h-32 md:h-48 flex items-center justify-center p-6 relative">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10 text-center text-white">
            <span className="bg-white/20 px-3 py-1 rounded-full text-xs md:text-sm font-bold uppercase tracking-wide backdrop-blur-sm">
              {lesson.topic}
            </span>
            <h1 className="text-2xl md:text-4xl font-extrabold mt-3 drop-shadow-md">{lesson.title}</h1>
          </div>
        </div>

        <div className="p-6 md:p-10">
          {/* Objectives */}
          <div className="mb-8 bg-indigo-50 rounded-2xl p-6">
            <h3 className="text-indigo-800 font-bold mb-3 flex items-center gap-2">
              <Radio size={20} /> Mục tiêu bài học
            </h3>
            <ul className="space-y-2">
              {lesson.objectives.map((obj, i) => (
                <li key={i} className="flex items-start gap-2 text-indigo-900">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-indigo-500 rounded-full shrink-0"></span>
                  <span>{obj}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Theory Sections */}
          <div className="space-y-4">
            {lesson.theory.map((section, idx) => renderSection(section, idx))}
          </div>

          {/* Call to Action for AI */}
          <div className="mt-10 border-t pt-8 flex flex-col md:flex-row items-center justify-between gap-4 bg-slate-50 p-6 rounded-2xl">
            <div className="text-center md:text-left">
              <h4 className="font-bold text-slate-800">Em còn thắc mắc về bài học này?</h4>
              <p className="text-slate-500 text-sm">Thầy Hiếu GenZ đang đợi câu hỏi của em đó!</p>
            </div>
            <button 
              onClick={onOpenChat}
              className="bg-white border-2 border-violet-500 text-violet-600 hover:bg-violet-50 font-bold py-2 px-6 rounded-full flex items-center gap-2 transition"
            >
              <MessageSquare size={18} /> Hỏi Thầy Hiếu ngay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheoryView;
