import React from 'react';
import { Question, QuestionStatus, Category } from '../types';

interface Props {
  data: Question;
  category: Category;
  status: QuestionStatus | undefined;
  onSelect: (questionId: number, optionIndex: number) => void;
  onToggleBookmark: (questionId: number) => void;
}

export const QuestionCard: React.FC<Props> = ({ data, category, status, onSelect, onToggleBookmark }) => {
  const isAnswered = status?.selectedOption !== undefined && status.selectedOption !== null;
  const isBookmarked = status?.isBookmarked || false;

  return (
    <div id={`q-${data.id}`} className="group bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden">
      
      {/* Header / Meta */}
      <div className="bg-slate-50/50 px-6 py-4 border-b border-slate-100 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono font-bold text-slate-400">#{data.id.toString().padStart(3, '0')}</span>
          <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium border ${
            category === 'Architecture' ? 'bg-purple-50 text-purple-700 border-purple-100' :
            category === 'Memory' ? 'bg-blue-50 text-blue-700 border-blue-100' :
            category === 'Protocols' ? 'bg-orange-50 text-orange-700 border-orange-100' :
            category === 'Real-Time' ? 'bg-rose-50 text-rose-700 border-rose-100' :
            'bg-slate-100 text-slate-600 border-slate-200'
          }`}>
            {category}
          </span>
        </div>
        <button 
          onClick={(e) => { e.stopPropagation(); onToggleBookmark(data.id); }}
          className={`focus:outline-none transition-colors duration-200 ${isBookmarked ? 'text-amber-400' : 'text-slate-300 hover:text-amber-400'}`}
          title="Bookmark for review"
        >
          <svg className="w-5 h-5" fill={isBookmarked ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
          </svg>
        </button>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-medium text-slate-900 leading-relaxed mb-6">
          {data.question}
        </h3>

        <div className="grid grid-cols-1 gap-3">
          {data.options.map((option, index) => {
            let containerClass = "relative w-full text-left px-4 py-3 rounded-lg border transition-all duration-200 flex items-start ";
            let textClass = "text-sm ";
            let indicatorClass = "flex-shrink-0 w-5 h-5 rounded-full border mr-3 flex items-center justify-center text-[10px] mt-0.5 ";

            if (!isAnswered) {
              containerClass += "border-slate-200 hover:border-indigo-300 hover:bg-slate-50";
              textClass += "text-slate-700";
              indicatorClass += "border-slate-300 text-slate-400";
            } else {
              if (index === data.correctAnswer) {
                containerClass += "bg-emerald-50/50 border-emerald-500 shadow-sm ring-1 ring-emerald-500/20";
                textClass += "text-emerald-900 font-medium";
                indicatorClass += "border-emerald-500 bg-emerald-500 text-white";
              } else if (index === status.selectedOption) {
                containerClass += "bg-rose-50/50 border-rose-500";
                textClass += "text-rose-900";
                indicatorClass += "border-rose-500 bg-rose-500 text-white";
              } else {
                containerClass += "bg-slate-50 border-slate-100 opacity-50 grayscale";
                textClass += "text-slate-500";
                indicatorClass += "border-slate-200 text-slate-300";
              }
            }

            return (
              <button
                key={index}
                disabled={isAnswered}
                onClick={() => onSelect(data.id, index)}
                className={containerClass}
              >
                <span className={indicatorClass}>
                  {String.fromCharCode(65 + index)}
                </span>
                <span className={textClass}>{option}</span>
              </button>
            );
          })}
        </div>
        
        {isAnswered && !status.isCorrect && (
          <div className="mt-5 text-sm flex items-center gap-2 text-slate-500 bg-slate-50 py-2 px-3 rounded border border-slate-100">
            <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span>Correct Answer: <span className="font-semibold text-slate-700">{String.fromCharCode(65 + data.correctAnswer)}</span></span>
          </div>
        )}
      </div>
    </div>
  );
};