import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Facebook, Linkedin, TwitterIcon } from "lucide-react";
import { Logo } from "./ui/logo";

const footerLinks = [
	{
		title: "About Us",
		href: "#",
	},
	{
		title: "Services",
		href: "#",
	},
	{
		title: "Use Cases",
		href: "#",
	},
	{
		title: "Pricing",
		href: "#",
	},
	{
		title: "Blog",
		href: "#",
	},
];

export const Footer = () => {
	return (
		<footer className="bg-gray-900 custom-container rounded-t-4xl text-white">
			<div className="px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
				<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-y-8 sm:gap-y-0 sm:gap-x-8">
					<Logo type="light" />
					<nav>
						<ul className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 flex-wrap">
							{footerLinks.map(({ title, href }) => (
								<li key={title}>
									<a
										href={href}
										className="text-white hover:underline focus:underline"
									>
										{title}
									</a>
								</li>
							))}
						</ul>
					</nav>
					<div className="flex items-center gap-4">
						<a href="#" target="_blank" aria-label="LinkedIn">
							<Linkedin className="h-5 w-5 hover:text-yellow-200" />
						</a>
						<a href="#" target="_blank" aria-label="Facebook">
							<Facebook className="h-5 w-5 hover:text-yellow-200" />
						</a>
						<a href="#" target="_blank" aria-label="Twitter">
							<TwitterIcon className="h-5 w-5 hover:text-yellow-200" />
						</a>
					</div>
				</div>
				<div className="flex flex-col lg:flex-row items-start justify-between mt-8 sm:mt-10 gap-6">
					<section className="space-y-3 w-full lg:w-[400px]">
						<h5 className="bg-yellow-200 inline-flex rounded px-1 font-semibold text-gray-900 text-base sm:text-lg">
							Contact Us:
						</h5>
						<p className="text-sm sm:text-base">Email: info@positivus.com</p>
						<p className="text-sm sm:text-base">Phone: 555-567-8901</p>
						<p className="text-sm sm:text-base">
							Address: 125 Main St, Moonstone City, Stardust State 12345
						</p>
					</section>
					<section className="w-full lg:w-[40%] bg-gray-800 p-4 sm:p-5 rounded-2xl">
						<form className="flex flex-col sm:flex-row items-center gap-2">
							<Input
								className="bg-transparent border-white placeholder:text-gray-400 text-white text-sm sm:text-base"
								type="email"
								placeholder="Enter your email"
							/>
							<Button className="bg-yellow-200 text-black hover:bg-yellow-400 text-sm sm:text-base w-full sm:w-auto">
								Subscribe to news
							</Button>
						</form>
					</section>
				</div>
				<Separator className="my-6 sm:my-8 bg-gray-700" />
				<div className="flex flex-col sm:flex-row items-center justify-between gap-y-4 sm:gap-y-0 px-4 sm:px-0 text-sm sm:text-base">
					<span>
						© {new Date().getFullYear()}{" "}
						<a
							href="/"
							target="_blank"
							className="hover:underline focus:underline"
						>
							Positivus
						</a>
						. All rights reserved.
					</span>
					<a
						href="/"
						target="_blank"
						className="hover:underline focus:underline"
					>
						Privacy Policy
					</a>
				</div>
			</div>
		</footer>
	);
};
