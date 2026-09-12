import React, { useState } from 'react';
import { 
  Ear, 
  Brain, 
  MessageCircle, 
  ShieldCheck, 
  HelpCircle, 
  HeartHandshake,
  ArrowRight,
  Lightbulb
} from 'lucide-react';
import { PILLARS } from '../data/initialData';

export const WhatWeDo: React.FC = () => {
  const [selectedPillar, setSelectedPillar] = useState<string>('listen');

  const getIcon = (name: string) => {
    switch (name) {
      case 'Ear': return <Ear className="w-6 h-6 text-[#E05A2B]" />;
      case 'Brain': return <Brain className="w-6 h-6 text-[#2B5948]" />;
      case 'MessageCircle': return <MessageCircle className="w-6 h-6 text-[#D9822B]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-[#E05A2B]" />;
      case 'HelpCircle': return <HelpCircle className="w-6 h-6 text-[#2B5948]" />;
      case 'HeartHandshake': return <HeartHandshake className="w-6 h-6 text-[#D9822B]" />;
      default: return <MessageCircle className="w-6 h-6" />;
    }
  };

  const getAccentBg = (idx: number) => {
    if (idx % 3 === 0) return 'group-hover:border-[#E05A2B] bg-[#FAF7F2]';
    if (idx % 3 === 1) return 'group-hover:border-[#2B5948] bg-[#FAF7F2]';
    return 'group-hover:border-[#D9822B] bg-[#FAF7F2]';
  };

  return (
    <section id="what-we-do" className="py-16 sm:py-24 bg-white border-t border-[#E7DFD5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#2B5948]/10 text-[#2B5948] text-xs font-bold uppercase tracking-wider mb-3">
            The Six Pillars
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#1E1B18] tracking-tight leading-tight mb-4">
            What We Actually Practice
          </h2>
          <p className="text-base sm:text-lg text-[#57534E] leading-relaxed">
            Communication is a craft you build with muscle memory. Here are the six practical disciplines every Talk It Out participant learns and hones.
          </p>
        </div>

        {/* 6 Visual Interactive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {PILLARS.map((pillar, idx) => {
            const isSelected = selectedPillar === pillar.id;
            return (
              <div
                key={pillar.id}
                onClick={() => setSelectedPillar(pillar.id)}
                className={`group rounded-3xl p-6 sm:p-8 border transition-all duration-300 cursor-pointer relative flex flex-col justify-between ${
                  isSelected
                    ? 'border-[#E05A2B] bg-[#FAF7F2] shadow-md -translate-y-1'
                    : 'border-[#E7DFD5] bg-white hover:border-[#D9822B] hover:shadow-xs'
                }`}
              >
                <div>
                  {/* Card Top: Step number + Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="w-9 h-9 rounded-xl bg-[#EFE8DE] text-[#1E1B18] font-extrabold text-xs flex items-center justify-center">
                      0{pillar.step}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-[#EFE8DE]/60 flex items-center justify-center transition-transform group-hover:scale-110">
                      {getIcon(pillar.iconName)}
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-2xl font-extrabold text-[#1E1B18] tracking-tight mb-2">
                    {pillar.name}
                  </h3>
                  <p className="text-sm font-semibold text-[#E05A2B] mb-4 leading-snug">
                    {pillar.tagline}
                  </p>

                  {/* Body description */}
                  <p className="text-sm text-[#57534E] leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                </div>

                {/* Practical Micro-Action Preview */}
                <div className="pt-4 border-t border-[#E7DFD5]/80">
                  <div className="flex items-start gap-2 bg-white rounded-xl p-3 border border-[#E7DFD5]">
                    <Lightbulb className="w-4 h-4 text-[#E89D38] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[11px] font-bold text-[#78716C] uppercase tracking-wider block">
                        Practice Tip:
                      </span>
                      <p className="text-xs text-[#1E1B18] font-medium leading-normal">
                        {pillar.microAction}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner: The Sequence That Changes Conversations */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-[#FAF7F2] border border-[#E7DFD5] p-6 text-center">
          <p className="text-sm sm:text-base font-semibold text-[#1E1B18]">
            <span className="text-[#E05A2B]">The Journey:</span> LISTEN → THINK → EXPRESS → RESPOND → CLARIFY → REPAIR
          </p>
          <p className="text-xs text-[#78716C] mt-1">
            When you follow this order, conversations stop escalating into chaos and start leading to genuine understanding.
          </p>
        </div>

      </div>
    </section>
  );
};
