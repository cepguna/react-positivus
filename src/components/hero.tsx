import { Button } from "@/components/ui/button";
import { IL_HERO } from "@/constants/images";

export const Hero = () => (
  <section className="custom-container min-h-[calc(100vh-80px)] flex items-center justify-center py-8 md:py-12">
    <div className="grid grid-cols-1 gap-6 items-center md:grid-cols-2 max-w-7xl mx-auto px-4 sm:px-6">
      <article className="flex flex-col gap-6 text-center md:text-left">
        <header className="flex flex-col gap-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tighter font-regular">
            Navigating the digital landscape for success
          </h1>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md mx-auto md:mx-0">
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </p>
        </header>
        <div className="flex flex-row justify-center md:justify-start gap-4">
          <Button size="lg" className="gap-4 h-12 px-6 text-base sm:text-lg">
            Book a Consultation
          </Button>
        </div>
      </article>
      <figure className="mt-6 md:mt-0">
        <img 
          src={IL_HERO} 
          alt="Digital marketing illustration" 
          className="w-full h-auto max-w-sm mx-auto md:max-w-none md:h-full object-cover"
        />
      </figure>
    </div>
  </section>
);
