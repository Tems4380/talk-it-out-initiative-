import React from 'react';
import { ArrowRight, Users, Calendar, Handshake, Mail, MessageSquare } from 'lucide-react';

interface JoinSectionProps {
  onOpenJoin: (tab: 'join' | 'attend' | 'partner' | 'contact') => void;
}

export const JoinSection: React.FC<JoinSectionProps> = ({ onOpenJoin }) => {
  return (
    <section id="join" className="py-20 sm:py-28 bg-[#FAF7F2] border-t border-[#E7DFD5] relative overflow-hidden">
      {/* Decorative Warm Ambient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-72 bg-radial from-[#E05A2B]/15 via-[#E89D38]/10 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E05A2B]/10 text-[#E05A2B] text-xs font-black uppercase tracking-wider mb-4">
          Get Involved
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#1E1B18] tracking-tight leading-tight mb-6">
          Your voice matters. <br />
          <span className="text-[#E05A2B]">Your conversations matter.</span>
        </h2>

        <p className="text-base sm:text-xl text-[#57534E] max-w-2xl mx-auto leading-relaxed mb-12">
          Whether you want to find your voice, attend a Sunday youth session, bring Talk It Out to your church or community, or partner with us—there is a seat at the table for you.
        </p>

        {/* 4 Primary Action Cards/Buttons as requested */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
          
          {/* 1. Join Talk It Out */}
          <button
            onClick={() => onOpenJoin('join')}
            className="group p-6 rounded-3xl bg-[#E05A2B] hover:bg-[#CC4F23] text-white text-left transition-all shadow-md hover:shadow-xl cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold mb-1">
                Join Talk It Out
              </h3>
              <p className="text-xs text-white/80 leading-relaxed mb-4">
                Be part of our youth & young adult communication network.
              </p>
            </div>
            <span className="text-xs font-extrabold uppercase tracking-wider flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              Join Now →
            </span>
          </button>

          {/* 2. Attend a Session */}
          <button
            onClick={() => onOpenJoin('attend')}
            className="group p-6 rounded-3xl bg-white hover:border-[#2B5948] border border-[#E7DFD5] text-[#1E1B18] text-left transition-all shadow-xs hover:shadow-md cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#2B5948]/10 text-[#2B5948] flex items-center justify-center mb-4">
                <Calendar className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold mb-1">
                Attend a Session
              </h3>
              <p className="text-xs text-[#57534E] leading-relaxed mb-4">
                RSVP for our weekly church & community rooms.
              </p>
            </div>
            <span className="text-xs font-bold text-[#2B5948] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              Find Times →
            </span>
          </button>

          {/* 3. Partner With Us */}
          <button
            onClick={() => onOpenJoin('partner')}
            className="group p-6 rounded-3xl bg-white hover:border-[#D9822B] border border-[#E7DFD5] text-[#1E1B18] text-left transition-all shadow-xs hover:shadow-md cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#D9822B]/10 text-[#D9822B] flex items-center justify-center mb-4">
                <Handshake className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold mb-1">
                Partner With Us
              </h3>
              <p className="text-xs text-[#57534E] leading-relaxed mb-4">
                Host a Talk It Out circle in your church, school, or hub.
              </p>
            </div>
            <span className="text-xs font-bold text-[#D9822B] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              Collaborate →
            </span>
          </button>

          {/* 4. Contact Us */}
          <button
            onClick={() => onOpenJoin('contact')}
            className="group p-6 rounded-3xl bg-white hover:border-[#1E1B18] border border-[#E7DFD5] text-[#1E1B18] text-left transition-all shadow-xs hover:shadow-md cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#1E1B18]/5 text-[#1E1B18] flex items-center justify-center mb-4">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold mb-1">
                Contact Us
              </h3>
              <p className="text-xs text-[#57534E] leading-relaxed mb-4">
                Have questions, speaking inquiries, or general notes?
              </p>
            </div>
            <span className="text-xs font-bold text-[#1E1B18] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              Send Note →
            </span>
          </button>

        </div>

      </div>
    </section>
  );
};
