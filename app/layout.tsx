import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import "./globals.css";

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",       // Prevent invisible text while font loads (FOIT)
  preload: true,
});

// ── Viewport (separate export – Next.js 14 pattern) ───────────────────────────
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0D0D0D",
};

// ── Root metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL("https://ferousfitness.com"),
  title: {
    default: "Ferous Fitness Studio — Best Gym in Chennai",
    template: "%s | Ferous Fitness Studio",
  },
  description: "Chennai's premium unisex gym for weight loss, weight gain, functional training & body transformation. Expert coaches. Real results.",
  keywords: ["gym Chennai", "fitness studio Chennai", "personal training Chennai", "body transformation", "weight loss gym", "Ferous Fitness"],
  authors: [{ name: "Ferous Fitness Studio" }],
  creator: "Ferous Fitness Studio",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Ferous Fitness Studio",
    title: "Ferous Fitness Studio — Best Gym in Chennai",
    description: "Chennai's premium unisex gym for weight loss, weight gain, functional training & body transformation. Expert coaches. Real results.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Ferous Fitness Studio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ferous Fitness Studio — Best Gym in Chennai",
    description: "Chennai's premium unisex gym. Expert coaches. Real results.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans bg-ferous-bg text-ferous-text antialiased flex flex-col min-h-screen`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
