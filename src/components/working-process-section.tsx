import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { TitleSection } from "./title-section";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Minus, Plus } from "lucide-react";

const STEPS = [
	{
		label: "Consultation",
		content:
			"During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
	},
	{
		label: "Research and Strategy Development",
		content:
			"During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
	},
	{
		label: "Implementation",
		content:
			"During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
	},
	{
		label: "Monitoring and Optimization",
		content:
			"During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
	},
	{
		label: "Reporting and Communication",
		content:
			"During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
	},
	{
		label: "Continual Improvement",
		content:
			"During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
	},
];

export const WorkingProcessSection = () => {
	const [active, setActive] = useState("index-0");
	return (
		<div className="custom-container pb-40">
			<TitleSection
				title="Our Working Process"
				description="Step-by-Step Guide to Achieving Your Business Goals"
			/>
			<div className="flex flex-col">
				<Accordion
					onValueChange={(v) => setActive(v)}
					type="single"
					collapsible
					className="flex flex-col gap-6"
					defaultValue={active}
				>
					{STEPS.map((step, index) => (
						<AccordionItem
							className={cn(
								"!border bg-gray-100 rounded-3xl border-black py-4 px-8 shadow-[3px_6px_0px_rgba(0,0,0,1)]",
								`index-${index}` === active && "bg-yellow-200",
							)}
							key={index}
							value={"index-" + index}
						>
							<AccordionTrigger
								className={cn(
									"hover:no-underline",
									`index-${index}` === active &&
										"border-b border-black rounded-none mb-4",
								)}
							>
								<div className="flex items-center gap-4">
									<span className="text-3xl sm:text-4xl">0{index + 1}</span>
									<span className="text-xl sm:text-2xl">{step.label}</span>
								</div>
								<div className="bg-white p-2 rounded-full border border-black">
									{`index-${index}` === active ? (
										<Minus className="text-black pointer-events-none size-6" />
									) : (
										<Plus className="text-black pointer-events-none size-6" />
									)}
								</div>
							</AccordionTrigger>
							<AccordionContent>{step.content}</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</div>
		</div>
	);
};
