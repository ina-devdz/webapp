import { Card } from "@/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useTranslation } from "react-i18next";

const Activities = () => {
  const { t } = useTranslation();
  return (
    <section className="w-full container mx-auto py-10 md:py:10 lg:py-24">
      <div>
        <h2 className="text-3xl font-normal mb-3">
          {t("اطلع على آخر  نشاطات السلطة")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          هنا يمكنك إضافة وصف مختصر حول الغرض من البوابة.
        </p>
      </div>
      <Carousel
        opts={{
          align: "start",
          loop: false,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {researchData.map((item, index) => (
            <CarouselItem
              key={item.id || index}
              className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
            >
              <div className="p-1 h-full">
                <ActivitieCard item={item} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-[-1rem] top-1/2 -translate-y-1/2 hidden md:inline-flex" />
        <CarouselNext className="absolute right-[-1rem] top-1/2 -translate-y-1/2 hidden md:inline-flex" />
      </Carousel>
    </section>
  );
};

export default Activities;
interface ActivitieCardProps {
  item: ActivityDataItem;
}
export const ActivitieCard: React.FC<ActivitieCardProps> = ({ item }) => {
  const { title, type, date, linkUrl, imageUrl, imageAlt, id } = item;

  return (
    <Card className="h-full border-none shadow-none bg-transparent overflow-visible flex flex-col">
      <div className="relative">
        <div className="group relative">
          <div className="relative overflow-hidden rounded-md aspect-video">
            <div className="ease-in-out duration-300 relative mx-auto overflow-hidden transition-transform group-hover:scale-[1.03]">
              <img
                alt={imageAlt}
                loading="lazy"
                decoding="async"
                src={imageUrl}
                className="object-cover object-center w-full h-full aspect-video"
              />
            </div>
            <a
              aria-label={`View details for ${title}`}
              className="absolute inset-0 z-10 rounded-md"
              href={linkUrl}
            >
              <span className="sr-only">View details for {title}</span>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-4 flex flex-col flex-grow">
        <a
          aria-label={`${title} - ${type} - ${formatDate(date)}`}
          className="block w-full"
          id={id}
          href={linkUrl}
        >
          <h3 className="text-lg font-semibold leading-snug text-primary-100 mb-2 md:pr-md hover:underline">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground flex flex-wrap items-center gap-x-3 gap-y-1 md:pr-3xs">
            <span className="text-nowrap">{type}</span>

            <span className="flex flex-wrap gap-x-3 gap-y-1">
              <time className="text-nowrap" dateTime={date}>
                {formatDate(date)}
              </time>
            </span>
          </p>
        </a>
      </div>
    </Card>
  );
};
interface ActivityDataItem {
  id: string;
  title: string;
  type: string;
  date: string;
  linkUrl: string;
  imageUrl: string;
  imageAlt: string;
}
export const researchData: ActivityDataItem[] = [
  {
    id: "2o83UF8jXuKlGz3sXRvF9x",
    title:
      "مراسيم توقيع اتفاقية بين السلطة الوطنية المستقلة للانتخابات والغرفة الوطنية للمحضرين القضائيين",
    type: "Publication",
    date: "2024-12-20T10:00",
    linkUrl: "/index/deliberative-alignment/",
    imageUrl: "/articles_marasim.jpg", // Using a medium size for example
    imageAlt: "[2.0] Card > Media > Deliberative Alignment",
  },
  {
    id: "3y2KdWfQ4ZM5gpY6TA3fi6",
    title:
      "فعاليات المرحلة الثانية من الحملة الانتخابية ومجريات عملية التصويت لانتخاب أعضاء برلمان الطفل الجزائري",
    type: "Publication",
    date: "2024-12-09T00:00",
    linkUrl: "/index/sora-system-card/",
    imageUrl: "/articles_ecole.jpg",
    imageAlt: "Sora System Card > Cover",
  },
  {
    id: "4I8yL2lCJXS82OIySElitw",
    title:
      "اجتماع مجلس السلطة المستقلة ليوم 7 أفريل 2025 على الساعة العاشرة (10) صباحا",
    type: "Publication",
    date: "2024-12-05T10:00",
    linkUrl: "/index/openai-o1-system-card/",
    imageUrl: "/Ijtima3.webp",
    imageAlt: "o1 System Card > cover image 20241205",
  },
  {
    id: "5KYysCIw2mpBRmxAXZZcWu",
    title:
      "تسليم واستلام محاضر الفرز والتركيز والنتائج المؤقتة الخاصة بانتخابات تجديد نصف أعضاء مجلس الأمة المنتخبين",
    type: "Publication",
    date: "2024-11-21T10:30",
    linkUrl: "/index/advancing-red-teaming-with-people-and-ai/",
    imageUrl: "/484081813_957222233222987_5593169905329858488_n.jpg",
    imageAlt: "Advancing Red Teaming > Cover Image",
  },
];

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
