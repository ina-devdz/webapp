import { useTranslation } from "react-i18next";
// Removed useLocation and Link as we'll handle change differently for now
// import { useLocation } from "react-router";
// import { Link } from "../link"; // Assuming custom Link is not strictly needed for language change itself

import { Globe, Check } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button"; // Assuming Shadcn Button path
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"; // Assuming Shadcn Dropdown path
import { cn } from "~/lib/utils";

// Define language structure for clarity
interface Language {
  code: "en" | "ar"; // Explicitly define supported codes
  name: string;
}

// Updated list using the interface
const supportedLanguagesList: Language[] = [
  { code: "en", name: "English" },
  { code: "ar", name: "العربية" },
];

const LS = () => {
  const { i18n } = useTranslation();
  const currentLanguageCode = i18n.language.split("-")[0]; // Get base language code (e.g., 'en' from 'en-US')

  const handleLanguageChange = (langCode: string) => {
    i18n.changeLanguage(langCode);
    // If you absolutely NEED to reload the page or add the query parameter
    // you might add logic here, but often changing i18n language is enough
    // Example: window.location.search = `?lng=${langCode}`; (might cause full reload)
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {/* Mobile-first: Compact icon button */}
        <Button variant="outline" size="icon" aria-label="Change language">
          <Globe size={20} weight="bold" /> {/* Phosphor icon */}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-40">
        {" "}
        {/* Align dropdown to the end */}
        {supportedLanguagesList.map((language) => {
          const isSelected = currentLanguageCode === language.code;
          return (
            <DropdownMenuItem
              key={language.code}
              // Use onSelect for actions within Radix menus
              onSelect={() => handleLanguageChange(language.code)}
              disabled={isSelected} // Disable selecting the already active language
              className={cn(
                "flex items-center justify-between cursor-pointer", // Layout and cursor
                language.code === "ar" ? "rtl" : "ltr", // Basic RTL styling for the item itself
              )}
              // Set text direction based on language if needed more explicitly
              // dir={language.code === 'ar' ? 'rtl' : 'ltr'}
            >
              <span>{language.name}</span>
              {isSelected && (
                <Check size={16} weight="bold" className="text-primary" /> // Show checkmark if selected
              )}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export { LS };

// Helper function for conditional classnames (often included in shadcn setup)
// Make sure you have this utility or install clsx + tailwind-merge
// import { type ClassValue, clsx } from "clsx"
// import { twMerge } from "tailwind-merge"
// export function cn(...inputs: ClassValue[]) {
//   return twMerge(clsx(inputs))
// }
