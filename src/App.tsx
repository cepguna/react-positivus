import { CaseStudioSection } from "./components/case-studie-section";
import { ContactSection } from "./components/contact-section";
import { CTASection } from "./components/cta-section";
import { Footer } from "./components/footer";
import { Hero } from "./components/hero";
import { LogoSection } from "./components/logo-section";
import { Navbar } from "./components/navbar";
import { ServicesSection } from "./components/services-section";
import { TeamSection } from "./components/team-section";
import { TestimonialSection } from "./components/testimonial-section";
import { WorkingProcessSection } from "./components/working-process-section";

function App() {
	return (
		<>
			<Navbar />
			<Hero />
			<LogoSection />
			<ServicesSection />
			<CTASection />
			<CaseStudioSection />
			<WorkingProcessSection />
			<TeamSection />
			<TestimonialSection />
			<ContactSection />
			<Footer />
		</>
	);
}

export default App;
