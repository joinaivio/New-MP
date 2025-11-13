'use client';

import React, { useEffect, useRef } from 'react';
import { BARBERS_DATA } from '../constants';

const Barbers: React.FC = () => {
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
    <section id="barbers" className="py-20 md:py-28 bg-white" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-bold animate-on-scroll">Our Barbers</h2>
          <p className="mt-3 text-lg text-gray-600 animate-on-scroll" style={{ transitionDelay: '100ms' }}>Meet the master craftsmen behind the chair.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {BARBERS_DATA.map((barber, index) => (
            <div 
              key={index} 
              className="text-center group animate-on-scroll" 
              style={{transitionDelay: `${index * 100 + 200}ms`}}
            >
              <div className="relative rounded-smooth shadow-soft overflow-hidden aspect-[4/5] mb-4 transition-all duration-300 group-hover:shadow-soft-hover group-hover:-translate-y-2">
                <img
                  src={barber.imageUrl}
                  alt={`Photo of ${barber.name}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <h3 className="font-heading text-2xl font-bold">{barber.name}</h3>
              <p className="text-brand-brown-light font-medium">{barber.specialties}</p>
              <p className="text-gray-500 text-sm mt-1">{barber.experience} experience</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Barbers;
