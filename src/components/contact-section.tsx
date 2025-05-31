import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Locate, Mail, Phone } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const FormSchema = z.object({
	name: z
		.string()
		.min(1, { message: "Required" })
		.max(100, { message: "Name must be 100 characters or less" }),
	email: z.string().email("Email invalid").min(1, { message: "Required" }),
	message: z
		.string()
		.min(1, { message: "Required" })
		.max(1000, { message: "Message must be 1000 characters or less" }),
	terms: z
		.boolean()
		.refine((val) => val === true, { message: "You must accept the terms" }),
});

export const ContactSection = () => {
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			name: "",
			email: "",
			message: "",
			terms: false,
		},
	});

	function onSubmit(data: z.infer<typeof FormSchema>) {
		toast.success("Form submitted successfully!", {
			description: `Name: ${data.name}\nEmail: ${data.email}\nMessage: ${data.message}`,
		});
		form.reset();
	}

	return (
		<section
			className="py-12 sm:py-16 lg:py-20 bg-background"
			role="region"
			aria-label="Contact"
		>
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
					{/* Contact Information */}
					<article className="max-w-prose">
						{/* Tagline */}
						<p className="text-primary text-base sm:text-lg font-semibold uppercase tracking-wide">
							Tagline
						</p>
						{/* Main Heading */}
						<h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-foreground">
							Contact Us
						</h2>
						{/* Description */}
						<p className="mt-6 text-base sm:text-lg text-muted-foreground">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit
						</p>
						{/* Contact Details */}
						<address className="mt-10 space-y-4 not-italic">
							<div className="flex items-center gap-4">
								<Mail className="w-5 h-5 text-primary" aria-hidden="true" />
								<a
									href="mailto:joona@code.com"
									className="text-base text-muted-foreground hover:text-primary"
								>
									joona@code.com
								</a>
							</div>
							<div className="flex items-center gap-4">
								<Phone className="w-5 h-5 text-primary" aria-hidden="true" />
								<a
									href="tel:+15550000000"
									className="text-base text-muted-foreground hover:text-primary"
								>
									+1 (555) 000-0000
								</a>
							</div>
							<div className="flex items-center gap-4">
								<Locate className="w-5 h-5 text-primary" aria-hidden="true" />
								<span className="text-base text-muted-foreground">
									123 Sample St, Sydney NSW 2000 AU
								</span>
							</div>
						</address>
					</article>

					{/* Contact Form */}
					<aside className="w-full max-w-md lg:max-w-lg">
						<Form {...form}>
							<form
								onSubmit={form.handleSubmit(onSubmit)}
								className="space-y-6"
								role="form"
								aria-label="Contact form"
							>
								<FormField
									control={form.control}
									name="name"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Name</FormLabel>
											<FormControl>
												<Input {...field} aria-describedby="name-error" />
											</FormControl>
											<FormMessage id="name-error" />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="email"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Email</FormLabel>
											<FormControl>
												<Input
													type="email"
													{...field}
													aria-describedby="email-error"
												/>
											</FormControl>
											<FormMessage id="email-error" />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="message"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Message</FormLabel>
											<FormControl>
												<Textarea
													className="min-h-[100px] sm:min-h-[120px]"
													placeholder="Type your message..."
													{...field}
													aria-describedby="message-error"
												/>
											</FormControl>
											<FormMessage id="message-error" />
										</FormItem>
									)}
								/>
								<Button type="submit">Submit</Button>
							</form>
						</Form>
					</aside>
				</div>
			</div>
		</section>
	);
};
