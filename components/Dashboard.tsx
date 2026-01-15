import React from 'react';
import { Category } from '../types';

interface TopicStat {
  category: Category;
  total: number;
  correct: number;
  percentage: number;
}

interface Props {
  stats: {
    total: number;
    answered: number;
    correct: number;
    accuracy: number;
  };
  topicStats: TopicStat[];
}

export const Dashboard: React.FC<Props> = ({ stats, topicStats }) => {
  const incorrect = stats.answered - stats.correct;
  
  return (
    <div className="space-y-6 mb-8">
      {/* KPI Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <KpiCard 
          label="Completion" 
          value={`${Math.round((stats.answered / stats.total) * 100)}%`} 
          subValue={`${stats.answered}/${stats.total}`}
          icon={<svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
        />
        <KpiCard 
          label="Accuracy" 
          value={`${Math.round(stats.accuracy)}%`} 
          subValue={stats.accuracy > 80 ? 'Excellent' : stats.accuracy > 50 ? 'Good' : 'Needs Work'}
          icon={<svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>}
        />
        <KpiCard 
          label="Correct" 
          value={stats.correct.toString()} 
          subValue="Answers"
          icon={<svg className="w-5 h-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" /></svg>}
        />
        <KpiCard 
          label="Mistakes" 
          value={incorrect.toString()} 
          subValue="To Review"
          icon={<svg className="w-5 h-5 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>}
        />
      </div>

      {/* Domain Proficiency */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
        <h3 className="text-sm font-semibold text-slate-800 uppercase tracking-wide mb-6">Domain Proficiency</h3>
        <div className="space-y-5">
          {topicStats.map((topic) => (
            <div key={topic.category}>
              <div className="flex justify-between text-sm mb-1.5">
                <span className="font-medium text-slate-700">{topic.category}</span>
                <span className="text-slate-500 font-mono text-xs">{topic.correct}/{topic.total} ({Math.round(topic.percentage)}%)</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
                <div 
                  className={`h-full rounded-full transition-all duration-500 ${
                    topic.percentage >= 70 ? 'bg-emerald-500' : 
                    topic.percentage >= 40 ? 'bg-amber-400' : 'bg-rose-400'
                  }`}
                  style={{ width: `${Math.max(topic.percentage, 5)}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const KpiCard: React.FC<{ label: string; value: string; subValue: string; icon: React.ReactNode }> = ({ label, value, subValue, icon }) => (
  <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-start justify-between hover:shadow-md transition-shadow">
    <div>
      <p className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-1">{label}</p>
      <h4 className="text-2xl font-bold text-slate-900">{value}</h4>
      <p className="text-xs text-slate-400 mt-1">{subValue}</p>
    </div>
    <div className="p-2 bg-slate-50 rounded-lg">{icon}</div>
  </div>
);
