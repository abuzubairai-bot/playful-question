'use client';

import { useState } from 'react';

export default function Home() {
  const [page, setPage] = useState(1);
  const [selectedChoice, setSelectedChoice] = useState('');
  const [noBtnPosition, setNoBtnPosition] = useState({ x: 0, y: 0 });

  const moveNoBtn = () => {
    const x = Math.random() * 240 - 120;
    const y = Math.random() * 240 - 120;
    setNoBtnPosition({ x, y });
  };

  const handleSelectOption = (choice: string) => {
    setSelectedChoice(choice);
    setPage(4);
  };

  return (
    <main className="min-h-screen bg-slate-100 flex flex-col items-center justify-between p-4 relative overflow-x-hidden font-sans">
      {/* Header Branding */}
      <div className="pt-6 text-center z-10">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-600 border border-indigo-100 shadow-sm">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          Interactive Quiz
        </span>
      </div>

      {/* PAGE 1 */}
      {page === 1 && (
        <div className="w-full max-w-md bg-white/90 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-xl border border-slate-100 text-center my-auto">
          <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-5 text-2xl shadow-inner">
            🧠
          </div>
          <h1 className="text-xl sm:text-2xl font-extrabold text-slate-800 leading-snug mb-3">
            Do you think we (Bilal &amp; Sufyan) are smarter than you?
          </h1>
          <p className="text-xs text-slate-500 mb-8 font-medium">Select your answer carefully...</p>

          <div className="flex items-center justify-center gap-4 relative min-h-[60px]">
            <button
              onClick={() => setPage(2)}
              className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm rounded-xl shadow-lg shadow-indigo-200 transition-all transform active:scale-95"
            >
              YES!
            </button>
            <button
              onMouseEnter={moveNoBtn}
              onTouchStart={(e) => {
                e.preventDefault();
                moveNoBtn();
              }}
              style={{ transform: `translate(${noBtnPosition.x}px, ${noBtnPosition.y}px)` }}
              className="px-6 py-2.5 bg-slate-200 text-slate-700 font-bold text-sm rounded-xl transition-all duration-150 absolute"
            >
              No
            </button>
          </div>
        </div>
      )}

      {/* PAGE 2 */}
      {page === 2 && (
        <div className="w-full max-w-md bg-white/90 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-xl border border-slate-100 text-center my-auto">
          <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-5 text-2xl shadow-inner">
            💡
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-800 leading-snug mb-3">
            Do you admit we are smarter than you?
          </h2>
          <p className="text-xs text-slate-500 mb-8 font-medium">Be honest now!</p>

          <button
            onClick={() => setPage(3)}
            className="w-full py-3 bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm rounded-xl shadow-lg shadow-amber-200 transition-all transform active:scale-95"
          >
            Yes, I admit it!
          </button>
        </div>
      )}

      {/* PAGE 3 */}
      {page === 3 && (
        <div className="w-full max-w-md bg-white/90 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-xl border border-slate-100 text-center my-auto">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl shadow-inner">
            🎁
          </div>
          <h2 className="text-xl font-extrabold text-slate-800 leading-snug mb-1">
            What are you going to do for us?
          </h2>
          <p className="text-xs text-slate-500 mb-6 font-medium">Choose your deal to confirm:</p>

          <div className="space-y-2.5">
            {[
              '🤖 Buy us a toy',
              '💵 Give us 20 Riyals',
              '🍲 Make a special dinner for us',
              '🍬 Buy us a lot of candies',
            ].map((option) => (
              <button
                key={option}
                onClick={() => handleSelectOption(option)}
                className="w-full py-3 px-4 bg-slate-50 hover:bg-emerald-50 hover:border-emerald-300 border border-slate-200 text-slate-700 font-semibold text-sm rounded-xl transition-all text-left flex items-center justify-between group"
              >
                <span>{option}</span>
                <span className="text-xs text-emerald-600 opacity-0 group-hover:opacity-100 font-bold">Select &rarr;</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* PAGE 4 */}
      {page === 4 && (
        <div className="w-full max-w-md bg-white/95 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-2xl border border-indigo-100 text-center my-auto">
          <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl shadow-md">
            🎉
          </div>
          <span className="inline-block px-3 py-1 bg-indigo-50 text-indigo-600 text-xs font-extrabold rounded-full mb-3 uppercase tracking-wider">
            Official Agreement
          </span>
          <h2 className="text-2xl font-black text-slate-800 mb-4">It's Official!</h2>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 mb-6 text-slate-700 text-sm leading-relaxed font-medium">
            You have officially admitted that <strong className="text-indigo-600">Bilal &amp; Sufyan</strong> are smarter than you, and you promised to:
            <div className="mt-3 py-2 px-3 bg-indigo-600 text-white font-bold text-sm rounded-lg shadow-sm">
              {selectedChoice}
            </div>
          </div>

          <p className="text-xs text-slate-400">Take a screenshot and send it to us!</p>
        </div>
      )}

      {/* Footer */}
      <footer className="pb-4 text-center z-10">
        <p className="text-[11px] font-medium text-slate-400 tracking-wide">
          Coded by <span className="font-bold text-slate-600">Moosa</span>
        </p>
      </footer>
    </main>
  );
}