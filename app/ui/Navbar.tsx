// NavBar.tsx (Modified)

// import { LanguageSwitcher } from "~/library/language-switcher";
import { MagnifyingGlass } from "@phosphor-icons/react"
import { motion, useMotionValueEvent, useScroll } from "motion/react" // Correct import if using framer-motion
import { useState } from "react"
import { Button } from "~/components/ui/button"
// import { NavLink, Link } from "react-router-dom"; // Use react-router-dom imports if that's your router
import { SiteNavigation } from "./menu" // Adjust path

// Removed TopBar import and usage from here

const NavBar: React.FC = () => {
	const { scrollY } = useScroll()
	const [hidden, setHidden] = useState(false)

	useMotionValueEvent(scrollY, "change", (current) => {
		const previous = scrollY.getPrevious()
		if (previous === undefined || typeof previous !== "number") return

		const diff = current - previous
		// You might want to adjust the threshold based on the TopBar's height
		// or when you want the hiding behavior to start.
		const threshold = 155 // Or maybe something like topBarHeight + navBarHeight?

		if (current < threshold) {
			setHidden(false)
		} else if (diff > 0 && current > threshold) {
			// Scrolling down
			setHidden(true)
		} else if (diff < 0) {
			// Scrolling up
			setHidden(false)
		}
	})

	return (
		// Removed the fragment <> </> wrapper unless needed for other reasons
		<motion.nav
			aria-label="Main navigation"
			// --- CHANGE HERE ---
			// Use 'sticky' instead of 'fixed' and ensure 'top-0' is present
			className="sticky top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 h-20 py-4" // h-20 = 5rem = 80px
			// --- END CHANGE ---
			variants={{
				visible: { y: 0 },
				hidden: { y: "-100%" }, // Hides the sticky bar by moving it up
			}}
			initial="visible"
			animate={hidden ? "hidden" : "visible"}
			transition={{ duration: 0.4, type: "spring" }}
		>
			<div className="container mx-auto h-fit flex justify-between items-center bg-navbar-background text-green-50  rounded-[12px] md:flex md:flex-row md:items-center md:gap-0 md:py-2 md:pl-4 md:pr-2 lg:pl-2">
				{/* Left side: Navigation Links (or maybe Logo here?) */}
				{/* Consider reversing order visually if needed via flexbox */}
				<SiteNavigation />

				{/* Right side: Language Switcher & Mobile Menu */}
				<div className="flex items-center gap-4">
					<Button variant="secondary" className="cursor-pointer">
						<MagnifyingGlass /> بحث
					</Button>
					{/* Placeholder for Mobile Menu Button */}
					<div className="sm:hidden">
						<button
							type="button"
							aria-label="Open menu"
							className="text-gray-600 dark:text-gray-300"
							// Add onClick handler to toggle mobile menu state
						>
							{/* Hamburger Icon */}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-6 h-6"
							>
								<title>Open menu</title>
								<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
							</svg>
						</button>
					</div>
				</div>
			</div>
			{/* Add Mobile Menu Flyout/Dropdown component here, controlled by state */}
		</motion.nav>
	)
}

export default NavBar
