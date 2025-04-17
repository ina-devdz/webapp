import { Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import {
	ArrowLeft,
	ArrowRight,
	Compass,
	EnvelopeOpen,
	HouseLine,
	IdentificationCard,
	ListPlus,
	UserPlus,
} from "@phosphor-icons/react"
import { useRef, useState } from "react"
import ServiceCard from "./ServiceCard"

const services = [
	{
		id: "where-to-vote",
		title: "أين أنتخب؟",
		description: "البحث عن مركز التصويت للأشخاص المسجلين في القوائم الانتخابية",
		icon: <Compass weight="fill" />,
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
		description: "الإنتخابات الرئاسية المسبقة 07 سبتمبر 2024 النتائج النهائية لإنتخاب رئيس الجمهورية",
		icon: <IdentificationCard weight="fill" />,
		route: "/voter-card",
	},
]

const ServicesCarousel = () => {
	const prevButtonId = "swiper-button-prev-services"
	const nextButtonId = "swiper-button-next-services"

	const [isBeginning, setIsBeginning] = useState(true)
	const [isEnd, setIsEnd] = useState(false)
	const swiperRef = useRef<any>(null)

	const handleSwiper = (swiper: any) => {
		swiperRef.current = swiper
		setIsBeginning(swiper.isBeginning)
		setIsEnd(swiper.isEnd)
		swiper.on("slideChange", () => {
			setIsBeginning(swiper.isBeginning)
			setIsEnd(swiper.isEnd)
		})
	}

	return (
		<div className="relative w-full container mx-auto py-4" dir="rtl">
			<div className="absolute z-10 bottom-full left-4 flex gap-4">
				<button
					type="button"
					id={prevButtonId}
					aria-label="Previous Slide"
					className={`transition-opacity ${isBeginning ? "opacity-40 pointer-events-none" : "opacity-100"} cursor-pointer`}
				>
					<ArrowRight size={22} weight="bold" />
				</button>
				<button
					type="button"
					id={nextButtonId}
					aria-label="Next Slide"
					className={`transition-opacity ${isEnd ? "opacity-40 pointer-events-none" : "opacity-100"} cursor-pointer`}
				>
					<ArrowLeft size={22} weight="bold" />
				</button>
			</div>
			<Swiper
				modules={[Navigation]}
				spaceBetween={30}
				slidesPerView={1}
				grabCursor={true}
				navigation={{
					nextEl: `#${nextButtonId}`,
					prevEl: `#${prevButtonId}`,
				}}
				onSwiper={handleSwiper}
				breakpoints={{
					640: {
						slidesPerView: 2,
						spaceBetween: 4,
					},
					768: {
						slidesPerView: 3,
						spaceBetween: 8,
					},
					1024: {
						slidesPerView: 3,
						spaceBetween: 8,
					},
					1280: {
						slidesPerView: 4,
						spaceBetween: 12,
					},
				}}
				className="cursor-grab"
			>
				{services.map((service) => (
					<SwiperSlide key={service.id} className="h-auto p-1">
						<ServiceCard title={service.title} imageUrl="/AbstractColorfulBackground.jpg" icon={service.icon} />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}

export default ServicesCarousel
