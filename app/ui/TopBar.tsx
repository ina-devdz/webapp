// TopBar.tsx (Check imports)

// import { Link } from "react-router"; // <-- Check if this is correct for your project
import { Link } from "react-router"; // <-- Or maybe this? Or just 'a' if simple link
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LanguageSwitcher } from "@/library/language-switcher";

const TopBar = () => {
  const logoUrl = "/Logo.avif";
  const logoFallback = "LN";
  const homePageUrl = "/";

  return (
    // This header is static, it will scroll normally
    <header className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Reduced height slightly to distinguish from NavBar maybe? h-14 = 56px */}
      <div className="container mx-auto flex h-14 max-w-screen-2xl items-center justify-between px-4 md:px-6">
        {/* Left Side: Language Switcher */}
        <div className="flex items-center">
          <LanguageSwitcher />
        </div>

        {/* Right Side: Logo */}
        <div className="flex items-center">
          <Link to={homePageUrl} aria-label="Go to homepage">
            <Avatar className="h-8 w-8 md:h-9 md:w-9">
              <AvatarImage src={logoUrl} alt="Company Logo" />
              <AvatarFallback>{logoFallback}</AvatarFallback>
            </Avatar>
          </Link>
        </div>
      </div>
    </header>
  );
};

export { TopBar };
