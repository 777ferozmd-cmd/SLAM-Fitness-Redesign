"use client";

import Link from "next/link";
import { gsap } from "gsap";
import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type FocusEvent,
  type MouseEvent,
} from "react";
import styles from "./FlowingMenu.module.css";

export interface FlowingMenuItem {
  link: string;
  text: string;
  image: string;
}

interface FlowingMenuProps {
  items?: FlowingMenuItem[];
  speed?: number;
  textColor?: string;
  bgColor?: string;
  marqueeBgColor?: string;
  marqueeTextColor?: string;
  borderColor?: string;
  className?: string;
}

interface MenuItemProps extends FlowingMenuItem {
  speed: number;
  textColor: string;
  marqueeBgColor: string;
  marqueeTextColor: string;
  borderColor: string;
}

export default function FlowingMenu({
  items = [],
  speed = 15,
  textColor = "#ffffff",
  bgColor = "#120F17",
  marqueeBgColor = "#ffffff",
  marqueeTextColor = "#120F17",
  borderColor = "#ffffff",
  className = "",
}: FlowingMenuProps) {
  return (
    <div
      className={`${styles.menuWrap} ${className}`.trim()}
      style={{ backgroundColor: bgColor }}
    >
      <nav className={styles.menu} aria-label="Programs menu">
        {items.map((item) => (
          <MenuItem
            key={item.text}
            {...item}
            speed={speed}
            textColor={textColor}
            marqueeBgColor={marqueeBgColor}
            marqueeTextColor={marqueeTextColor}
            borderColor={borderColor}
          />
        ))}
      </nav>
    </div>
  );
}

