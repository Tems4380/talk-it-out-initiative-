import React from 'react';
import { Calendar, Clock, MapPin, Users, ArrowRight, CheckCircle, Sparkles, MessageCircleHeart } from 'lucide-react';
import { SESSION_FLOW } from '../data/initialData';

interface SessionsProps {
  onJoinSession: () => void;
}

export const Sessions: React.FC<SessionsProps> = ({ onJoinSession }) => {
  return (
    <section id="sessions" className="py-16 sm:py-24 bg-white border-t border-[#E7DFD5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#2B5948]/10 text-[#2B5948] text-xs font-bold uppercase tracking-wider mb-3">
            Weekly Gathering
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#1E1B18] tracking-tight leading-tight mb-4">
            Weekly Community Sessions
          </h2>
          <p className="text-base sm:text-lg text-[#57534E] leading-relaxed">
            Talk It Out is designed to run as a vibrant weekly community session, initially hosted within a church environment for youth and young adults.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#E05A2B] bg-[#E05A2B]/10 px-4 py-1.5 rounded-full">
            <Sparkles className="w-4 h-4" />
            <span>Interactive workshops, not passive church lectures</span>
          </div>
        </div>

        {/* The 6-Step Weekly Breakdown Flow */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="text-center mb-8">
            <h3 className="text-lg font-bold text-[#1E1B18] uppercase tracking-wider">
              What Happens Every Single Week
            </h3>
            <p className="text-xs text-[#78716C] mt-1">
              Structured for engagement, honest safety, and practical repetition.
            </p>
          </div>

          <div className="space-y-3">
            {SESSION_FLOW.map((flow, index) => (
              <div
                key={flow.step}
                className="bg-[#FAF7F2] border border-[#E7DFD5] rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-[#E05A2B] transition-colors"
              >
                <div className="flex items-start sm:items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#DED3C4] text-[#E05A2B] font-extrabold text-sm flex items-center justify-center shrink-0">
                    {flow.step}
                  </div>
                  <div>
                    <h4 className="text-base font-extrabold text-[#1E1B18] leading-snug">
                      {flow.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#57534E] mt-0.5 leading-relaxed">
                      {flow.detail}
                    </p>
                  </div>
                </div>

                {index < SESSION_FLOW.length - 1 && (
                  <div className="hidden sm:block text-[#A8A29E] font-bold text-xs shrink-0 px-2">
                    ↓
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Church & Community Environment Details Card */}
        <div className="max-w-4xl mx-auto bg-[#2B5948] text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-8">
              <span className="text-[#A7F3D0] text-xs font-bold uppercase tracking-widest block mb-2">
                Join The Circle
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-4">
                Ready to sit with peers who are learning to say what matters?
              </h3>
              <p className="text-sm text-[#E2E8F0] leading-relaxed mb-6">
                Our church-based youth sessions provide a non-judgmental, lively environment where no question is too awkward, and no conversation mistake is mocked.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#E2E8F0] mb-6">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#E89D38]" />
                  <span>Sundays: 4:00 PM – 5:30 PM (WAT)</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#E89D38]" />
                  <span>Youth Hall / Church Space [Local Hub]</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#E89D38]" />
                  <span>Teens & Young Adults (Ages 13–29)</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircleHeart className="w-4 h-4 text-[#E89D38]" />
                  <span>Free & Open to All</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-4 flex flex-col items-center justify-center text-center">
              <button
                onClick={onJoinSession}
                className="w-full py-4 px-6 rounded-2xl bg-[#E05A2B] hover:bg-[#CC4F23] text-white font-bold text-base shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer group"
              >
                <span>Join the Next Session</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
              <span className="text-[11px] text-[#A7F3D0] mt-2 block">
                No prior public speaking required.
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
