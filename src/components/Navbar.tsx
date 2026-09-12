import React, { useState, useEffect } from 'react';
import { MessageSquare, Menu, X, ArrowRight, ExternalLink, Heart } from 'lucide-react';

interface NavbarProps {
  onOpenJoin: (tab?: 'join' | 'attend' | 'partner' | 'contact') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenJoin }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Why Talk It Out?', href: '#why' },
    { label: 'What We Do', href: '#what-we-do' },
    { label: 'The Experience', href: '#experience' },
    { label: 'Weekly Sessions', href: '#sessions' },
    { label: 'Topics', href: '#topics' },
    { label: 'Weekly Challenge', href: '#challenge' },
    { label: 'Podcast', href: '#podcast' },
    { label: 'Question Box', href: '#question-box' },
    { label: 'Events', href: '#events' },
    { label: 'About', href: '#about' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top micro announcement bar */}
      <div className="bg-[#2B5948] text-white text-xs py-2 px-4 text-center font-medium flex items-center justify-center gap-2">
        <span className="inline-block w-2 h-2 rounded-full bg-[#E89D38] animate-pulse"></span>
        <span>A Communication Initiative by</span>
        <a 
          href="https://www.thenuelfoundation.org/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="underline hover:text-[#E89D38] inline-flex items-center gap-1 font-semibold transition-colors"
        >
          Nuel Foundation <ExternalLink className="w-3 h-3 inline" />
        </a>
      </div>

      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E7DFD5] shadow-xs py-3'
            : 'bg-[#FAF7F2] py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Identity */}
          <a
            href="#"
            className="flex items-center gap-3 group"
            aria-label="Talk It Out Home"
          >
            <div className="w-10 h-10 rounded-xl bg-[#E05A2B] text-white flex items-center justify-center shadow-xs transition-transform group-hover:scale-105">
              <MessageSquare className="w-5 h-5 fill-current" />
            </div>
            <div>
              <span className="font-extrabold text-xl tracking-tight text-[#1E1B18] block leading-none">
                TALK IT OUT
              </span>
              <span className="text-[11px] font-semibold text-[#78716C] tracking-wide uppercase mt-0.5 block">
                Nuel Foundation Initiative
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-6 text-sm font-medium text-[#44403C]">
            {navLinks.slice(0, 7).map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="hover:text-[#E05A2B] transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
            <div className="relative group py-1">
              <button className="flex items-center gap-1 text-[#44403C] hover:text-[#E05A2B] cursor-pointer">
                <span>More</span>
                <span className="text-xs">▾</span>
              </button>
              <div className="absolute left-0 top-full hidden group-hover:flex flex-col bg-white border border-[#E7DFD5] rounded-xl shadow-lg p-2 min-w-44 z-50">
                {navLinks.slice(7).map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="px-3 py-2 text-sm text-[#44403C] hover:bg-[#F3EFEA] hover:text-[#E05A2B] rounded-lg transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => onOpenJoin('attend')}
              className="text-sm font-semibold text-[#2B5948] hover:text-[#1F4335] px-4 py-2 rounded-xl transition-colors hover:bg-[#2B5948]/8 cursor-pointer"
            >
              Weekly Sessions
            </button>
            <button
              onClick={() => onOpenJoin('join')}
              className="text-sm font-bold text-white bg-[#E05A2B] hover:bg-[#CC4F23] px-5 py-2.5 rounded-xl shadow-xs transition-all hover:shadow-md cursor-pointer flex items-center gap-2 group"
            >
              <span>Join Talk It Out</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              onClick={() => onOpenJoin('join')}
              className="text-xs font-bold text-white bg-[#E05A2B] px-3.5 py-2 rounded-lg"
            >
              Join
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#1E1B18] hover:bg-[#EFE8DE] rounded-lg transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-[#FAF7F2] border-b border-[#E7DFD5] px-4 pt-3 pb-6 space-y-3">
            <div className="grid grid-cols-2 gap-2 text-sm font-medium">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-3 py-2 text-[#44403C] hover:bg-[#EFE8DE] rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="pt-3 border-t border-[#E7DFD5] space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenJoin('attend');
                }}
                className="w-full text-center py-2.5 text-sm font-semibold text-[#2B5948] bg-[#2B5948]/10 rounded-xl"
              >
                Join Next Session
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenJoin('join');
                }}
                className="w-full text-center py-3 text-sm font-bold text-white bg-[#E05A2B] rounded-xl shadow-xs"
              >
                Join Talk It Out Community
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
