import { Button } from "@/components/ui/button";
import { IL_HERO } from "@/constants/images";

export const Hero = () => (
	<div className="custom-container h-[calc(100vh_-_130px)] flex items-center justify-center">
		<div className="grid grid-cols-1 gap-8 items-center lg:grid-cols-2">
			<div className="flex gap-4 flex-col">
				<div className="flex gap-4 flex-col">
					<h1 className="text-5xl md:text-7xl tracking-tighter text-left font-regular">
						Navigating the digital landscape for success
					</h1>
					<p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-lg text-left">
						Our digital marketing agency helps businesses grow and succeed
						online through a range of services including SEO, PPC, social media
						marketing, and content creation.
					</p>
				</div>
				<div className="flex flex-row gap-4">
					<Button size="lg" className="gap-4 h-14 px-10 text-lg">
            Book a Consultion
					</Button>
				</div>
			</div>
			<img src={IL_HERO} alt="Hero" />
		</div>
	</div>
);
