import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";

const CONTENT = [
	"For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
	"For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
	"For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
];

export const CaseStudioSection = () => {
	return (
		<div className="custom-container">
			<div className="flex items-center gap-4 mb-16">
				<h5 className="section-title inline">Case Studies</h5>
				<p className="inline-block w-[50%] section-description">
					At our digital marketing agency, we offer a range of services to help
					businesses grow and succeed online. These services include:
				</p>
			</div>
			<div className="bg-gray-900 rounded-3xl px-10 py-16 gap-10 grid grid-cols-3">
				{CONTENT.map((item, i) => (
					<div key={`case-${i}`} className={cn(i !== CONTENT.length - 1 && "border-r border-white")}>
						<p className="text-white text-sm font-light">{item}</p>
						<div className="flex items-center gap-3 text-yellow-200 mt-4">
							<a>Learn More</a>
							<ExternalLink />
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
