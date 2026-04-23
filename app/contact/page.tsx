import { CONTACT } from "@/lib/constants";
import ContactForm from "@/components/sections/ContactForm";
import { Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Free Trial — SLAM Fitness Studio Chennai",
  description: "Book a free consultation or trial class at SLAM Fitness Studio, Chennai. No commitment required.",
};

export default function ContactPage() {
  return (
    <main className="flex-grow pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="max-w-[1200px] mx-auto px-6 md:px-20">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <p className="text-slam-accent text-[12px] uppercase tracking-[0.12em] font-bold mb-4">
            Get In Touch
          </p>
          <h1 className="text-white font-extrabold leading-[1.1] text-[clamp(40px,5vw,64px)] mb-6">
            Ready To Change <br className="hidden md:block"/> Your Life?
          </h1>
          <p className="text-[18px] text-[#C8C8C8]">
            Drop by for a free trial or contact our support team. We&apos;re here to help you achieve your fitness goals.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left: Contact Info & Map */}
          <div className="flex flex-col gap-12">
            
            <div className="flex flex-col gap-8">
              <h2 className="text-3xl font-bold text-white">Contact Information</h2>
              
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-slam-accent/10 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-slam-accent" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-1">Call Us</h3>
                    <p className="text-slam-muted mb-1 text-sm">Customer Care</p>
                    <a href={`tel:${CONTACT.customerCare.replace(/\s+/g, '')}`} className="text-white hover:text-slam-accent transition-colors font-medium text-lg block">
                      {CONTACT.customerCare}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-slam-accent/10 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-slam-accent" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-1">Email Us</h3>
                    <p className="text-slam-muted mb-1 text-sm">Support & Inquiries</p>
                    <a href={`mailto:${CONTACT.customerEmail}`} className="text-white hover:text-slam-accent transition-colors font-medium text-lg block">
                      {CONTACT.customerEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-slam-accent/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-slam-accent" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-1">Corporate Office</h3>
                    <p className="text-slam-muted leading-relaxed max-w-[280px]">
                      {CONTACT.corporateAddress}
                    </p>
                  </div>
                </div>

                {/* Social Links */}
                <div className="pt-6 border-t border-[#2A2A2A] flex gap-4">
                    <Link href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-[#1A1A1A] border border-[#2A2A2A] flex items-center justify-center text-white hover:text-slam-accent hover:border-slam-accent transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                    </Link>
                    <Link href={CONTACT.facebook} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-[#1A1A1A] border border-[#2A2A2A] flex items-center justify-center text-white hover:text-slam-accent hover:border-slam-accent transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                    </Link>
                </div>
              </div>
            </div>

            {/* Google Map Embed */}
            <div className="w-full h-[300px] bg-[#141414] border border-[#2A2A2A] rounded-2xl overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-500">
              <iframe 
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=18/70,%20Halls%20Road,%20Kilpauk,%20Chennai+(SLAM%20Fitness%20Studio)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy"
                title="SLAM Fitness Corporate Office"
              ></iframe>
            </div>

          </div>

          {/* Right: Contact Form */}
          <div className="w-full">
            <h2 className="text-3xl font-bold text-white mb-8">Send a Message</h2>
            <ContactForm />
          </div>

        </div>

      </div>
    </main>
  );
}
