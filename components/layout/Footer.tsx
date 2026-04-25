import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';
import { CONTACT, SERVICES, NAV_LINKS } from '@/lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#141414] border-t-2 border-ferous-accent">
      <div className="max-w-[1200px] mx-auto px-6 py-16 md:py-20 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Column 1: Brand */}
          <div className="flex flex-col space-y-6">
            <Link href="/" className="inline-block">
              <span className="text-3xl font-extrabold text-white tracking-tight">
                FEROUS<span className="text-ferous-accent">.</span>
              </span>
            </Link>
            <p className="text-[#B0B0B0] font-medium tracking-wide uppercase text-sm">
              NOT JUST A GYM. A WAY OF LIFE.
            </p>
            <div className="flex space-x-4 pt-2">
              <a 
                href={CONTACT.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#B0B0B0] hover:text-ferous-accent transition-colors"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a 
                href={CONTACT.facebook} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#B0B0B0] hover:text-ferous-accent transition-colors"
                aria-label="Facebook"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col space-y-6">
            <h3 className="text-white font-bold text-lg">Quick Links</h3>
            <ul className="flex flex-col space-y-3">
              {NAV_LINKS.filter(link => !link.subLinks).map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    className="text-[#B0B0B0] hover:text-ferous-accent transition-colors inline-block"
                  >
                    {link.label === "Locations" ? "Store Locator" : link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="flex flex-col space-y-6">
            <h3 className="text-white font-bold text-lg">Services</h3>
            <ul className="flex flex-col space-y-3">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link 
                    href={`/services/${service.slug}`}
                    className="text-[#B0B0B0] hover:text-ferous-accent transition-colors inline-block"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="flex flex-col space-y-6">
            <h3 className="text-white font-bold text-lg">Contact Us</h3>
            <div className="flex flex-col space-y-4 text-[#B0B0B0]">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-ferous-accent shrink-0 mt-0.5" />
                <div className="flex flex-col space-y-1">
                  <span className="font-medium text-white">{CONTACT.contactPerson}</span>
                  <a href={`tel:${CONTACT.customerCare.replace(/\s+/g, '')}`} className="hover:text-ferous-accent transition-colors">
                    {CONTACT.customerCare}
                  </a>
                  <a href={`tel:${CONTACT.corporatePhone.replace(/\s+/g, '')}`} className="hover:text-ferous-accent transition-colors">
                    {CONTACT.corporatePhone}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-ferous-accent shrink-0 mt-0.5" />
                <a href={`mailto:${CONTACT.customerEmail}`} className="hover:text-ferous-accent transition-colors break-all">
                  {CONTACT.customerEmail}
                </a>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-ferous-accent shrink-0 mt-0.5" />
                <address className="not-italic leading-relaxed">
                  {CONTACT.corporateAddress}
                </address>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#2A2A2A]">
        <div className="max-w-[1200px] mx-auto px-6 py-6 lg:px-20 flex flex-col md:flex-row justify-center items-center text-sm text-[#6B6B6B]">
          <p>© {currentYear} Ferous Fitness Studio. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
