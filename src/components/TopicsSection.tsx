import React, { useState } from 'react';
import { Sparkles, MessageCircle, X, ArrowRight, Lightbulb, HelpCircle, Layers, Plus } from 'lucide-react';
import { TOPICS } from '../data/initialData';
import { Topic } from '../types';

export const TopicsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeTopicModal, setActiveTopicModal] = useState<Topic | null>(null);

  const categories = ['All', 'Expression', 'Listening', 'Conflict & Repair', 'Emotions & Pressure', 'Confidence'];

  const filteredTopics = selectedCategory === 'All' 
    ? TOPICS 
    : TOPICS.filter(t => t.category === selectedCategory);

  return (
    <section id="topics" className="py-16 sm:py-24 bg-[#FAF7F2] border-t border-[#E7DFD5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E05A2B]/10 text-[#E05A2B] text-xs font-bold uppercase tracking-wider mb-3">
            Real Conversations We Unpack
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#1E1B18] tracking-tight leading-tight mb-4">
            Talk It Out Topics
          </h2>
          <p className="text-base sm:text-lg text-[#57534E] leading-relaxed">
            The conversations we shy away from are usually the ones we need the most. Explore the core topics explored during our weekly sessions.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#1E1B18] text-white shadow-xs'
                  : 'bg-white border border-[#E7DFD5] text-[#57534E] hover:border-[#E05A2B] hover:text-[#1E1B18]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Topic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredTopics.map((topic) => (
            <div
              key={topic.id}
              onClick={() => setActiveTopicModal(topic)}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E7DFD5] shadow-2xs hover:border-[#E05A2B] hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-[#FAF7F2] text-[#E05A2B] border border-[#E7DFD5]">
                    {topic.category}
                  </span>
                  <span className="text-xs text-[#A8A29E] group-hover:text-[#E05A2B] transition-colors font-bold">
                    Explore →
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-[#1E1B18] tracking-tight mb-3 group-hover:text-[#E05A2B] transition-colors">
                  {topic.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed line-clamp-3 mb-6">
                  {topic.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#F3EFEA] flex items-center justify-between text-xs text-[#78716C]">
                <span className="italic font-medium">Click to view session scenario</span>
                <span className="w-7 h-7 rounded-full bg-[#FAF7F2] text-[#1E1B18] flex items-center justify-center font-bold group-hover:bg-[#E05A2B] group-hover:text-white transition-colors">
                  +
                </span>
              </div>
            </div>
          ))}

          {/* Extensible Future Topic Slot Card */}
          <div className="bg-[#EFE8DE]/60 border-2 border-dashed border-[#DED3C4] rounded-3xl p-6 sm:p-7 flex flex-col items-center justify-center text-center">
            <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-[#78716C] mb-3 shadow-2xs">
              <Plus className="w-6 h-6" />
            </div>
            <h4 className="text-base font-bold text-[#1E1B18] mb-1">
              Suggest a Topic
            </h4>
            <p className="text-xs text-[#78716C] max-w-xs mb-4">
              What conversation are young people struggling to have right now?
            </p>
            <a
              href="#question-box"
              className="text-xs font-bold text-[#E05A2B] hover:underline"
            >
              Submit in Question Box ↓
            </a>
          </div>
        </div>

        {/* Dynamic Topic Detail Modal */}
        {activeTopicModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1C1917]/60 backdrop-blur-xs">
            <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 border border-[#E7DFD5] shadow-2xl relative max-h-[90vh] overflow-y-auto">
              
              {/* Modal Close */}
              <button
                onClick={() => setActiveTopicModal(null)}
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#FAF7F2] text-[#78716C] hover:text-[#1E1B18] hover:bg-[#EFE8DE] flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close details"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-6">
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#E05A2B] bg-[#E05A2B]/10 px-3 py-1 rounded-full">
                  {activeTopicModal.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1E1B18] tracking-tight mt-3 mb-2">
                  {activeTopicModal.title}
                </h3>
                <p className="text-sm text-[#57534E] leading-relaxed">
                  {activeTopicModal.description}
                </p>
              </div>

              <div className="space-y-4 text-sm">
                {/* Why It Matters */}
                <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E7DFD5]">
                  <h4 className="font-bold text-xs uppercase tracking-wider text-[#2B5948] mb-1">
                    Why This Matters
                  </h4>
                  <p className="text-xs sm:text-sm text-[#1E1B18]">
                    {activeTopicModal.whyItMatters}
                  </p>
                </div>

                {/* Real-Life Scenario */}
                <div className="p-4 rounded-2xl bg-[#FFF8F5] border border-[#FADCD1]">
                  <h4 className="font-bold text-xs uppercase tracking-wider text-[#E05A2B] mb-1">
                    Real-Life Scenario Deconstructed
                  </h4>
                  <p className="text-xs sm:text-sm text-[#44403C] italic">
                    "{activeTopicModal.realLifeScenario}"
                  </p>
                </div>

                {/* Key Reflective Question */}
                <div className="p-4 rounded-2xl bg-white border border-[#E7DFD5]">
                  <h4 className="font-bold text-xs uppercase tracking-wider text-[#D9822B] mb-1 flex items-center gap-1.5">
                    <HelpCircle className="w-4 h-4" />
                    Key Question Explored in Group
                  </h4>
                  <p className="text-xs sm:text-sm text-[#1E1B18] font-semibold">
                    {activeTopicModal.keyQuestion}
                  </p>
                </div>

                {/* Practical Practice Tip */}
                <div className="p-4 rounded-2xl bg-[#2B5948]/10 border border-[#2B5948]/20">
                  <h4 className="font-bold text-xs uppercase tracking-wider text-[#2B5948] mb-1 flex items-center gap-1.5">
                    <Lightbulb className="w-4 h-4" />
                    Practical Takeaway & Script
                  </h4>
                  <p className="text-xs sm:text-sm text-[#1F4335] font-medium">
                    {activeTopicModal.practiceTip}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E7DFD5] flex items-center justify-end">
                <button
                  onClick={() => setActiveTopicModal(null)}
                  className="px-6 py-2.5 rounded-xl bg-[#1E1B18] text-white font-bold text-sm cursor-pointer hover:bg-[#44403C]"
                >
                  Close
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
