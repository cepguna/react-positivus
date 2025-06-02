type Props = {
	title: string;
  description: string
};

export const TitleSection = ({ title, description }: Props) => {
	return (
		<div className="flex items-start md:items-center flex-col md:flex-row gap-4 mb-8 md:mb-16">
			<h5 className="section-title inline">{title}</h5>
			<p className="inline-block w-full md:w-[70%] lg:w-[50%] section-description">{description}</p>
		</div>
	);
};
