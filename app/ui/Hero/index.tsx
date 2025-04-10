import HeroCarouselShadcn from "./HeroCarouselShadcn";
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
const Hero = () => {
  // Fetch or define your slide data
  const heroSlides: SlideContent[] = [
    {
      id: 1,
      type: "news",
      imageUrl: "/hero_placeholder_1.jpg",
      imageAlt:
        "مجموعة من المسؤولين والمواطنين يلتقطون صورة جماعية أمام مركز انتخابي في الجزائر خلال المرحلة الثانية من الحملة الانتخابية لبرلمان الطفل الجزائري. يظهر طفلان في مقدمة الصورة، محاطين بمسؤولين يبتسمون ويعبرون عن دعمهم، بينما ترفرف الراية الوطنية الجزائرية في الخلفية.",
      linkUrl: "/en/news/photoncycle-a-vision-for-year-round-renewable-energy/",
      title:
        "فعاليات المرحلة الثانية من الحملة الانتخابية ومجريات عملية التصويت لانتخاب أعضاء برلمان الطفل الجزائري",
      date: "2025-03-01",
      ctaText: "اقرأ المزيد",
    },
    {
      id: 2,
      type: "statement",
      imageUrl: "/ziara-rasmia.jpg",
      imageAlt: "Official building facade",
      linkUrl: "/statements/official-q1-report",
      title:
        "زيارة رئيس السلطة الوطنية المستقلة للانتخابات بالنيابة، البروفيسور كريم خلفان إلى المقر الجديد للمجلس الشعبي الولائي بالجزائر (دار البيضاء) من أجل حضور عملية المحاكاة الخاصة بيوم الاقتراع، بمناسبة تنظيم انتخابات تجديد نصف أعضاء مجلس الأمة المنتخبين.",
      date: "2025-04-08",
      ctaText: "اقرأ المزيد",
    },
  ];

  return (
    <div>
      {/* ... other content ... */}
      <section aria-label="Featured Content">
        {/* Use the shadcn-based component */}
        <HeroCarouselShadcn
          slides={heroSlides}
          // Optional overrides:
          // heightClass="h-[500px] lg:h-[600px]"
          loop={true}
          autoplayDelay={2000}
        />
      </section>
      {/* ... other content ... */}
    </div>
  );
};

export default Hero;
