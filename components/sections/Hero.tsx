"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";
import { Star } from "lucide-react";

// ─── Framer variants ───────────────────────────────────────────────────────────
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

// ─── Slides ────────────────────────────────────────────────────────────────────
const SLIDES = [
  { src: "/hero/img1_situp_girl.jpg",    alt: "Athlete doing sit-ups" },
  { src: "/hero/img2_battle_ropes.jpg",  alt: "Battle ropes training" },
  { src: "/hero/img3_barbell_gym.jpg",   alt: "Barbell training" },
  { src: "/hero/img4_gym_equipment.jpg", alt: "Gym equipment" },
  { src: "/hero/img5_squat_woman.jpg",   alt: "Squat training" },
  { src: "/hero/img6_deadlift.jpg",      alt: "Deadlift training" },
];

// Timing constants (ms)
const DISPLAY_MS     = 5000;  // how long each image is shown
const CURTAIN_IN_MS  = 700;   // curtain slides in  (covers screen)
const SWAP_DELAY_MS  = CURTAIN_IN_MS + 50; // swap image while curtain is opaque
const CURTAIN_OUT_MS = 700;   // curtain slides out (reveals new image)

// ─── Word loop ─────────────────────────────────────────────────────────────────
const WORDS          = ["Train", "Grind", "Transform", "Grow", "Train"];
const WORD_DISPLAY_MS = 2500;
const WORD_SLIDE_MS   = 600;

