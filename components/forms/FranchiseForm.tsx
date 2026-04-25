"use client";

import { useForm } from "react-hook-form";

type FranchiseFormData = {
  name: string;
  city: string;
  phone: string;
  email: string;
  investment: string;
};

export default function FranchiseForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FranchiseFormData>();

  const onSubmit = async (data: FranchiseFormData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
    reset();
  };

  return (
    <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-[24px] p-8 md:p-10">
      <h3 className="text-white text-[24px] font-bold mb-6">Enquire Now</h3>
      
      {isSubmitSuccessful ? (
        <div className="bg-[#141414] border border-ferous-accent/30 text-white p-6 rounded-[12px] text-center">
          <p className="font-bold text-[18px] text-ferous-accent">Thank you for your interest!</p>
          <p className="text-ferous-body text-[15px] mt-2">Our franchise team will contact you shortly.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-ferous-body text-[14px] font-medium mb-2">Full Name</label>
              <input
                {...register("name", { required: "Name is required" })}
                className="w-full bg-[#141414] border border-[#2A2A2A] rounded-[8px] px-4 py-3 text-white focus:outline-none focus:border-ferous-accent transition-colors"
                placeholder="John Doe"
              />
              {errors.name && <p className="text-ferous-accent text-[12px] mt-1">{errors.name.message}</p>}
            </div>
            
            <div>
              <label className="block text-ferous-body text-[14px] font-medium mb-2">City of Interest</label>
              <input
                {...register("city", { required: "City is required" })}
                className="w-full bg-[#141414] border border-[#2A2A2A] rounded-[8px] px-4 py-3 text-white focus:outline-none focus:border-ferous-accent transition-colors"
                placeholder="Chennai"
              />
              {errors.city && <p className="text-ferous-accent text-[12px] mt-1">{errors.city.message}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-ferous-body text-[14px] font-medium mb-2">Phone Number</label>
              <input
                {...register("phone", { required: "Phone is required" })}
                className="w-full bg-[#141414] border border-[#2A2A2A] rounded-[8px] px-4 py-3 text-white focus:outline-none focus:border-ferous-accent transition-colors"
                placeholder="+91 98765 43210"
              />
              {errors.phone && <p className="text-ferous-accent text-[12px] mt-1">{errors.phone.message}</p>}
            </div>
            
            <div>
              <label className="block text-ferous-body text-[14px] font-medium mb-2">Email Address</label>
              <input
                type="email"
                {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email" } })}
                className="w-full bg-[#141414] border border-[#2A2A2A] rounded-[8px] px-4 py-3 text-white focus:outline-none focus:border-ferous-accent transition-colors"
                placeholder="john@example.com"
              />
              {errors.email && <p className="text-ferous-accent text-[12px] mt-1">{errors.email.message}</p>}
            </div>
          </div>

          <div>
            <label className="block text-ferous-body text-[14px] font-medium mb-2">Investment Capacity</label>
            <select
              {...register("investment", { required: "Please select an investment range" })}
              className="w-full bg-[#141414] border border-[#2A2A2A] rounded-[8px] px-4 py-3 text-white focus:outline-none focus:border-ferous-accent transition-colors appearance-none"
            >
              <option value="" className="text-ferous-muted">Select a range...</option>
              <option value="50L-1Cr">₹50 Lakhs - ₹1 Crore</option>
              <option value="1Cr-2Cr">₹1 Crore - ₹2 Crores</option>
              <option value="2Cr+">Above ₹2 Crores</option>
            </select>
            {errors.investment && <p className="text-ferous-accent text-[12px] mt-1">{errors.investment.message}</p>}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-ferous-accent hover:bg-ferous-accent-hover text-white font-bold text-[14px] uppercase tracking-[0.05em] py-4 rounded-[8px] transition-all duration-200 mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Submitting..." : "Submit Enquiry"}
          </button>
        </form>
      )}
    </div>
  );
}
