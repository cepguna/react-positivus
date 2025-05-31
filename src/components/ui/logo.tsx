import { LOGO_BLACK, LOGO_WHITE } from "@/constants/images";

export const Logo = ({ type = 'dark' }: { type?: "light" | "dark" }) => {
	return (
		<img
			src={type === "dark" ? LOGO_BLACK : LOGO_WHITE}
			alt="logo"
			className="w-[120px] h-auto"
		/>
	);
};
