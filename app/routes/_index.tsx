import { useTranslation } from "react-i18next";
import type { MetaFunction } from "react-router";
import ResearchSection from "~/ui/Carousel";
// import { DrawerDemo } from "~/ui/Drawer";
import { convertDateToUserTz } from "~/utils/dates";
import type { Route } from "./+types/_index";
import Hero from "~/ui/Hero/index";
import ElectoralServicesSection from "~/ui/Services";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader = ({ request }: Route.LoaderArgs) => {
  const timezoneDate = convertDateToUserTz(new Date(), request);
  return {
    timezoneDate: timezoneDate.toTimeString(),
  };
};

export default function Index({ loaderData }: Route.ComponentProps) {
  const { timezoneDate } = loaderData;
  const { t } = useTranslation();

  return (
    <div className="placeholder-index relative h-full min-h-screen w-screen dark:bg-gradient-to-b bg-white  dark:from-blue-950 dark:to-blue-900 dark:text-white sm:pb-16 sm:pt-8">
      <div className="relative mx-auto container sm:px-6 lg:px-8 mt-8">
        <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
          <Hero />
        </div>
        <ElectoralServicesSection />
        <FundedBySection />
        <ResearchSection />
      </div>
    </div>
  );
}

function FundedBySection() {
  return (
    <section className="py-10 md:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[1740px] px-4 md:px-8 lg:px-12">
        <h2 className="font-h2 mb-10 lg:mb-12"> Funded by </h2>

        {/* Grid View - Hidden on smaller screens, visible on md and up */}
        <div className="grid-cols-12 gap-4 md:gap-6 hidden gap-y-10 md:grid">
          {/* Funder 1 */}
          <figure className="col-span-6 lg:col-span-3">
            <div className="mb-4 flex aspect-[5/4] items-center justify-center overflow-hidden rounded-[16px] bg-grey-100 lg:mb-6">
              <img
                src="https://cdn.sanity.io/images/pltlc3lm/production/cc0e1edcda081b0f1121b41abd5a9425199a71d1-64x48.svg"
                srcSet="https://cdn.sanity.io/images/pltlc3lm/production/cc0e1edcda081b0f1121b41abd5a9425199a71d1-64x48.svg 1.5x, https://cdn.sanity.io/images/pltlc3lm/production/cc0e1edcda081b0f1121b41abd5a9425199a71d1-64x48.svg 2x"
                alt="Life Line Ventures logo"
                sizes="174px"
                width="174"
                loading="lazy"
                decoding="async"
                className="h-[48px] w-[174px] object-contain object-center"
              />
            </div>
            <blockquote className="font-body-l mb-4 text-grey-700 lg:mb-6">
              “Residential energy accounts for about 20% of total greenhouse gas
              emissions - Photoncycle has potential to bring that close to 0%”
            </blockquote>
            <figcaption className="font-body-xs text-grey-700">
              Teemu Mattila, Partner and Head of Climate Investments at Lifeline
              Ventures
            </figcaption>
          </figure>

          {/* Funder 2 */}
          <figure className="col-span-6 lg:col-span-3">
            <div className="mb-4 flex aspect-[5/4] items-center justify-center overflow-hidden rounded-[16px] bg-grey-100 lg:mb-6">
              <img
                src="https://cdn.sanity.io/images/pltlc3lm/production/194224cafce78d6b249404e3303b2cfc5883d021-176x32.svg"
                srcSet="https://cdn.sanity.io/images/pltlc3lm/production/194224cafce78d6b249404e3303b2cfc5883d021-176x32.svg 1.5x, https://cdn.sanity.io/images/pltlc3lm/production/194224cafce78d6b249404e3303b2cfc5883d021-176x32.svg 2x"
                alt="Eviny Ventures logo"
                sizes="174px"
                width="174"
                loading="lazy"
                decoding="async"
                className="h-[48px] w-[174px] object-contain object-center"
              />
            </div>
            <blockquote className="font-body-l mb-4 text-grey-700 lg:mb-6">
              “Photoncycle is one of those rare opportunities where ambition
              meets execution.”
            </blockquote>
            <figcaption className="font-body-xs text-grey-700">
              Jørgen Marek, Investment Director at Eviny Ventures
            </figcaption>
          </figure>

          {/* Funder 3 */}
          <figure className="col-span-6 lg:col-span-3">
            <div className="mb-4 flex aspect-[5/4] items-center justify-center overflow-hidden rounded-[16px] bg-grey-100 lg:mb-6">
              <img
                src="https://cdn.sanity.io/images/pltlc3lm/production/ca87199f9c0d5b031f0a04b53f4fc1e8df3400f2-114x32.svg"
                srcSet="https://cdn.sanity.io/images/pltlc3lm/production/ca87199f9c0d5b031f0a04b53f4fc1e8df3400f2-114x32.svg 1.5x, https://cdn.sanity.io/images/pltlc3lm/production/ca87199f9c0d5b031f0a04b53f4fc1e8df3400f2-114x32.svg 2x"
                alt="Luminar Ventures logo"
                sizes="174px"
                width="174"
                loading="lazy"
                decoding="async"
                className="h-[48px] w-[174px] object-contain object-center"
              />
            </div>
            <blockquote className="font-body-l mb-4 text-grey-700 lg:mb-6">
              “Photoncycle has the potential to revolutionize how we approach
              renewable energy, making European households energy
              self-sufficient.”
            </blockquote>
            <figcaption className="font-body-xs text-grey-700">
              Jacob Key, Founding Partner at Luminar Ventures
            </figcaption>
          </figure>

          {/* Funder 4 */}
          <figure className="col-span-6 lg:col-span-3">
            <div className="mb-4 flex aspect-[5/4] items-center justify-center overflow-hidden rounded-[16px] bg-grey-100 lg:mb-6">
              <img
                src="https://cdn.sanity.io/images/pltlc3lm/production/a4059f274c6d907db786d5ddfbbbf6106a66b07b-174x20.svg"
                srcSet="https://cdn.sanity.io/images/pltlc3lm/production/a4059f274c6d907db786d5ddfbbbf6106a66b07b-174x20.svg 1.5x, https://cdn.sanity.io/images/pltlc3lm/production/a4059f274c6d907db786d5ddfbbbf6106a66b07b-174x20.svg 2x"
                alt="Momentum logo"
                sizes="174px"
                width="174"
                loading="lazy"
                decoding="async"
                className="h-[48px] w-[174px] object-contain object-center"
              />
            </div>
            <blockquote className="font-body-l mb-4 text-grey-700 lg:mb-6">
              “Photoncycle is one of the most potent startups we have come
              across in the energy sector in the Nordics.”
            </blockquote>
            <figcaption className="font-body-xs text-grey-700">
              Hilde Støle, Managing Partner at Momentum Partners
            </figcaption>
          </figure>
        </div>

        {/* Carousel View - Hidden on md and up */}
        <div className="carousel overflow-hidden md:hidden">
          {/* Note: The inline style needs to be an object in React */}
          <div
            className="flex pl-4"
            style={{ transform: "translate3d(0px, 0px, 0px)" }}
          >
            {/* Carousel Item 1 */}
            <figure className="mr-4 min-w-0 flex-[0_0_80%]">
              <div className="mb-4 flex aspect-[5/4] items-center justify-center overflow-hidden rounded-[16px] bg-grey-100 lg:mb-6">
                <img
                  src="https://cdn.sanity.io/images/pltlc3lm/production/cc0e1edcda081b0f1121b41abd5a9425199a71d1-64x48.svg"
                  srcSet="https://cdn.sanity.io/images/pltlc3lm/production/cc0e1edcda081b0f1121b41abd5a9425199a71d1-64x48.svg 1.5x, https://cdn.sanity.io/images/pltlc3lm/production/cc0e1edcda081b0f1121b41abd5a9425199a71d1-64x48.svg 2x"
                  alt="Life Line Ventures logo"
                  sizes="174px"
                  width="174"
                  loading="lazy"
                  decoding="async"
                  className="h-[48px] w-[174px] object-contain object-center"
                />
              </div>
              <blockquote className="font-body-l mb-4 text-grey-700 lg:mb-6">
                “Residential energy accounts for about 20% of total greenhouse
                gas emissions - Photoncycle has potential to bring that close to
                0%”
              </blockquote>
              <figcaption className="font-body-xs text-grey-700">
                Teemu Mattila, Partner and Head of Climate Investments at
                Lifeline Ventures
              </figcaption>
            </figure>

            {/* Carousel Item 2 */}
            <figure className="mr-4 min-w-0 flex-[0_0_80%]">
              <div className="mb-4 flex aspect-[5/4] items-center justify-center overflow-hidden rounded-[16px] bg-grey-100 lg:mb-6">
                <img
                  src="https://cdn.sanity.io/images/pltlc3lm/production/194224cafce78d6b249404e3303b2cfc5883d021-176x32.svg"
                  srcSet="https://cdn.sanity.io/images/pltlc3lm/production/194224cafce78d6b249404e3303b2cfc5883d021-176x32.svg 1.5x, https://cdn.sanity.io/images/pltlc3lm/production/194224cafce78d6b249404e3303b2cfc5883d021-176x32.svg 2x"
                  alt="Eviny Ventures logo"
                  sizes="174px"
                  width="174"
                  loading="lazy"
                  decoding="async"
                  className="h-[48px] w-[174px] object-contain object-center"
                />
              </div>
              <blockquote className="font-body-l mb-4 text-grey-700 lg:mb-6">
                “Photoncycle is one of those rare opportunities where ambition
                meets execution.”
              </blockquote>
              <figcaption className="font-body-xs text-grey-700">
                Jørgen Marek, Investment Director at Eviny Ventures
              </figcaption>
            </figure>

            {/* Carousel Item 3 */}
            <figure className="mr-4 min-w-0 flex-[0_0_80%]">
              <div className="mb-4 flex aspect-[5/4] items-center justify-center overflow-hidden rounded-[16px] bg-grey-100 lg:mb-6">
                <img
                  src="https://cdn.sanity.io/images/pltlc3lm/production/ca87199f9c0d5b031f0a04b53f4fc1e8df3400f2-114x32.svg"
                  srcSet="https://cdn.sanity.io/images/pltlc3lm/production/ca87199f9c0d5b031f0a04b53f4fc1e8df3400f2-114x32.svg 1.5x, https://cdn.sanity.io/images/pltlc3lm/production/ca87199f9c0d5b031f0a04b53f4fc1e8df3400f2-114x32.svg 2x"
                  alt="Luminar Ventures logo"
                  sizes="174px"
                  width="174"
                  loading="lazy"
                  decoding="async"
                  className="h-[48px] w-[174px] object-contain object-center"
                />
              </div>
              <blockquote className="font-body-l mb-4 text-grey-700 lg:mb-6">
                “Photoncycle has the potential to revolutionize how we approach
                renewable energy, making European households energy
                self-sufficient.”
              </blockquote>
              <figcaption className="font-body-xs text-grey-700">
                Jacob Key, Founding Partner at Luminar Ventures
              </figcaption>
            </figure>

            {/* Carousel Item 4 */}
            <figure className="mr-4 min-w-0 flex-[0_0_80%]">
              <div className="mb-4 flex aspect-[5/4] items-center justify-center overflow-hidden rounded-[16px] bg-grey-100 lg:mb-6">
                <img
                  src="https://cdn.sanity.io/images/pltlc3lm/production/a4059f274c6d907db786d5ddfbbbf6106a66b07b-174x20.svg"
                  srcSet="https://cdn.sanity.io/images/pltlc3lm/production/a4059f274c6d907db786d5ddfbbbf6106a66b07b-174x20.svg 1.5x, https://cdn.sanity.io/images/pltlc3lm/production/a4059f274c6d907db786d5ddfbbbf6106a66b07b-174x20.svg 2x"
                  alt="Momentum logo"
                  sizes="174px"
                  width="174"
                  loading="lazy"
                  decoding="async"
                  className="h-[48px] w-[174px] object-contain object-center"
                />
              </div>
              <blockquote className="font-body-l mb-4 text-grey-700 lg:mb-6">
                “Photoncycle is one of the most potent startups we have come
                across in the energy sector in the Nordics.”
              </blockquote>
              <figcaption className="font-body-xs text-grey-700">
                Hilde Støle, Managing Partner at Momentum Partners
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
