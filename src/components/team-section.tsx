import { Button } from "@/components/ui/button";
import { Linkedin } from "lucide-react";
import { TitleSection } from "./title-section";
import { TEAM1, TEAM2, TEAM3, TEAM4, TEAM5, TEAM6 } from "@/constants/images";

const teamMembers = [
	{
		name: "John Doe",
		title: "Founder & CEO",
		bio: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
		imageUrl: TEAM1,
	},
	{
		name: "Jane Doe",
		title: "Director of Operations",
		bio: "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
		imageUrl: TEAM2,
	},
	{
		name: "Michael Brown",
		title: "Senior SEO Specialist",
		bio: "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
		imageUrl: TEAM3,
	},
	{
		name: "Emily Johnson",
		title: "PPC Manager",
		bio: "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
		imageUrl: TEAM4,
	},
	{
		name: "Brian Williams",
		title: "Social Media Specialist",
		bio: "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
		imageUrl: TEAM5,
	},
	{
		name: "Sarah Kim",
		title: "Content Creator",
		bio: "2+ years of experience in writing and editing Skilled in creating compelling, SEO-optimized content for various industries",
		imageUrl: TEAM6,
	},
];

export const TeamSection = () => {
	return (
		<div className="custom-container mb-40">
			<TitleSection
				title="Team"
				description="Meet the skilled and experienced team behind our successful digital marketing strategies"
			/>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
				{teamMembers.map((member) => (
					<div
						key={member.name}
						className="relative border border-black rounded-4xl shadow-[3px_6px_0px_rgba(0,0,0,1)] flex flex-col items-start bg-white py-8 px-6"
					>
						<div className="absolute right-6 top-8">
							<div className="bg-black text-yellow-200 rounded-full text-2xl p-2 h-10 w-10">
								<Linkedin className="" />
							</div>
						</div>
						<div className="flex items-end gap-4">
							<img
								src={member.imageUrl}
								alt={member.name}
								className="shrink-0 h-16 w-16 sm:h-20 sm:w-20 rounded-full object-cover bg-accent"
								width={120}
								height={120}
							/>
							<div>
								<h3 className="mt-5 text-lg font-semibold">{member.name}</h3>
								<p className="text-muted-foreground text-sm">{member.title}</p>
							</div>
						</div>
						<p className="mt-2">{member.bio}</p>
					</div>
				))}
			</div>
      <Button className="mt-8 float-right px-10" size={'lg'}>See all team</Button>
		</div>
	);
};
