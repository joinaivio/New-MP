
'use client';

import React, { useEffect, useRef } from 'react';
import { BUSINESS_INFO } from '../constants';
import InstagramIcon from './icons/InstagramIcon';
import FacebookIcon from './icons/FacebookIcon';

const Socials: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const targets = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    targets?.forEach(target => observer.observe(target));

    return () => {
      targets?.forEach(target => observer.unobserve(target));
    };
  }, []);

  return (
    <section id="socials" className="py-20 md:py-28 bg-gray-50" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-bold animate-on-scroll">Follow Our Journey</h2>
          <p className="mt-3 text-lg text-gray-600 animate-on-scroll" style={{ transitionDelay: '100ms' }}>Stay updated with our latest cuts and styles on social media.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Instagram Card */}
          <div className="flex flex-col animate-on-scroll" style={{ transitionDelay: '200ms' }}>
            <div className="bg-white p-2 rounded-smooth shadow-soft border border-gray-200/50 flex-grow transition-all duration-300 hover:shadow-soft-hover hover:-translate-y-1">
              <img
                src="https://drive.google.com/uc?export=view&id=10LeTglA3kvPQvWjlJrNfwIWepV_c1GH5"
                alt="Master P Barbershop Instagram feed example"
                className="w-full h-full object-cover rounded-md aspect-[4/5]"
                loading="lazy"
              />
            </div>
            <a href={BUSINESS_INFO.instagram} target="_blank" rel="noopener noreferrer" className="mt-4 flex items-center justify-center gap-3 w-full py-3 px-6 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 text-white font-semibold rounded-smooth hover:opacity-90 transition-all duration-300 transform hover:scale-105">
              <InstagramIcon className="w-5 h-5" />
              Follow on Instagram
            </a>
          </div>

          {/* Facebook Card */}
          <div className="flex flex-col animate-on-scroll" style={{ transitionDelay: '300ms' }}>
            <div className="bg-white p-2 rounded-smooth shadow-soft border border-gray-200/50 flex-grow transition-all duration-300 hover:shadow-soft-hover hover:-translate-y-1">
               <img
                src="https://drive.google.com/uc?export=view&id=1MjQASDN002kxVb9Atpm0hxg8CmgdXOx_"
                alt="Master P Barbershop Facebook feed example"
                className="w-full h-full object-cover rounded-md aspect-[4/5]"
                loading="lazy"
              />
            </div>
            <a href={BUSINESS_INFO.facebook} target="_blank" rel="noopener noreferrer" className="mt-4 flex items-center justify-center gap-3 w-full py-3 px-6 bg-[#1877F2] text-white font-semibold rounded-smooth hover:bg-[#166fe5] transition-all duration-300 transform hover:scale-105">
              <FacebookIcon className="w-5 h-5" />
              Follow on Facebook
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Socials;
