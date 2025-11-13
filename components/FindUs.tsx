'use client';

import React, { useState, useEffect } from 'react';
import { BUSINESS_INFO, OPENING_HOURS } from '../constants';
import MapPinIcon from './icons/MapPinIcon';
import PhoneIcon from './icons/PhoneIcon';
import WhatsAppIcon from './icons/WhatsAppIcon';

const OpeningStatusBadge: React.FC = () => {
  const [status, setStatus] = useState<string>('Checking status...');
  
  useEffect(() => {
    const fetchWithLocation = (position: GeolocationPosition) => {
      fetchStatus({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      });
    };

    const fetchWithoutLocation = () => {
      console.warn("Geolocation permission denied or error. Fetching status without user location.");
      fetchStatus();
    };

    navigator.geolocation.getCurrentPosition(fetchWithLocation, fetchWithoutLocation);
  }, []);

  const fetchStatus = async (location?: {latitude: number, longitude: number}) => {
    try {
      const response = await fetch('/api/opening-status', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(location || {}),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch status from API');
      }

      const data = await response.json();
      setStatus(data.status || "Could not determine status.");
    } catch (error) {
      console.error("Error fetching opening status:", error);
      setStatus("Check current hours on Google.");
    }
  };
  
  const getStatusColor = () => {
    if (status.toLowerCase().includes('open')) return 'bg-green-100 text-green-800';
    if (status.toLowerCase().includes('closing')) return 'bg-yellow-100 text-yellow-800';
    if (status.toLowerCase().includes('closed')) return 'bg-red-100 text-red-800';
    return 'bg-gray-100 text-gray-800';
  };

  return (
    <span className={`inline-block px-3 py-1 text-sm font-medium rounded-full ${getStatusColor()}`}>
      {status}
    </span>
  );
};


const FindUs: React.FC = () => {
  // The map embed doesn't require an API key for basic functionality.
  const mapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(BUSINESS_INFO.address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <section id="find-us" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-bold">Find Us</h2>
          <p className="mt-3 text-lg text-gray-600">We're located in the heart of Midrand. Walk-ins welcome.</p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="rounded-smooth shadow-soft overflow-hidden aspect-[4/3] relative">
            <iframe
              src={mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map of Master P Barbershop"
            ></iframe>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold font-heading">Opening Hours</h3>
              <div className="mt-2">
                <OpeningStatusBadge />
              </div>
              <div className="mt-4 space-y-2 text-gray-700">
                {Object.entries(OPENING_HOURS).map(([day, hours]) => (
                  <div key={day} className="flex justify-between">
                    <span>{day}</span>
                    <span className="font-medium">{hours}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
               <h3 className="text-2xl font-bold font-heading mb-4">Get In Touch</h3>
               <div className="flex flex-col sm:flex-row gap-4">
                <a href={BUSINESS_INFO.googleMapsLink} target="_blank" rel="noopener noreferrer" className="flex-1 text-center py-3 px-5 bg-gray-100 hover:bg-gray-200 transition-colors font-semibold rounded-smooth flex items-center justify-center gap-2">
                    <MapPinIcon className="w-5 h-5"/>
                    Get Directions
                </a>
                <a href={`tel:${BUSINESS_INFO.phone}`} className="flex-1 text-center py-3 px-5 bg-brand-brown text-white hover:bg-brand-brown-light transition-colors font-semibold rounded-smooth flex items-center justify-center gap-2">
                    <PhoneIcon className="w-5 h-5"/>
                    Call Now
                </a>
                <a href={BUSINESS_INFO.whatsapp} target="_blank" rel="noopener noreferrer" className="flex-1 text-center py-3 px-5 bg-green-500 text-white hover:bg-green-600 transition-colors font-semibold rounded-smooth flex items-center justify-center gap-2">
                    <WhatsAppIcon className="w-5 h-5"/>
                    WhatsApp
                </a>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindUs;
