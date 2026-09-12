import React, { useState } from 'react';
import { Calendar, Clock, MapPin, ArrowRight, Sparkles, Filter, Ticket } from 'lucide-react';
import { EVENTS } from '../data/initialData';
import { EventItem } from '../types';

interface EventsSectionProps {
  onRegisterEvent: (eventTitle: string) => void;
}

export const EventsSection: React.FC<EventsSectionProps> = ({ onRegisterEvent }) => {
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', 'Weekly Session', 'Workshop', 'Live Recording', 'Special Community'];

  const filteredEvents = filter === 'All' 
    ? EVENTS 
    : EVENTS.filter(e => e.category === filter);

  return (
    <section id="events" className="py-16 sm:py-24 bg-[#FAF7F2] border-t border-[#E7DFD5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#2B5948]/10 text-[#2B5948] text-xs font-bold uppercase tracking-wider mb-3">
            Gatherings & Experiences
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#1E1B18] tracking-tight leading-tight mb-4">
            Upcoming Events & Activities
          </h2>
          <p className="text-base sm:text-lg text-[#57534E] leading-relaxed">
            Join a live circle, participate in hands-on workshops, or be part of live recorded dialogues.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                filter === cat
                  ? 'bg-[#1E1B18] text-white shadow-xs'
                  : 'bg-white border border-[#E7DFD5] text-[#57534E] hover:border-[#E05A2B]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Events List or Clean Empty State */}
        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {filteredEvents.map((evt) => (
              <div
                key={evt.id}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E7DFD5] shadow-xs hover:border-[#E05A2B] hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-[#FAF7F2] text-[#2B5948] border border-[#E7DFD5]">
                      {evt.category}
                    </span>
                    <span className="text-xs font-bold text-[#D9822B]">
                      {evt.format}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-[#1E1B18] tracking-tight mb-4 leading-snug">
                    {evt.title}
                  </h3>

                  <div className="space-y-2.5 text-xs text-[#57534E] mb-6 bg-[#FAF7F2] p-4 rounded-2xl border border-[#E7DFD5]">
                    <div className="flex items-start gap-2">
                      <Calendar className="w-4 h-4 text-[#E05A2B] shrink-0 mt-0.5" />
                      <span className="font-semibold text-[#1E1B18]">{evt.date}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Clock className="w-4 h-4 text-[#2B5948] shrink-0 mt-0.5" />
                      <span>{evt.time}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-[#D9822B] shrink-0 mt-0.5" />
                      <span>{evt.venue}</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed mb-6">
                    {evt.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#F3EFEA]">
                  <button
                    onClick={() => onRegisterEvent(evt.title)}
                    className="w-full py-3 rounded-xl bg-[#1E1B18] hover:bg-[#E05A2B] text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Ticket className="w-4 h-4" />
                    <span>Register to Attend</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Clean Empty State as mandated by the prompt: "Our next conversation is coming soon." */
          <div className="max-w-md mx-auto text-center bg-white rounded-3xl p-10 border border-[#E7DFD5] shadow-xs">
            <div className="w-14 h-14 rounded-2xl bg-[#FAF7F2] text-[#78716C] flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-extrabold text-[#1E1B18] mb-2">
              Our next conversation is coming soon.
            </h3>
            <p className="text-xs sm:text-sm text-[#78716C] mb-6 leading-relaxed">
              We are finalizing dates and locations for this track. Leave your email in our join form to be notified the moment the next session opens.
            </p>
            <button
              onClick={() => onRegisterEvent('General Inquiry')}
              className="px-5 py-2.5 rounded-xl bg-[#E05A2B] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#CC4F23]"
            >
              Get Notified
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
