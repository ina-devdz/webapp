// app/components/Logo.tsx
import { Link } from "react-router";

const Logo: React.FC = () => {
  return (
    // Use Remix Link for navigation, pointing to the home page or appropriate base URL
    <Link
      to="/" // Adjust the 'to' prop as needed (e.g., "/" or "/en/")
      // Combine classes from the original 'a' tag
      className="cursor-pointer transition-colors relative outline-none before:absolute before:-inset-0.5 before:rounded before:border-2 before:border-black-off before:opacity-0 before:transition-opacity focus-visible:before:opacity-100 text-black-off hover:text-gray-700 dark:text-white dark:hover:text-gray-300" // Added dark mode text/hover colors
      aria-label="ina election logo" // Keep the descriptive aria-label
      // prefetch="intent" // Optional: Add Remix prefetching
    >
      <img
        className="rounded-full size-16 m-auto"
        src="/logo.avif"
        alt="ina election Logo"
      />
    </Link>
  );
};

export default Logo;
