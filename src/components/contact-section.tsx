import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { TitleSection } from "./title-section";
import { IL_CONTACT } from "@/constants/images";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";

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
			className="pb-40 custom-container overflow-hidden"
			role="region"
			aria-label="Contact"
		>
			<TitleSection
				title="Contact Us"
				description="Connect with Us: Let's Discuss Your Digital Marketing Needs"
			/>
			<div className="bg-muted py-10 px-6 sm:px-14 rounded-4xl flex gap-8 lg:gap-12 relative">
				{/* Contact Information */}

				{/* Contact Form */}
				<aside className="w-full sm:w-[70%] relative z-10">
					<Form {...form}>
						<form
							onSubmit={form.handleSubmit(onSubmit)}
							className="space-y-6"
							role="form"
							aria-label="Contact form"
						>
							<RadioGroup className="flex" defaultValue="comfortable">
								<div className="flex items-center gap-3">
									<RadioGroupItem value="default" id="r1" />
									<Label htmlFor="r1">Say Hi</Label>
								</div>
								<div className="flex items-center gap-3">
									<RadioGroupItem value="comfortable" id="r2" />
									<Label htmlFor="r2">Get a Quote</Label>
								</div>
							</RadioGroup>
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
												className="bg-white border-black min-h-[100px] sm:min-h-[120px]"
												placeholder="Type your message..."
												{...field}
												aria-describedby="message-error"
											/>
										</FormControl>
										<FormMessage id="message-error" />
									</FormItem>
								)}
							/>
							<Button className="w-full" size={"lg"} type="submit">
								Send Message
							</Button>
						</form>
					</Form>
				</aside>

				<article className="absolute right-[-250px] w-[500px] z-0">
					<img src={IL_CONTACT} className="w-[90%]" />
				</article>
			</div>
		</section>
	);
};
