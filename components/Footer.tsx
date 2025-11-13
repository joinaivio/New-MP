import React from 'react';
import { BUSINESS_INFO, OPENING_HOURS } from '../constants';
import InstagramIcon from './icons/InstagramIcon';
import FacebookIcon from './icons/FacebookIcon';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <h3 className="font-heading text-2xl font-bold">Master P Barbershop</h3>
            <p className="mt-2 text-white/70">{BUSINESS_INFO.slogan}</p>
            <div className="mt-6 space-y-2 text-white/90">
                <p>{BUSINESS_INFO.address}</p>
                <p>Phone: <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-brand-brown-light">{BUSINESS_INFO.phoneDisplay}</a></p>
                <p>Email: <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-brand-brown-light">{BUSINESS_INFO.email}</a></p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold tracking-wider uppercase text-white/80">Hours</h4>
            <div className="mt-4 space-y-1 text-white/70">
              {Object.entries(OPENING_HOURS).map(([day, hours]) => (
                <div key={day} className="flex justify-between text-sm">
                  <span>{day}</span>
                  <span>{hours}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold tracking-wider uppercase text-white/80">Follow Us</h4>
            <div className="mt-4 flex space-x-4">
              <a href={BUSINESS_INFO.instagram} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
                <InstagramIcon className="w-6 h-6" />
              </a>
              <a href={BUSINESS_INFO.facebook} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
                <FacebookIcon className="w-6 h-6" />
              </a>
            </div>
            <div className="mt-6 w-full h-32 bg-gray-800 rounded-smooth overflow-hidden">
                {/* Mini map placeholder */}
                 <iframe
                    src={`https://maps.google.com/maps?q=${encodeURIComponent(BUSINESS_INFO.address)}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: 'grayscale(1) invert(1)' }}
                    allowFullScreen={false}
                    loading="lazy"
                    title="Mini Map"
                ></iframe>
            </div>
          </div>

        </div>
        <div className="mt-16 pt-8 border-t border-white/20 text-center text-sm text-white/50">
          <p>&copy; {new Date().getFullYear()} Master P Barbershop. All Rights Reserved.</p>
          <p className="mt-2 text-xs uppercase tracking-wider">
            Powered by <a href="#" className="font-semibold hover:text-white">AIVIO</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;