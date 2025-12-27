import { Link } from "react-router-dom";
import Container from "../shared/Container";
import bannerHome from "@/assets/banner-home.png";

const Banner = () => {
  return (
    <section className="py-16 lg:py-24 overflow-hidden">
      <Container>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Text Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-foreground tracking-tight">
              We build scalable digital products for enterprises
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
              Helping fast-growing companies and enterprise organizations deliver technology solutions that drive real business outcomes.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center text-primary-foreground px-8 py-3.5 rounded-lg font-medium text-base transition-all duration-150 hover:opacity-90"
                style={{
                  background: "linear-gradient(to bottom, hsl(var(--primary)), hsl(var(--secondary)))",
                  boxShadow: "0 1px 3px 0 rgba(0,0,0,0.1)",
                }}
              >
                Talk to Our Experts
              </Link>

              <Link
                to="/services"
                className="inline-flex items-center justify-center bg-muted hover:bg-muted/80 text-foreground px-8 py-3.5 rounded-lg font-medium text-base transition-colors duration-150"
              >
                Explore Services
              </Link>
            </div>
          </div>

          {/* Right: Illustration */}
          <div className="hidden lg:flex justify-end">
            <div className="relative w-full max-w-lg">
              <img
                src={bannerHome}
                alt="Digital infrastructure and enterprise technology illustration"
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
