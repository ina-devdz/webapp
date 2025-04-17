// import {
//   ArrowSquareOut,
//   FacebookLogo,
//   InstagramLogo,
//   MapPin,
//   XLogo,
//   YoutubeLogo,
// } from "@phosphor-icons/react";
// import type { ReactNode } from "react";

// import { Link } from "react-router";
// import SultaAvatar from "./Logo";

// // --- Data and Types (unchanged) ---
// const footerData: FooterData = {
//   socials: [
//     {
//       name: "Facebook",
//       icon: <FacebookLogo size={22} />,
//       url: "https://facebook.com",
//     },
//     {
//       name: "Instagram",
//       icon: <InstagramLogo size={22} />,
//       url: "https://instagram.com",
//     },
//     { name: "X", icon: <XLogo size={22} />, url: "https://twitter.com" },
//     {
//       name: "YouTube",
//       icon: <YoutubeLogo size={22} />,
//       // Note: This URL seems unusual, ensure it's correct
//       url: "https://youtube.com",
//     },
//   ],
//   sections: [
//     {
//       title: "ملخص", // Summary
//       links: [
//         { label: "منصة الخدمات الإلكترونية", url: "#" }, // E-Services Platform
//         { label: "الخصوصية وشروط الاستخدام", url: "#" }, // Privacy and Terms of Use
//         { label: "كيفية استخدام البوابة", url: "#" }, // How to use the portal
//         { label: "الأخبار والأحداث", url: "#" }, // News and Events
//         { label: "إحصائيات", url: "#" }, // Statistics
//         { label: "بوابة التوظيف", url: "#" }, // Employment Portal
//       ],
//     },
//     {
//       title: "روابط مهمة", // Important Links
//       links: [
//         { label: "وزارة الشؤون الخارجية", url: "#", external: true }, // Ministry of Foreign Affairs
//         { label: "وزارة الداخلية", url: "#", external: true }, // Ministry of Interior
//         { label: "الأمانة العامة للحكومة", url: "#", external: true }, // General Secretariat of the Government
//         { label: "المحكمة الدستورية", url: "#", external: true }, // Constitutional Court
//         { label: "وزارة العدل", url: "#", external: true }, // Ministry of Justice
//         { label: "الوزارة الأولى", url: "#", external: true }, // Prime Ministry
//       ],
//     },
//     {
//       title: "الاتصال والدعم", // Contact and Support
//       links: [
//         { label: "تواصل معنا", url: "#" }, // Contact Us
//         { label: "شارك معنا", url: "#" }, // Participate with us
//         { label: "الهاتف: O21 37 68 74", url: "tel:+21321376874" }, // Phone (Consider using tel: link)
//         { label: "الفاكس: O21 37 68 74", url: "#" }, // Fax
//       ],
//     },
//   ],
//   contact: {
//     address: "قصر الأمم، نادي الصنوبر، الجزائر", // Palais des Nations, Club des Pins, Algiers
//     phone: "021 37 68 74",
//     fax: "021 37 68 74",
//   },
//   copyright: "جميع الحقوق محفوظة © 2025", // All rights reserved © 2025
//   lastUpdated: "04/12/2025", // Example date
// };

// type SocialLink = {
//   name: string;
//   icon: ReactNode;
//   url: string;
// };

// type FooterLink = {
//   label: string;
//   url: string;
//   external?: boolean;
// };

// type FooterSection = {
//   title: string;
//   links: FooterLink[];
// };

// type FooterData = {
//   socials: SocialLink[];
//   sections: FooterSection[];
//   contact: {
//     address: string;
//     phone: string;
//     fax: string;
//   };
//   copyright: string;
//   lastUpdated: string;
// };

// // --- Tailwind Footer Component ---

// const Footer = () => {
//   // Helper to generate link props for external links
//   const getLinkProps = (link: FooterLink) => {
//     if (link.external) {
//       return {
//         target: "_blank",
//         rel: "noopener noreferrer",
//       };
//     }
//     // Add tel: prefix if the label indicates a phone number
//     if (link.label.toLowerCase().startsWith("الهاتف:")) {
//       // Basic extraction, might need refinement for complex numbers
//       const phoneDigits = link.url.replace(/[^0-9+]/g, "");
//       return { to: `tel:${phoneDigits}` };
//     }
//     return { to: link.url }; // Use 'to' for internal react-router Links
//   };

//   return (
//     <footer className="bg-navbar-background text-gray-300 pt-12">
//       {/* Main Content Container */}
//       <div className="container mx-auto px-4">
//         <div className="pb-16 flex">
//           <SultaAvatar />
//         </div>

