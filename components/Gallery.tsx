'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { GALLERY_IMAGES } from '../constants';
import ChevronLeftIcon from './icons/ChevronLeftIcon';
import ChevronRightIcon from './icons/ChevronRightIcon';

const Gallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoplayRef = useRef<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const startAutoplay = useCallback(() => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    autoplayRef.current = window.setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % GALLERY_IMAGES.length);
    }, 4000);
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
    setCurrentIndex((prevIndex) => (prevIndex + 1) % GALLERY_IMAGES.length);
    stopAutoplay();
    startAutoplay();
  };
  
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
    stopAutoplay();
    startAutoplay();
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    stopAutoplay();
    startAutoplay();
  };

  return (
    <section id="gallery" className="py-20 md:py-28 bg-gray-50" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-bold animate-on-scroll">Our Work</h2>
          <p className="mt-3 text-lg text-gray-600 animate-on-scroll" style={{ transitionDelay: '100ms' }}>A gallery of our finest cuts and styles.</p>
        </div>

        <div 
          className="relative rounded-smooth shadow-soft animate-on-scroll"
          style={{ transitionDelay: '200ms' }}
          onMouseEnter={stopAutoplay}
          onMouseLeave={startAutoplay}
        >
          <div className="overflow-hidden rounded-smooth">
            <div
              className="flex transition-transform duration-700"
              style={{ transform: `translateX(-${currentIndex * 100}%)`, transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}
            >
              {GALLERY_IMAGES.map((src, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <img
                    src={src}
                    alt={`Gallery image ${index + 1}`}
                    className="w-full h-auto object-cover aspect-[4/3]"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          <button onClick={prevSlide} className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-all transform hover:scale-110">
            <ChevronLeftIcon className="w-6 h-6 text-brand-dark" />
          </button>
          <button onClick={nextSlide} className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-all transform hover:scale-110">
            <ChevronRightIcon className="w-6 h-6 text-brand-dark" />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {GALLERY_IMAGES.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${currentIndex === index ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
