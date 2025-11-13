
import React from 'react';
import { BUSINESS_INFO } from '../constants';
import PhoneIcon from './icons/PhoneIcon';
import WhatsAppIcon from './icons/WhatsAppIcon';

const Hero: React.FC = () => {
  return (
    <section className="relative -mt-20 h-screen min-h-[600px] md:min-h-[700px] flex items-center justify-center text-center text-brand-white">
      <div
        className="absolute inset-0 bg-black overflow-hidden hero-bg-animate"
        style={{
          backgroundImage: `url(https://drive.google.com/uc?export=view&id=1kI-QUcQQ70Gtp14pZxA5Tz12h_hiiU3W)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      <div className="relative z-10 p-4 flex flex-col items-center">
        <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tight fade-in" style={{ animationDelay: '100ms' }}>
          Look Sharp. Feel Sharper.
        </h1>
        <p className="mt-4 max-w-2xl text-lg md:text-xl text-white/90 fade-in" style={{ animationDelay: '200ms' }}>
          Precision fades, classic cuts and beard work—done right in Midrand.
        </p>
        <p className="mt-6 font-heading text-2xl md:text-3xl font-semibold tracking-wide text-white fade-in" style={{ animationDelay: '300ms' }}>
          {BUSINESS_INFO.slogan}
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 fade-in" style={{ animationDelay: '400ms' }}>
          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-brand-brown text-white font-semibold rounded-smooth shadow-soft hover:bg-brand-brown-light transition-all duration-200 transform hover:scale-105"
          >
            <PhoneIcon className="w-5 h-5" />
            Call Now
          </a>
          <a
            href={BUSINESS_INFO.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-smooth border border-white/20 hover:bg-white/20 transition-all duration-200 transform hover:scale-105"
          >
            <WhatsAppIcon className="w-5 h-5" />
            WhatsApp Us
          </a>
        </div>
        <div className="mt-10 flex items-center gap-x-6 text-sm text-white/80 fade-in" style={{ animationDelay: '500ms' }}>
          <span>Skilled barbers</span>
          <span className="opacity-50">•</span>
          <span>Clean fades & razor details</span>
           <span className="opacity-50">•</span>
          <span>Walk-ins welcome</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