export default function Hero() {

  // ── Background image state ───────────────────────────────────────────────────
  const [activeImg,   setActiveImg]   = useState(0);
  // kenKey forces a re-mount of the zooming wrapper, restarting the CSS animation
  const [kenKey,      setKenKey]      = useState(0);

  // Curtain state + alternating direction
  //   direction: 1  → enters from right, exits to left  (→←)
  //   direction: -1 → enters from left,  exits to right (←→)
  const [curtain,   setCurtain]   = useState<"idle" | "in" | "out">("idle");
  const [direction, setDirection] = useState<1 | -1>(1); // 1=from-right, -1=from-left
  const dirRef  = useRef<1 | -1>(1); // ref so the interval closure always reads current value
  const imgTimer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    imgTimer.current = setInterval(() => {
      const dir = dirRef.current;

      // 1. Slide curtain IN from current direction's entry side
      setCurtain("in");
      setDirection(dir);

      // 2. While fully covered — swap image + restart Ken Burns
      setTimeout(() => {
        setActiveImg((prev) => (prev + 1) % SLIDES.length);
        setKenKey((k) => k + 1);
      }, SWAP_DELAY_MS);

      // 3. Slide curtain OUT toward the opposite side
      setTimeout(() => {
        setCurtain("out");
      }, SWAP_DELAY_MS + 60);

      // 4. Instant-reset curtain back to entry side for next cycle
      //    Also flip direction for the next cycle.
      setTimeout(() => {
        const nextDir = (dir * -1) as 1 | -1;
        dirRef.current = nextDir;
        setDirection(nextDir);
        setCurtain("idle");
      }, SWAP_DELAY_MS + 60 + CURTAIN_OUT_MS + 80);

    }, DISPLAY_MS);

    return () => { if (imgTimer.current) clearInterval(imgTimer.current); };
  }, []);

  // Compute curtain translateX based on state + direction
  // direction= 1: idle=+100% → in=0% → out=-100%
  // direction=-1: idle=-100% → in=0% → out=+100%
  const curtainTransform =
    curtain === "idle" ? `translate3d(${direction * 100}%, 0, 0)` :
    curtain === "in"   ? "translate3d(0%, 0, 0)"                   :
                         `translate3d(${direction * -100}%, 0, 0)`;
  const curtainTransition =
    curtain === "idle"
      ? "none"
      : `transform ${curtain === "in" ? CURTAIN_IN_MS : CURTAIN_OUT_MS}ms cubic-bezier(0.76, 0, 0.24, 1)`;

  // ── Word loop ────────────────────────────────────────────────────────────────
  const [wordIndex,    setWordIndex]    = useState(0);
  const [wordAnimated, setWordAnimated] = useState(true);
  const wordTimer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    wordTimer.current = setInterval(() => {
      setWordIndex((prev) => {
        const next = prev + 1;
        if (next === WORDS.length - 1) {
          // Sliding to the duplicate — snap back silently after transition
          setTimeout(() => {
            setWordAnimated(false);
            setWordIndex(0);
            requestAnimationFrame(() =>
              requestAnimationFrame(() => setWordAnimated(true))
            );
          }, WORD_SLIDE_MS + 20);
        }
        return next;
      });
    }, WORD_DISPLAY_MS);

    return () => { if (wordTimer.current) clearInterval(wordTimer.current); };
  }, []);

  const wordTranslateY = -(wordIndex * (100 / WORDS.length));

  return (
    <>
      <style>{`
        /* ── Ken Burns — fires once per mount ── */
        @keyframes kenBurns {
          from { transform: scale(1);    }
          to   { transform: scale(1.10); }
        }
        .kb-inner {
          position: absolute;
          inset: 0;
          animation: kenBurns 12s ease-out forwards;
          will-change: transform;
        }

        /* ── Word track ── */
        .word-mask {
          display: inline-block;
          overflow: hidden;
          vertical-align: bottom;
          height: 1.15em;
          -webkit-mask-image: linear-gradient(
            to bottom,
            transparent 0%,
            black 18%,
            black 82%,
            transparent 100%
          );
          mask-image: linear-gradient(
            to bottom,
            transparent 0%,
            black 18%,
            black 82%,
            transparent 100%
          );
        }
        .word-track {
          display: flex;
          flex-direction: column;
          will-change: transform;
        }
        .word-track.animated {
          transition: transform ${WORD_SLIDE_MS}ms cubic-bezier(0.45, 0, 0.15, 1);
        }
        .word-slot {
          display: block;
          white-space: nowrap;
        }
      `}</style>

      <section className="relative w-full h-[100svh] min-h-[600px] overflow-hidden flex items-end">

        {/* ── Active background image ─────────────────────────────────────── */}
        {/*    Ken Burns restarts on each kenKey change (element remounts)    */}
        <div key={kenKey} className="kb-inner" style={{ zIndex: 0 }}>
          <Image
            src={SLIDES[activeImg].src}
            alt={SLIDES[activeImg].alt}
            fill
            className="object-cover"
            priority
            fetchPriority="high"
            sizes="100vw"
          />
        </div>

        {/* ── Curtain wipe — sits ABOVE image but BELOW overlay + text ── */}
        <div
          className="absolute inset-0"
          style={{
            zIndex: 5,
            backgroundColor: "#080808",
            transform:  curtainTransform,
            transition: curtainTransition,
            willChange: "transform",
          }}
        />

        {/* ── Dark overlay ────────────────────────────────────────────────── */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.50) 45%, rgba(0,0,0,0.18) 100%)",
          }}
        />

        {/* ── Content ─────────────────────────────────────────────────────── */}
        <div className="relative z-20 w-full max-w-[1200px] mx-auto px-6 lg:px-[80px] pb-16 lg:pb-[80px]">
          <motion.div
            className="max-w-[680px] flex flex-col items-start text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <SectionLabel>FEROUS FITNESS STUDIO</SectionLabel>
            </motion.div>

            {/* Headline with word loop */}
            <motion.h1
              variants={itemVariants}
              className="text-[clamp(52px,6vw,72px)] font-extrabold text-white leading-[1.15] tracking-tight mb-4"
            >
              Where Chennai Comes to{" "}
              <span className="text-ferous-accent word-mask">
                <span
                  className={`word-track${wordAnimated ? " animated" : ""}`}
                  style={{
                    transform: `translateY(${wordTranslateY}%)`,
                    height: `${WORDS.length * 100}%`,
                  }}
                >
                  {WORDS.map((word, i) => (
                    <span
                      key={`${word}-${i}`}
                      className="word-slot"
                      style={{ height: `${100 / WORDS.length}%` }}
                    >
                      {word}
                    </span>
                  ))}
                </span>
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="hidden md:block text-[18px] text-[#C8C8C8] max-w-[420px] mb-8 leading-relaxed"
            >
              Expert coaches. Personalised programs tailored to your goals,
              your body, and your schedule.
            </motion.p>

            <motion.div variants={itemVariants}>
              <Button variant="primary" href="/contact">
                Claim Your Free Trial
              </Button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3 mt-6"
            >
              {/* Avatars */}
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-[#0D0D0D] overflow-hidden relative"
                  >
                    <Image
                      src={`https://i.pravatar.cc/100?img=${i + 10}`}
                      alt="Member avatar"
                      fill
                      loading="lazy"
                      sizes="40px"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Rating */}
              <div className="flex flex-col ml-1">
                <div className="flex text-[#FFD700] mb-0.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={14}
                      className="fill-[#FFD700] text-[#FFD700]"
                    />
                  ))}
                  <span className="text-white text-xs font-bold ml-1.5 leading-none self-center">
                    4.5
                  </span>
                </div>
                <span className="text-[13px] text-[#6B6B6B] leading-none">
                  From 580+ Google Reviews
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
