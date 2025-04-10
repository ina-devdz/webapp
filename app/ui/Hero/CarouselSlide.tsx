// app/components/CarouselSlide.tsx (adjust path as needed)
import { Link } from "react-router"; // Assuming react-router-dom v6+
import { Plus } from "@phosphor-icons/react";
import type { SlideContent } from "./HeroCarouselShadcn";

const DEFAULT_HEIGHT_CLASS = "h-[450px] sm:h-[550px] lg:h-[650px]";

interface CarouselSlideProps {
  slide: SlideContent;
  heightClass?: string;
}

export const CarouselSlide: React.FC<CarouselSlideProps> = ({
  slide,
  heightClass = DEFAULT_HEIGHT_CLASS,
}) => {
  return (
    <Link
      to={slide.linkUrl}
      className="group relative block overflow-hidden rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 dark:focus-visible:ring-blue-400"
      aria-label={`Read more about ${slide.title}`}
    >
      <figure className={`w-full ${heightClass}`}>
        <img
          src={slide.imageUrl}
          srcSet={slide.imageSrcSet}
          sizes="(min-width: 1740px) 1740px, 100vw"
          alt={slide.imageAlt}
          fetchPriority="high"
          loading="lazy"
          decoding="async"
          className="absolute inset-0 !h-full !w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 group-focus-visible:scale-105"
        />
      </figure>

      {/* Content Overlay: Anchored to the right side */}
      <div
        className={`
          absolute bottom-4 start-14 p-4 backdrop-blur-md
          md:bottom-6 md:end-6 md:max-w-lg md:p-5
          lg:bottom-8 lg:end-8 lg:max-w-xl lg:p-6
          rounded-lg bg-black/40 text-white text-start shadow-lg
          dark:bg-black/50
          flex flex-col gap-3 md:gap-4
          transition-opacity duration-300 group-hover:opacity-95 group-focus-visible:opacity-95
        `}
        role="presentation"
      >
        <div className="flex flex-col gap-1">
          <h3 className="font-semibold text-lg leading-tight md:text-xl lg:text-2xl">
            {slide.title}
          </h3>
          {slide.date && (
            <time
              dateTime={slide.date}
              className="text-xs opacity-80 md:text-sm"
            >
              {new Date(slide.date).toLocaleDateString(undefined, {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          )}
        </div>

        <div
          className="
            mt-auto inline-flex place-self-start items-center gap-2 rounded-md
            bg-white px-3 py-1.5 font-medium text-black
            text-sm md:px-4 md:py-2 md:text-base
            dark:bg-gray-200 dark:text-gray-900
            transition-colors group-hover:bg-gray-200 dark:group-hover:bg-gray-300
            group-focus-visible:ring-2 group-focus-visible:ring-white group-focus-visible:ring-offset-2 group-focus-visible:ring-offset-black/40 dark:group-focus-visible:ring-offset-black/50
          "
        >
          <span>{slide.ctaText}</span>
          <Plus weight="bold" className="h-4 w-4 md:h-5 md:w-5" />
        </div>
      </div>
    </Link>
  );
};

export default CarouselSlide;
