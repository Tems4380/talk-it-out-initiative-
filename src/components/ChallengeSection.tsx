import React, { useState } from 'react';
import { Target, CheckCircle2, Share2, Sparkles, Copy, Check } from 'lucide-react';
import { CHALLENGES } from '../data/initialData';

export const ChallengeSection: React.FC = () => {
  const [activeChallengeIdx, setActiveChallengeIdx] = useState<number>(0);
  const [pledgedChallenges, setPledgedChallenges] = useState<Record<string, boolean>>({});
  const [copied, setCopied] = useState(false);

  const activeChallenge = CHALLENGES[activeChallengeIdx];
  const isPledged = pledgedChallenges[activeChallenge.id];

  const togglePledge = (id: string) => {
    setPledgedChallenges(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(`"${activeChallenge.quote}" - Talk It Out Weekly Challenge (Nuel Foundation)`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="challenge" className="py-16 sm:py-24 bg-white border-t border-[#E7DFD5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D9822B]/10 text-[#D9822B] text-xs font-bold uppercase tracking-wider mb-3">
            Real Action in Real Life
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#1E1B18] tracking-tight leading-tight mb-4">
            The Talk It Out Challenge
          </h2>
          <p className="text-base sm:text-lg text-[#57534E] leading-relaxed">
            Every session ends with one concrete challenge. No vague encouragement—just one clear communicative action to test in your everyday world.
          </p>
        </div>

        {/* Challenge Selection Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 max-w-2xl mx-auto mb-10">
          {CHALLENGES.map((ch, idx) => (
            <button
              key={ch.id}
              onClick={() => setActiveChallengeIdx(idx)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeChallengeIdx === idx
                  ? 'bg-[#E05A2B] text-white shadow-xs'
                  : 'bg-[#FAF7F2] text-[#57534E] hover:bg-[#EFE8DE] border border-[#E7DFD5]'
              }`}
            >
              Challenge {idx + 1}
            </button>
          ))}
        </div>

        {/* The Featured Challenge Card */}
        <div className="max-w-3xl mx-auto">
          <div className="relative rounded-3xl bg-[#FAF7F2] border-2 border-[#E05A2B] p-8 sm:p-12 shadow-xl overflow-hidden">
            
            {/* Background Accent Badge */}
            <div className="absolute top-6 right-6 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E05A2B]/10 text-[#E05A2B] text-xs font-black uppercase tracking-wider">
              <Target className="w-3.5 h-3.5" />
              <span>{activeChallenge.theme}</span>
            </div>

            <div className="mb-8">
              <span className="text-xs font-extrabold text-[#78716C] uppercase tracking-widest block mb-3">
                Weekly Focus Assignment
              </span>

              <blockquote className="text-2xl sm:text-4xl font-extrabold text-[#1E1B18] tracking-tight leading-tight mb-4">
                «{activeChallenge.quote}»
              </blockquote>

              <p className="text-sm sm:text-base text-[#57534E] leading-relaxed mb-6">
                {activeChallenge.context}
              </p>

              <div className="bg-white rounded-2xl p-4 border border-[#E7DFD5]">
                <span className="text-xs font-black text-[#2B5948] uppercase tracking-wider block mb-1">
                  Daily Habit Trigger
                </span>
                <p className="text-xs sm:text-sm text-[#1E1B18] font-medium">
                  {activeChallenge.dailyPrompt}
                </p>
              </div>
            </div>

            {/* Interactive Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[#E7DFD5]">
              <button
                onClick={() => togglePledge(activeChallenge.id)}
                className={`w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  isPledged
                    ? 'bg-[#2B5948] text-white'
                    : 'bg-[#1E1B18] hover:bg-[#44403C] text-white'
                }`}
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>{isPledged ? "Challenge Accepted! ✓" : "I'm Taking This Challenge"}</span>
              </button>

              <button
                onClick={handleCopy}
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-[#DED3C4] bg-white hover:bg-[#FAF7F2] text-[#44403C] font-semibold text-xs flex items-center justify-center gap-2 cursor-pointer transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? "Copied Quote!" : "Copy Challenge"}</span>
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
