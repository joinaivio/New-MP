'use client';

import React, { useState } from 'react';
import { BUSINESS_INFO } from '../constants';
import PhoneIcon from './icons/PhoneIcon';
import WhatsAppIcon from './icons/WhatsAppIcon';
import MapPinIcon from './icons/MapPinIcon';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', phone: '', message: '', consent: false });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
        const { checked } = e.target as HTMLInputElement;
        setFormState(prevState => ({ ...prevState, [name]: checked }));
    } else {
        setFormState(prevState => ({ ...prevState, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formState.consent) {
      console.log("Form Submitted:", formState);
      setIsSubmitted(true);
      // Here you would typically send the data to a server
      setTimeout(() => {
        setIsSubmitted(false);
        setFormState({ name: '', phone: '', message: '', consent: false });
      }, 3000);
    } else {
        alert("Please consent to being contacted.");
    }
  };

  const contactMethods = [
    { icon: <PhoneIcon className="w-6 h-6 text-brand-brown"/>, title: 'Phone', value: BUSINESS_INFO.phoneDisplay, href: `tel:${BUSINESS_INFO.phone}` },
    { icon: <WhatsAppIcon className="w-6 h-6 text-brand-brown"/>, title: 'WhatsApp', value: 'Message Us', href: BUSINESS_INFO.whatsapp },
    { icon: <MapPinIcon className="w-6 h-6 text-brand-brown"/>, title: 'Address', value: 'Get Directions', href: BUSINESS_INFO.googleMapsLink },
  ];

  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-bold">Contact Us</h2>
          <p className="mt-3 text-lg text-gray-600">Have questions? Get in touch with us.</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            {contactMethods.map((method) => (
              <a key={method.title} href={method.href} target={method.href.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer" className="flex items-center p-6 bg-gray-50 rounded-smooth hover:bg-gray-100 transition-colors border border-gray-200/80">
                <div className="mr-5">{method.icon}</div>
                <div>
                  <h3 className="font-semibold text-lg">{method.title}</h3>
                  <p className="text-gray-600">{method.value}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="bg-gray-50 p-8 rounded-smooth border border-gray-200/80">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input type="text" name="name" id="name" required value={formState.name} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-smooth focus:ring-brand-brown-light focus:border-brand-brown-light transition"/>
              </div>
               <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input type="tel" name="phone" id="phone" required value={formState.phone} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-smooth focus:ring-brand-brown-light focus:border-brand-brown-light transition"/>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea name="message" id="message" rows={4} required value={formState.message} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-smooth focus:ring-brand-brown-light focus:border-brand-brown-light transition"></textarea>
              </div>
              <div className="flex items-start">
                <input id="consent" name="consent" type="checkbox" checked={formState.consent} onChange={handleChange} className="h-4 w-4 text-brand-brown focus:ring-brand-brown-light border-gray-300 rounded mt-0.5" />
                <div className="ml-3 text-sm">
                  <label htmlFor="consent" className="text-gray-500">I consent to Master P Barbershop contacting me regarding my inquiry (POPIA). </label>
                </div>
              </div>
              <div>
                <button type="submit" disabled={isSubmitted} className="w-full py-4 px-6 bg-brand-brown text-white font-semibold rounded-smooth hover:bg-brand-brown-light transition-all disabled:bg-gray-400">
                  {isSubmitted ? 'Message Sent!' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
