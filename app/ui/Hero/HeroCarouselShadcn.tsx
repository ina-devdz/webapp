import Autoplay from "embla-carousel-autoplay";
// app/components/HeroCarouselShadcn.tsx (adjust path as needed)
import { useEffect, useRef, useState } from "react"; // Added useState, useEffect
import { useTranslation } from "react-i18next";

// Import shadcn UI components (adjust paths based on your project structure)
import {
  Carousel,
  type CarouselApi, // Import CarouselApi type
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"; // Adjust this path
import { CarouselSlide } from "./CarouselSlide"; // Import the slide component

// Define SlideContent type here or import from a shared types file
export type SlideContent = {
  id: string | number;
  type: "news" | "voting" | "statement" | "generic";
  imageUrl: string;
  imageAlt: string;
  imageSrcSet?: string;
  linkUrl: string;
  title: string;
  date?: string;
  ctaText: string;
};

interface HeroCarouselProps {
  slides: SlideContent[];
  heightClass?: string; // Optional: override default height classes for slides
  loop?: boolean; // Optional: enable/disable loop
  autoplayDelay?: number; // Customize autoplay delay (ms). Set to 0 to disable.
}

const HeroCarouselShadcn: React.FC<HeroCarouselProps> = ({
  slides,
  heightClass, // Pass down to CarouselSlide
  loop = true,
  autoplayDelay = 5000, // Default 5 seconds, 0 disables
}) => {
  const { i18n } = useTranslation();
  const [api, setApi] = useState<CarouselApi>(); // State to hold the API instance
  const [current, setCurrent] = useState(0); // State to track the current slide index (0-based)
  const [_, setCount] = useState(0); // State to hold the total number of slides

  // Initialize the Autoplay plugin reference
  const autoplayPlugin = useRef(
    Autoplay({
      delay: autoplayDelay > 0 ? autoplayDelay : 5000, // Ensure valid delay
      stopOnInteraction: true,
      stopOnMouseEnter: false,
    }),
  );

  // Effect to update count and current slide index when API is ready or slides change
  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    const handleSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", handleSelect);
    api.on("reInit", handleSelect); // Also update on reinitialization

    // Cleanup listener on component unmount or api change
    return () => {
      api.off("select", handleSelect);
      api.off("reInit", handleSelect);
    };
  }, [api]); // Rerun effect when api instance changes

  if (!slides || slides.length === 0) {
    return null; // Don't render anything if no slides
  }

  const handleIndicatorClick = (index: number) => {
    api?.scrollTo(index);
  };

  return (
    <Carousel
      setApi={setApi} // Set the API instance
      opts={{
        direction: i18n.language === "ar" ? "rtl" : "ltr",
        loop: loop,
      }}
      plugins={autoplayDelay > 0 ? [autoplayPlugin.current] : undefined}
      className="relative w-full" // Relative positioning needed for absolute controls/indicators
      aria-roledescription="carousel" // Accessibility
      aria-label="Featured content" // Accessibility
    >
      <CarouselContent>
        {slides.map((slide, index) => (
          <CarouselItem key={slide.id ?? index}>
            <CarouselSlide slide={slide} heightClass={heightClass} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-4 top-1/2" />
      <CarouselNext className="absolute right-4 top-1/2" />
      {/* Render controls only if more than one slide */}
      {slides.length > 1 && (
        <>
          {/* Use LTR/RTL aware classes or default shadcn positioning */}

          {/* Carousel Indicators */}
          <div className="absolute bottom-4 left-1/2 z-10 -translate-x-1/2 rounded-full bg-black/30 p-1.5 px-3 backdrop-blur-sm">
            <div className="flex items-center justify-center gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleIndicatorClick(index)}
                  className={`h-2 w-2 rounded-full transition-colors duration-200 ease-in-out
                    ${index === current ? "bg-white" : "bg-white/40 hover:bg-white/60"}
                     focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black/30
                  `}
                  aria-current={index === current ? "true" : "false"}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </Carousel>
  );
};

export default HeroCarouselShadcn; // Assuming this is the main export if Hero wraps it
