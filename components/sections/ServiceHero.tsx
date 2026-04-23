import Image from "next/image";

interface ServiceHeroProps {
  title: React.ReactNode;
  subtitle: string;
  imageSrc: string;
  imageAlt: string;
}

export default function ServiceHero({ title, subtitle, imageSrc, imageAlt }: ServiceHeroProps) {
  return (
    <section className="relative w-full h-[60vh] min-h-[500px] flex items-end">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          priority
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 md:px-20 pb-16 md:pb-24">
        <p className="text-slam-accent text-[12px] uppercase tracking-[0.12em] font-bold mb-4">
          {subtitle}
        </p>
        <h1 className="text-white font-extrabold text-[clamp(40px,6vw,72px)] leading-[1.1] max-w-[800px]">
          {title}
        </h1>
      </div>
    </section>
  );
}
