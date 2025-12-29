import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import bannerCareer from "@/assets/banner-career.png";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Container from "@/components/shared/Container";
import PageBanner from "@/components/shared/PageBanner";
import careerService from "@/services/career.service";
import { JobVacancy, JobVacancyStatus } from "@/types/career.types";
import {
  Briefcase,
  Clock,
  Coffee,
  Globe,
  Heart,
  Loader2,
  MapPin,
  Users,
  Zap,
} from "lucide-react";

const perks = [
  { icon: Globe, title: "Remote-First", description: "Work from anywhere" },
  { icon: Clock, title: "Flexible Hours", description: "Work when productive" },
  {
    icon: Heart,
    title: "Health Benefits",
    description: "Comprehensive coverage",
  },
  { icon: Zap, title: "Growth", description: "Learning opportunities" },
  { icon: Users, title: "Great Team", description: "Supportive culture" },
  {
    icon: Coffee,
    title: "Work-Life Balance",
    description: "Respect your time",
  },
];

const Career = () => {
  const [jobs, setJobs] = useState<JobVacancy[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);
        const response = await careerService.getJobVacancies({
          status: JobVacancyStatus.OPEN,
          limit: 50,
        });
        setJobs(response.data.docs);
      } catch (err) {
        setError("Failed to load job vacancies. Please try again later.");
        console.error("Error fetching jobs:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <PageBanner
          title="Build Your Career With Us"
          subtitle="Join a team of engineers, designers, and problem-solvers who are passionate about building great software and growing together."
          image={bannerCareer}
          imageAlt="Professional career growth illustration"
        />

        {/* Perks */}
        <section className="py-12 bg-muted/40 border-b border-border">
          <Container>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {perks.map((perk, index) => (
                <div key={index} className="text-center">
                  <div className="w-10 h-10 rounded-lg bg-background border border-border flex items-center justify-center mx-auto mb-3">
                    <perk.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-medium text-foreground text-sm mb-1">
                    {perk.title}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {perk.description}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Open Positions */}
        <section className="py-16 lg:py-24">
          <Container>
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Open Positions
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl">
                Explore our current openings and find the right role for you.
              </p>
            </div>

            {loading ? (
              <div className="flex items-center justify-center py-12">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
                <span className="ml-3 text-muted-foreground">
                  Loading positions...
                </span>
              </div>
            ) : error ? (
              <div className="text-center py-12 px-6 rounded-xl border border-destructive/20 bg-destructive/5">
                <p className="text-destructive">{error}</p>
              </div>
            ) : jobs.length === 0 ? (
              <div className="text-center py-12 px-6 rounded-xl border border-border bg-card">
                <div className="max-w-2xl mx-auto">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    No Open Positions at the Moment
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    We don't have any active job openings right now, but we're
                    always on the lookout for talented individuals. If you're
                    interested in joining our team, feel free to send us your
                    resume along with the position you're interested in at{" "}
                    <a
                      href="mailto:careers@codefotech.com"
                      className="text-primary hover:underline font-medium"
                    >
                      careers@codefotech.com
                    </a>
                  </p>
                  <a
                    href="mailto:careers@codefotech.com?subject=General Application - Interested Position"
                    className="inline-flex items-center justify-center bg-primary text-primary-foreground px-6 py-2.5 rounded-lg font-medium text-sm transition-colors hover:opacity-90"
                  >
                    Send Your Resume
                  </a>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                {jobs.map((job) => (
                  <div
                    key={job._id}
                    className="p-6 rounded-xl border border-border bg-card hover:border-primary/20 transition-colors"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">
                          {job.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mt-1 line-clamp-2">
                          {job.description}
                        </p>
                      </div>
                      <Link
                        to={`/career/${job._id}`}
                        className="inline-flex items-center justify-center bg-primary text-primary-foreground px-6 py-2.5 rounded-lg font-medium text-sm transition-colors hover:opacity-90 whitespace-nowrap"
                      >
                        View & Apply
                      </Link>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-muted rounded-md text-xs text-muted-foreground">
                        <Briefcase className="h-3.5 w-3.5" />
                        {job.department}
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-muted rounded-md text-xs text-muted-foreground">
                        <MapPin className="h-3.5 w-3.5" />
                        {job.locationType}
                        {job.location && ` • ${job.location}`}
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-muted rounded-md text-xs text-muted-foreground">
                        <Clock className="h-3.5 w-3.5" />
                        {job.jobType}
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-primary/20 rounded-md text-xs text-primary font-medium">
                        {job.openPositions} Opening
                        {job.openPositions > 1 ? "s" : ""}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </Container>
        </section>

        {/* No Match CTA */}
        <section className="py-16 lg:py-24 bg-muted/40 border-t border-border">
          <Container>
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div className="max-w-xl">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  Don't See a Perfect Match?
                </h2>
                <p className="text-muted-foreground">
                  We're always interested in hearing from talented individuals.
                  Send us your resume.
                </p>
              </div>
              <a
                href="mailto:careers@codefotech.com?subject=General Application"
                className="inline-flex items-center justify-center text-primary-foreground px-8 py-3.5 rounded-lg font-medium text-base transition-all duration-150 hover:opacity-90 whitespace-nowrap"
                style={{
                  background:
                    "linear-gradient(to bottom, hsl(var(--primary)), hsl(var(--secondary)))",
                }}
              >
                Send Your Resume
              </a>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Career;
