
import React, { useState } from 'react';
import { Book, PenTool, MessageSquare, ChevronRight, Zap, ArrowLeft, Star, Rocket } from 'lucide-react';
import { AppView, Lesson } from './types';
import { CURRICULUM, TOPICS } from './data';
import TheoryView from './components/TheoryView';
import PracticeView from './components/PracticeView';
import Chatbot from './components/Chatbot';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>(AppView.HOME);
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);

  const handleLessonSelect = (lesson: Lesson, type: 'theory' | 'practice') => {
    setSelectedLesson(lesson);
    setCurrentView(type === 'theory' ? AppView.THEORY_DETAIL : AppView.PRACTICE_DETAIL);
    window.scrollTo(0, 0);
  };

  const renderHome = () => (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <header className="text-center mb-16 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-violet-400 rounded-full blur-[120px] opacity-30 -z-10"></div>
        <div className="absolute top-10 right-1/4 w-32 h-32 bg-cyan-400 rounded-full blur-[100px] opacity-20 -z-10"></div>
        
        <div className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-2 rounded-full font-bold text-sm mb-6 shadow-xl border border-violet-500/30 animate-fade-in-up">
           <Zap size={18} className="text-yellow-400 fill-current" /> Thầy Hiếu GenZ
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-800 mb-6 tracking-tight leading-tight">
          Khoa Học <br className="md:hidden"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-500">Đam Mê</span> 🧬
        </h1>
        
        <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
          Chào mừng các bạn đến với vũ trụ KHTN 7! <br/> 
          Tại đây, chúng ta học vì <span className="font-bold text-violet-600">Đam Mê</span> chứ không chỉ vì <span className="line-through decoration-slate-400 decoration-2 text-slate-400">Điểm Số</span>. 🚀
        </p>
      </header>

      <div className="grid md:grid-cols-3 gap-8 px-4">
        {/* Card 1: Theory */}
        <div 
          onClick={() => setCurrentView(AppView.THEORY_LIST)}
          className="bg-white rounded-[2.5rem] p-8 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group border border-slate-100 hover:border-blue-200 relative overflow-hidden"
        >
          <div className="absolute -right-12 -top-12 w-40 h-40 bg-blue-50 rounded-full group-hover:scale-125 transition-transform duration-500"></div>
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:rotate-6 transition duration-300 relative z-10 shadow-lg shadow-blue-200">
            <Book size={36} />
          </div>
          <h2 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition relative z-10">Kho Tàng Kiến Thức</h2>
          <p className="text-slate-500 mb-8 font-medium relative z-10">Lý thuyết trọng tâm, dễ hiểu, không lan man. Học là thấm!</p>
          <span className="flex items-center text-blue-600 font-bold text-sm bg-blue-50 w-fit px-4 py-2 rounded-full group-hover:bg-blue-600 group-hover:text-white transition-colors relative z-10">
            Khám phá ngay <ChevronRight size={16} className="ml-1" />
          </span>
        </div>

        {/* Card 2: Practice */}
        <div 
          onClick={() => setCurrentView(AppView.PRACTICE_LIST)}
          className="bg-white rounded-[2.5rem] p-8 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group border border-slate-100 hover:border-cyan-200 relative overflow-hidden"
        >
          <div className="absolute -right-12 -top-12 w-40 h-40 bg-cyan-50 rounded-full group-hover:scale-125 transition-transform duration-500"></div>
          <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:-rotate-6 transition duration-300 relative z-10 shadow-lg shadow-cyan-200">
            <PenTool size={36} />
          </div>
          <h2 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-cyan-600 transition relative z-10">Đấu Trường Luyện Tập</h2>
          <p className="text-slate-500 mb-8 font-medium relative z-10">Thử thách bản thân với hàng trăm câu hỏi trắc nghiệm cực chất.</p>
          <span className="flex items-center text-cyan-600 font-bold text-sm bg-cyan-50 w-fit px-4 py-2 rounded-full group-hover:bg-cyan-600 group-hover:text-white transition-colors relative z-10">
            Chiến luôn <ChevronRight size={16} className="ml-1" />
          </span>
        </div>

        {/* Card 3: Chatbot */}
        <div 
           className="bg-gradient-to-br from-violet-600 to-fuchsia-600 rounded-[2.5rem] p-8 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-32 bg-white opacity-10 rounded-full -mr-16 -mt-16 group-hover:scale-125 transition-transform duration-700"></div>
          <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center text-white mb-6 backdrop-blur-sm group-hover:scale-110 transition duration-300 shadow-inner border border-white/20">
            <Rocket size={36} />
          </div>
          <h2 className="text-2xl font-bold mb-3">Hỏi Thầy Hiếu</h2>
          <p className="text-violet-100 mb-8 font-medium">Trợ lý AI siêu cấp vip pro. Hỏi đáp 24/7 mọi lúc mọi nơi.</p>
          <span className="flex items-center text-violet-700 font-bold text-sm bg-white w-fit px-5 py-2.5 rounded-full shadow-lg group-hover:scale-105 transition-transform">
            Chat ngay 👇
          </span>
        </div>
      </div>
    </div>
  );

  const renderLessonList = (type: 'theory' | 'practice') => (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <button 
        onClick={() => setCurrentView(AppView.HOME)}
        className="mb-8 flex items-center gap-2 text-slate-500 hover:text-slate-800 font-bold transition bg-white px-5 py-2.5 rounded-full shadow-sm border border-slate-200"
      >
        <ArrowLeft size={20} /> Về Trang Chủ
      </button>

      <div className="flex items-center gap-4 mb-10">
        <div className={`p-4 rounded-2xl ${type === 'theory' ? 'bg-blue-100 text-blue-600' : 'bg-cyan-100 text-cyan-600'}`}>
          {type === 'theory' ? <Book size={32}/> : <PenTool size={32}/>}
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800">
          {type === 'theory' ? 'Thư Viện Kiến Thức' : 'Đấu Trường Luyện Tập'}
        </h2>
      </div>

      <div className="space-y-12">
        {TOPICS.map(topic => (
          <div key={topic} className="relative">
             <div className="sticky top-0 bg-slate-50/95 backdrop-blur-md py-4 z-10 mb-4 border-b border-slate-200">
                <h3 className="text-lg font-bold text-slate-500 uppercase tracking-wider flex items-center gap-2">
                  <Star size={18} fill="currentColor" className="text-yellow-400"/> {topic}
                </h3>
             </div>
            <div className="grid md:grid-cols-2 gap-5">
              {CURRICULUM.filter(l => l.topic === topic).map(lesson => (
                <div 
                  key={lesson.id}
                  onClick={() => handleLessonSelect(lesson, type)}
                  className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200 hover:border-violet-300 hover:shadow-lg hover:shadow-violet-100 cursor-pointer transition-all duration-300 flex items-center justify-between group relative overflow-hidden"
                >
                  <div className={`absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b ${lesson.colorTheme || 'from-slate-300 to-slate-400'} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                  
                  <div className="flex items-center gap-5">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 font-bold text-xl text-white shadow-md bg-gradient-to-br ${lesson.colorTheme || 'from-slate-400 to-slate-500'}`}>
                      {lesson.title.match(/Bài (\d+)/)?.[1] || '?'}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-lg group-hover:text-violet-700 transition line-clamp-1">{lesson.title.split(':')[1]?.trim() || lesson.title}</h4>
                      <p className="text-sm text-slate-400 mt-1 font-medium group-hover:text-slate-500 transition">{type === 'theory' ? 'Đọc 5 phút' : `${lesson.practice.mcq.length} câu trắc nghiệm`}</p>
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-300 group-hover:bg-violet-100 group-hover:text-violet-600 transition-colors">
                    <ChevronRight size={20} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-violet-200 selection:text-violet-900 text-slate-800 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]">
      {currentView === AppView.HOME && renderHome()}
      {currentView === AppView.THEORY_LIST && renderLessonList('theory')}
      {currentView === AppView.PRACTICE_LIST && renderLessonList('practice')}
      
      {currentView === AppView.THEORY_DETAIL && selectedLesson && (
        <TheoryView 
          lesson={selectedLesson} 
          onBack={() => setCurrentView(AppView.THEORY_LIST)} 
          onOpenChat={() => {}} 
        />
      )}
      
      {currentView === AppView.PRACTICE_DETAIL && selectedLesson && (
        <PracticeView 
          lesson={selectedLesson} 
          onBack={() => setCurrentView(AppView.PRACTICE_LIST)} 
        />
      )}

      {/* Global Chatbot */}
      <Chatbot />

      {/* Footer */}
      {currentView === AppView.HOME && (
        <footer className="py-8 text-center text-slate-400 text-sm mt-auto relative z-10">
          <p className="flex items-center justify-center gap-2 font-medium">
            © 2024 Thầy Hiếu GenZ <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span> Khơi nguồn đam mê khoa học ❤️
          </p>
        </footer>
      )}
    </div>
  );
};

export default App;
