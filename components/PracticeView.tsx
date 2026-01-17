
import React, { useState } from 'react';
// Fix: Import GraduationCap and PenTool from lucide-react to resolve "Cannot find name" errors
import { ArrowLeft, CheckCircle, XCircle, RefreshCw, Eye, Award, Image as ImageIcon, GraduationCap, PenTool } from 'lucide-react';
import { Lesson, QuestionMCQ } from '../types';

interface PracticeViewProps {
  lesson: Lesson;
  onBack: () => void;
}

type Mode = 'menu' | 'single' | 'all';

const PracticeView: React.FC<PracticeViewProps> = ({ lesson, onBack }) => {
  const [mode, setMode] = useState<Mode>('menu');
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [showResult, setShowResult] = useState<Record<string, boolean>>({}); 
  const [essayVisible, setEssayVisible] = useState<Record<string, boolean>>({});

  const mcqs = lesson.practice.mcq;
  const essays = lesson.practice.essay;
  const theme = lesson.colorTheme || 'from-blue-500 to-indigo-500';

  const resetPractice = () => {
    setUserAnswers({});
    setShowResult({});
    setCurrentQIndex(0);
    setEssayVisible({});
  };

  const handleModeSelect = (m: Mode) => {
    resetPractice();
    setMode(m);
  };

  const handleMCQSelect = (qId: string, key: string) => {
    if (showResult[qId] && mode === 'single') return; 
    if (mode === 'all' && showResult['all']) return; 

    setUserAnswers(prev => ({ ...prev, [qId]: key }));
  };

  const checkSingleAnswer = (qId: string) => {
    setShowResult(prev => ({ ...prev, [qId]: true }));
  };

  const submitAll = () => {
    const results: Record<string, boolean> = {};
    mcqs.forEach(q => results[q.id] = true);
    results['all'] = true; 
    setShowResult(results);
  };

  const calculateScore = () => {
    let correct = 0;
    mcqs.forEach(q => {
      if (userAnswers[q.id] === q.correctAnswer) correct++;
    });
    return Math.round((correct / mcqs.length) * 10);
  };

  // --- RENDER HELPERS ---

  const renderMCQCard = (q: QuestionMCQ, index: number, showFeedback: boolean) => {
    const isCorrect = userAnswers[q.id] === q.correctAnswer;
    const isAnswered = !!userAnswers[q.id];

    return (
      <div key={q.id} className="bg-white p-6 md:p-8 rounded-3xl shadow-lg border-2 border-white/50 mb-8 relative overflow-hidden group hover:shadow-xl transition-all duration-300">
        <div className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${theme}`}></div>
        
        <div className="flex justify-between items-start mb-6">
          <div className="flex gap-2">
            <span className={`bg-gradient-to-r ${theme} text-white font-bold px-4 py-1.5 rounded-full text-sm shadow-md`}>
              Câu {index + 1}
            </span>
            {q.difficulty && (
              <span className="bg-slate-100 text-slate-500 font-bold px-3 py-1.5 rounded-full text-xs border border-slate-200">
                {q.difficulty}
              </span>
            )}
          </div>
          {showFeedback && (
            isCorrect 
              ? <span className="flex items-center gap-1 text-green-500 bg-green-50 px-3 py-1 rounded-full font-bold border border-green-200"><CheckCircle size={18}/> Đúng rồi!</span>
              : <span className="flex items-center gap-1 text-red-500 bg-red-50 px-3 py-1 rounded-full font-bold border border-red-200"><XCircle size={18}/> Sai rồi</span>
          )}
        </div>
        
        <h3 className="text-xl font-bold text-slate-800 mb-6 leading-relaxed">{q.question}</h3>

        {q.imageUrl && (
          <div className="mb-6 rounded-2xl overflow-hidden border-2 border-slate-100 shadow-sm">
             <img src={q.imageUrl} alt="Hình minh họa" className="w-full h-auto object-contain max-h-80 bg-slate-50" />
          </div>
        )}

        <div className="grid grid-cols-1 gap-4">
          {q.options.map((opt) => {
            let containerClass = "flex items-center p-4 rounded-2xl border-2 cursor-pointer transition-all duration-200 relative overflow-hidden ";
            const isSelected = userAnswers[q.id] === opt.key;
            
            if (showFeedback) {
               if (opt.key === q.correctAnswer) {
                 containerClass += "border-green-500 bg-green-50 text-green-800 shadow-md transform scale-[1.01]";
               } else if (isSelected && opt.key !== q.correctAnswer) {
                 containerClass += "border-red-400 bg-red-50 text-red-800 opacity-80";
               } else {
                 containerClass += "border-slate-100 text-slate-400 opacity-50";
               }
            } else {
               containerClass += isSelected 
                ? `border-current text-indigo-600 bg-indigo-50 shadow-md font-semibold ring-2 ring-indigo-100` 
                : "border-slate-200 hover:border-indigo-300 hover:bg-slate-50 text-slate-700";
            }

            return (
              <div 
                key={opt.key} 
                onClick={() => handleMCQSelect(q.id, opt.key)}
                className={containerClass}
              >
                <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center mr-4 shrink-0 font-bold text-lg transition-colors ${
                  isSelected || (showFeedback && opt.key === q.correctAnswer) 
                    ? 'border-current bg-white' 
                    : 'border-slate-300 text-slate-400 bg-slate-50'
                }`}>
                  {opt.key}
                </div>
                <span className="text-lg">{opt.text}</span>
              </div>
            );
          })}
        </div>

        {showFeedback && (q.explanation || !isCorrect) && (
          <div className="mt-6 p-5 bg-gradient-to-br from-slate-50 to-blue-50/50 rounded-2xl text-slate-700 text-base border border-blue-100 shadow-inner">
            <span className="font-bold flex items-center gap-2 mb-2 text-blue-600">
              <GraduationCap size={20} /> Giải thích chi tiết:
            </span>
            {q.explanation || `Đáp án đúng là ${q.correctAnswer}. Hãy xem lại lý thuyết nhé!`}
          </div>
        )}
      </div>
    );
  };

  const renderEssaySection = () => (
    <div className="mt-12 pt-8 border-t-2 border-dashed border-slate-200">
      <h3 className="text-3xl font-extrabold text-slate-800 mb-8 flex items-center gap-3">
        <span className="bg-orange-100 p-2 rounded-xl text-orange-600"><PenTool size={28}/></span>
        Phần Tự Luận
      </h3>
      {essays.map((e, idx) => (
        <div key={e.id} className="bg-white p-6 md:p-8 rounded-3xl shadow-lg border border-slate-100 mb-8">
          <div className="flex gap-3 mb-4">
             <span className="bg-orange-100 text-orange-700 font-bold px-3 py-1 rounded-lg text-sm h-fit">Câu {idx + 1}</span>
             {e.difficulty && <span className="bg-slate-100 text-slate-500 font-bold px-3 py-1 rounded-lg text-sm h-fit">{e.difficulty}</span>}
          </div>
          <h4 className="font-bold text-lg mb-4 text-slate-800">{e.question}</h4>
          
          {e.imageUrl && (
            <div className="mb-4 rounded-xl overflow-hidden border border-slate-200">
               <img src={e.imageUrl} alt="Hình câu tự luận" className="max-h-60 mx-auto" />
            </div>
          )}

          <textarea 
            className="w-full p-4 border-2 border-slate-200 rounded-2xl focus:ring-4 focus:ring-orange-100 focus:border-orange-400 min-h-[120px] mb-4 text-slate-700 transition-all outline-none"
            placeholder="Nhập câu trả lời của em vào đây nhé..."
          ></textarea>
          
          <div className="flex justify-end">
            <button 
              onClick={() => setEssayVisible(prev => ({...prev, [e.id]: !prev[e.id]}))}
              className={`font-bold flex items-center gap-2 px-5 py-2.5 rounded-full transition-all shadow-sm ${
                essayVisible[e.id] 
                ? 'bg-slate-200 text-slate-700 hover:bg-slate-300' 
                : 'bg-orange-100 text-orange-600 hover:bg-orange-200'
              }`}
            >
              {essayVisible[e.id] ? <><Eye size={18} /> Ẩn gợi ý</> : <><Award size={18} /> Xem đáp án gợi ý</>}
            </button>
          </div>

          {essayVisible[e.id] && (
             <div className="mt-4 bg-gradient-to-r from-emerald-50 to-teal-50 p-5 rounded-2xl text-emerald-900 border border-emerald-100 animate-in fade-in slide-in-from-top-2">
               <span className="font-bold block mb-2 text-emerald-700">💡 Gợi ý trả lời:</span> 
               {e.sampleAnswer}
             </div>
          )}
        </div>
      ))}
    </div>
  );

  // --- MAIN RENDER ---

  if (mode === 'menu') {
    return (
      <div className="max-w-4xl mx-auto py-12 px-6">
        <button onClick={onBack} className="mb-8 flex items-center gap-2 text-slate-400 hover:text-slate-700 font-bold transition">
          <ArrowLeft size={24}/> Chọn bài khác
        </button>
        
        <div className="text-center mb-12">
          <h2 className={`text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r ${theme} mb-4`}>
            {lesson.title}
          </h2>
          <p className="text-xl text-slate-500">Sẵn sàng chinh phục kiến thức chưa nào? Chọn chế độ nhé! 🚀</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div onClick={() => handleModeSelect('single')} className="group bg-white p-8 rounded-[2rem] shadow-xl border-4 border-transparent hover:border-blue-400 cursor-pointer transition-all duration-300 hover:-translate-y-2">
            <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-600 group-hover:scale-110 group-hover:rotate-12 transition duration-300">
              <RefreshCw size={40} strokeWidth={2.5} />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-3 text-center">Luyện Từng Câu</h3>
            <p className="text-slate-500 text-center font-medium">Làm đến đâu biết đúng sai đến đó. Chậm mà chắc!</p>
          </div>

          <div onClick={() => handleModeSelect('all')} className="group bg-white p-8 rounded-[2rem] shadow-xl border-4 border-transparent hover:border-purple-400 cursor-pointer transition-all duration-300 hover:-translate-y-2">
            <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-purple-600 group-hover:scale-110 group-hover:-rotate-12 transition duration-300">
              <Award size={40} strokeWidth={2.5} />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-3 text-center">Thử Thách Toàn Bộ</h3>
            <p className="text-slate-500 text-center font-medium">Làm hết một lượt như thi thật. Thử thách bản lĩnh!</p>
          </div>
        </div>
      </div>
    );
  }

  // SINGLE MODE
  if (mode === 'single') {
    const q = mcqs[currentQIndex];
    if (!q) return <div className="p-10 text-center">Không có câu hỏi nào. <button onClick={() => setMode('menu')}>Quay lại</button></div>;

    return (
      <div className="max-w-3xl mx-auto py-10 px-6 min-h-screen flex flex-col">
        {/* Progress Header */}
        <div className="flex justify-between items-center mb-8">
          <button onClick={() => setMode('menu')} className="bg-white p-2 rounded-full shadow hover:bg-slate-50 text-slate-400 hover:text-red-500 transition"><XCircle size={24}/></button>
          
          <div className="flex-1 mx-6">
            <div className="flex justify-between text-xs font-bold text-slate-400 mb-2 uppercase tracking-wide">
              <span>Tiến độ</span>
              <span>{currentQIndex + 1} / {mcqs.length}</span>
            </div>
            <div className="bg-slate-200 h-3 w-full rounded-full overflow-hidden shadow-inner">
              <div className={`h-full bg-gradient-to-r ${theme} transition-all duration-500 ease-out`} style={{ width: `${((currentQIndex + 1) / mcqs.length) * 100}%` }}></div>
            </div>
          </div>
        </div>

        <div className="flex-1">
          {renderMCQCard(q, currentQIndex, !!showResult[q.id])}
        </div>

        <div className="flex justify-center gap-4 mt-8 pb-10">
          {!showResult[q.id] ? (
            <button 
              onClick={() => checkSingleAnswer(q.id)}
              disabled={!userAnswers[q.id]}
              className={`bg-gradient-to-r ${theme} text-white font-bold text-lg py-3 px-10 rounded-full shadow-lg hover:shadow-2xl hover:-translate-y-1 disabled:opacity-50 disabled:translate-y-0 disabled:shadow-none transition-all duration-300`}
            >
              Kiểm Tra Ngay
            </button>
          ) : (
             currentQIndex < mcqs.length - 1 ? (
              <button 
                onClick={() => setCurrentQIndex(prev => prev + 1)}
                className="bg-slate-800 text-white font-bold text-lg py-3 px-10 rounded-full shadow-lg hover:bg-slate-900 transition-all flex items-center gap-3 animate-bounce"
              >
                Câu Tiếp Theo <ArrowLeft className="rotate-180" size={20} />
              </button>
             ) : (
              <button 
                 onClick={() => setMode('menu')}
                 className="bg-green-500 text-white font-bold text-lg py-3 px-10 rounded-full shadow-lg hover:bg-green-600 transition-all flex items-center gap-2"
              >
                <Award /> Hoàn Thành
              </button>
             )
          )}
        </div>
      </div>
    );
  }

  // ALL MODE
  return (
    <div className="max-w-4xl mx-auto py-8 px-6 pb-32">
      <div className="flex items-center justify-between mb-10 sticky top-4 bg-white/90 backdrop-blur-md py-4 px-6 rounded-2xl z-20 shadow-lg border border-slate-100">
        <button onClick={() => setMode('menu')} className="flex items-center gap-2 text-slate-500 hover:text-slate-800 font-bold transition">
          <ArrowLeft size={20}/> Thoát
        </button>
        {showResult['all'] ? (
           <div className="bg-yellow-100 text-yellow-800 px-5 py-2 rounded-xl font-extrabold flex items-center gap-2 border border-yellow-200 shadow-sm animate-in zoom-in">
             <Award className="text-yellow-600" />
             KẾT QUẢ: {calculateScore()}/10
           </div>
        ) : (
          <div className="text-slate-500 font-bold">Đang làm bài... ✍️</div>
        )}
      </div>

      <div className="space-y-8">
        {mcqs.map((q, idx) => renderMCQCard(q, idx, !!showResult['all']))}
      </div>

      {renderEssaySection()}

      <div className="mt-16 flex justify-center">
        {!showResult['all'] ? (
          <button 
            onClick={submitAll}
            className={`bg-gradient-to-r ${theme} text-white font-bold text-xl py-4 px-16 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition transform active:scale-95`}
          >
            Nộp Bài & Xem Điểm
          </button>
        ) : (
          <div className="text-center bg-white p-8 rounded-3xl shadow-xl border-2 border-slate-100">
            <p className="text-2xl mb-6 font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              {calculateScore() === 10 ? "Xuất sắc! 10 điểm về chỗ! 🌟🎉" : calculateScore() >= 7 ? "Khá lắm! Cố gắng thêm chút nữa là 10 rồi! 🌱" : "Đừng buồn nha, xem lại lý thuyết rồi phục thù nào! 💪"}
            </p>
            <button 
              onClick={resetPractice}
              className="bg-slate-100 text-slate-700 font-bold py-3 px-8 rounded-full hover:bg-slate-200 transition flex items-center gap-2 mx-auto"
            >
              <RefreshCw size={20}/> Làm lại bài này
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PracticeView;
