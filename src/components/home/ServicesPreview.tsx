import { Link } from "react-router-dom";
import { services } from "@/data/data";
import Container from "../shared/Container";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

const ServicesPreview = () => {
  return (
    <section className="py-20 lg:py-28 border-t border-border">
      <Container>
        {/* Section Header - Left aligned */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What We Do
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Comprehensive software development services tailored for enterprise
            needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="group p-6 rounded-xl border border-border bg-card hover:border-primary/20 hover:shadow-soft-lg transition-all duration-200"
            >
              <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-5">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* View All Link and Offshore Button */}
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all duration-200"
          >
            View all services <ArrowRight className="h-4 w-4" />
          </Link>
          <Link to="/services#offshore-packages" viewTransition={true}>
            <Button variant="outline" className="gap-2">
              View Our Offshore Packages <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default ServicesPreview;
