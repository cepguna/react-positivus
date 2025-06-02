import { Button } from "@/components/ui/button";
import { IL_CTA } from "@/constants/images";

export const CTASection = () => {
	return (
		<div className="custom-container relative mb-40">
			<div className="px-10 md:px-14 bg-gray-100 py-16 sm:py-0 h-auto sm:h-[300px] rounded-4xl flex items-center justify-between gap-4 z-20">
				<div className="flex flex-col justify-center space-y-4 mxa-w-full md:max-w-[50%]">
					<div className="space-y-2 relative z-10">
						<h2 className="font-semibold tracking-tighter text-4xl">
							Let’s make things happen
						</h2>
						<p className="text-muted-foreground">
							Contact us today to learn more about how our digital marketing
							services can help your business grow and succeed online.
						</p>
					</div>
					<div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-2 relative z-50">
						<Button size="lg" asChild>
							<a href="#">Get your free proposal</a>
						</Button>
					</div>
				</div>
			</div>
			<img
				src={IL_CTA}
				alt="logo cta"
				className="absolute bottom-[-100px] z-0 top-auto md:bottom-auto right-0 lg:right-20 xl:right-40 md:top-[-30px] w-[200px] md:w-auto"
			/>
		</div>
	);
};
