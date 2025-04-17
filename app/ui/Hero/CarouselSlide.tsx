import { Plus } from "@phosphor-icons/react";
// app/components/CarouselSlide.tsx (adjust path as needed)
import { Link } from "react-router"; // Assuming react-router-dom v6+
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
          rounded-[16px] bg-black/20 p-4 text-white backdrop-blur-lg absolute right-4 md:max-w-[312px] lg:max-w-[432px]
          lg:p-4 lg:bottom-4 lg:end-2
          text-start shadow-lg
          dark:bg-black/50
          flex flex-col gap-2
          transition-opacity duration-300 group-hover:opacity-95 group-focus-visible:opacity-95
        `}
        role="presentation"
      >
        <div className="flex flex-col gap-4">
          <h3 className="font-normal text-lg leading-normal md:text-xl lg:text-xl line-clamp-3">
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
            mt-auto inline-flex items-center gap-3 rounded-sm w-fit
            px-3 py-1.5
            bg-black/20 text-white backdrop-blur-lg
            text-sm md:px-4 md:py-2 md:text-base
            dark:text-gray-900
            transition-colors group-hover:bg-black/50 dark:group-hover:bg-gray-300
            group-focus-visible:ring-2 group-focus-visible:ring-white group-focus-visible:ring-offset-2 group-focus-visible:ring-offset-black/40 dark:group-focus-visible:ring-offset-black/50
          "
        >
          <span>{slide.ctaText}</span>
          <Plus weight="thin" className="h-4 w-4 md:h-5 md:w-5" />
        </div>
      </div>
    </Link>
  );
};

export default CarouselSlide;