function MenuItem({
  link,
  text,
  image,
  speed,
  textColor,
  marqueeBgColor,
  marqueeTextColor,
  borderColor,
}: MenuItemProps) {
  const itemRef = useRef<HTMLDivElement | null>(null);
  const marqueeRef = useRef<HTMLDivElement | null>(null);
  const marqueeInnerWrapRef = useRef<HTMLDivElement | null>(null);
  const marqueeInnerRef = useRef<HTMLDivElement | null>(null);
  const animationRef = useRef<gsap.core.Tween | null>(null);
  const hoverTimelineRef = useRef<gsap.core.Timeline | null>(null);
  const [repetitions, setRepetitions] = useState(4);

  const animationDefaults = { duration: 0.56, ease: "expo.out" };

  const distMetric = (x: number, y: number, x2: number, y2: number) => {
    const xDiff = x - x2;
    const yDiff = y - y2;
    return xDiff * xDiff + yDiff * yDiff;
  };

  const findClosestEdge = (
    mouseX: number,
    mouseY: number,
    width: number,
    height: number,
  ) => {
    const topEdgeDist = distMetric(mouseX, mouseY, width / 2, 0);
    const bottomEdgeDist = distMetric(mouseX, mouseY, width / 2, height);
    return topEdgeDist < bottomEdgeDist ? "top" : "bottom";
  };

  useEffect(() => {
    if (!itemRef.current || !marqueeInnerRef.current) {
      return;
    }

    const calculateRepetitions = () => {
      if (!itemRef.current || !marqueeInnerRef.current) {
        return;
      }

      const marqueeContent = marqueeInnerRef.current.querySelector<HTMLElement>(
        `.${styles.marqueePart}`,
      );

      if (!marqueeContent) {
        return;
      }

      const contentWidth = marqueeContent.offsetWidth;
      const containerWidth = itemRef.current.offsetWidth;

      if (contentWidth === 0 || containerWidth === 0) {
        return;
      }

      const needed = Math.ceil(containerWidth / contentWidth) + 3;
      setRepetitions(Math.max(4, needed));
    };

    calculateRepetitions();

    const resizeObserver = new ResizeObserver(calculateRepetitions);
    resizeObserver.observe(itemRef.current);

    return () => resizeObserver.disconnect();
  }, [text, image]);

  useLayoutEffect(() => {
    if (!marqueeInnerRef.current) {
      return;
    }

    const marqueeInner = marqueeInnerRef.current;
    const marqueeContent = marqueeInner.querySelector<HTMLElement>(
      `.${styles.marqueePart}`,
    );

    if (!marqueeContent) {
      return;
    }

    const contentWidth = marqueeContent.offsetWidth;

    if (contentWidth === 0) {
      return;
    }

    animationRef.current?.kill();
    gsap.set(marqueeInner, { x: 0, force3D: true });

    animationRef.current = gsap.to(marqueeInner, {
      x: -contentWidth,
      duration: speed,
      ease: "none",
      repeat: -1,
      force3D: true,
    });

    return () => {
      animationRef.current?.kill();
      animationRef.current = null;
      hoverTimelineRef.current?.kill();
      hoverTimelineRef.current = null;
    };
  }, [repetitions, speed, text, image]);

  const revealMarquee = (direction: "top" | "bottom") => {
    if (!marqueeRef.current || !marqueeInnerWrapRef.current) {
      return;
    }

    hoverTimelineRef.current?.kill();
    gsap.killTweensOf([marqueeRef.current, marqueeInnerWrapRef.current]);

    hoverTimelineRef.current = gsap
      .timeline({ defaults: animationDefaults })
      .set(marqueeRef.current, { y: direction === "top" ? "-101%" : "101%" }, 0)
      .set(
        marqueeInnerWrapRef.current,
        { y: direction === "top" ? "101%" : "-101%" },
        0,
      )
      .to([marqueeRef.current, marqueeInnerWrapRef.current], {
        y: "0%",
        force3D: true,
      });
  };

  const hideMarquee = (direction: "top" | "bottom") => {
    if (!marqueeRef.current || !marqueeInnerWrapRef.current) {
      return;
    }

    hoverTimelineRef.current?.kill();
    gsap.killTweensOf([marqueeRef.current, marqueeInnerWrapRef.current]);

    hoverTimelineRef.current = gsap.timeline({ defaults: animationDefaults }).to(
      marqueeRef.current,
      { y: direction === "top" ? "-101%" : "101%", force3D: true },
      0,
    ).to(
      marqueeInnerWrapRef.current,
      { y: direction === "top" ? "101%" : "-101%", force3D: true },
      0,
    );
  };

  const handleEnter = (
    event:
      | MouseEvent<HTMLAnchorElement>
      | FocusEvent<HTMLAnchorElement>,
  ) => {
    if (!itemRef.current) {
      return;
    }

    const rect = itemRef.current.getBoundingClientRect();
    const mouseEvent = "clientX" in event ? event : null;
    const x = mouseEvent ? mouseEvent.clientX - rect.left : rect.width / 2;
    const y = mouseEvent ? mouseEvent.clientY - rect.top : rect.height;
    revealMarquee(findClosestEdge(x, y, rect.width, rect.height));
  };

  const handleLeave = (
    event:
      | MouseEvent<HTMLAnchorElement>
      | FocusEvent<HTMLAnchorElement>,
  ) => {
    if (!itemRef.current) {
      return;
    }

    const rect = itemRef.current.getBoundingClientRect();
    const mouseEvent = "clientX" in event ? event : null;
    const x = mouseEvent ? mouseEvent.clientX - rect.left : rect.width / 2;
    const y = mouseEvent ? mouseEvent.clientY - rect.top : 0;
    hideMarquee(findClosestEdge(x, y, rect.width, rect.height));
  };

  return (
    <div
      className={styles.menuItem}
      ref={itemRef}
      style={{ borderColor }}
    >
      <Link
        className={styles.menuItemLink}
        href={link}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        onFocus={handleEnter}
        onBlur={handleLeave}
        style={{ color: textColor }}
      >
        {text}
      </Link>

      <div
        className={styles.marquee}
        ref={marqueeRef}
        style={{ backgroundColor: marqueeBgColor }}
      >
        <div className={styles.marqueeInnerWrap} ref={marqueeInnerWrapRef}>
          <div
            className={styles.marqueeInner}
            ref={marqueeInnerRef}
            aria-hidden="true"
          >
            {Array.from({ length: repetitions }).map((_, index) => (
              <div
                className={styles.marqueePart}
                key={`${text}-${index}`}
                style={{ color: marqueeTextColor }}
              >
                <span className={styles.marqueeLabel}>{text}</span>
                <div
                  className={styles.marqueeImg}
                  style={{ backgroundImage: `url(${image})` }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
