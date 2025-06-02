import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { TitleSection } from "./title-section";

const CONTENT = [
	"For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
	"For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
	"For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
];

export const CaseStudioSection = () => {
	return (
		<div className="custom-container pb-40">
			<TitleSection
				title="Case Studies"
				description="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
			/>
			<div className="bg-gray-900 rounded-3xl px-10 py-16 gap-10 grid grid-cols-3">
				{CONTENT.map((item, i) => (
					<div
						key={`case-${i}`}
						className={cn(i !== CONTENT.length - 1 && "border-r border-white")}
					>
						<p className="text-white font-light">{item}</p>
						<div className="flex items-center gap-2 text-lg text-yellow-200 mt-4 cursor-pointer" role="button">
							<a>Learn More</a>
							<ArrowRight className="rotate-[-30deg]" />
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
