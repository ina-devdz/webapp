// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation"; // Import Swiper navigation CSS

import { Button } from "@/components/ui/button"; // Import Shadcn Button
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"; // Adjust path based on your Shadcn setup

// Keep using Phosphor Icons as in the original
import { IconProps } from "@phosphor-icons/react";

interface ServiceCardProps {
  title: string;
  icon: React.ReactElement<IconProps>;
  imageUrl: string;
  // description?: string; // Keep if you want to add it back later
}

interface ServiceCardProps {
  title: string;
  icon: React.ReactElement<IconProps>;
  imageUrl: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, icon, imageUrl }) => {
  return (
    <Card className="h-full flex flex-col dir-rtl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200">
      <div className="relative w-full aspect-[4/3] bg-gray-200">
        <img // Use standard img tag
          alt={title}
          src={imageUrl}
          loading="lazy" // <--- Native lazy loading attribute
          className="absolute inset-0 w-full h-full object-cover"
          // Optionally add width/height attributes if known, helps prevent layout shift
          // width="400"
          // height="300"
          decoding="async" // Suggest async decoding
        />
      </div>
      <div className="p-3 bg-card text-card-foreground">
        <div className="flex items-center justify-between space-x-3 space-x-reverse">
          <h3 className="text-base font-semibold truncate">{title}</h3>
          <div className="flex-shrink-0">
            {React.cloneElement(icon, {
              size: 22,
              className: "text-[#58af7b]",
            })}
          </div>
        </div>
      </div>
    </Card>
  );
};

// Phosphor Icons (as in original)
import {
  CaretCircleLeft,
  CaretCircleRight,
  Compass,
  EnvelopeOpen,
  HouseLine,
  IdentificationCard,
  ListPlus,
  UserPlus,
} from "@phosphor-icons/react";
import React from "react";

// Service data (same as original)
const services = [
  {
    id: "where-to-vote",
    title: "أين أنتخب؟",
    description: "البحث عن مركز التصويت للأشخاص المسجلين في القوائم الانتخابية",
    icon: <Compass weight="fill" />, // Pass the icon component directly
    route: "/where-to-vote",
  },
  {
    id: "voter-registration",
    title: "التسجيل في القوائم الانتخابية",
    description: "البحث عن مركز التصويت للأشخاص المسجلين في القوائم الانتخابية",
    icon: <UserPlus weight="fill" />,
    route: "/voter-registration",
  },
  {
    id: "change-residence",
    title: "تغيير مكان الإقامة",
    description: "البحث عن مركز التصويت للأشخاص المسجلين في القوائم الانتخابية",
    icon: <HouseLine weight="fill" />,
    route: "/change-residence",
  },
  {
    id: "contact-us",
    title: "تواصل معنا",
    description: "البحث عن مركز التصويت للأشخاص المسجلين في القوائم الانتخابية",
    icon: <EnvelopeOpen weight="fill" />,
    route: "/contact-us",
  },
  {
    id: "register-trustee",
    title: "أسجل نفسي في حفاظ الأمانة",
    description: "البحث عن مركز التصويت للأشخاص المسجلين في القوائم الانتخابية",
    icon: <ListPlus weight="fill" />,
    route: "/register-trustee",
  },
  {
    id: "voter-card",
    title: "طلب نسخة من بطاقة الناخب",
    description:
      "الإنتخابات الرئاسية المسبقة 07 سبتمبر 2024 النتائج النهائية لإنتخاب رئيس الجمهورية",
    icon: <IdentificationCard weight="fill" />,
    route: "/voter-card",
  },
];

// Carousel Component (replaces CarouselSpacing)
const ServicesCarousel = () => {
  // Unique IDs for Swiper navigation specific to this instance
  const prevButtonId = "swiper-button-prev-services";
  const nextButtonId = "swiper-button-next-services";

  return (
    <div className="relative border-b border-muted pb-10" dir="rtl">
      {" "}
      {/* Added pb-10 for spacing below carousel */}
      <Swiper
        modules={[Navigation]}
        spaceBetween={30} // Space between slides
        slidesPerView={1} // Default for mobile
        grabCursor={true}
        navigation={{
          nextEl: `#${nextButtonId}`, // Use unique ID selector
          prevEl: `#${prevButtonId}`, // Use unique ID selector
        }}
        breakpoints={{
          // Responsive breakpoints
          640: {
            // sm
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            // md
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            // lg
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        className="!pb-0" // Reset Swiper's default bottom padding if navigation is outside
      >
        {services.map((service) => (
          <SwiperSlide key={service.id} className="h-auto p-1">
            {" "}
            {/* Add key, ensure slides adapt height, add slight padding if needed */}
            <a href={service.route} className="block h-full">
              {" "}
              {/* Link wraps the card, ensure it takes full height */}
              <ServiceCard
                title={service.title}
                icon={React.cloneElement(service.icon, { color: "#58af7b" })} // Pass color here or in ServiceCard
                imageUrl="/AbstractColorfulBackground.jpg"
              />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Custom Navigation Buttons using Shadcn Button */}
      <div className="flex justify-center pt-8 space-x-6">
        {" "}
        {/* Navigation below carousel */}
        <Button
          variant="ghost"
          size="icon"
          id={prevButtonId}
          aria-label="Previous Slide"
        >
          <CaretCircleRight size={48} color="#58af7b" weight="thin" />{" "}
          {/* Icon direction reversed for RTL nav */}
        </Button>
        <Button
          variant="ghost"
          size="icon"
          id={nextButtonId}
          aria-label="Next Slide"
        >
          <CaretCircleLeft size={48} color="#58af7b" weight="thin" />{" "}
          {/* Icon direction reversed for RTL nav */}
        </Button>
      </div>
    </div>
  );
};

// Main Section Component
const ElectoralServicesSection = () => {
  return (
    // Using section structure similar to the example provided
    <section className="py-10 md:py-16 lg:py-20 dir-rtl">
      {" "}
      {/* Added dir="rtl" here */}
      <div className="container mx-auto">
        {" "}
        {/* Standard container */}
        {/* Header section */}
        <div className="text-right mb-8 lg:mb-12">
          <h2
            // Using Tailwind classes for heading style
            // You might want to define a specific font in your tailwind.config.js if 'font-heading' was custom
            className="text-4xl font-normal mb-3"
          >
            الخدمات الالكترونية
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            هنا يمكنك إضافة وصف مختصر حول الغرض من البوابة.
          </p>
        </div>
        {/* Carousel Component */}
        <ServicesCarousel />
      </div>
    </section>
  );
};

export default ElectoralServicesSection;
