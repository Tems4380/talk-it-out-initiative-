import React, { useState } from 'react';
import { Mic, Radio, Play, Volume2, Sparkles, AlertCircle, Bookmark } from 'lucide-react';
import { PODCAST_SEGMENTS } from '../data/initialData';

export const PodcastSection: React.FC = () => {
  const [activeSegment, setActiveSegment] = useState<number>(0);

  return (
    <section id="podcast" className="py-16 sm:py-24 bg-[#FAF7F2] border-t border-[#E7DFD5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#2B5948]/10 text-[#2B5948] text-xs font-bold uppercase tracking-wider mb-3">
            Media Voice
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#1E1B18] tracking-tight leading-tight mb-4">
            Talk It Out Podcast & Media
          </h2>
          <p className="text-base sm:text-lg text-[#57534E] leading-relaxed">
            The podcast is the media voice of our community—taking real conversational struggles and breaking them down for listeners everywhere.
          </p>

          {/* Important distinction callout */}
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white border border-[#E7DFD5] text-xs text-[#57534E] shadow-2xs font-medium">
            <span className="w-2 h-2 rounded-full bg-[#E05A2B]"></span>
            <span><strong>Note:</strong> The podcast is not the whole initiative; it's the media expression of our weekly community rooms.</span>
          </div>
        </div>

        {/* 4 Core Show Segments */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
          {PODCAST_SEGMENTS.map((seg, idx) => (
            <div
              key={seg.id}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E7DFD5] shadow-xs hover:border-[#E05A2B] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-xl bg-[#FAF7F2] text-[#E05A2B] flex items-center justify-center font-bold text-xs">
                      <Mic className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-black uppercase tracking-wider text-[#2B5948]">
                      Format Segment
                    </span>
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-[#FAF7F2] text-[#78716C] border border-[#E7DFD5]">
                    {seg.status}
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-[#1E1B18] tracking-tight mb-2">
                  {seg.category}
                </h3>

                <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed mb-4">
                  {seg.description}
                </p>

                <div className="bg-[#FAF7F2] rounded-xl p-3.5 border border-[#E7DFD5] text-xs">
                  <span className="font-bold text-[#1E1B18] block mb-1">
                    Editorial Focus:
                  </span>
                  <p className="text-[#57534E]">
                    {seg.focus}
                  </p>
                </div>
              </div>

              {/* Explicit Clean Placeholder without fabricating stats/guests */}
              <div className="mt-6 pt-4 border-t border-[#F3EFEA] flex items-center justify-between text-xs text-[#78716C]">
                <div className="flex items-center gap-2">
                  <Radio className="w-4 h-4 text-[#E05A2B] animate-pulse" />
                  <span className="font-mono text-[11px] bg-[#EFE8DE] px-2 py-0.5 rounded text-[#44403C]">
                    [ADD PODCAST EPISODE]
                  </span>
                </div>
                <span className="font-medium">Upcoming Series</span>
              </div>
            </div>
          ))}
        </div>

        {/* Media Player Placeholder Card */}
        <div className="max-w-4xl mx-auto bg-[#1C1917] text-white rounded-3xl p-6 sm:p-8 border border-white/10 shadow-lg">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#E05A2B] text-white flex items-center justify-center shrink-0 shadow-md">
                <Volume2 className="w-7 h-7" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#E89D38] block">
                  Media Hub
                </span>
                <h4 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  Talk It Out Conversations on Audio & Video
                </h4>
                <p className="text-xs text-[#A8A29E] mt-0.5 font-mono">
                  [ADD PODCAST STREAM / EPISODE FEED]
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <div className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-white/10 text-white text-xs font-semibold text-center border border-white/15">
                Episodes Launching Soon
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
