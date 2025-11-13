
'use client';

import React, { useEffect, useRef } from 'react';
import { SERVICES_DATA, WOMENS_SERVICES_DATA, BUSINESS_INFO } from '../constants';
import PhoneIcon from './icons/PhoneIcon';
import WhatsAppIcon from './icons/WhatsAppIcon';

const ServiceCard: React.FC<{ service: typeof SERVICES_DATA[0], index: number }> = ({ service, index }) => (
  <div 
    className="bg-white p-6 rounded-smooth border border-gray-200/50 shadow-soft flex justify-between items-center animate-on-scroll transition-all duration-300 hover:shadow-soft-hover hover:-translate-y-1" 
    style={{ transitionDelay: `${index * 50}ms` }}
  >
    <div>
      <h3 className="font-semibold text-lg text-brand-dark">{service.name}</h3>
      <p className="text-sm text-gray-500 mt-1">{service.duration}</p>
    </div>
    <p className="font-semibold text-lg text-brand-brown">{service.price}</p>
  </div>
);

const Services: React.FC = () => {
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
    <section id="services" className="py-20 md:py-28 bg-white" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <img src="/assets/MP copy.png" alt="Master P Barbershop Logo" className="mx-auto h-20 md:h-24 w-auto mb-8 drop-shadow-md animate-on-scroll"/>
          <h2 className="font-heading text-4xl md:text-5xl font-bold animate-on-scroll" style={{ transitionDelay: '100ms' }}>Services & Pricing</h2>
          <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto animate-on-scroll" style={{ transitionDelay: '200ms' }}>
            Quality service for everyone. Prices are placeholders and may vary.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-x-12 gap-y-10">
          <div>
            <h3 className="font-heading text-2xl md:text-3xl font-bold mb-6 text-center lg:text-left animate-on-scroll" style={{ transitionDelay: '300ms' }}>Men’s Services</h3>
            <div className="space-y-4">
              {SERVICES_DATA.map((service, index) => (
                <ServiceCard key={`men-${index}`} service={service} index={index + 8} />
              ))}
            </div>
          </div>
           <div>
            <h3 className="font-heading text-2xl md:text-3xl font-bold mb-6 text-center lg:text-left animate-on-scroll" style={{ transitionDelay: '400ms' }}>Women’s Services</h3>
            <div className="space-y-4">
              {WOMENS_SERVICES_DATA.map((service, index) => (
                <ServiceCard key={`women-${index}`} service={service} index={index + 10} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="sticky bottom-4 z-40 mt-16 flex justify-center">
         <div className="flex items-center gap-2 bg-brand-dark text-white p-2 rounded-smooth shadow-soft transition-transform hover:scale-105">
           <a href={`tel:${BUSINESS_INFO.phone}`} className="flex items-center gap-2 px-4 py-2 rounded-smooth hover:bg-white/10 transition-colors">
            <PhoneIcon className="w-5 h-5" />
            <span className="text-sm font-semibold">Call Now</span>
           </a>
           <div className="w-px h-6 bg-white/20"></div>
           <a href={BUSINESS_INFO.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-smooth hover:bg-white/10 transition-colors">
            <WhatsAppIcon className="w-5 h-5" />
            <span className="text-sm font-semibold">WhatsApp Us</span>
           </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
