import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/shared/Container";
import PageBanner from "@/components/shared/PageBanner";
import RemoteTeamsTrigger from "@/components/services/RemoteTeamsTrigger";
import CTASection from "@/components/home/CTASection";
import { services, offshorePackages } from "@/data/data";
import { Check, ArrowRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import bannerServices from "@/assets/banner-services.png";
import { useEffect } from "react";

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

        {/* Services Grid */}
        <section className="py-16 lg:py-24">
          <Container>
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                What We Do
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl">
                Comprehensive software development services tailored for
                enterprise organizations and growing businesses.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service) => {
                // Map service IDs to product category IDs
                const productCategoryMap: Record<string, string> = {
                  ecommerce: "ecommerce",
                  lms: "lms",
                  erp: "erp",
                  healthcare: "healthcare",
                };
                const productCategoryId = productCategoryMap[service.id];
                const hasProductLink = !!productCategoryId;

                const cardContent = (
                  <>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>

                    <div className="grid grid-cols-2 gap-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <Check className="h-4 w-4 text-primary flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {hasProductLink && (
                      <div className="flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all">
                        View Products <ArrowRight className="h-4 w-4" />
                      </div>
                    )}
                  </>
                );

                return hasProductLink ? (
                  <Link
                    key={service.id}
                    to={`/products?category=${productCategoryId}`}
                    className="group p-8 rounded-xl border border-border bg-card hover:border-primary/20 hover:shadow-lg transition-all"
                  >
                    {cardContent}
                  </Link>
                ) : (
                  <div
                    key={service.id}
                    className="group p-8 rounded-xl border border-border bg-card hover:border-primary/20 transition-colors"
                  >
                    {cardContent}
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

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
                    state={{ packageName: pkg.name }}
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
