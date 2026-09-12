import React from 'react';
import { ExternalLink, Heart, Shield, CheckCircle, ArrowRight, Building } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white border-t border-[#E7DFD5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E05A2B]/10 text-[#E05A2B] text-xs font-bold uppercase tracking-wider mb-3">
            Origin & Mission
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#1E1B18] tracking-tight leading-tight mb-4">
            About Talk It Out
          </h2>
        </div>

        {/* 11. About Talk It Out Positioning Card */}
        <div className="max-w-4xl mx-auto bg-[#FAF7F2] rounded-3xl p-8 sm:p-12 border border-[#E7DFD5] shadow-xs mb-12">
          <div className="max-w-3xl">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1E1B18] tracking-tight mb-6 leading-snug">
              Focusing on Communication—Not Simply Talking.
            </h3>
            
            <p className="text-base sm:text-lg text-[#44403C] leading-relaxed mb-6">
              Talk It Out is a communication initiative under <strong>Nuel Foundation</strong> created to help people develop practical communication skills and build healthier communication cultures within their communities.
            </p>

            <div className="p-5 rounded-2xl bg-white border border-[#E7DFD5] mb-8">
              <p className="text-sm sm:text-base text-[#1E1B18] font-medium leading-relaxed italic">
                “The initiative focuses on communication—not simply talking. It helps people understand themselves, understand others, express themselves confidently, listen actively, navigate difficult conversations and repair communication when things go wrong.”
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#44403C]">
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-[#E05A2B]/20 text-[#E05A2B] flex items-center justify-center font-bold text-xs">✓</span>
                <span>Self-awareness before speaking</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-[#2B5948]/20 text-[#2B5948] flex items-center justify-center font-bold text-xs">✓</span>
                <span>Active listening without judgment</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-[#D9822B]/20 text-[#D9822B] flex items-center justify-center font-bold text-xs">✓</span>
                <span>Clear expression under pressure</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-[#E05A2B]/20 text-[#E05A2B] flex items-center justify-center font-bold text-xs">✓</span>
                <span>Apology and restorative dialogue</span>
              </div>
            </div>
          </div>
        </div>

        {/* 12. About Nuel Foundation Card */}
        <div className="max-w-4xl mx-auto bg-[#1C1917] text-white rounded-3xl p-8 sm:p-12 border border-white/10 shadow-xl relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#E89D38] text-xs font-bold uppercase tracking-wider mb-3">
                Parent Foundation
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-3">
                An Initiative of Nuel Foundation
              </h3>
              <p className="text-sm sm:text-base text-[#D6D3D1] leading-relaxed mb-4">
                Talk It Out is proudly powered and stewarded by Nuel Foundation, dedicated to nurturing wholesome human growth, societal empowerment, and community leadership.
              </p>
              <p className="text-xs text-[#A8A29E]">
                Official Destination: <span className="font-mono text-white">https://www.thenuelfoundation.org/</span>
              </p>
            </div>

            <div className="shrink-0 w-full md:w-auto">
              <a
                href="https://www.thenuelfoundation.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-[#E89D38] hover:bg-[#D9822B] text-[#1C1917] font-bold text-sm transition-all shadow-md cursor-pointer group"
              >
                <span>Learn More About Nuel Foundation</span>
                <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
