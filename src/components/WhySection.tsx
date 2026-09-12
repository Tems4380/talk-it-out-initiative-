import React, { useState } from 'react';
import { MessageSquareOff, HelpCircle, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { WHY_QUESTIONS } from '../data/initialData';

export const WhySection: React.FC = () => {
  const [activeQuestion, setActiveQuestion] = useState<number>(0);

  const environments = [
    { name: "Family & Home", desc: "Speaking to parents, navigating generational gaps, clarifying expectations." },
    { name: "Friendships & Peers", desc: "Setting gentle boundaries, expressing hurt, avoiding gossip or resentment." },
    { name: "Church & Faith Spaces", desc: "Honoring elders and leadership while finding your genuine voice." },
    { name: "School & University", desc: "Group projects, speaking up in class, presenting ideas with confidence." },
    { name: "Work & Career", desc: "Communicating under pressure, feedback, and disagreeing respectfully." },
    { name: "Everyday Moments", desc: "Handling sudden conflicts, saying sorry, and clearing assumptions fast." },
  ];

  const audiencePainPoints = [
    "Struggle to express their real feelings",
    "Afraid of saying the wrong thing",
    "Constantly second-guess themselves",
    "Find it difficult to speak up in groups",
    "Shut down during difficult conversations",
    "Struggle to communicate when angry or overwhelmed",
    "Have good ideas but lack confidence expressing them",
    "Frequently misunderstand others or feel misunderstood",
    "Avoid difficult conversations for weeks",
    "Struggle to disagree respectfully without anger",
    "Don't know how to apologize or repair communication after conflict"
  ];

  return (
    <section id="why" className="py-16 sm:py-24 bg-[#FAF7F2] border-t border-[#E7DFD5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E05A2B]/10 text-[#E05A2B] text-xs font-bold uppercase tracking-wider mb-3">
            Why Talk It Out?
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#1E1B18] tracking-tight leading-tight mb-6">
            Have you ever left a conversation thinking…
          </h2>
          <p className="text-base sm:text-lg text-[#57534E] leading-relaxed">
            Most of our deepest regrets, silent hurts, and broken relationships don't start with bad intentions. They start with communication breakdowns.
          </p>
        </div>

        {/* Thought Bubbles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto mb-16">
          {WHY_QUESTIONS.map((quote, idx) => (
            <div
              key={quote}
              onClick={() => setActiveQuestion(idx)}
              className={`p-5 rounded-2xl border transition-all cursor-pointer relative ${
                activeQuestion === idx
                  ? 'bg-white border-[#E05A2B] shadow-md -translate-y-1'
                  : 'bg-white/80 border-[#E7DFD5] hover:border-[#D9822B] hover:bg-white'
              }`}
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl text-[#E05A2B] font-serif select-none">“</span>
                <p className="text-base sm:text-lg font-bold text-[#1E1B18] leading-snug">
                  {quote}
                </p>
              </div>
              <div className="mt-3 flex items-center justify-between text-xs font-medium text-[#78716C]">
                <span>Conversation Moment #{idx + 1}</span>
                {activeQuestion === idx && (
                  <span className="text-[#E05A2B] font-bold flex items-center gap-1">
                    Felt this? <CheckCircle2 className="w-3.5 h-3.5" />
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* The Core Truth Callout Box */}
        <div className="max-w-4xl mx-auto bg-[#1C1917] text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden mb-16">
          <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-[#E05A2B]/20 blur-3xl pointer-events-none" />
          <div className="relative z-10 text-center sm:text-left">
            <span className="text-[#E89D38] font-bold text-xs sm:text-sm uppercase tracking-widest block mb-3">
              The Real Problem We Are Addressing
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-snug mb-6">
              Sometimes people don't lack thoughts or feelings. <br className="hidden sm:inline" />
              <span className="text-[#E89D38]">They lack the tools and confidence</span> to communicate what is inside them.
            </h3>
            <p className="text-base sm:text-lg text-[#D6D3D1] leading-relaxed max-w-2xl mb-8">
              That's where <strong className="text-white">Talk It Out</strong> comes in. We don't just tell you to speak; we provide the safe practice space, frameworks, and practical courage to communicate with clarity, empathy, and intention.
            </p>

            {/* Clarity Clarifier: What we are & What we are NOT */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-white/15 text-sm">
              <div className="bg-white/10 rounded-xl p-4 border border-white/10">
                <span className="text-xs font-black uppercase tracking-wider text-[#E89D38] block mb-1">
                  What This Is NOT
                </span>
                <p className="text-xs sm:text-sm text-[#D6D3D1]">
                  NOT a relationship-advice column, clinical therapy session, counselling office, or generic motivational soundbites.
                </p>
              </div>
              <div className="bg-[#2B5948]/50 rounded-xl p-4 border border-[#2B5948]">
                <span className="text-xs font-black uppercase tracking-wider text-[#A7F3D0] block mb-1">
                  The Central Subject
                </span>
                <p className="text-xs sm:text-sm text-white">
                  <strong>COMMUNICATION.</strong> Relationships, family, friendships, church, school and work are simply the environments where it takes place.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* The Environments Grid */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="text-center mb-8">
            <h4 className="text-xl sm:text-2xl font-bold text-[#1E1B18]">
              Where Communication Actually Happens
            </h4>
            <p className="text-sm text-[#78716C] mt-1">
              Talk It Out prepares you for every space where human words matter.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {environments.map((env) => (
              <div key={env.name} className="p-5 rounded-2xl bg-white border border-[#E7DFD5] shadow-2xs hover:border-[#E05A2B] transition-colors">
                <h5 className="font-bold text-base text-[#1E1B18] mb-1.5 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#E05A2B]"></span>
                  {env.name}
                </h5>
                <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                  {env.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Who This Is For: Teenage & Young Adult Realities */}
        <div className="max-w-4xl mx-auto bg-[#F3EFEA] rounded-3xl p-6 sm:p-8 border border-[#E7DFD5]">
          <div className="flex items-center gap-2.5 mb-4 text-[#E05A2B] font-bold text-xs uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>Built Specifically For You If You...</span>
          </div>
          <p className="text-sm text-[#57534E] mb-6">
            Designed for teenagers and young adults across Nigeria and beyond who recognize any of these everyday struggles:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {audiencePainPoints.map((point) => (
              <div key={point} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#1E1B18]">
                <div className="w-4 h-4 rounded-full bg-[#2B5948]/15 text-[#2B5948] flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-[10px] font-black">✓</span>
                </div>
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
