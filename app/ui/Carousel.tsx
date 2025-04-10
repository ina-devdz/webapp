import { Card } from "@/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"; // Adjust path as needed
import { t } from "i18next";
import { useTranslation } from "react-i18next";

const ResearchSection = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      {" "}
      {/* Added container and padding */}
      <div className="max-w-container mb-md flex items-baseline justify-between">
        {" "}
        {/* Assuming max-w-container and mb-md are defined */}
        <div>
          <h2 className="text-h4 text-primary-100">
            {t("اطلع على آخر  نشاطات السلطة")}
          </h2>{" "}
          {/* Assuming text-h4 and text-primary-100 defined */}
        </div>
      </div>
      <Carousel
        opts={{
          align: "start",
          loop: false, // Set to true if you want infinite looping
        }}
        className="w-full" // Make carousel take full width of its container
      >
        <CarouselContent className="-ml-4">
          {" "}
          {/* Negative margin to counteract padding in CarouselItem */}
          {researchData.map((item, index) => (
            <CarouselItem
              key={item.id || index} // Use unique ID from data, fallback to index
              // Responsive Basis:
              // - Mobile (default): basis-full (1 card)
              // - Small screens (sm): basis-1/2 (2 cards)
              // - Medium screens (md): basis-1/2 (still 2 cards - adjust if needed)
              // - Large screens (lg): basis-1/3 (3 cards)
              // - Extra large screens (xl): basis-1/4 (4 cards)
              // Adjust breakpoints (sm, md, lg, xl) and basis values as needed for your design
              className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
            >
              <div className="p-1 h-full">
                {" "}
                {/* Added padding inside item if needed, ensure card takes full height */}
                <ResearchCard item={item} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-[-1rem] top-1/2 -translate-y-1/2 hidden md:inline-flex" />{" "}
        {/* Position buttons, hide on small screens */}
        <CarouselNext className="absolute right-[-1rem] top-1/2 -translate-y-1/2 hidden md:inline-flex" />
      </Carousel>
    </div>
  );
};

export default ResearchSection;
interface ResearchCardProps {
  item: ResearchDataItem;
}
export const ResearchCard: React.FC<ResearchCardProps> = ({ item }) => {
  const { title, type, date, linkUrl, imageUrl, imageAlt, id } = item;

  return (
    // Removed group class here if hover effect only needed on image
    <Card className="h-full border-none shadow-none bg-transparent overflow-visible flex flex-col">
      {/* CardContent is not strictly necessary if we manually layout, but can be kept */}
      {/* <CardContent className="p-0 h-full flex flex-col"> */}

      {/* --- Image Section --- */}
      {/* Removed outer mb-md, spacing will be handled below text */}
      <div className="relative">
        {/* Added group class here for hover effect specifically on image area */}
        <div className="group relative">
          {/* Background Placeholder (optional, adjust color/styling) */}
          {/* <div className="bg-gray-100 absolute left-0 top-0 w-full rounded-md aspect-square"></div> */}

          {/* Image Wrapper - Make sure image retains rounded corners */}
          <div className="relative overflow-hidden rounded-md aspect-square">
            {" "}
            {/* Added rounded-md here */}
            <div className="ease-in-out duration-300 relative mx-auto overflow-hidden transition-transform group-hover:scale-[1.03]">
              {" "}
              {/* Simpler hover */}
              <img
                alt={imageAlt}
                loading="lazy"
                decoding="async"
                src={imageUrl}
                className="object-cover object-center w-full h-full aspect-square" // Ensure aspect ratio is maintained
              />
            </div>
            {/* Link Overlay for Image */}
            <a
              aria-label={`View details for ${title}`}
              className="absolute inset-0 z-10 rounded-md" // Cover image, match rounding
              href={linkUrl}
              // Consider removing ID if not used for linking/scrolling
            >
              <span className="sr-only">View details for {title}</span>
            </a>
          </div>
        </div>
      </div>

      {/* --- Text Content Section --- */}
      {/* Added mt-4 for space between image and text */}
      {/* Wrap text content in a div for better structure if link is separate */}
      <div className="mt-4 flex flex-col flex-grow">
        {" "}
        {/* Allow text to take remaining space if needed */}
        <a
          aria-label={`${title} - ${type} - ${formatDate(date)}`}
          className="block w-full" // Link wraps text content
          id={id}
          href={linkUrl}
        >
          {/* Title: Increased bottom margin (mb-2) */}
          <h3 className="text-lg font-semibold leading-snug text-primary-100 mb-2 md:pr-md hover:underline">
            {" "}
            {/* Example: text-lg, font-semibold. Adjust text-primary-100 */}
            {title}
          </h3>

          {/* Metadata: Increased gap (gap-x-3), lighter text color */}
          <p className="text-sm text-muted-foreground flex flex-wrap items-center gap-x-3 gap-y-1 md:pr-3xs">
            {" "}
            {/* Example: text-sm, text-muted-foreground. Adjust gap */}
            <span className="text-nowrap">{type}</span>
            {/* Optional Separator */}
            {/* <span className="text-gray-400" aria-hidden="true">•</span> */}
            <span className="flex flex-wrap gap-x-3 gap-y-1">
              <time className="text-nowrap" dateTime={date}>
                {formatDate(date)}
              </time>
            </span>
          </p>
        </a>
      </div>
      {/* </CardContent> */}
    </Card>
  );
};
interface ResearchDataItem {
  id: string;
  title: string;
  type: string;
  date: string; // ISO 8601 date string
  linkUrl: string;
  imageUrl: string;
  imageAlt: string;
}
export const researchData: ResearchDataItem[] = [
  {
    id: "2o83UF8jXuKlGz3sXRvF9x",
    title: "Deliberative alignment: reasoning enables safer language models",
    type: "Publication",
    date: "2024-12-20T10:00",
    linkUrl: "/index/deliberative-alignment/",
    imageUrl:
      "https://images.ctfassets.net/kftzwdyauwt9/2VYXFn38BrTRLqpmpUgffQ/74259e629fae7e51c3f119011434bf47/oai_deliberative-alignment.png?w=1200&q=90&fm=webp", // Using a medium size for example
    imageAlt: "[2.0] Card > Media > Deliberative Alignment",
  },
  {
    id: "3y2KdWfQ4ZM5gpY6TA3fi6",
    title: "Sora System Card",
    type: "Publication",
    date: "2024-12-09T00:00",
    linkUrl: "/index/sora-system-card/",
    imageUrl:
      "https://images.ctfassets.net/kftzwdyauwt9/7xcaWVFivj3mLaPTmzIW3a/9fca9da366f721ec97bcd80f0df57345/Sora-systems_blog_card_v1.jpg?w=1200&q=90&fm=webp",
    imageAlt: "Sora System Card > Cover",
  },
  {
    id: "4I8yL2lCJXS82OIySElitw",
    title: "OpenAI o1 System Card",
    type: "Publication",
    date: "2024-12-05T10:00",
    linkUrl: "/index/openai-o1-system-card/",
    imageUrl:
      "https://images.ctfassets.net/kftzwdyauwt9/3DBIYA8knxEYZHQcrdDRHM/a169585e99cba1bdca5f85fce0449974/o1-systems_blog_card_v2__1_.png?w=1200&q=90&fm=webp",
    imageAlt: "o1 System Card > cover image 20241205",
  },
  {
    id: "5KYysCIw2mpBRmxAXZZcWu",
    title: "Advancing red teaming with people and AI",
    type: "Publication",
    date: "2024-11-21T10:30",
    linkUrl: "/index/advancing-red-teaming-with-people-and-ai/",
    imageUrl:
      "https://images.ctfassets.net/kftzwdyauwt9/2FLcuEoG57sLrafryOHkrn/120eab7520f9d39b0e3ce48bea824581/Advancing-red-teaming.png?w=1200&q=90&fm=webp",
    imageAlt: "Advancing Red Teaming > Cover Image",
  },
  // Add more research items if needed
];

// Helper to format date (optional, but good practice)
export const formatDate = (dateString: string): string => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  const date = new Date(dateString);

  if (Number.isNaN(date.getTime())) {
    return "Invalid Date";
  }

  return date.toLocaleDateString("en-US", options);
};
