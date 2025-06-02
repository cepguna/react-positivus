import {
	LOGO_AMAZON,
	LOGO_DRIBBLE,
	LOGO_HUBSPOT,
	LOGO_NETFLIX,
	LOGO_NOTION,
	LOGO_ZOOM,
} from "@/constants/images";

const LOGOS = [
	LOGO_AMAZON,
	LOGO_DRIBBLE,
	LOGO_HUBSPOT,
	LOGO_NOTION,
	LOGO_NETFLIX,
	LOGO_ZOOM,
];

export const LogoSection = () => {
	return (
		<div className="custom-container pb-40">
			<div className="mt-14 flex flex-wrap items-center justify-center gap-14">
				{LOGOS.map((logo, i) => (
					<img src={logo} key={`logo-${i}`} alt={`LOGO-${i}`} />
				))}
			</div>
		</div>
	);
};
