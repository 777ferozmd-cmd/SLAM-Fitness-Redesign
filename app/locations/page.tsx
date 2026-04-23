import { CONTACT } from "@/lib/constants";
import { MapPin, Phone, Clock, ArrowRight } from "lucide-react";

const LOCATIONS = [
  {
    area: "Kilpauk (HQ)",
    address: "#18/70, Halls Road, Kilpauk, Chennai – 600 010",
    phone: "+91 70944 79145",
    hours: "5:30 AM - 10:30 PM",
    mapLink: "https://maps.google.com/?q=SLAM+Fitness+Kilpauk"
  },
  {
    area: "Nungambakkam",
    address: "123 Fitness Avenue, Nungambakkam, Chennai – 600 034",
    phone: "+91 98765 43210",
    hours: "5:30 AM - 10:30 PM",
    mapLink: "https://maps.google.com/?q=SLAM+Fitness+Nungambakkam"
  },
  {
    area: "Adyar",
    address: "45 LB Road, Adyar, Chennai – 600 020",
    phone: "+91 98765 43211",
    hours: "5:30 AM - 10:30 PM",
    mapLink: "https://maps.google.com/?q=SLAM+Fitness+Adyar"
  }
];

export default function LocationsPage() {
  return (
    <main className="pt-24 pb-24 min-h-screen">
      {/* Hero */}
      <section className="px-6 md:px-20 max-w-[1200px] mx-auto pt-12 pb-16 text-center">
        <span className="text-slam-accent text-[12px] font-semibold uppercase tracking-[0.12em] block mb-3">
          OUR LOCATIONS
        </span>
        <h1 className="text-white text-[clamp(36px,4.5vw,56px)] font-bold mb-6 leading-[1.2]">
          Find Your <span className="text-slam-accent">SLAM</span>
        </h1>
        <p className="text-slam-body text-[18px] max-w-2xl mx-auto">
          We are expanding rapidly across Chennai. Find a premium SLAM Fitness Studio near you and start your transformation today.
        </p>
      </section>

      {/* Locations Grid */}
      <section className="px-6 md:px-20 max-w-[1200px] mx-auto mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {LOCATIONS.map((loc, i) => (
            <div key={i} className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-[16px] p-8 hover:border-slam-accent transition-colors flex flex-col h-full group">
              <h3 className="text-white text-[24px] font-bold mb-6">{loc.area}</h3>
              
              <div className="space-y-4 mb-8 flex-grow">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-slam-accent shrink-0 mt-1" />
                  <p className="text-slam-body text-[15px] leading-relaxed">{loc.address}</p>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-5 h-5 text-slam-accent shrink-0" />
                  <p className="text-slam-body text-[15px]">{loc.phone}</p>
                </div>
                <div className="flex items-center gap-4">
                  <Clock className="w-5 h-5 text-slam-accent shrink-0" />
                  <p className="text-slam-body text-[15px]">{loc.hours}</p>
                </div>
              </div>

              <a
                href={loc.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white font-bold text-[16px] group-hover:text-slam-accent transition-colors mt-auto"
              >
                Get Directions <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Corporate Office */}
      <section className="px-6 md:px-20 max-w-[1200px] mx-auto">
        <div className="bg-[#141414] rounded-[24px] p-12 text-center border border-[#2A2A2A]">
          <h2 className="text-white text-[32px] font-bold mb-6">Corporate Office</h2>
          <div className="flex flex-col items-center gap-4 text-slam-body text-[18px]">
            <p>{CONTACT.corporateAddress}</p>
            <p className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-slam-accent" />
              {CONTACT.corporatePhone}
            </p>
            <p className="flex items-center gap-2">
              <span className="text-slam-accent font-medium">Email:</span>
              {CONTACT.corporateEmail}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
