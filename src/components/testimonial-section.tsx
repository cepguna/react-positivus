import { useEffect, useState } from "react";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from "@/components/ui/carousel";
import type { CarouselApi } from "@/components/ui/carousel";
import { TitleSection } from "./title-section";
import { Triangle } from "lucide-react";

const TESTIMONIAL = [
	{
		testimoni:
			"We've been with Positivus for a year now, and their work has led to a significant boost in our website traffic and leads. The team is professional, quick to respond, and genuinely invested in our success. For any company aiming to expand their online presence, Positivus comes highly recommended.",
		name: "John Smith",
		job: "Marketing Director at XYZ Corp",
	},
	{
		testimoni:
			"Positivus transformed our digital marketing strategy. Their innovative approach and detailed reporting have given us clear insights into our ROI. We're thrilled with the results and the measurable growth we've achieved since partnering with them.",
		name: "Jane Doe",
		job: "CEO at Innovate Solutions",
	},
	{
		testimoni:
			"The team at Positivus is exceptional. They took the time to understand our unique business needs and crafted a tailored SEO strategy that delivered impressive organic growth. Their expertise and dedication are truly remarkable.",
		name: "Robert Johnson",
		job: "Founder of Global Brands",
	},
	{
		testimoni:
			"Choosing Positivus was one of the best decisions we made for our e-commerce business. Their PPC campaigns are highly optimized, and we've seen a substantial increase in conversions. They're an invaluable partner.",
		name: "Emily White",
		job: "E-commerce Manager at Trendsetter Retail",
	},
	{
		testimoni:
			"Positivus provided us with comprehensive social media marketing that not only increased our brand awareness but also drove significant engagement. Their creative content and strategic planning are top-notch.",
		name: "Michael Brown",
		job: "Communications Director at Community First Foundation",
	},
	{
		testimoni:
			"We appreciate the transparency and constant communication from the Positivus team. They keep us informed every step of the way and are always ready to answer our questions. Their commitment to client satisfaction is evident.",
		name: "Sarah Davis",
		job: "Operations Manager at Synergy Tech",
	},
];

export const TestimonialSection = () => {
	const [api, setApi] = useState<CarouselApi>();
	const [current, setCurrent] = useState(0);

	useEffect(() => {
		if (!api) {
			return;
		}

		setTimeout(() => {
			if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
				setCurrent(0);
				api.scrollTo(0);
			} else {
				api.scrollNext();
				setCurrent(current + 1);
			}
		}, 4000);
	}, [api, current]);

	return (
		<div className="custom-container pb-40">
			<TitleSection
				title="Testimonials"
				description="Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services"
			/>
			<div className="bg-gray-900 py-24 rounded-4xl">
				<Carousel setApi={setApi} className="w-full">
					<CarouselContent>
						{TESTIMONIAL.map((testimoni, index) => (
							<CarouselItem className="lg:basis-1/2" key={index}>
								<div className="border relative border-yellow-200 rounded-4xl p-6">
									<p className="text-white text-base">
										&quot;{testimoni.testimoni}&quot;
									</p>
									<div className="absolute left-[25px] bottom-[-0px] bg-gray-900 z-10 h-2 w-[40px]" />
									<div className="absolute left-[35x] bottom-[-30px] bg-gray-900 overflow-visible">
										<Triangle
											className="text-yellow-200 size-10 rotate-180"
											strokeWidth={0.7}
										/>
									</div>
								</div>
								<div className="flex flex-col mt-9 ml-8">
									<h5 className="text-yellow-200 font-bold text-xl">{testimoni.name}</h5>
									<p className="text-white text-sm">{testimoni.job}</p>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
				</Carousel>
			</div>
		</div>
	);
};
