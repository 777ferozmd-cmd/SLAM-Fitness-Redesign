import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import "./globals.css";
const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "SLAM Fitness Studio — Best Gym in Chennai",
  description: "Chennai's premium unisex gym for weight loss, weight gain, functional training & body transformation. Expert coaches. Real results.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans bg-slam-bg text-slam-text antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
