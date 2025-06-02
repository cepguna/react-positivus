import {
	IL_SERVICE1,
	IL_SERVICE2,
	IL_SERVICE3,
	IL_SERVICE4,
	IL_SERVICE5,
	IL_SERVICE6,
} from "@/constants/images";
import { cn } from "@/lib/utils";
import {
	ArrowRight,
	Blocks,
	Bot,
	ChartPie,
	Film,
	MessageCircle,
	Settings2,
} from "lucide-react";
import { TitleSection } from "./title-section";

const features = [
	{
		icon: Settings2,
		title: ["Search engine", "optimizatin"],
		background: "bg-gray-100",
		image: IL_SERVICE2,
	},
	{
		icon: Blocks,
		title: ["Pay-per-click", "advertising"],
		background: "bg-yellow-200",
		image: IL_SERVICE4,
	},
	{
		icon: Bot,
		title: ["Social Media", "Marketing"],
		background: "bg-black",
		image: IL_SERVICE1,
	},
	{
		icon: Film,
		title: ["Email", "Marketing"],
		background: "bg-gray-100",
		image: IL_SERVICE5,
	},
	{
		icon: ChartPie,
		title: ["Content", "Creation"],
		background: "bg-yellow-200",
		image: IL_SERVICE3,
	},
	{
		icon: MessageCircle,
		title: ["Analytics and", "Tracking"],
		background: "bg-black",
		image: IL_SERVICE6,
	},
];

export const ServicesSection = () => {
	return (
		<div className="mb-40 custom-container">
			<TitleSection
				title="Services"
				description="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
			/>
			<div className="mt-10 sm:mt-16 grid sm:grid-cols-2 gap-6">
				{features.map((feature, i) => (
					<div
						key={`services-${i}`}
						className={cn(
							"flex flex-start justify-between border border-black rounded-4xl py-8 px-8 gap-5  shadow-[3px_6px_0px_rgba(0,0,0,1)]",
							feature.background,
						)}
					>
						<div className="flex flex-col justify-between">
							<div>
								{feature.title.map((item, ii) => (
									<div key={`${item}-${ii}`}>
										<span
											className={cn(
												"text-2xl font-semibold bg-white text-gray-900 p-1 rounded-lg",
												feature.background === "bg-gray-100" && "bg-yellow-200",
												feature.background === "bg-black" &&
													i === 5 &&
													"bg-yellow-200",
											)}
										>
											{item}
										</span>
									</div>
								))}
							</div>
							<div
								className="flex items-center gap-2 cursor-pointer"
								role="button"
							>
								<div
									className={cn(
										"bg-black rounded-full p-1 rotate-2",

										feature.background.includes("black") && "bg-white",
									)}
								>
									<ArrowRight
										className={cn(
											"rotate-[-30deg]",
											feature.background.includes("yellow") &&
												"text-yellow-200",
											feature.background.includes("black") && "text-black",
											feature.background.includes("gray") && "text-gray-100",
										)}
									/>
								</div>
								<span
									className={cn(
										feature.background.includes("black") && "text-white",
									)}
								>
									Learn More
								</span>
							</div>
						</div>
						<img src={feature.image} alt={`img-service-${i}`} />
					</div>
				))}
			</div>
		</div>
	);
};
