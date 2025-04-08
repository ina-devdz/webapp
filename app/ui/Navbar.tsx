// Import necessary Framer Motion hooks and component
import { motion, useMotionValueEvent, useScroll } from "motion/react"
import { useState } from "react"

const NavBar: React.FC = () => {
	// 1. Get the scrollY MotionValue
	const { scrollY } = useScroll()

	// 2. State to control visibility based on scroll direction/position
	const [isVisible, setIsVisible] = useState(true)

	// 3. Use useMotionValueEvent to react efficiently to scroll changes
	useMotionValueEvent(scrollY, "change", (current) => {
		const previous = scrollY.getPrevious() // Get previous scroll value

		// Ensure previous is a number (it might be undefined initially)
		if (previous === undefined || typeof previous !== "number") return

		const diff = current - previous

		// Define a threshold (e.g., 10px) to avoid hiding immediately at the top
		const threshold = 96

		// Logic to determine visibility:
		if (current <= threshold) {
			// Always show if near or at the very top
			setIsVisible(true)
		} else if (diff > 0 && current > threshold) {
			// Scrolling down and past the threshold: Hide
			setIsVisible(false)
		} else if (diff < 0) {
			// Scrolling up: Show
			setIsVisible(true)
		}
		// If diff === 0 (no change), visibility remains as it was.
	})

	return (
		// Use AnimatePresence if you want exit animations, though simple y-translate might not strictly need it
		// <AnimatePresence>
		<motion.nav
			// Use key prop if using AnimatePresence and want remount on changes
			// key="navbar"

			// Base Tailwind styles remain the same
			className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 shadow-xs p-4 flex justify-between items-center"
			// Define animation variants (alternative to direct animate prop)
			// variants={{
			//   visible: { y: 0 },
			//   hidden: { y: "-100%" }
			// }}
			// initial="visible" // Initial state variant name
			// animate={isVisible ? "visible" : "hidden"} // Control variant based on state

			// Or directly use initial/animate props (simpler for this case)
			initial={{ y: 0 }} // Start visible at the top
			animate={{ y: isVisible ? 0 : "-100%" }} // Animate y based on state
			// Define the transition
			transition={{ duration: 0.3, ease: "easeInOut" }}
		>
			{/* Left side: Logo or Brand */}
			<div className="text-xl font-bold text-gray-800 dark:text-white">MyApp</div>

			{/* Right side: Navigation Links */}
			<ul className="flex space-x-4 sm:space-x-6">
				<li>
					<a href="#home" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
						Home
					</a>
				</li>
				<li>
					<a href="#features" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
						Features
					</a>
				</li>
				<li>
					<a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
						About
					</a>
				</li>
				<li>
					<a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
						Contact
					</a>
				</li>
			</ul>
		</motion.nav>
		// </AnimatePresence>
	)
}

export default NavBar
