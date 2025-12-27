import Container from "./Container";

interface PageBannerProps {
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
}

const PageBanner = ({ title, subtitle, image, imageAlt }: PageBannerProps) => {
  return (
    <section className="py-16 lg:py-20 bg-muted/30 border-b border-border overflow-hidden">
      <Container>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Text Content */}
          <div className="max-w-xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight leading-tight">
              {title}
            </h1>
            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
              {subtitle}
            </p>
          </div>
          
          {/* Right: Illustration */}
          <div className="hidden lg:flex justify-end">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl" />
              <img
                src={image}
                alt={imageAlt}
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PageBanner;
