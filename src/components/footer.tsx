import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
	DribbbleIcon,
	GithubIcon,
	TwitchIcon,
	TwitterIcon,
} from "lucide-react";
import { Logo } from "./ui/logo";

const footeras = [
	{
		title: "Overview",
		href: "#",
	},
	{
		title: "Features",
		href: "#",
	},
	{
		title: "Pricing",
		href: "#",
	},
	{
		title: "Careers",
		href: "#",
	},
	{
		title: "Help",
		href: "#",
	},
	{
		title: "Privacy",
		href: "#",
	},
];

export const Footer = () => {
	return (
		<footer>
			<div className="custom-container bg-black rounded-t-4xl text-white">
				<div className=" py-12 gap-x-8 gap-y-10 px-6 xl:px-0">
					<div className="flex items-center justify-between">
						{/* Logo */}
						<Logo type="light" />

						<ul className="flex items-center gap-4 flex-wrap">
							{footeras.map(({ title, href }) => (
								<li key={title}>
									<a href={href} className=" hover:text-foreground">
										{title}
									</a>
								</li>
							))}
						</ul>

						<div className="flex items-center gap-5 ">
							<a href="#" target="_blank">
								<TwitterIcon className="h-5 w-5" />
							</a>
							<a href="#" target="_blank">
								<DribbbleIcon className="h-5 w-5" />
							</a>
							<a href="#" target="_blank">
								<TwitchIcon className="h-5 w-5" />
							</a>
							<a href="#" target="_blank">
								<GithubIcon className="h-5 w-5" />
							</a>
						</div>
					</div>

					{/* Subscribe Newsletter */}
					<div className="flex items-start justify-between mt-10 gap-4">
						<div className="space-y-3 w-[400px]">
							<h5 className="bg-yellow-200 inline-flex rounded px-1 font-semibold text-gray-900 inline-">
								Contact Us:
							</h5>
							<p>Email: info@positivus.com</p>
							<p>Phone: 555-567-8901</p>
							<p>Address: 125 Main St Moonstone City, Stardust State 12345</p>
						</div>
						<div className="w-[40%] h-full bg-gray-800 p-5 rounded-2xl">
							<form className="flex items-center gap-2">
								<Input type="email" placeholder="Enter your email" />
								<Button>Subscribe to news</Button>
							</form>
						</div>
					</div>
				</div>
				<Separator />
				<div className="py-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6 xl:px-0">
					{/* Copyright */}
					<span className="">
						&copy; {new Date().getFullYear()}{" "}
						<a href="/" target="_blank">
              Positivus
						</a>
						. All rights reserved.
					</span>
				</div>
			</div>
		</footer>
	);
};
