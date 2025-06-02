import { LOGO_BLACK, LOGO_WHITE } from "@/constants/images";
import { cn } from "@/lib/utils";

export const Logo = ({ type = 'dark', className }: { type?: "light" | "dark", className?: string }) => {
	return (
		<img
			src={type === "dark" ? LOGO_BLACK : LOGO_WHITE}
			alt="logo"
			className={cn("w-[120px] h-auto", className)}
		/>
	);
};
