import React from "react";
import { ProgressiveBlur } from "~/components/ui/progressive-blur";

const Row = ({ children, speed, playing = true, direction = "ltr" }) => {
  const containerRef = React.useRef();
  const scrollerRef = React.useRef();
  const clonedScrollerRef = React.useRef();
  const hoverRef = React.useRef(false);
  const playingRef = React.useRef(playing);
  const directionRef = React.useRef(direction);

  React.useEffect(() => {
    playingRef.current = playing;
  }, [playing]);

  React.useEffect(() => {
    directionRef.current = direction;
  }, [direction]);

  const clonedChildren = React.Children.map(children, (child) => {
    return React.cloneElement(child);
  });

  React.useEffect(() => {
    // Make sure refs are available
    if (
      !scrollerRef.current ||
      !clonedScrollerRef.current ||
      !containerRef.current
    )
      return;

    // Get the dimensions
    const containerWidth = containerRef.current.offsetWidth;
    const scrollerWidth = scrollerRef.current.offsetWidth;

    // Ensure content is visible initially
    let scrollerXPos = 0;
    let clonedScrollerXPos = scrollerWidth;

    // Apply initial positions
    scrollerRef.current.style.transform = `translateX(${scrollerXPos}px)`;
    clonedScrollerRef.current.style.transform = `translateX(${clonedScrollerXPos}px)`;

    // Make sure elements are visible
    scrollerRef.current.style.display = "flex";
    clonedScrollerRef.current.style.display = "flex";

    const pixelsPerFrame = speed / 60;
    let animating = true;

    function animate() {
      if (!scrollerRef.current || !clonedScrollerRef.current) {
        // Safety check if components are unmounted
        animating = false;
        return;
      }

      if (playingRef.current) {
        const isRTL = directionRef.current === "rtl";
        const speedMultiplier = isRTL ? 1 : -1;
        const currentSpeed =
          (hoverRef.current ? pixelsPerFrame / 2 : pixelsPerFrame) *
          speedMultiplier;

        scrollerXPos += currentSpeed;
        clonedScrollerXPos += currentSpeed;

        // Adjust reset logic
        if (isRTL) {
          if (scrollerXPos >= containerWidth) {
            scrollerXPos = clonedScrollerXPos - scrollerWidth;
          }
          if (clonedScrollerXPos >= containerWidth) {
            clonedScrollerXPos = scrollerXPos - scrollerWidth;
          }
        } else {
          if (scrollerXPos <= -scrollerWidth) {
            scrollerXPos = clonedScrollerXPos + scrollerWidth;
          }
          if (clonedScrollerXPos <= -scrollerWidth) {
            clonedScrollerXPos = scrollerXPos + scrollerWidth;
          }
        }

        scrollerRef.current.style.transform = `translateX(${scrollerXPos}px)`;
        clonedScrollerRef.current.style.transform = `translateX(${clonedScrollerXPos}px)`;
      }

      if (animating) {
        window.requestAnimationFrame(animate);
      }
    }

    window.requestAnimationFrame(animate);
    return () => {
      animating = false;
    };
  }, [speed, children]);

  return (
    <div
      className="relative w-full overflow-hidden min-h-24"
      style={{ height: "auto" }}
      onMouseOver={() => (hoverRef.current = true)}
      onMouseOut={() => (hoverRef.current = false)}
      dir={direction}
      ref={containerRef}
    >
      {/* Main content */}
      <div
        className="absolute flex whitespace-nowrap top-1/2 -translate-y-1/2"
        ref={scrollerRef}
        style={{ left: 0 }}
      >
        {children}
      </div>
      <div
        className="absolute flex whitespace-nowrap top-1/2 -translate-y-1/2"
        ref={clonedScrollerRef}
        style={{ left: 0 }}
      >
        {clonedChildren}
      </div>
      <ProgressiveBlur
        className="pointer-events-none absolute top-0 left-0 h-full w-[100px]"
        direction="left"
        blurIntensity={1}
      />
      <ProgressiveBlur
        className="pointer-events-none absolute top-0 right-0 h-full w-[100px]"
        direction="right"
        blurIntensity={1}
      />
    </div>
  );
};

export default Row;
