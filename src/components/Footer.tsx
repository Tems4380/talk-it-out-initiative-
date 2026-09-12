import React from 'react';
import { MessageSquare, ExternalLink, Heart, Shield, ArrowUp, Mail, Phone, MessageCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1C1917] text-[#D6D3D1] pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#E05A2B] text-white flex items-center justify-center">
                <MessageSquare className="w-5 h-5 fill-current" />
              </div>
              <div>
                <span className="font-extrabold text-xl tracking-tight text-white block leading-none">
                  TALK IT OUT
                </span>
                <span className="text-[11px] font-semibold text-[#A8A29E] tracking-wider uppercase mt-0.5 block">
                  A Communication Initiative by Nuel Foundation
                </span>
              </div>
            </div>

            <p className="text-sm text-[#A8A29E] leading-relaxed max-w-md mb-6">
              Helping people build the courage, clarity and skills to communicate better—in everyday conversations and difficult moments.
            </p>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 max-w-md">
              <p className="text-xs text-white font-medium italic">
                “Everyone has something to say. Not everyone has learned how to say it.”
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-black uppercase tracking-widest text-[#E89D38] mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#why" className="hover:text-white transition-colors">Why Talk It Out?</a></li>
              <li><a href="#what-we-do" className="hover:text-white transition-colors">The 6 Pillars</a></li>
              <li><a href="#experience" className="hover:text-white transition-colors">The Experience</a></li>
              <li><a href="#sessions" className="hover:text-white transition-colors">Weekly Sessions</a></li>
              <li><a href="#topics" className="hover:text-white transition-colors">Topics & Scenarios</a></li>
            </ul>
          </div>

          {/* More Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-black uppercase tracking-widest text-[#E89D38] mb-4">
              Engage
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#challenge" className="hover:text-white transition-colors">Weekly Challenge</a></li>
              <li><a href="#podcast" className="hover:text-white transition-colors">Podcast & Media</a></li>
              <li><a href="#question-box" className="hover:text-white transition-colors">Anonymous Question Box</a></li>
              <li><a href="#events" className="hover:text-white transition-colors">Upcoming Events</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About the Initiative</a></li>
            </ul>
          </div>

          {/* Nuel Foundation Official Connection & Placeholders */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-[#E89D38] mb-4">
              Initiative of
            </h4>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 mb-4">
              <span className="text-sm font-bold text-white block mb-1">
                Nuel Foundation
              </span>
              <p className="text-xs text-[#A8A29E] mb-3 leading-relaxed">
                Steward of youth empowerment, community culture, and wholesome leadership development.
              </p>
              <a
                href="https://www.thenuelfoundation.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E89D38] hover:underline"
              >
                <span>Visit Official Website</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Talk It Out Official Contact Details */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 space-y-2.5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#E89D38] block">
                Talk It Out Contact
              </span>
              <div className="space-y-2 text-xs text-[#D6D3D1]">
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#E05A2B] shrink-0" />
                  <a
                    href="mailto:talkitoutinitiative@gmail.com"
                    className="hover:text-white transition-colors underline-offset-2 hover:underline"
                  >
                    talkitoutinitiative@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#2B5948] shrink-0" />
                  <a
                    href="tel:07083445086"
                    className="hover:text-white transition-colors"
                  >
                    07083445086
                  </a>
                </div>
                <div className="pt-1">
                  <a
                    href="https://wa.me/2347083445086?text=Hello%20Talk%20It%20Out%2C%20I%20would%20like%20to%20know%20more%20about%20the%20initiative."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#2B5948] text-white font-bold text-xs hover:bg-[#23473a] transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp: 07083445086</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Safety & Safeguarding Notice */}
        <div className="py-6 border-b border-white/10 text-xs text-[#78716C] leading-relaxed">
          <p>
            <strong>Trust & Safety Disclaimer:</strong> Talk It Out is an educational community initiative designed to build interpersonal communication skills. It is not a clinical mental-health service, therapy clinic, or emergency intervention facility. If you are experiencing a mental health emergency, crisis, or abuse, please consult licensed medical, crisis, or emergency authorities immediately.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#78716C]">
          <p>
            © {new Date().getFullYear()} Talk It Out. An Initiative by Nuel Foundation. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
