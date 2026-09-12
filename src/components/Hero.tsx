import React from 'react';
import { ArrowRight, Sparkles, MessageCircle, Heart, Users, ChevronRight } from 'lucide-react';
import heroImage from '../assets/images/talk_it_out_hero_1789059156157.jpg';

interface HeroProps {
  onJoinClick: () => void;
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onJoinClick, onExploreClick }) => {
  const journey = ["LISTEN", "THINK", "EXPRESS", "RESPOND", "CLARIFY", "REPAIR"];

  return (
    <section className="relative overflow-hidden pt-6 pb-16 md:pt-10 md:pb-24">
      {/* Decorative ambient gradients */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-radial from-[#F26430]/10 via-[#E89D38]/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Initiative Badge */}
        <div className="flex flex-col items-center text-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EFE8DE] border border-[#DED3C4] text-[#1E1B18] text-xs sm:text-sm font-semibold mb-4">
            <span className="w-2 h-2 rounded-full bg-[#E05A2B]"></span>
            <span>A Communication Initiative by Nuel Foundation</span>
          </div>

          {/* Super Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#1E1B18] max-w-4xl leading-[1.08] mb-6">
            Say it. Hear it. <br className="hidden sm:inline" />
            Understand it. <span className="text-[#E05A2B] inline-block">Talk it out.</span>
          </h1>

          {/* Supporting Text */}
          <p className="text-lg sm:text-xl text-[#57534E] max-w-2xl font-normal leading-relaxed mb-8">
            Helping people build the courage, clarity and skills to communicate better—in everyday conversations and difficult moments.
          </p>

          {/* Hero CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto justify-center mb-12">
            <button
              onClick={onJoinClick}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#E05A2B] hover:bg-[#CC4F23] text-white font-bold text-base shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2.5 cursor-pointer group"
            >
              <span>Join the Community</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={onExploreClick}
              className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-white hover:bg-[#F3EFEA] border border-[#DED3C4] text-[#1E1B18] font-bold text-base transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-2xs"
            >
              <span>Explore Talk It Out</span>
              <ChevronRight className="w-4 h-4 text-[#78716C]" />
            </button>
          </div>
        </div>

        {/* Hero Visual Card: Authentic Conversation Image + Interactive Highlights */}
        <div className="relative mx-auto max-w-5xl rounded-3xl overflow-hidden border border-[#DED3C4] shadow-xl bg-[#EFE8DE]">
          <div className="relative aspect-16/10 sm:aspect-16/9 w-full overflow-hidden">
            <img
              src={heroImage}
              alt="Young adults and teenagers in Nigeria gathered in an open courtyard, having an honest, authentic conversation"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917]/85 via-[#1C1917]/30 to-transparent" />

            {/* In-Image Floating Badges for Human Connection */}
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-white/95 backdrop-blur-md rounded-2xl p-3 sm:p-4 border border-white/40 shadow-lg max-w-xs hidden sm:block">
              <div className="flex items-center gap-2.5 mb-1 text-[#2B5948] font-bold text-xs uppercase tracking-wider">
                <Users className="w-4 h-4" />
                <span>Real Young Adults & Teens</span>
              </div>
              <p className="text-xs text-[#44403C] font-medium leading-snug">
                Where speaking up is practiced, and listening is taken seriously.
              </p>
            </div>

            {/* Prominent Bottom Quote Banner */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-8 sm:left-8 sm:right-8 text-white">
              <div className="bg-[#1C1917]/75 backdrop-blur-md border border-white/15 rounded-2xl p-4 sm:p-6 shadow-2xl">
                <p className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white leading-snug mb-2 font-display">
                  “Everyone has something to say. Not everyone has learned how to say it.”
                </p>
                <p className="text-xs sm:text-sm text-[#D6D3D1] max-w-3xl leading-relaxed">
                  Talk It Out believes that people should be able to express their thoughts, feelings, ideas, concerns and opinions without unnecessary fear of being misunderstood, judged or dismissed.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Journey Flow Bar */}
        <div className="mt-8 max-w-5xl mx-auto bg-white rounded-2xl border border-[#E7DFD5] p-4 sm:p-6 shadow-xs">
          <div className="text-center mb-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#78716C]">
              The Core Communication Journey
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-bold">
            {journey.map((step, idx) => (
              <React.Fragment key={step}>
                <span className="px-3 sm:px-4 py-2 rounded-xl bg-[#FAF7F2] border border-[#E7DFD5] text-[#1E1B18] flex items-center gap-1.5 shadow-2xs hover:border-[#E05A2B] hover:text-[#E05A2B] transition-colors">
                  <span className="w-5 h-5 rounded-full bg-[#E05A2B]/10 text-[#E05A2B] text-[11px] flex items-center justify-center font-black">
                    {idx + 1}
                  </span>
                  {step}
                </span>
                {idx < journey.length - 1 && (
                  <span className="text-[#A8A29E] font-extrabold text-sm hidden sm:inline">
                    →
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
