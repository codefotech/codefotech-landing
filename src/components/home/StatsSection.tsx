import { companyStats } from "@/data/data";
import Container from "../shared/Container";

const StatsSection = () => {
  return (
    <section className="py-16 lg:py-20 bg-muted/40 border-y border-border">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {companyStats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                {stat.value}
              </p>
              <p className="text-muted-foreground font-medium text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default StatsSection;
