import React, { useState, useMemo, useEffect } from 'react';
import { questions } from './data/questions';
import { QuestionCard } from './components/QuestionCard';
import { Dashboard } from './components/Dashboard';
import { QuestionStatus, Category, Question } from './types';

// Helper to categorize questions
const getCategory = (q: string): Category => {
  const text = q.toLowerCase();
  if (text.includes('risc') || text.includes('cisc') || text.includes('harvard') || text.includes('von neumann') || text.includes('pipeline') || text.includes('bus') || text.includes('cpu') || text.includes('mcu')) return 'Architecture';
  if (text.includes('ram') || text.includes('rom') || text.includes('flash') || text.includes('cache') || text.includes('memory') || text.includes('eeprom')) return 'Memory';
  if (text.includes('i2c') || text.includes('spi') || text.includes('uart') || text.includes('can') || text.includes('usb') || text.includes('protocol') || text.includes('serial')) return 'Protocols';
  if (text.includes('real-time') || text.includes('scheduling') || text.includes('latency') || text.includes('interrupt') || text.includes('rtos') || text.includes('watchdog')) return 'Real-Time';
  if (text.includes('timer') || text.includes('adc') || text.includes('dac') || text.includes('gpio') || text.includes('pwm') || text.includes('sensor')) return 'Hardware';
  return 'General';
};

type ViewMode = 'dashboard' | 'questions';
type FilterStatus = 'all' | 'incorrect' | 'bookmarked';

