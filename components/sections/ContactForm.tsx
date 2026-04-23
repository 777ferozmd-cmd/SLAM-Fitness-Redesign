"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Loader2, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    goal: "Weight Loss",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setFormData({
        name: "",
        phone: "",
        email: "",
        goal: "Weight Loss",
        message: "",
      });
      setTimeout(() => setStatus("idle"), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-[#141414] border border-[#2A2A2A] p-8 md:p-10 rounded-2xl relative overflow-hidden">
      {status === "success" ? (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center justify-center p-8 text-center py-16"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", delay: 0.2 }}
          >
            <CheckCircle2 className="w-20 h-20 text-slam-accent mb-4 mx-auto" />
          </motion.div>
          <h3 className="text-2xl font-bold text-white mb-2">Request Received!</h3>
          <p className="text-slam-muted">One of our fitness experts will call you shortly to arrange your free trial session.</p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-bold text-white uppercase tracking-wider">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="bg-[#1A1A1A] border border-[#2A2A2A] text-white px-4 py-[14px] rounded-lg focus:outline-none focus:border-slam-accent focus:ring-1 focus:ring-slam-accent transition-colors"
              />
            </div>
            
            {/* Phone */}
            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className="text-sm font-bold text-white uppercase tracking-wider">Phone Number *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                minLength={10}
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                className="bg-[#1A1A1A] border border-[#2A2A2A] text-white px-4 py-[14px] rounded-lg focus:outline-none focus:border-slam-accent focus:ring-1 focus:ring-slam-accent transition-colors"
              />
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-bold text-white uppercase tracking-wider">Email Address *</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              className="bg-[#1A1A1A] border border-[#2A2A2A] text-white px-4 py-[14px] rounded-lg focus:outline-none focus:border-slam-accent focus:ring-1 focus:ring-slam-accent transition-colors"
            />
          </div>

          {/* Goal */}
          <div className="flex flex-col gap-2">
            <label htmlFor="goal" className="text-sm font-bold text-white uppercase tracking-wider">Primary Goal *</label>
            <select
              id="goal"
              name="goal"
              required
              value={formData.goal}
              onChange={handleChange}
              className="bg-[#1A1A1A] border border-[#2A2A2A] text-white px-4 py-[14px] rounded-lg focus:outline-none focus:border-slam-accent focus:ring-1 focus:ring-slam-accent transition-colors appearance-none"
            >
              <option value="Weight Loss">Weight Loss</option>
              <option value="Weight Gain">Weight Gain</option>
              <option value="Functional Training">Functional Training</option>
              <option value="Bootcamp">Bootcamp</option>
              <option value="Body Transformation">Body Transformation</option>
              <option value="Not Sure">Not Sure</option>
            </select>
          </div>

          {/* Message */}
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm font-bold text-white uppercase tracking-wider">Message</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about any past injuries or specific goals..."
              className="bg-[#1A1A1A] border border-[#2A2A2A] text-white px-4 py-[14px] rounded-lg focus:outline-none focus:border-slam-accent focus:ring-1 focus:ring-slam-accent transition-colors resize-none"
            ></textarea>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={status === "loading"}
            className="btn-primary w-full mt-2 flex items-center justify-center min-h-[56px]"
          >
            {status === "loading" ? (
              <Loader2 className="w-6 h-6 animate-spin" />
            ) : (
              "Book My Free Trial"
            )}
          </button>
        </form>
      )}
    </div>
  );
}
