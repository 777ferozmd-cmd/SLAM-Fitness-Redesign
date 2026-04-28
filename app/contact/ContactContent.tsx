"use client";

import { useState } from "react";
import { CONTACT } from "@/lib/constants";
import ContactForm from "@/components/sections/ContactForm";
import { Phone, Mail, MapPin, ChevronDown } from "lucide-react";
import Link from "next/link";

const LOCATIONS_DATA = {
  "Kilpauk (HQ)": {
    address: "#18/70, Halls Road, Kilpauk, Chennai – 600 010",
    phone: "+91 98400 67890",
    mapEmbed: "https://maps.google.com/maps?width=100%25&height=600&hl=en&q=18/70,%20Halls%20Road,%20Kilpauk,%20Chennai+(Ferous%20Fitness%20Studio)&t=&z=14&ie=UTF8&iwloc=B&output=embed"
  },
  "Nungambakkam": {
    address: "123 Fitness Avenue, Nungambakkam, Chennai – 600 034",
    phone: "+91 98400 12345",
    mapEmbed: "https://maps.google.com/maps?width=100%25&height=600&hl=en&q=123%20Fitness%20Avenue,%20Nungambakkam,%20Chennai+(Ferous%20Fitness%20Studio)&t=&z=14&ie=UTF8&iwloc=B&output=embed"
  },
  "Adyar": {
    address: "45 LB Road, Adyar, Chennai – 600 020",
    phone: "+91 98400 12346",
    mapEmbed: "https://maps.google.com/maps?width=100%25&height=600&hl=en&q=45%20LB%20Road,%20Adyar,%20Chennai+(Ferous%20Fitness%20Studio)&t=&z=14&ie=UTF8&iwloc=B&output=embed"
  }
};

type LocationKey = keyof typeof LOCATIONS_DATA;

export default function ContactContent() {
  const [selectedLocation, setSelectedLocation] = useState<LocationKey>("Kilpauk (HQ)");

  const locationInfo = LOCATIONS_DATA[selectedLocation];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
      
      {/* Left: Contact Info & Map */}
      <div className="flex flex-col gap-12">
        
        <div className="flex flex-col gap-8">
          <h2 className="text-3xl font-bold text-white">Contact Information</h2>
          
          <div className="flex flex-col gap-6">
            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-ferous-accent/10 flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-ferous-accent" />
              </div>
              <div>
                <h3 className="text-white font-bold mb-1">Call Us</h3>
                <p className="text-ferous-muted mb-1 text-sm">Customer Care</p>
                <a href={`tel:${locationInfo.phone.replace(/\s+/g, '')}`} className="text-white hover:text-ferous-accent transition-colors font-medium text-lg block">
                  {locationInfo.phone}
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-ferous-accent/10 flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6 text-ferous-accent" />
              </div>
              <div>
                <h3 className="text-white font-bold mb-1">Email Us</h3>
                <p className="text-ferous-muted mb-1 text-sm">Support & Inquiries</p>
                <a href={`mailto:${CONTACT.customerEmail}`} className="text-white hover:text-ferous-accent transition-colors font-medium text-lg block">
                  {CONTACT.customerEmail}
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-ferous-accent/10 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-ferous-accent" />
              </div>
              <div>
                <h3 className="text-white font-bold mb-1">Location Details</h3>
                <p className="text-ferous-muted leading-relaxed max-w-[320px]">
                  {locationInfo.address}
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-6 border-t border-[#2A2A2A] flex gap-4">
                <Link href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-[#1A1A1A] border border-[#2A2A2A] flex items-center justify-center text-white hover:text-ferous-accent hover:border-ferous-accent transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </Link>
                <Link href={CONTACT.facebook} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-[#1A1A1A] border border-[#2A2A2A] flex items-center justify-center text-white hover:text-ferous-accent hover:border-ferous-accent transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </Link>
            </div>
          </div>
        </div>

        {/* Location Select (Above Map & Below Social Icons) */}
        <div className="flex flex-col gap-4">
          <p className="text-white font-bold uppercase text-[12px] tracking-wider">Choose Location to View on Map</p>
          <div className="relative inline-block w-full">
            <select 
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value as LocationKey)}
              className="w-full bg-[#1A1A1A] border border-[#2A2A2A] text-white px-4 py-4 rounded-lg focus:outline-none focus:border-ferous-accent transition-colors appearance-none cursor-pointer text-lg font-medium"
            >
              {Object.keys(LOCATIONS_DATA).map((loc) => (
                <option key={loc} value={loc}>{loc}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-ferous-muted pointer-events-none" />
          </div>
        </div>

        {/* Dynamic Map */}
        <div className="w-full h-[400px] bg-[#141414] border border-[#2A2A2A] rounded-2xl overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-500">
          <iframe 
            key={selectedLocation}
            src={locationInfo.mapEmbed}
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy"
            title={`Ferous Fitness ${selectedLocation}`}
          ></iframe>
        </div>

      </div>

      {/* Right: Contact Form */}
      <div className="w-full">
        <h2 className="text-3xl font-bold text-white mb-8">Send a Message</h2>
        <ContactForm />
      </div>

    </div>
  );
}
