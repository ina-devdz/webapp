import { cn } from "@/lib/utils"; // Assuming "@/lib/utils" contains the cn utility
import React, { useEffect, useState, useRef, useCallback } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left", // This prop still controls visual movement: "left" or "right"
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  // Memoize functions that don't depend on frequently changing state
  const getDirection = useCallback(() => {
    if (containerRef.current) {
      // Set the CSS variable for animation direction based on the prop
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse",
      );
    }
  }, [direction]);

  const getSpeed = useCallback(() => {
    if (containerRef.current) {
      let duration;
      if (speed === "fast") {
        duration = "20s";
      } else if (speed === "normal") {
        duration = "40s";
      } else {
        duration = "80s"; // slow
      }
      containerRef.current.style.setProperty("--animation-duration", duration);
    }
  }, [speed]);

  const addAnimation = useCallback(() => {
    if (containerRef.current && scrollerRef.current) {
      // Duplicate items
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (duplicatedItem instanceof HTMLElement && scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      // Apply speed and direction styles
      getDirection();
      getSpeed();

      // Start the animation
      setStart(true);
    }
  }, [getDirection, getSpeed]); // Add dependencies

  // Initial setup effect
  useEffect(() => {
    addAnimation();
  }, [addAnimation]); // Run once when component mounts or addAnimation changes

  return (
    <div
      ref={containerRef}
      className={cn(
        // Base styles + FORCED LTR MASK
        "scroller relative z-20 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className,
      )}
      // IMPORTANT: Force LTR direction context for the container's content.
      // This affects layout but usually allows text inside to follow page dir.
      // If text direction *must* also be forced LTR, add it here too.
      // dir="ltr" // Uncomment this if [&]:direction-ltr on ul is not enough
    >
      <ul
        ref={scrollerRef}
        className={cn(
          // Base styles + FORCE LTR FLEX LAYOUT
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
          // Force direction LTR for flex item layout using arbitrary variant
          // This makes flex items flow left-to-right regardless of page dir
          "[&]:direction-ltr",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {items.map((item, idx) => (
          <li
            className="relative w-[350px] max-w-full shrink-0 rounded-2xl border border-b-0 border-zinc-200 bg-[linear-gradient(180deg,#fafafa,#f5f5f5)] px-8 py-6 md:w-[450px] dark:border-zinc-700 dark:bg-[linear-gradient(180deg,#27272a,#18181b)]"
            key={`${item.name}-${idx}`}
          >
            <blockquote>
              <div
                aria-hidden="true"
                // Use fixed positioning - always offset from the left
                className="user-select-none pointer-events-none absolute -top-0.5 -left-0.5 -z-1 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              {/* Text content below should still naturally follow page direction */}
              <span className="relative z-20 text-sm leading-[1.6] font-normal text-neutral-800 dark:text-gray-100">
                {item.quote}
              </span>
              <div className="relative z-20 mt-6 flex flex-row items-center">
                <span className="flex flex-col gap-1">
                  <span className="text-sm leading-[1.6] font-normal text-neutral-500 dark:text-gray-400">
                    {item.name}
                  </span>
                  <span className="text-sm leading-[1.6] font-normal text-neutral-500 dark:text-gray-400">
                    {item.title}
                  </span>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};

// === CSS ===
// Ensure the *original* percentage-based animation is used.
// Make sure this CSS is loaded.

/* In tailwind.config.js (or global CSS):
@layer utilities {
  @keyframes scroll {
    to {
      // Use the original percentage-based calculation
      // Assumes gap-4 (1rem) -> translates by 50% width + half gap (0.5rem)
      transform: translateX(calc(-50% - 0.5rem));
    }
  }
}

// Ensure the animation class uses the keyframes
// (Tailwind does this if you define animation/keyframes in theme.extend)
// theme: {
//   extend: {
//     animation: {
//       scroll: "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
//     },
//     keyframes: {
//       scroll: {
//         to: {
//           transform: "translateX(calc(-50% - 0.5rem))",
//         },
//       },
//     },
//   }
// }
*/
