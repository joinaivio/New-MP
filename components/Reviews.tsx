'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { REVIEWS_DATA } from '../constants';
import StarIcon from './icons/StarIcon';
import ChevronLeftIcon from './icons/ChevronLeftIcon';
import ChevronRightIcon from './icons/ChevronRightIcon';

const Reviews: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoplayRef = useRef<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const startAutoplay = useCallback(() => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    autoplayRef.current = window.setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % REVIEWS_DATA.length);
    }, 5000);
  }, []);

  const stopAutoplay = () => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
  };

  useEffect(() => {
    startAutoplay();
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
        stopAutoplay();
        targets?.forEach(target => observer.unobserve(target));
    }
  }, [startAutoplay]);
  
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % REVIEWS_DATA.length);
    stopAutoplay();
    startAutoplay();
  };
  
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + REVIEWS_DATA.length) % REVIEWS_DATA.length);
    stopAutoplay();
    startAutoplay();
  };

  return (
    <section id="reviews" className="py-20 md:py-28 bg-gray-50" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-bold animate-on-scroll">What Our Clients Say</h2>
          <p className="mt-3 text-lg text-gray-600 animate-on-scroll" style={{ transitionDelay: '100ms' }}>Straight from the source. Real reviews from real clients.</p>
          <div className="mt-6 inline-flex items-center gap-3 bg-white p-2 pr-4 rounded-smooth shadow-soft border border-gray-200/50 animate-on-scroll" style={{ transitionDelay: '200ms' }}>
            <svg className="w-7 h-7" viewBox="0 0 533.5 544.3" xmlns="http://www.w3.org/2000/svg"><path d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z" fill="#4285f4"/><path d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z" fill="#34a853"/><path d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z" fill="#fbbc04"/><path d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 340.1 0 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z" fill="#ea4335"/></svg>
            <div className="text-left">
              <p className="font-bold text-lg leading-tight">4.9 / 5.0</p>
              <p className="text-sm text-gray-500 leading-tight">from 27 Google reviews</p>
            </div>
          </div>
        </div>

        <div 
          className="relative max-w-2xl mx-auto animate-on-scroll"
          style={{ transitionDelay: '300ms' }}
          onMouseEnter={stopAutoplay}
          onMouseLeave={startAutoplay}
        >
          <div className="overflow-hidden rounded-smooth">
            <div
              className="flex transition-transform duration-700"
              style={{ transform: `translateX(-${currentIndex * 100}%)`, transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}
            >
              {REVIEWS_DATA.map((review, index) => (
                <div key={index} className="w-full flex-shrink-0 p-1">
                  <div className="bg-white p-8 rounded-smooth shadow-soft flex flex-col h-full text-center min-h-[280px] justify-center">
                    <div className="flex items-center justify-center mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-700 italic flex-grow text-lg">"{review.quote}"</p>
                    <div className="flex items-center justify-center gap-2">
                        <p className="mt-6 font-semibold text-brand-dark">- {review.name}</p>
                        {review.isLocalGuide && (
                            <span className="mt-6 text-xs font-semibold bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">Local Guide</span>
                        )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button onClick={prevSlide} className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-all transform hover:scale-110">
            <ChevronLeftIcon className="w-6 h-6 text-brand-dark" />
          </button>
          <button onClick={nextSlide} className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-all transform hover:scale-110">
            <ChevronRightIcon className="w-6 h-6 text-brand-dark" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
