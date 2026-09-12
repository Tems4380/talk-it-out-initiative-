import React, { useState } from 'react';
import { X, CheckCircle, Users, Calendar, Handshake, Mail, Send, Sparkles, MessageCircle, Phone, Loader2, AlertCircle } from 'lucide-react';

interface JoinModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTab?: 'join' | 'attend' | 'partner' | 'contact';
}

export const JoinModal: React.FC<JoinModalProps> = ({
  isOpen,
  onClose,
  defaultTab = 'join'
}) => {
  const [activeTab, setActiveTab] = useState<'join' | 'attend' | 'partner' | 'contact'>(defaultTab);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    churchOrOrg: '',
    interestTrack: 'Youth & Young Adult Group',
    message: ''
  });

  // Sync tab when opened
  React.useEffect(() => {
    setActiveTab(defaultTab);
    setSubmitted(false);
    setErrorMessage('');
  }, [defaultTab, isOpen]);

  if (!isOpen) return null;

  const getTabTitle = () => {
    switch (activeTab) {
      case 'join': return 'Join Talk It Out';
      case 'attend': return 'Attend a Session';
      case 'partner': return 'Partner With Talk It Out';
      case 'contact': return 'Contact Talk It Out';
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formType: getTabTitle(),
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          churchOrOrg: formData.churchOrOrg,
          message: formData.message,
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

  const whatsappUrl = "https://wa.me/2347083445086?text=Hello%20Talk%20It%20Out%2C%20I%20would%20like%20to%20know%20more%20about%20the%20initiative.";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1C1917]/65 backdrop-blur-xs">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 border border-[#E7DFD5] shadow-2xl relative max-h-[92vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#FAF7F2] text-[#78716C] hover:text-[#1E1B18] hover:bg-[#EFE8DE] flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Tab switcher */}
        <div className="grid grid-cols-4 gap-1 p-1 bg-[#FAF7F2] rounded-2xl mb-6 text-xs font-bold">
          <button
            onClick={() => { setActiveTab('join'); setSubmitted(false); setErrorMessage(''); }}
            className={`py-2 rounded-xl transition-all cursor-pointer ${
              activeTab === 'join' ? 'bg-[#E05A2B] text-white shadow-xs' : 'text-[#57534E] hover:text-[#1E1B18]'
            }`}
          >
            Join
          </button>
          <button
            onClick={() => { setActiveTab('attend'); setSubmitted(false); setErrorMessage(''); }}
            className={`py-2 rounded-xl transition-all cursor-pointer ${
              activeTab === 'attend' ? 'bg-[#2B5948] text-white shadow-xs' : 'text-[#57534E] hover:text-[#1E1B18]'
            }`}
          >
            Attend
          </button>
          <button
            onClick={() => { setActiveTab('partner'); setSubmitted(false); setErrorMessage(''); }}
            className={`py-2 rounded-xl transition-all cursor-pointer ${
              activeTab === 'partner' ? 'bg-[#D9822B] text-white shadow-xs' : 'text-[#57534E] hover:text-[#1E1B18]'
            }`}
          >
            Partner
          </button>
          <button
            onClick={() => { setActiveTab('contact'); setSubmitted(false); setErrorMessage(''); }}
            className={`py-2 rounded-xl transition-all cursor-pointer ${
              activeTab === 'contact' ? 'bg-[#1E1B18] text-white shadow-xs' : 'text-[#57534E] hover:text-[#1E1B18]'
            }`}
          >
            Contact
          </button>
        </div>

        {/* Title */}
        <div className="mb-6">
          <h3 className="text-2xl font-extrabold text-[#1E1B18] tracking-tight">
            {getTabTitle()}
          </h3>
          <p className="text-xs sm:text-sm text-[#57534E] mt-1">
            {activeTab === 'join' && "Stay plugged into weekly prompts, peer circles, and communication practice."}
            {activeTab === 'attend' && "Reserve your spot for the upcoming Sunday interactive youth session."}
            {activeTab === 'partner' && "Collaborate with us to launch Talk It Out in your fellowship, school, or community."}
            {activeTab === 'contact' && "Reach out to the Talk It Out team for inquiries and direct questions."}
          </p>
        </div>

        {submitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-2xl bg-[#2B5948]/15 text-[#2B5948] flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h4 className="text-2xl font-extrabold text-[#1E1B18] mb-2">
              Submission Received
            </h4>
            <p className="text-sm text-[#57534E] max-w-sm mx-auto leading-relaxed mb-6 font-medium">
              Thank you for reaching out to Talk It Out. We've received your message and will get back to you soon.
            </p>
            <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E7DFD5] mb-6 max-w-sm mx-auto text-xs text-[#57534E] text-left space-y-1">
              <div><strong>Sent to:</strong> talkitoutinitiative@gmail.com</div>
              <div><strong>Direct WhatsApp / Phone:</strong> 07083445086</div>
            </div>
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl bg-[#1E1B18] text-white font-bold text-xs uppercase tracking-wider cursor-pointer hover:bg-[#44403C]"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-[#1E1B18] mb-1">
                Full Name <span className="text-[#E05A2B]">*</span>
              </label>
              <input
                required
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Damilola Adeleke"
                className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#DED3C4] focus:outline-none focus:border-[#E05A2B] text-sm text-[#1E1B18]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#1E1B18] mb-1">
                  Email Address <span className="text-[#E05A2B]">*</span>
                </label>
                <input
                  required
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@domain.com"
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#DED3C4] focus:outline-none focus:border-[#E05A2B] text-sm text-[#1E1B18]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1E1B18] mb-1">
                  Phone / WhatsApp <span className="text-[#E05A2B]">*</span>
                </label>
                <input
                  required
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="07083445086"
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#DED3C4] focus:outline-none focus:border-[#E05A2B] text-sm text-[#1E1B18]"
                />
              </div>
            </div>

            {(activeTab === 'partner' || activeTab === 'attend') && (
              <div>
                <label className="block text-xs font-bold text-[#1E1B18] mb-1">
                  Church, Fellowship, School or Community
                </label>
                <input
                  type="text"
                  value={formData.churchOrOrg}
                  onChange={(e) => setFormData({ ...formData, churchOrOrg: e.target.value })}
                  placeholder="e.g. Local Youth Ministry, Campus Fellowship, or Neighborhood"
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#DED3C4] focus:outline-none focus:border-[#E05A2B] text-sm text-[#1E1B18]"
                />
              </div>
            )}

            <div>
              <label className="block text-xs font-bold text-[#1E1B18] mb-1">
                {activeTab === 'partner' 
                  ? 'How would you like to partner?' 
                  : activeTab === 'contact' 
                    ? 'Your Message' 
                    : 'What communication area are you most eager to improve?'}
              </label>
              <textarea
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder={
                  activeTab === 'partner'
                    ? 'Tell us about your organization or group...'
                    : 'e.g. Speaking up with confidence, listening without getting defensive, etc.'
                }
                className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#DED3C4] focus:outline-none focus:border-[#E05A2B] text-sm text-[#1E1B18]"
              />
            </div>

            {errorMessage && (
              <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                <span>{errorMessage}</span>
              </div>
            )}

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-6 rounded-2xl bg-[#E05A2B] hover:bg-[#CC4F23] disabled:opacity-60 text-white font-bold text-sm shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Sending Submission...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit</span>
                  </>
                )}
              </button>
            </div>

            {/* Talk It Out Official Direct Channels */}
            <div className="mt-5 pt-4 border-t border-[#E7DFD5] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#57534E]">
              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#E05A2B]" />
                <a href="mailto:talkitoutinitiative@gmail.com" className="hover:underline text-[#1E1B18] font-medium">
                  talkitoutinitiative@gmail.com
                </a>
              </div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#2B5948]/10 text-[#2B5948] hover:bg-[#2B5948]/20 font-bold transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Chat on WhatsApp: 07083445086</span>
              </a>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};

