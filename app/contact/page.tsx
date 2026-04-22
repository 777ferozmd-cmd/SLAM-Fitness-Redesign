import { CONTACT } from "@/lib/constants";
import ContactForm from "@/components/sections/ContactForm";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="flex-grow pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="max-w-[1200px] mx-auto px-6 md:px-20">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <p className="text-slam-primary text-[12px] uppercase tracking-[0.12em] font-bold mb-4">
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
          
          {/* Left: Contact Info */}
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
                    <p className="text-slam-muted mb-1 text-sm">Customer Care (Mr. Suresh Babu)</p>
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
              </div>
            </div>

            {/* Google Map Embed Placeholder */}
            <div className="w-full h-[300px] bg-[#141414] border border-[#2A2A2A] rounded-2xl overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-500">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d3886.41727725906!2d80.2375!3d13.0827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDA0JzU3LjciTiA4MMKwMTQnMTUuMCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
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
