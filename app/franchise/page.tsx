import { CONTACT } from "@/lib/constants";
import { TrendingUp, Users, ShieldCheck, Target, Phone, Mail } from "lucide-react";
import FranchiseForm from "@/components/forms/FranchiseForm";
import Image from "next/image";

export default function FranchisePage() {
  return (
    <main className="pt-0 min-h-screen">
      {/* Hero */}
      <section className="relative w-full h-[60vh] min-h-[500px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop"
            alt="SLAM Fitness Franchise"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="relative z-10 px-6 md:px-20 max-w-[1200px] mx-auto w-full">
          <span className="text-slam-accent text-[12px] font-semibold uppercase tracking-[0.12em] block mb-4">
            FRANCHISE OPPORTUNITY
          </span>
          <h1 className="text-white text-[clamp(48px,6vw,72px)] font-bold mb-6 leading-[1.1] max-w-3xl">
            Own a <span className="text-slam-accent">SLAM</span> Studio
          </h1>
          <p className="text-[#C8C8C8] text-[20px] max-w-2xl leading-[1.6]">
            Build a business with India's premium gym brand. Join a rapidly expanding network of world-class fitness facilities.
          </p>
        </div>
      </section>

      {/* Why SLAM */}
      <section className="px-6 md:px-20 max-w-[1200px] mx-auto py-24">
        <div className="text-center mb-16">
          <h2 className="text-white text-[clamp(36px,4.5vw,48px)] font-bold">
            Why Partner with <span className="text-slam-accent">SLAM</span>?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Proven Brand",
              desc: "Leverage a highly recognized premium fitness brand with thousands of loyal members.",
              icon: ShieldCheck,
            },
            {
              title: "Expert Support",
              desc: "From site selection to staff training, our team guides you at every single step.",
              icon: Users,
            },
            {
              title: "Premium Positioning",
              desc: "Stand out with a high-end luxury aesthetic that attracts high-value members.",
              icon: Target,
            },
            {
              title: "Growing Market",
              desc: "Capitalize on the rapidly increasing demand for structured fitness programs.",
              icon: TrendingUp,
            },
          ].map((feature, i) => (
            <div key={i} className="bg-[#141414] border border-[#2A2A2A] rounded-[16px] p-8">
              <feature.icon className="w-10 h-10 text-slam-accent mb-6" />
              <h3 className="text-white text-[20px] font-bold mb-3">{feature.title}</h3>
              <p className="text-slam-body text-[15px] leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Investment Overview */}
      <section className="bg-[#141414] py-24 border-y border-[#2A2A2A]">
        <div className="px-6 md:px-20 max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-[#2A2A2A]">
            <div className="md:px-8 pb-8 md:pb-0">
              <h3 className="text-white text-[28px] font-bold mb-4">Low Risk</h3>
              <p className="text-slam-body text-[16px]">Proven operational models designed to minimize risk and optimize studio profitability.</p>
            </div>
            <div className="md:px-8 py-8 md:py-0">
              <h3 className="text-white text-[28px] font-bold mb-4">High Returns</h3>
              <p className="text-slam-body text-[16px]">Strong revenue potential driven by memberships, personal training, and retail.</p>
            </div>
            <div className="md:px-8 pt-8 md:pt-0">
              <h3 className="text-white text-[28px] font-bold mb-4">Full Support</h3>
              <p className="text-slam-body text-[16px]">End-to-end guidance including marketing, CRM tools, and equipment procurement.</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <p className="text-slam-body italic">Contact us to learn more about specific investment requirements for your city.</p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="px-6 md:px-20 max-w-[1200px] mx-auto py-24">
        <h2 className="text-white text-[clamp(32px,4vw,40px)] font-bold text-center mb-16">
          The <span className="text-slam-accent">Process</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { num: "01", title: "Enquiry", desc: "Submit your details and initial investment capacity." },
            { num: "02", title: "Evaluation", desc: "We review your profile and discuss potential territories." },
            { num: "03", title: "Agreement", desc: "Sign the franchise agreement and begin site selection." },
            { num: "04", title: "Launch", desc: "Studio fit-out, staff training, and grand opening." },
          ].map((step, i) => (
            <div key={i} className="relative">
              <div className="text-slam-accent text-[48px] font-black opacity-20 mb-2 leading-none">{step.num}</div>
              <h3 className="text-white text-[20px] font-bold mb-2">{step.title}</h3>
              <p className="text-slam-body text-[14px]">{step.desc}</p>
              {i < 3 && (
                <div className="hidden md:block absolute top-6 -right-4 w-8 h-[1px] bg-[#2A2A2A]" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Form & Contact */}
      <section className="px-6 md:px-20 max-w-[1200px] mx-auto pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 lg:gap-20">
          <div>
            <FranchiseForm />
          </div>
          
          <div className="flex flex-col justify-center">
            <h3 className="text-white text-[28px] font-bold mb-8">Get in Touch</h3>
            <p className="text-slam-body text-[16px] mb-10">
              Ready to take the next step? Our franchise team is available to answer all your questions and guide you through the process.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-slam-accent shrink-0 mt-1" />
                <div>
                  <p className="text-white font-medium mb-1">Call Us</p>
                  {CONTACT.franchise.phones.map((phone, idx) => (
                    <p key={idx} className="text-slam-body mb-1">{phone}</p>
                  ))}
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-slam-accent shrink-0 mt-1" />
                <div>
                  <p className="text-white font-medium mb-1">Email</p>
                  <p className="text-slam-body">{CONTACT.franchise.email}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
