import React, { useState } from 'react';
import { Send, Shield, Lock, CheckCircle2, AlertTriangle, MessageSquare, Info, Loader2, MessageCircle, Mail } from 'lucide-react';
import { SAMPLE_QUESTIONS } from '../data/initialData';

export const QuestionBox: React.FC = () => {
  const [question, setQuestion] = useState('');
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [permission, setPermission] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSampleClick = (sample: string) => {
    setQuestion(sample);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) {
      setErrorMessage('Please enter the question or conversation struggle you are thinking about.');
      return;
    }
    setErrorMessage('');
    setIsSubmitting(true);

    try {
      const isEmail = contact.includes('@');
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formType: 'Anonymous Question Box',
          name: name.trim() || 'Anonymous',
          email: isEmail ? contact.trim() : undefined,
          phone: !isEmail && contact.trim() ? contact.trim() : undefined,
          question: question.trim(),
          message: question.trim(),
          permissionGranted: permission,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitted(true);
      } else {
        setErrorMessage("Something went wrong while sending your message. Please try again or contact us directly.");
      }
    } catch (err) {
      setErrorMessage("Something went wrong while sending your message. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setQuestion('');
    setName('');
    setContact('');
    setErrorMessage('');
    setSubmitted(false);
  };

  const whatsappUrl = "https://wa.me/2347083445086?text=Hello%20Talk%20It%20Out%2C%20I%20would%20like%20to%20know%20more%20about%20the%20initiative.";

  return (
    <section id="question-box" className="py-16 sm:py-24 bg-white border-t border-[#E7DFD5] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E05A2B]/10 text-[#E05A2B] text-xs font-bold uppercase tracking-wider mb-3">
            Anonymous Question Box
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#1E1B18] tracking-tight leading-tight mb-4">
            WHAT HAVE YOU BEEN TRYING TO SAY?
          </h2>
          <p className="text-base sm:text-lg text-[#57534E] leading-relaxed">
            “Some conversations are difficult to start. Tell us what you're struggling to communicate.”
          </p>
        </div>

        {/* Example Questions Inspiration Chips */}
        <div className="mb-8">
          <span className="text-xs font-bold text-[#78716C] uppercase tracking-wider block text-center mb-3">
            Common questions others often ask (click to use as inspiration):
          </span>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {SAMPLE_QUESTIONS.map((sample) => (
              <button
                key={sample}
                type="button"
                onClick={() => handleSampleClick(sample)}
                className="px-3.5 py-1.5 rounded-full bg-[#FAF7F2] hover:bg-[#EFE8DE] border border-[#E7DFD5] text-xs text-[#44403C] font-medium transition-colors cursor-pointer text-left"
              >
                "{sample}"
              </button>
            ))}
          </div>
        </div>

        {/* Submission Card */}
        <div className="bg-[#FAF7F2] rounded-3xl p-6 sm:p-10 border border-[#E7DFD5] shadow-xs">
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-2xl bg-[#2B5948]/15 text-[#2B5948] flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-extrabold text-[#1E1B18] mb-2">
                Message Received
              </h3>
              <p className="text-sm text-[#57534E] max-w-md mx-auto leading-relaxed mb-6 font-medium">
                Thank you for reaching out to Talk It Out. We've received your message and will get back to you soon.
              </p>
              <div className="p-4 rounded-2xl bg-white border border-[#E7DFD5] mb-6 max-w-md mx-auto text-xs text-[#57534E] text-left space-y-1">
                <div><strong>Routed directly to:</strong> talkitoutinitiative@gmail.com</div>
                <div><strong>Direct WhatsApp / Phone:</strong> 07083445086</div>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={resetForm}
                  className="px-6 py-2.5 rounded-xl bg-[#1E1B18] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#44403C] cursor-pointer"
                >
                  Submit Another Thought
                </button>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#2B5948] text-white font-bold text-xs hover:bg-[#23473a] transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp: 07083445086</span>
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Privacy Reassurance Note */}
              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-[#E7DFD5] text-xs text-[#57534E]">
                <Lock className="w-4 h-4 text-[#2B5948] shrink-0 mt-0.5" />
                <p>
                  <strong>Anonymous by default:</strong> You do not need to provide your real name or contact info. Submissions are never published automatically on the website.
                </p>
              </div>

              {/* Question / Message Field */}
              <div>
                <label className="block text-xs font-extrabold uppercase tracking-wider text-[#1E1B18] mb-1.5">
                  Your Question or Message <span className="text-[#E05A2B]">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  placeholder="What conversation are you avoiding, struggling with, or wishing you had handled differently?"
                  className="w-full px-4 py-3 rounded-2xl bg-white border border-[#DED3C4] focus:outline-none focus:border-[#E05A2B] text-sm text-[#1E1B18] placeholder-[#A8A29E] transition-colors"
                />
              </div>

              {/* Optional Fields: Name and Contact */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#57534E] mb-1.5">
                    Your First Name or Alias <span className="text-xs text-[#78716C]">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Tunde, Joy, or leave blank"
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#DED3C4] focus:outline-none focus:border-[#E05A2B] text-sm text-[#1E1B18]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#57534E] mb-1.5">
                    Email or Phone <span className="text-xs text-[#78716C]">(Optional, if you want a direct reply)</span>
                  </label>
                  <input
                    type="text"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    placeholder="e.g. 07083445086 or your email"
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#DED3C4] focus:outline-none focus:border-[#E05A2B] text-sm text-[#1E1B18]"
                  />
                </div>
              </div>

              {/* Permission Checkbox */}
              <div className="pt-2">
                <label className="flex items-start gap-3 cursor-pointer text-xs text-[#44403C]">
                  <input
                    type="checkbox"
                    checked={permission}
                    onChange={(e) => setPermission(e.target.checked)}
                    className="mt-0.5 rounded text-[#E05A2B] focus:ring-[#E05A2B]"
                  />
                  <span>
                    I give permission for this question or conversational scenario to be discussed anonymously in future Talk It Out sessions or podcasts.
                  </span>
                </label>
              </div>

              {errorMessage && (
                <p className="text-xs font-bold text-red-600 bg-red-50 p-3 rounded-xl border border-red-200">
                  {errorMessage}
                </p>
              )}

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-2xl bg-[#E05A2B] hover:bg-[#CC4F23] disabled:opacity-60 text-white font-bold text-sm shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Submitting to Talk It Out...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Crucial Safeguarding & Mental Health Safety Disclaimer */}
        <div className="mt-8 p-4 rounded-2xl bg-[#FFF8F5] border border-[#FADCD1] text-xs text-[#78716C] flex items-start gap-3">
          <Info className="w-4 h-4 text-[#E05A2B] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Important Safety Notice:</strong> Talk It Out is an educational and community communication initiative under Nuel Foundation. It is <strong>NOT</strong> a replacement for licensed medical, psychological, emergency, or safeguarding crisis services. If you or someone you know is in immediate distress or danger, please reach out directly to licensed local medical or emergency resources.
          </p>
        </div>

      </div>
    </section>
  );
};
