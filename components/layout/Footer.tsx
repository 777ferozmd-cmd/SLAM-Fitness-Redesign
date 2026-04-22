import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { CONTACT, SERVICES } from "@/lib/constants";

const Instagram = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Facebook = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-slam-section">
      {/* 2px red divider line at the very top */}
      <div className="w-full h-[2px] bg-slam-accent"></div>

      <div className="container mx-auto py-16 px-6 lg:px-0" style={{ paddingLeft: "var(--container-pad-x)", paddingRight: "var(--container-pad-x)" }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Col 1: Logo & Tagline */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="inline-block">
              <span className="text-slam-text font-extrabold text-3xl tracking-tight uppercase">
                SLAM<span className="text-slam-accent">.</span>
              </span>
            </Link>
            <p className="text-slam-body text-sm leading-relaxed tracking-wide font-medium">
              NOT JUST A GYM. A WAY OF LIFE.
            </p>
            <div className="flex items-center gap-4 mt-2">
              <a 
                href={CONTACT.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-slam-border flex items-center justify-center text-slam-text hover:bg-slam-accent hover:border-slam-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href={CONTACT.facebook} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-slam-border flex items-center justify-center text-slam-text hover:bg-slam-accent hover:border-slam-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-slam-text font-bold text-lg mb-2">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
                { label: "Blog", href: "/blog" },
                { label: "Locations", href: "/locations" },
                { label: "Franchise", href: "/franchise" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <Link 
                  key={link.label} 
                  href={link.href}
                  className="text-slam-body hover:text-slam-accent transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Col 3: Services */}
          <div className="flex flex-col gap-4">
            <h4 className="text-slam-text font-bold text-lg mb-2">Services</h4>
            <nav className="flex flex-col gap-3">
              {SERVICES.map((service) => (
                <Link 
                  key={service.slug} 
                  href={`/services/${service.slug}`}
                  className="text-slam-body hover:text-slam-accent transition-colors text-sm"
                >
                  {service.title}
                </Link>
              ))}
            </nav>
          </div>

          {/* Col 4: Contact Info */}
          <div className="flex flex-col gap-4">
            <h4 className="text-slam-text font-bold text-lg mb-2">Contact</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-slam-accent shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <span className="text-slam-text text-sm font-medium">Mr Suresh Babu</span>
                  <a href={`tel:${CONTACT.customerCare.replace(/\s+/g, '')}`} className="text-slam-body hover:text-slam-accent transition-colors text-sm">
                    {CONTACT.customerCare}
                  </a>
                  <a href={`tel:${CONTACT.corporatePhone.replace(/\s+/g, '')}`} className="text-slam-body hover:text-slam-accent transition-colors text-sm">
                    {CONTACT.corporatePhone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-slam-accent shrink-0 mt-0.5" />
                <a href={`mailto:${CONTACT.customerEmail}`} className="text-slam-body hover:text-slam-accent transition-colors text-sm">
                  {CONTACT.customerEmail}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-slam-accent shrink-0 mt-0.5" />
                <span className="text-slam-body text-sm leading-relaxed">
                  {CONTACT.corporateAddress}
                </span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slam-border py-6 mt-4">
        <div className="container mx-auto px-6 lg:px-0 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4" style={{ paddingLeft: "var(--container-pad-x)", paddingRight: "var(--container-pad-x)" }}>
          <p className="text-slam-muted text-sm">
            &copy; {new Date().getFullYear()} SLAM Fitness Studio. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-sm text-slam-muted">
            <Link href="#" className="hover:text-slam-accent transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-slam-accent transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
