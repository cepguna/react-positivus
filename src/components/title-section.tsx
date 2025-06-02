type Props = {
	title: string;
  description: string
};

export const TitleSection = ({ title, description }: Props) => {
	return (
		<div className="flex items-center gap-4 mb-16">
			<h5 className="section-title inline">{title}</h5>
			<p className="inline-block w-[50%] section-description">{description}</p>
		</div>
	);
};
