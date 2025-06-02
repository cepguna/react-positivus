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
		<section className="custom-container mb-24 sm:mb-32 px-4 sm:px-6">
			<TitleSection
				title="Case Studies"
				description="Explore how our digital marketing strategies have driven measurable results for businesses across various industries."
			/>
			<div className="bg-gray-900 rounded-3xl px-6 sm:px-10 py-10 sm:py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
				{CONTENT.map((item, i) => (
					<article
						key={`case-${i}`}
						className={cn(
							"flex flex-col",
							i !== CONTENT.length - 1 &&
								"border-r-0 border-white sm:border-r-0  pr-0 lg:pr-6 border-b lg:border-r lg:border-b-0 pb-6 lg:pb-0",
						)}
					>
						<p className="text-white font-light text-base sm:text-lg">{item}</p>
						<button
							className="flex items-center gap-2 text-yellow-200 mt-4 text-base sm:text-lg"
							aria-label={`Learn more about case study ${i + 1}`}
						>
							<span>Learn More</span>
							<ArrowRight className="rotate-[-30deg] w-5 h-5" />
						</button>
					</article>
				))}
			</div>
		</section>
	);
};