function App() {
  const [answers, setAnswers] = useState<Record<number, QuestionStatus>>({});
  const [viewMode, setViewMode] = useState<ViewMode>('dashboard');
  const [activeCategory, setActiveCategory] = useState<Category | 'All'>('All');
  const [statusFilter, setStatusFilter] = useState<FilterStatus>('all');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Categorize all questions once
  const categorizedQuestions = useMemo(() => {
    return questions.map(q => ({
      ...q,
      category: getCategory(q.question)
    }));
  }, []);

  const handleSelect = (questionId: number, optionIndex: number) => {
    const question = questions.find(q => q.id === questionId);
    if (!question) return;
    const isCorrect = question.correctAnswer === optionIndex;
    setAnswers(prev => ({
      ...prev,
      [questionId]: {
        ...prev[questionId],
        selectedOption: optionIndex,
        isCorrect
      }
    }));
  };

  const toggleBookmark = (questionId: number) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: {
        ...prev[questionId], // Maintain existing answer state if any
        selectedOption: prev[questionId]?.selectedOption ?? null,
        isCorrect: prev[questionId]?.isCorrect ?? false,
        isBookmarked: !prev[questionId]?.isBookmarked
      }
    }));
  };

  const stats = useMemo(() => {
    const allAnswers = Object.values(answers) as QuestionStatus[];
    const answeredCount = allAnswers.filter(a => a.selectedOption !== null).length;
    const correctCount = allAnswers.filter(a => a.isCorrect && a.selectedOption !== null).length;
    const accuracy = answeredCount > 0 ? (correctCount / answeredCount) * 100 : 0;
    return { total: questions.length, answered: answeredCount, correct: correctCount, accuracy };
  }, [answers]);

  const topicStats = useMemo(() => {
    const categories: Category[] = ['Architecture', 'Memory', 'Protocols', 'Real-Time', 'Hardware'];
    return categories.map(cat => {
      const qs = categorizedQuestions.filter(q => q.category === cat);
      const total = qs.length;
      let correct = 0;
      qs.forEach(q => {
        if (answers[q.id]?.isCorrect) correct++;
      });
      return {
        category: cat,
        total,
        correct,
        percentage: total > 0 ? (correct / total) * 100 : 0
      };
    });
  }, [answers, categorizedQuestions]);

  const filteredQuestions = useMemo(() => {
    return categorizedQuestions.filter(q => {
      // 1. Filter by Category
      if (activeCategory !== 'All' && q.category !== activeCategory) return false;
      
      // 2. Filter by Status
      const status = answers[q.id];
      if (statusFilter === 'incorrect') return status?.selectedOption !== null && status?.selectedOption !== undefined && !status.isCorrect;
      if (statusFilter === 'bookmarked') return status?.isBookmarked;
      
      return true;
    });
  }, [categorizedQuestions, answers, activeCategory, statusFilter]);

  // Handle mobile check
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setIsSidebarOpen(false);
      else setIsSidebarOpen(true);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="flex min-h-screen bg-slate-50 font-sans text-slate-900 overflow-hidden">
      
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-slate-900 text-slate-300 transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 shadow-xl flex flex-col`}>
        <div className="p-6 border-b border-slate-800 flex items-center gap-3">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-900/50">E</div>
          <span className="font-semibold text-lg text-white tracking-tight">Embedded<span className="text-slate-500">Pro</span></span>
        </div>

        <nav className="flex-1 overflow-y-auto py-6 px-3 space-y-1">
          <button 
            onClick={() => setViewMode('dashboard')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${viewMode === 'dashboard' ? 'bg-indigo-600 text-white shadow-md' : 'hover:bg-slate-800 hover:text-white'}`}
          >
            <svg className="w-5 h-5 opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
            Overview
          </button>
          
          <button 
            onClick={() => { setViewMode('questions'); setStatusFilter('all'); setActiveCategory('All'); }}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${viewMode === 'questions' && statusFilter === 'all' && activeCategory === 'All' ? 'bg-indigo-600 text-white shadow-md' : 'hover:bg-slate-800 hover:text-white'}`}
          >
            <svg className="w-5 h-5 opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
            All Questions
            <span className="ml-auto bg-slate-800 py-0.5 px-2 rounded-full text-xs">{questions.length}</span>
          </button>

          <div className="pt-6 pb-2 px-3 text-xs font-semibold uppercase tracking-wider text-slate-500">Filters</div>
          
          <button 
             onClick={() => { setViewMode('questions'); setStatusFilter('incorrect'); }}
             className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${statusFilter === 'incorrect' ? 'bg-slate-800 text-rose-400' : 'hover:bg-slate-800 hover:text-white'}`}
          >
            <svg className="w-5 h-5 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
            Review Mistakes
          </button>
          <button 
             onClick={() => { setViewMode('questions'); setStatusFilter('bookmarked'); }}
             className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${statusFilter === 'bookmarked' ? 'bg-slate-800 text-amber-400' : 'hover:bg-slate-800 hover:text-white'}`}
          >
            <svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" /></svg>
            Bookmarked
          </button>

          <div className="pt-6 pb-2 px-3 text-xs font-semibold uppercase tracking-wider text-slate-500">Topics</div>
          {(['Architecture', 'Memory', 'Protocols', 'Real-Time', 'Hardware'] as Category[]).map(cat => (
             <button
              key={cat}
              onClick={() => { setViewMode('questions'); setActiveCategory(cat); setStatusFilter('all'); }}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors ${activeCategory === cat ? 'bg-slate-800 text-white' : 'hover:bg-slate-800 text-slate-400 hover:text-white'}`}
             >
               <span>{cat}</span>
             </button>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-800">
           <div className="bg-slate-800 rounded-lg p-3">
              <div className="text-xs text-slate-400 mb-1">Overall Progress</div>
              <div className="flex justify-between items-end mb-2">
                <span className="text-xl font-bold text-white">{Math.round((stats.answered / stats.total) * 100)}%</span>
                <span className="text-xs text-slate-400">{stats.answered}/{stats.total}</span>
              </div>
              <div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden">
                <div className="bg-indigo-500 h-full" style={{ width: `${(stats.answered / stats.total) * 100}%` }}></div>
              </div>
           </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden relative">
        {/* Mobile Header */}
        <header className="bg-white border-b border-slate-200 p-4 md:hidden flex items-center justify-between z-40">
           <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="text-slate-600">
             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
           </button>
           <span className="font-semibold text-slate-800">EmbeddedPro</span>
           <div className="w-6"></div>
        </header>

        <div className="flex-1 overflow-y-auto bg-slate-50 p-4 md:p-8">
          <div className="max-w-5xl mx-auto">
            
            {viewMode === 'dashboard' ? (
              <>
                <div className="mb-8">
                  <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>
                  <p className="text-slate-500">Here is your performance overview.</p>
                </div>
                <Dashboard stats={stats} topicStats={topicStats} />
              </>
            ) : (
              <>
                 <div className="flex items-center justify-between mb-6">
                    <div>
                       <h1 className="text-2xl font-bold text-slate-900">
                         {statusFilter === 'incorrect' ? 'Incorrect Answers' : 
                          statusFilter === 'bookmarked' ? 'Bookmarked Questions' : 
                          activeCategory === 'All' ? 'All Questions' : activeCategory}
                       </h1>
                       <p className="text-slate-500 text-sm mt-1">
                         Showing {filteredQuestions.length} questions
                       </p>
                    </div>
                 </div>

                 <div className="space-y-6">
                   {filteredQuestions.length > 0 ? (
                      filteredQuestions.map(q => (
                        <QuestionCard 
                          key={q.id}
                          data={q}
                          category={q.category}
                          status={answers[q.id]}
                          onSelect={handleSelect}
                          onToggleBookmark={toggleBookmark}
                        />
                      ))
                   ) : (
                     <div className="flex flex-col items-center justify-center py-20 text-center">
                        <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4 text-slate-400">
                          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                        </div>
                        <h3 className="text-lg font-medium text-slate-900">No questions found</h3>
                        <p className="text-slate-500 max-w-sm mt-1">
                          Try adjusting your filters or go back to the dashboard to start a fresh topic.
                        </p>
                     </div>
                   )}
                 </div>
              </>
            )}
            
            <div className="h-10"></div>
          </div>
        </div>
      </main>

      {/* Overlay for mobile sidebar */}
      {isSidebarOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-slate-900/50 z-40 backdrop-blur-sm"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
}

export default App;