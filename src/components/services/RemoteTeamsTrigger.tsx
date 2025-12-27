import Container from "@/components/shared/Container";
import { Clock, TrendingUp, Users, Settings } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Faster Time to Market",
    description:
      "Accelerate development cycles with dedicated engineering capacity.",
  },
  {
    icon: TrendingUp,
    title: "Cost-Efficient Scaling",
    description:
      "Expand your team without the overhead of local hiring and infrastructure.",
  },
  {
    icon: Users,
    title: "Dedicated Engineers",
    description:
      "Get skilled professionals who work exclusively on your projects.",
  },
  {
    icon: Settings,
    title: "Flexible Engagement",
    description:
      "Scale up or down based on project demands with predictable costs.",
  },
];

const RemoteTeamsTrigger = () => {
  return (
    <section
      id="offshore-packages"
      className="py-16 lg:py-20 border-b border-border"
    >
      <Container>
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Scale Faster with Dedicated Remote Teams
          </h2>
          <p className="text-muted-foreground text-lg">
            Extend your development capacity with experienced engineers who
            integrate seamlessly with your existing workflow.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-border bg-card"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <benefit.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default RemoteTeamsTrigger;
