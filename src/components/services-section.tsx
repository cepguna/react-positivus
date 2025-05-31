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
	Blocks,
	Bot,
	ChartPie,
	Film,
	MessageCircle,
	Settings2,
} from "lucide-react";

const features = [
	{
		icon: Settings2,
		title: "Customizable Layouts",
		background: "bg-gray-100",
		image: IL_SERVICE1,
	},
	{
		icon: Blocks,
		title: "Interactive Widgets",
		background: "bg-yellow-200",
		image: IL_SERVICE2,
	},
	{
		icon: Bot,
		title: "AI-Powered Tools",
		background: "bg-black",
		image: IL_SERVICE3,
	},
	{
		icon: Film,
		title: "Media Integrations",
		background: "bg-gray-100",
		image: IL_SERVICE4,
	},
	{
		icon: ChartPie,
		title: "Advanced Analytics",
		background: "bg-yellow-200",
		image: IL_SERVICE5,
	},
	{
		icon: MessageCircle,
		title: "Seamless Collaboration",
		background: "bg-black",
		image: IL_SERVICE6,
	},
];

export const ServicesSection = () => {
	return (
		<div className="mb-20 custom-container">
			<h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-center">
				Unleash Your Creativity
			</h2>
			<div className="mt-10 sm:mt-16 grid sm:grid-cols-2 gap-6">
				{features.map((feature, i) => (
					<div
						key={feature.title}
						className={cn(
							"flex flex-start justify-between border rounded-xl py-6 px-5 gap-5",
							feature.background,
						)}
					>
						<div className="flex flex-col">
							<span className="text-lg font-semibold">{feature.title}</span>
						</div>
						<img src={feature.image} alt={`img-service-${i}`} />
					</div>
				))}
			</div>
		</div>
	);
};
