import React from 'react';
import { BookOpen, Users, Compass, MessageSquareCode, TrendingUp, Sparkles, Check } from 'lucide-react';
import { EXPERIENCE_STEPS } from '../data/initialData';

export const Experience: React.FC = () => {
  const icons = [
    <BookOpen className="w-5 h-5 text-[#E05A2B]" />,
    <Users className="w-5 h-5 text-[#2B5948]" />,
    <Compass className="w-5 h-5 text-[#D9822B]" />,
    <MessageSquareCode className="w-5 h-5 text-[#E05A2B]" />,
    <TrendingUp className="w-5 h-5 text-[#2B5948]" />
  ];

  return (
    <section id="experience" className="py-16 sm:py-24 bg-[#FAF7F2] border-t border-[#E7DFD5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E89D38]/15 text-[#D9822B] text-xs font-bold uppercase tracking-wider mb-3">
            The Transformational Path
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#1E1B18] tracking-tight leading-tight mb-4">
            The Talk It Out Experience
          </h2>
          <p className="text-base sm:text-lg text-[#57534E] leading-relaxed">
            Talk It Out is not passive motivational speaking. It is a live, iterative cycle designed to build real behavioral competence.
          </p>

          {/* Sequence badge */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2 mt-6 px-4 py-2 rounded-2xl bg-white border border-[#E7DFD5] text-xs sm:text-sm font-bold text-[#1E1B18] shadow-2xs">
            <span className="text-[#E05A2B]">LEARN</span>
            <span className="text-[#A8A29E]">→</span>
            <span className="text-[#2B5948]">PRACTICE</span>
            <span className="text-[#A8A29E]">→</span>
            <span className="text-[#D9822B]">APPLY</span>
            <span className="text-[#A8A29E]">→</span>
            <span className="text-[#E05A2B]">REFLECT</span>
            <span className="text-[#A8A29E]">→</span>
            <span className="text-[#2B5948]">GROW</span>
          </div>
        </div>

        {/* Visual Timeline / Process Grid */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-0.5 bg-[#DED3C4] -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 relative z-10">
            {EXPERIENCE_STEPS.map((step, idx) => (
              <div
                key={step.stage}
                className="bg-white rounded-3xl p-6 border border-[#E7DFD5] shadow-xs hover:border-[#E05A2B] hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-8 h-8 rounded-xl bg-[#FAF7F2] border border-[#E7DFD5] font-black text-xs text-[#1E1B18] flex items-center justify-center">
                      0{idx + 1}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] flex items-center justify-center">
                      {icons[idx]}
                    </div>
                  </div>

                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#E05A2B] block mb-1">
                    {step.tag}
                  </span>

                  <h3 className="text-xl font-extrabold text-[#1E1B18] tracking-tight mb-2">
                    {step.stage}
                  </h3>

                  <h4 className="text-xs font-bold text-[#44403C] mb-3">
                    {step.label}
                  </h4>

                  <p className="text-xs text-[#57534E] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-[#F3EFEA] flex items-center gap-1.5 text-[11px] font-semibold text-[#2B5948]">
                  <Check className="w-3.5 h-3.5" />
                  <span>Hands-on & Practical</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Real-World Outcomes Quote */}
        <div className="max-w-3xl mx-auto mt-14 bg-white rounded-3xl p-6 sm:p-8 border border-[#E7DFD5] text-center shadow-2xs">
          <p className="text-sm sm:text-base text-[#44403C] font-medium leading-relaxed">
            “You don't get better at swimming by reading books about water. You get into the pool. Talk It Out is the conversational training ground where young people practice before real moments happen.”
          </p>
          <span className="text-xs font-bold text-[#78716C] uppercase tracking-wider block mt-3">
            — The Talk It Out Learning Philosophy
          </span>
        </div>

      </div>
    </section>
  );
};