//         {/* Grid Layout for Sections and Social/Contact */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
//           {footerData.sections.map((section) => (
//             <div
//               key={section.title}
//               className="flex flex-col items-start gap-4"
//             >
//               {" "}
//               {/* Equivalent to VStack align="start" gap={4} */}
//               <h3 className="text-lg font-bold text-white mb-2">
//                 {" "}
//                 {/* Title styling */}
//                 {section.title}
//               </h3>
//               <div className="flex flex-col items-start gap-3">
//                 {" "}
//                 {/* Links container */}
//                 {section.links.map((link) => (
//                   <Link
//                     to={link.url}
//                     key={link.label}
//                     {...getLinkProps(link)} // Use helper for props
//                     className="flex items-center gap-2 hover:text-white transition-colors duration-200 text-sm" // Link styling
//                   >
//                     <span>{link.label}</span>
//                     {link.external && (
//                       <ArrowSquareOut size={18} weight="bold" />
//                     )}
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           ))}
//           {/* Social Media & Address Section */}
//           <div className="flex flex-col items-start gap-8">
//             {" "}
//             {/* Equivalent to VStack align="start" gap={8} */}
//             {/* Social Links */}
//             <div className="flex flex-col items-start gap-4">
//               <h3 className="text-lg font-bold text-white mb-2">
//                 تابعونا على {/* Follow us on */}
//               </h3>
//               <div className="flex flex-row items-center gap-4">
//                 {" "}
//                 {/* Equivalent to HStack gap={4} */}
//                 {footerData.socials.map((social) => (
//                   <a // Use <a> for external social links
//                     key={social.name}
//                     href={social.url}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label={social.name} // Accessibility
//                     className="hover:text-white transition-colors duration-200"
//                   >
//                     {social.icon}
//                   </a>
//                 ))}
//               </div>
//             </div>
//             {/* Address */}
//             <div className="flex flex-col items-start gap-2">
//               <h3 className="text-lg font-bold text-white">
//                 عنوان {/* Address */}
//               </h3>
//               <div className="flex items-center gap-2 text-sm">
//                 {" "}
//                 {/* Equivalent to HStack */}
//                 <MapPin size={20} weight="bold" />
//                 <span>{footerData.contact.address}</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Bar (Copyright & Last Updated) */}
//       <div className="border-t border-white/20 mt-12">
//         {" "}
//         {/* Separator */}
//         <div className="container mx-auto px-4">
//           <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left py-6 text-sm gap-4">
//             {" "}
//             {/* Responsive flex layout */}
//             <p>{footerData.copyright}</p>
//             <p>تاريخ آخر تعديل: {footerData.lastUpdated}</p>{" "}
//             {/* Last Updated Date */}
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import {
  ArrowSquareOut,
  FacebookLogo,
  InstagramLogo,
  MapPin,
  XLogo,
  YoutubeLogo,
} from "@phosphor-icons/react";
import type { ReactNode } from "react";

import { Link } from "react-router";
import SultaAvatar from "./Logo";
import { EmblemIcon } from "./TopBar";

// --- Data and Types (unchanged) ---
const footerData: FooterData = {
  socials: [
    {
      name: "Facebook",
      icon: <FacebookLogo size={22} />,
      url: "https://facebook.com",
    },
    {
      name: "Instagram",
      icon: <InstagramLogo size={22} />,
      url: "https://instagram.com",
    },
    { name: "X", icon: <XLogo size={22} />, url: "https://twitter.com" },
    {
      name: "YouTube",
      icon: <YoutubeLogo size={22} />,
      // Note: This URL seems unusual, ensure it's correct
      url: "https://youtube.com",
    },
  ],
  sections: [
    {
      title: "ملخص", // Summary
      links: [
        { label: "منصة الخدمات الإلكترونية", url: "#" }, // E-Services Platform
        { label: "الخصوصية وشروط الاستخدام", url: "#" }, // Privacy and Terms of Use
        { label: "كيفية استخدام البوابة", url: "#" }, // How to use the portal
        { label: "الأخبار والأحداث", url: "#" }, // News and Events
        { label: "إحصائيات", url: "#" }, // Statistics
        { label: "بوابة التوظيف", url: "#" }, // Employment Portal
      ],
    },
    {
      title: "روابط مهمة", // Important Links
      links: [
        { label: "وزارة الشؤون الخارجية", url: "#", external: true }, // Ministry of Foreign Affairs
        { label: "وزارة الداخلية", url: "#", external: true }, // Ministry of Interior
        { label: "الأمانة العامة للحكومة", url: "#", external: true }, // General Secretariat of the Government
        { label: "المحكمة الدستورية", url: "#", external: true }, // Constitutional Court
        { label: "وزارة العدل", url: "#", external: true }, // Ministry of Justice
        { label: "الوزارة الأولى", url: "#", external: true }, // Prime Ministry
      ],
    },
    {
      title: "الاتصال والدعم", // Contact and Support
      links: [
        { label: "تواصل معنا", url: "#" }, // Contact Us
        { label: "شارك معنا", url: "#" }, // Participate with us
        { label: "الهاتف: O21 37 68 74", url: "tel:+21321376874" }, // Phone (Consider using tel: link)
        { label: "الفاكس: O21 37 68 74", url: "#" }, // Fax
      ],
    },
  ],
  contact: {
    address: "قصر الأمم، نادي الصنوبر، الجزائر", // Palais des Nations, Club des Pins, Algiers
    phone: "021 37 68 74",
    fax: "021 37 68 74",
  },
  copyright: "جميع الحقوق محفوظة © 2025", // All rights reserved © 2025
  lastUpdated: "04/12/2025", // Example date
};

