import bannerServices from "@/assets/banner-services.png";
import CTASection from "@/components/home/CTASection";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import RemoteTeamsTrigger from "@/components/services/RemoteTeamsTrigger";
import Container from "@/components/shared/Container";
import PageBanner from "@/components/shared/PageBanner";
import { Button } from "@/components/ui/button";
import { offshorePackages, services } from "@/data/data";
import { ArrowRight, Check } from "lucide-react";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

// Service images mapping - using placeholder images for each service type
const serviceImages: Record<string, string> = {
  "web-mobile":
    "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80",
  "ai-solutions":
    "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
  ecommerce:
    "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
  lms: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80",
  erp: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  "ui-ux":
    "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
};

const Services = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [location]);

  // Map service IDs to product category IDs
  const productCategoryMap: Record<string, string> = {
    ecommerce: "ecommerce",
    lms: "lms",
    erp: "erp",
    healthcare: "healthcare",
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <PageBanner
          title="Software Services Built for Scale"
          subtitle="From product engineering to dedicated remote teams, we support businesses at every stage of growth with enterprise-grade solutions."
          image={bannerServices}
          imageAlt="Abstract service ecosystem illustration"
        />

        {/* Services Sections - New Design */}
        {services.map((service, serviceIndex) => {
          const productCategoryId = productCategoryMap[service.id];
          const hasProductLink = !!productCategoryId;
          const isEven = serviceIndex % 2 === 0;

          return (
            <section
              key={service.id}
              id={service.id}
              className={`py-16 lg:py-24 ${
                isEven ? "bg-muted/40" : "bg-background"
              }`}
            >
              <Container>
                <div
                  className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                    isEven ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Left Column - Content */}
                  <div
                    className={`${isEven ? "order-1" : "order-1 lg:order-2"}`}
                  >
                    {/* Section Title */}
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                      {service.title}
                    </h2>

                    {/* Subtitle/Tagline */}
                    <p className="text-lg text-primary font-medium mb-4">
                      {service.id === "web-mobile" &&
                        "Custom Web & Mobile App Development for Businesses"}
                      {service.id === "ai-solutions" &&
                        "Intelligent Solutions for Modern Enterprises"}
                      {service.id === "ecommerce" &&
                        "Complete E-commerce Solutions for Online Success"}
                      {service.id === "lms" &&
                        "Next-Generation Learning Management Systems"}
                      {service.id === "erp" &&
                        "Unified Business Management Solutions"}
                      {service.id === "ui-ux" &&
                        "User-Centered Design for Digital Products"}
                    </p>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed mb-8">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <div className="space-y-0 mb-8">
                      {service.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="group flex items-center justify-between py-4 border-b border-border/50 hover:border-primary/30 transition-colors cursor-pointer"
                        >
                          <div className="flex items-center gap-4">
                            <span className="text-muted-foreground/60 font-medium text-sm w-8">
                              {String(idx + 1).padStart(2, "0")}
                            </span>
                            <span className="text-foreground font-medium group-hover:text-primary transition-colors">
                              {feature}
                            </span>
                          </div>
                          <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    {hasProductLink ? (
                      <Link to={`/products?category=${productCategoryId}`}>
                        <Button className="rounded-full px-8 py-6 text-base font-medium">
                          See more
                        </Button>
                      </Link>
                    ) : (
                      <Link
                        to="/contact"
                        state={{
                          contactSubject: `Inquiry about ${service.title} service`,
                        }}
                      >
                        <Button className="rounded-full px-8 py-6 text-base font-medium">
                          See more
                        </Button>
                      </Link>
                    )}
                  </div>

                  {/* Right Column - Image */}
                  <div
                    className={`${isEven ? "order-2" : "order-2 lg:order-1"}`}
                  >
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                      <img
                        src={serviceImages[service.id]}
                        alt={service.title}
                        className="w-full h-[400px] lg:h-[500px] object-cover"
                      />
                      {/* Floating elements for visual interest */}
                      <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm rounded-full px-3 py-1.5 flex items-center gap-1.5 shadow-lg">
                        <span className="text-yellow-500">★</span>
                        <span className="text-sm font-semibold text-foreground">
                          4.9
                        </span>
                      </div>
                      <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm rounded-full px-3 py-1.5 flex items-center gap-1.5 shadow-lg">
                        <span className="text-yellow-500">★</span>
                        <span className="text-sm font-semibold text-foreground">
                          4.8
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Container>
            </section>
          );
        })}

        {/* Remote Teams Trigger Section */}
        <RemoteTeamsTrigger />

        {/* Offshore Packages */}
        <section className="py-16 lg:py-24 bg-muted/40 border-b border-border">
          <Container>
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Popular Remote Team Packages
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl">
                Choose the team structure that matches your business needs and
                scale.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {offshorePackages.map((pkg) => (
                <div
                  key={pkg.id}
                  className={`relative p-8 rounded-xl border bg-card ${
                    pkg.popular ? "border-primary" : "border-border"
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-3 left-6">
                      <span className="bg-primary text-primary-foreground px-3 py-1 rounded-md text-xs font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-foreground mb-1">
                      {pkg.name}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {pkg.teamSize}
                    </p>
                  </div>

                  <p className="text-2xl font-bold text-foreground mb-6">
                    {pkg.priceRange}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-sm text-muted-foreground"
                      >
                        <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    state={{
                      contactSubject: `Discuss for ${pkg.name} package`,
                    }}
                    className={`w-full inline-flex justify-center items-center gap-2 py-3 px-6 rounded-lg font-medium text-sm transition-colors ${
                      pkg.popular
                        ? "bg-primary text-primary-foreground hover:opacity-90"
                        : "bg-muted text-foreground hover:bg-muted/80"
                    }`}
                  >
                    Get Started <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* CTA */}
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
