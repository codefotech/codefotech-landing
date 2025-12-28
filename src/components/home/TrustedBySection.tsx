import { useRef } from "react";
import Container from "../shared/Container";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const trustedCompanies = [
  {
    name: "CreativesBD",
    logo: "/Trusted/creativesbd.jpeg",
  },
  {
    name: "Soulynk",
    logo: "/Trusted/soulynk.png",
  },
  {
    name: "Digicampo",
    logo: "/Trusted/digicampo.png",
  },
  {
    name: "CreativesBD",
    logo: "/Trusted/creativesbd.jpeg",
  },
  {
    name: "EasyISP",
    logo: "/Trusted/easyisp.webp",
  },
];

const TrustedBySection = () => {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: false }));

  return (
    <section className="py-12 border-t border-border">
      <Container>
        <p className="text-muted-foreground text-sm font-medium text-center mb-8">
          Trusted by leading companies worldwide
        </p>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[plugin.current]}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {trustedCompanies.map((company, index) => (
              <CarouselItem
                key={index}
                className="pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                <div className="flex items-center justify-center p-4">
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="h-16 w-32 object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </Container>
    </section>
  );
};

export default TrustedBySection;
