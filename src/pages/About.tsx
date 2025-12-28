import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/shared/Container";
import PageBanner from "@/components/shared/PageBanner";
import { companyStats, teamMembers } from "@/data/data";
import { Target, Eye, Lightbulb, Heart, Award, Users } from "lucide-react";
import bannerAbout from "@/assets/banner-about.png";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We embrace new technologies and creative solutions to solve complex problems.",
  },
  {
    icon: Heart,
    title: "Client-Centric",
    description:
      "Your success is our success. We prioritize your needs in everything we do.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We deliver high-quality solutions that exceed expectations every time.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "We work as partners with our clients to achieve shared goals together.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <PageBanner
          title="Building Technology That Powers Business Growth"
          subtitle="Learn about our people, process, and commitment to delivering enterprise-grade software solutions for organizations worldwide."
          image={bannerAbout}
          imageAlt="Corporate team collaboration illustration"
        />

        {/* Mission & Vision */}
        <section className="py-16 lg:py-24">
          <Container>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 rounded-xl border border-border bg-card">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  Our Mission
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  To empower businesses with reliable, scalable software
                  solutions that drive measurable outcomes. We focus on
                  long-term partnerships and sustainable technology choices.
                </p>
              </div>

              <div className="p-8 rounded-xl border border-border bg-card">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  Our Vision
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  To be a trusted technology partner for enterprises globally,
                  recognized for our technical excellence, reliability, and
                  commitment to client success.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Company Stats */}
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

        {/* Our Values */}
        <section className="py-16 lg:py-24">
          <Container>
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Core Values
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl">
                The principles that guide how we work and deliver for our
                clients.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl border border-border bg-card"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Leadership Team */}
        <section className="py-16 lg:py-24 bg-muted/40 border-t border-border">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Leadership Team
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                With years of combined experience, we've got a well-seasoned
                team at the helm.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member) => (
                <div key={member.id} className="group">
                  <div
                    className="relative aspect-[3/4] rounded-xl overflow-hidden mb-4"
                    style={{
                      backgroundColor: member?.bgColor || "transparent",
                    }}
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {member.name}
                  </h3>
                  <p className="text-muted-foreground text-sm uppercase tracking-wide">
                    {member.role}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
