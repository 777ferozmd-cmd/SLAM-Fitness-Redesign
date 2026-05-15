import ContactContent from "./ContactContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Free Trial — Ferous Fitness Studio Chennai",
  description: "Book a free consultation or trial class at Ferous Fitness Studio, Chennai. No commitment required.",
  openGraph: {
    title: "Book a Free Trial at Ferous Fitness Studio",
    description: "Book a free consultation or trial class in Chennai. No commitment required. Expert coaches ready for you.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function ContactPage() {
  return (
    <main className="flex-grow pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="max-w-[1200px] mx-auto px-6 md:px-20">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <p className="text-ferous-accent text-[12px] uppercase tracking-[0.12em] font-bold mb-4">
            Get In Touch
          </p>
          <h1 className="text-white font-extrabold leading-[1.1] text-[clamp(40px,5vw,64px)] mb-6">
            Ready To Change <br className="hidden md:block"/> Your Life?
          </h1>
          <p className="text-[18px] text-[#C8C8C8]">
            Drop by for a free trial or contact our support team. We&apos;re here to help you achieve your fitness goals.
          </p>
        </div>

        {/* Client Content Area */}
        <ContactContent />

      </div>
    </main>
  );
}
