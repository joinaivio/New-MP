'use client';

import React, { useState, useEffect, useRef } from 'react';
import { BUSINESS_INFO } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Our Team', href: '#barbers' },
    { name: 'Find Us', href: '#find-us' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      // Offset calculation for the sticky header
      const headerHeight = headerRef.current?.offsetHeight ?? 80;
      const topMargin = 16; // Corresponds to `top-4` which is 1rem or 16px
      const extraPadding = 24; // Extra space for better visual separation
      const totalOffset = headerHeight + topMargin + extraPadding;
      
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - totalOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`sticky top-4 z-50 transition-all duration-300 mx-4 md:mx-auto max-w-6xl`}>
      <div ref={headerRef} className={`transition-all duration-300 flex items-center justify-between p-2 md:p-3 bg-brand-white/80 backdrop-blur-lg rounded-smooth ${isScrolled ? 'shadow-soft' : ''}`}>
        <a href="#" className="font-heading text-lg md:text-xl font-bold text-brand-brown tracking-tight">
          Master P Barbershop
        </a>
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="cursor-pointer text-sm font-medium text-brand-dark hover:text-brand-brown-light transition-all duration-200 hover:-translate-y-0.5"
            >
              {link.name}
            </a>
          ))}
        </nav>
        <a href={`tel:${BUSINESS_INFO.phone}`} className="px-5 py-2.5 text-sm font-semibold text-brand-white bg-brand-brown hover:bg-brand-brown-light rounded-smooth transition-all duration-200 shadow-sm hover:shadow-md hover:scale-105 transform">
          Call Now
        </a>
      </div>
    </header>
  );
};

export default Header;