type SocialLink = {
  name: string;
  icon: ReactNode;
  url: string;
};

type FooterLink = {
  label: string;
  url: string;
  external?: boolean;
};

type FooterSection = {
  title: string;
  links: FooterLink[];
};

type FooterData = {
  socials: SocialLink[];
  sections: FooterSection[];
  contact: {
    address: string;
    phone: string;
    fax: string;
  };
  copyright: string;
  lastUpdated: string;
};

// --- Background SVG Component ---
const FooterBackgroundSVG = () => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 800 600"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
    className="absolute left-0 top-0 h-full w-1/3 opacity-10 z-0"
  >
    {/* Placeholder pattern - abstract curved shapes that match your green theme */}
    <path d="M0,0 Q400,100 200,300 T0,600 L0,0 Z" fill="currentColor" />
    <path
      d="M100,0 Q500,150 300,400 T100,600 L100,0 Z"
      fill="currentColor"
      opacity="0.7"
    />
    <path
      d="M200,0 Q600,200 400,500 T200,600 L200,0 Z"
      fill="currentColor"
      opacity="0.5"
    />
  </svg>
);

// --- Tailwind Footer Component ---

const Footer = () => {
  // Helper to generate link props for external links
  const getLinkProps = (link: FooterLink) => {
    if (link.external) {
      return {
        target: "_blank",
        rel: "noopener noreferrer",
      };
    }
    // Add tel: prefix if the label indicates a phone number
    if (link.label.toLowerCase().startsWith("الهاتف:")) {
      // Basic extraction, might need refinement for complex numbers
      const phoneDigits = link.url.replace(/[^0-9+]/g, "");
      return { to: `tel:${phoneDigits}` };
    }
    return { to: link.url }; // Use 'to' for internal react-router Links
  };

  return (
    <footer className="bg-navbar-background text-gray-300 pt-12 relative overflow-hidden">
      {/* Background SVG Placeholder */}
      {/* <FooterBackgroundSVG /> */}
      <EmblemIcon
        className="absolute top-0 z-0 h-full w-full opacity-30"
        fill="#085935"
      />

      {/* Main Content Container */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="pb-16 flex">
          <SultaAvatar />
        </div>

        {/* Grid Layout for Sections and Social/Contact */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {footerData.sections.map((section) => (
            <div
              key={section.title}
              className="flex flex-col items-start gap-4"
            >
              {" "}
              {/* Equivalent to VStack align="start" gap={4} */}
              <h3 className="text-lg font-bold text-white mb-2">
                {" "}
                {/* Title styling */}
                {section.title}
              </h3>
              <div className="flex flex-col items-start gap-3">
                {" "}
                {/* Links container */}
                {section.links.map((link) => (
                  <Link
                    to={link.url}
                    key={link.label}
                    {...getLinkProps(link)} // Use helper for props
                    className="flex items-center gap-2 hover:text-white transition-colors duration-200 text-sm" // Link styling
                  >
                    <span>{link.label}</span>
                    {link.external && (
                      <ArrowSquareOut size={18} weight="bold" />
                    )}
                  </Link>
                ))}
              </div>
            </div>
          ))}
          {/* Social Media & Address Section */}
          <div className="flex flex-col items-start gap-8">
            {" "}
            {/* Equivalent to VStack align="start" gap={8} */}
            {/* Social Links */}
            <div className="flex flex-col items-start gap-4">
              <h3 className="text-lg font-bold text-white mb-2">
                تابعونا على {/* Follow us on */}
              </h3>
              <div className="flex flex-row items-center gap-4">
                {" "}
                {/* Equivalent to HStack gap={4} */}
                {footerData.socials.map((social) => (
                  <a // Use <a> for external social links
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name} // Accessibility
                    className="hover:text-white transition-colors duration-200"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
            {/* Address */}
            <div className="flex flex-col items-start gap-2">
              <h3 className="text-lg font-bold text-white">
                عنوان {/* Address */}
              </h3>
              <div className="flex items-center gap-2 text-sm">
                {" "}
                {/* Equivalent to HStack */}
                <MapPin size={20} weight="bold" />
                <span>{footerData.contact.address}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar (Copyright & Last Updated) */}
      <div className="border-t border-white/20 mt-12 relative z-10">
        {" "}
        {/* Separator */}
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left py-6 text-sm gap-4">
            {" "}
            {/* Responsive flex layout */}
            <p>{footerData.copyright}</p>
            <p>تاريخ آخر تعديل: {footerData.lastUpdated}</p>{" "}
            {/* Last Updated Date */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
