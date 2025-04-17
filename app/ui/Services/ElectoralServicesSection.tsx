import ServicesCarousel from "./ServicesCarousel";

const ElectoralServicesSection = () => {
  return (
    <section className="py-10 md:py-10 lg:py-24 bg-teal-50">
      <div className="container mx-auto">
        <div className="pb-4">
          <h2 className="text-3xl font-normal mb-3">الخدمات الالكترونية</h2>
          <p className="text-gray-600 dark:text-gray-400">
            هنا يمكنك إضافة وصف مختصر حول الغرض من البوابة.
          </p>
        </div>
        <ServicesCarousel />
      </div>
    </section>
  );
};

export default ElectoralServicesSection;
