import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Facebook, Linkedin, TwitterIcon } from "lucide-react";
import { Logo } from "./ui/logo";

const footeras = [
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
		<footer>
			<div className="custom-container bg-gray-900 rounded-t-4xl text-white">
				<div className=" py-12 gap-x-8 gap-y-10 px-6 xl:px-0">
					<div className="flex items-center justify-between">
						{/* Logo */}
						<Logo type="light" />

						<ul className="flex items-center gap-4 flex-wrap">
							{footeras.map(({ title, href }) => (
								<li key={title}>
									<a href={href} className=" hover:no-underline underline">
										{title}
									</a>
								</li>
							))}
						</ul>

						<div className="flex items-center gap-5 ">
							<a href="#" target="_blank">
								<Linkedin className="h-5 w-5" />
							</a>
							<a href="#" target="_blank">
								<Facebook className="h-5 w-5" />
							</a>
							<a href="#" target="_blank">
								<TwitterIcon className="h-5 w-5" />
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
								<Input
									className="bg-transparent border-white placeholder:text-gray-400"
									type="email"
									placeholder="Enter your email"
								/>
								<Button className="bg-yellow-200 text-black hover:bg-yellow-400">
									Subscribe to news
								</Button>
							</form>
						</div>
					</div>
				</div>
				<Separator />
				<div className="py-8 flex flex-col-reverse sm:flex-row items-center gap-x-2 gap-y-5 px-6 xl:px-0">
					{/* Copyright */}
					<span className="">
						&copy; {new Date().getFullYear()}{" "}
						<a href="/" target="_blank">
							Positivus
						</a>
						. All rights reserved.
					</span>
					<a
						href="/"
						target="_blank"
						className="underline hover:no-underline ml-8"
					>
						Privacy Policy
					</a>
				</div>
			</div>
		</footer>
	);
};
