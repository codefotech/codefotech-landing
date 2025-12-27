import { Link } from "react-router-dom";
import Container from "../shared/Container";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-16 lg:py-20 bg-muted/50 border-t border-border">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          {/* Left: Text Content */}
          <div className="max-w-xl">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Ready to Build or Scale Your Product?
            </h2>
            <p className="text-muted-foreground">
              Talk to our experts about software development, dedicated teams, and long-term partnerships.
            </p>
          </div>
          
          {/* Right: CTAs */}
          <div className="flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 text-primary-foreground px-6 py-3 rounded-lg font-medium text-sm transition-all duration-150 hover:opacity-90"
              style={{
                background: "linear-gradient(to bottom, hsl(var(--primary)), hsl(var(--secondary)))",
              }}
            >
              Talk to Our Experts
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center bg-background border border-border hover:bg-muted text-foreground px-6 py-3 rounded-lg font-medium text-sm transition-colors duration-150"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CTASection;
