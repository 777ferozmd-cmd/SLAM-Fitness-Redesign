"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Handle scroll state
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  // Framer Motion Variants for Mobile Menu
  const mobileMenuVariants = {
    hidden: { opacity: 0, y: "-100%" },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1] as const,
      }
    },
    exit: { 
      opacity: 0, 
      y: "-100%",
      transition: {
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1] as const,
      }
    }
  };

  const staggerContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      }
    }
  };

  const linkItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const }
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ease-in-out bg-[rgba(13,13,13,0.92)] backdrop-blur-[16px] border-b border-slam-border ${
          isScrolled
            ? "py-4"
            : "py-6"
        }`}
        style={{
          paddingLeft: "var(--container-pad-x)",
          paddingRight: "var(--container-pad-x)",
        }}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 z-[201]" onClick={() => setIsMobileMenuOpen(false)}>
            <span className="text-slam-text font-extrabold text-2xl tracking-tight uppercase">
              SLAM<span className="text-slam-accent">.</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <div key={link.label} className="relative group">
                <Link
                  href={link.href}
                  className={`nav-link flex items-center gap-1 hover:text-slam-accent transition-colors duration-200 ${
                    pathname === link.href || (link.subLinks && link.subLinks.some(sub => pathname === sub.href))
                      ? "text-slam-accent"
                      : "text-slam-text"
                  }`}
                >
                  {link.label}
                  {link.subLinks && <ChevronDown className="w-4 h-4" />}
                </Link>

                {/* Dropdown */}
                {link.subLinks && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <div className="nav-dropdown flex flex-col gap-1 bg-[rgba(13,13,13,0.92)] backdrop-blur-[16px] border border-slam-border p-3 rounded-xl min-w-[200px] shadow-2xl">
                      {link.subLinks.map((subLink) => (
                        <Link
                          key={subLink.label}
                          href={subLink.href}
                          className={`block px-4 py-3 text-sm font-medium transition-colors duration-200 hover:text-slam-accent rounded-md ${
                            pathname === subLink.href ? "text-slam-accent" : "text-slam-text"
                          }`}
                        >
                          {subLink.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right CTA */}
          <div className="hidden lg:block">
            <Link href="/contact" className="btn-primary">
              Join SLAM
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden z-[201] text-slam-text hover:text-slam-accent transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-slam-bg z-[200] flex flex-col pt-32 px-6 pb-8 overflow-y-auto"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.div 
              className="flex flex-col gap-6"
              variants={staggerContainerVariants}
              initial="hidden"
              animate="visible"
            >
              {NAV_LINKS.map((link) => (
                <motion.div key={link.label} variants={linkItemVariants}>
                  <Link
                    href={link.href}
                    className={`text-2xl font-bold uppercase tracking-wide ${
                      pathname === link.href || (link.subLinks && link.subLinks.some(sub => pathname === sub.href))
                        ? "text-slam-accent"
                        : "text-slam-text"
                    }`}
                    onClick={() => !link.subLinks && setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                  
                  {/* Mobile SubLinks */}
                  {link.subLinks && (
                    <div className="mt-4 flex flex-col gap-3 pl-4 border-l-2 border-slam-border">
                      {link.subLinks.map((subLink) => (
                        <Link
                          key={subLink.label}
                          href={subLink.href}
                          className={`text-lg font-medium ${
                            pathname === subLink.href ? "text-slam-accent" : "text-slam-body"
                          }`}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {subLink.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
              
              <motion.div variants={linkItemVariants} className="mt-8 pt-8 border-t border-slam-border">
                <Link 
                  href="/contact" 
                  className="btn-primary w-full flex justify-center text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Join SLAM Today
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
