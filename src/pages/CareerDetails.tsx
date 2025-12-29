import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/shared/Container";
import CTASection from "@/components/home/CTASection";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import careerService from "@/services/career.service";
import { JobVacancy, JobVacancyStatus } from "@/types/career.types";
import {
  ArrowLeft,
  Briefcase,
  Calendar,
  Clock,
  DollarSign,
  Loader2,
  MapPin,
  Plus,
  Upload,
  Users,
  X,
} from "lucide-react";

interface SocialLink {
  platform: string;
  url: string;
}

const CareerDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { toast } = useToast();

  // Job state
  const [job, setJob] = useState<JobVacancy | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    currentCompany: "",
    currentJobRole: "",
    coverLetter: "",
  });
  const [socialLinks, setSocialLinks] = useState<SocialLink[]>([]);
  const [newSocialPlatform, setNewSocialPlatform] = useState("");
  const [newSocialUrl, setNewSocialUrl] = useState("");
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [submitting, setSubmitting] = useState(false);

  // Fetch job vacancy
  useEffect(() => {
    const fetchJob = async () => {
      if (!id) return;

      try {
        setLoading(true);
        setError(null);
        const response = await careerService.getJobVacancyById(id);
        setJob(response.data);
      } catch (err: any) {
        const message =
          err.response?.data?.message || "Failed to load job details.";
        setError(message);
        console.error("Error fetching job:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchJob();
  }, [id]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      // Validate file size (5MB max)
      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: "File too large",
          description: "Please upload a file smaller than 5MB.",
          variant: "destructive",
        });
        return;
      }
      setResumeFile(file);
    }
  };

  const addSocialLink = () => {
    if (newSocialPlatform.trim() && newSocialUrl.trim()) {
      setSocialLinks((prev) => [
        ...prev,
        { platform: newSocialPlatform.trim(), url: newSocialUrl.trim() },
      ]);
      setNewSocialPlatform("");
      setNewSocialUrl("");
    }
  };

  const removeSocialLink = (index: number) => {
    setSocialLinks((prev) => prev.filter((_, i) => i !== index));
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!job || !id) return;

    // Validation
    if (!formData.name.trim()) {
      toast({
        title: "Name required",
        description: "Please enter your full name.",
        variant: "destructive",
      });
      return;
    }

    if (!formData.email.trim()) {
      toast({
        title: "Email required",
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return;
    }

    if (!formData.phone.trim()) {
      toast({
        title: "Phone required",
        description: "Please enter your phone number.",
        variant: "destructive",
      });
      return;
    }

    if (!resumeFile) {
      toast({
        title: "Resume required",
        description: "Please upload your resume.",
        variant: "destructive",
      });
      return;
    }

    try {
      setSubmitting(true);

      // Convert social links array to object
      const socialObj: Record<string, string> = {};
      socialLinks.forEach((link) => {
        socialObj[link.platform] = link.url;
      });

      await careerService.applyToJob({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        currentCompany: formData.currentCompany || undefined,
        currentJobRole: formData.currentJobRole || undefined,
        coverLetter: formData.coverLetter || undefined,
        social: Object.keys(socialObj).length > 0 ? socialObj : undefined,
        vacancyId: id,
        resume: resumeFile,
      });

      toast({
        title: "Application submitted!",
        description:
          "Thank you for applying. We'll review your application and get back to you soon.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        currentCompany: "",
        currentJobRole: "",
        coverLetter: "",
      });
      setSocialLinks([]);
      setResumeFile(null);
    } catch (err: any) {
      const message =
        err.response?.data?.message ||
        "Failed to submit application. Please try again.";
      toast({
        title: "Submission failed",
        description: message,
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="flex items-center gap-3">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            <span className="text-muted-foreground">Loading job details...</span>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Error or not found state
  if (error || !job) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1">
          <section className="py-16 lg:py-24">
            <Container>
              <div className="text-center py-12 px-6 rounded-xl border border-border bg-card max-w-lg mx-auto">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {error || "Job Not Found"}
                </h3>
                <p className="text-muted-foreground mb-6">
                  The job posting you're looking for doesn't exist or has been
                  removed.
                </p>
                <Link
                  to="/career"
                  className="inline-flex items-center justify-center bg-primary text-primary-foreground px-6 py-2.5 rounded-lg font-medium text-sm transition-colors hover:opacity-90"
                >
                  Back to Careers
                </Link>
              </div>
            </Container>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 lg:py-16 bg-muted/30 border-b border-border">
          <Container>
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
              <Link to="/" className="hover:text-foreground transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link
                to="/career"
                className="hover:text-foreground transition-colors"
              >
                Careers
              </Link>
              <span>/</span>
              <span className="text-foreground truncate max-w-[200px]">
                {job.title}
              </span>
            </nav>

            <div className="max-w-4xl">
              {/* Status Badge */}
              <div className="mb-4 flex items-center gap-3">
                <Badge
                  variant={
                    job.status === JobVacancyStatus.OPEN
                      ? "default"
                      : "secondary"
                  }
                >
                  {job.status === JobVacancyStatus.OPEN
                    ? "Open Position"
                    : "Closed"}
                </Badge>
                <span className="text-sm text-muted-foreground">
                  {job.openPositions} position
                  {job.openPositions > 1 ? "s" : ""} available
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                {job.title}
              </h1>

              {/* Job Meta Info */}
              <div className="flex flex-wrap gap-4 mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-background border border-border rounded-lg text-sm text-muted-foreground">
                  <Briefcase className="h-4 w-4 text-primary" />
                  {job.department}
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-background border border-border rounded-lg text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 text-primary" />
                  {job.locationType}
                  {job.location && ` • ${job.location}`}
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-background border border-border rounded-lg text-sm text-muted-foreground">
                  <Clock className="h-4 w-4 text-primary" />
                  {job.jobType}
                </span>
              </div>

              {/* Salary & Deadline */}
              <div className="flex flex-wrap gap-4">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-lg text-sm font-medium text-primary">
                  <DollarSign className="h-4 w-4" />
                  {job.salaryCurrency} {job.salary}
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-background border border-border rounded-lg text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4 text-primary" />
                  Apply by {formatDate(job.deadline)}
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-background border border-border rounded-lg text-sm text-muted-foreground">
                  <Users className="h-4 w-4 text-primary" />
                  {job.openPositions} Opening
                  {job.openPositions > 1 ? "s" : ""}
                </span>
              </div>
            </div>
          </Container>
        </section>

        {/* Job Details Content */}
        <section className="py-12 lg:py-16">
          <Container>
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-10">
                {/* Description */}
                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-4">
                    About This Role
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {job.description}
                  </p>
                </div>

                {/* Skills */}
                {job.skills.length > 0 && (
                  <div>
                    <h2 className="text-xl font-semibold text-foreground mb-4">
                      Required Skills
                    </h2>
                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1.5 bg-muted text-muted-foreground text-sm rounded-md"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Requirements */}
                {job.requirements.length > 0 && (
                  <div>
                    <h2 className="text-xl font-semibold text-foreground mb-4">
                      Requirements
                    </h2>
                    <ul className="space-y-3">
                      {job.requirements.map((req, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-3 text-muted-foreground"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Key Responsibilities */}
                {job.keyResponsibilities.length > 0 && (
                  <div>
                    <h2 className="text-xl font-semibold text-foreground mb-4">
                      Key Responsibilities
                    </h2>
                    <ul className="space-y-3">
                      {job.keyResponsibilities.map((resp, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-3 text-muted-foreground"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* What We Offer */}
                {job.whatWeOffer.length > 0 && (
                  <div>
                    <h2 className="text-xl font-semibold text-foreground mb-4">
                      What We Offer
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {job.whatWeOffer.map((offer, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 border border-border"
                        >
                          <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">
                            {offer}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Sidebar - Quick Info */}
              <div className="lg:col-span-1">
                <div className="sticky top-8 space-y-6">
                  <div className="p-6 rounded-xl border border-border bg-card">
                    <h3 className="font-semibold text-foreground mb-4">
                      Job Summary
                    </h3>
                    <div className="space-y-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">
                          Department
                        </span>
                        <span className="text-foreground font-medium">
                          {job.department}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Job Type</span>
                        <span className="text-foreground font-medium">
                          {job.jobType}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">
                          Location Type
                        </span>
                        <span className="text-foreground font-medium">
                          {job.locationType}
                        </span>
                      </div>
                      {job.location && (
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">
                            Location
                          </span>
                          <span className="text-foreground font-medium">
                            {job.location}
                          </span>
                        </div>
                      )}
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Salary</span>
                        <span className="text-foreground font-medium">
                          {job.salaryCurrency} {job.salary}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Deadline</span>
                        <span className="text-foreground font-medium">
                          {formatDate(job.deadline)}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Posted</span>
                        <span className="text-foreground font-medium">
                          {formatDate(job.createdAt)}
                        </span>
                      </div>
                    </div>
                  </div>

                  <Link
                    to="/career"
                    className="group flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Back to All Positions
                  </Link>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Application Form Section */}
        {job.status === JobVacancyStatus.OPEN && (
          <section className="py-16 lg:py-24 bg-muted/40 border-y border-border">
            <Container>
              <div className="max-w-3xl mx-auto">
                <div className="text-center mb-10">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    Apply for This Position
                  </h2>
                  <p className="text-muted-foreground text-lg">
                    Ready to join our team? Fill out the form below and we'll get
                    back to you soon.
                  </p>
                </div>

                <div className="p-8 rounded-xl border border-border bg-card">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name & Email */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-sm font-medium">
                          Full Name <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          required
                          className="bg-background border-border"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-medium">
                          Email Address{" "}
                          <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          required
                          className="bg-background border-border"
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm font-medium">
                        Phone Number <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 123-4567"
                        required
                        className="bg-background border-border"
                      />
                    </div>

                    {/* Current Company & Role */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label
                          htmlFor="currentCompany"
                          className="text-sm font-medium"
                        >
                          Current Company{" "}
                          <span className="text-muted-foreground">
                            (Optional)
                          </span>
                        </Label>
                        <Input
                          id="currentCompany"
                          name="currentCompany"
                          value={formData.currentCompany}
                          onChange={handleChange}
                          placeholder="Your current company"
                          className="bg-background border-border"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label
                          htmlFor="currentJobRole"
                          className="text-sm font-medium"
                        >
                          Current Job Role{" "}
                          <span className="text-muted-foreground">
                            (Optional)
                          </span>
                        </Label>
                        <Input
                          id="currentJobRole"
                          name="currentJobRole"
                          value={formData.currentJobRole}
                          onChange={handleChange}
                          placeholder="Your current role"
                          className="bg-background border-border"
                        />
                      </div>
                    </div>

                    {/* Social Links */}
                    <div className="space-y-3">
                      <Label className="text-sm font-medium">
                        Social Links{" "}
                        <span className="text-muted-foreground">(Optional)</span>
                      </Label>
                      <p className="text-xs text-muted-foreground">
                        Add links to your LinkedIn, GitHub, Portfolio, etc.
                      </p>

                      {/* Existing Social Links */}
                      {socialLinks.length > 0 && (
                        <div className="space-y-2">
                          {socialLinks.map((link, index) => (
                            <div
                              key={index}
                              className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg"
                            >
                              <span className="text-sm font-medium text-foreground min-w-[80px]">
                                {link.platform}
                              </span>
                              <span className="text-sm text-muted-foreground flex-1 truncate">
                                {link.url}
                              </span>
                              <button
                                type="button"
                                onClick={() => removeSocialLink(index)}
                                className="p-1 hover:bg-background rounded transition-colors"
                              >
                                <X className="h-4 w-4 text-muted-foreground" />
                              </button>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Add New Social Link */}
                      <div className="flex gap-2">
                        <Input
                          value={newSocialPlatform}
                          onChange={(e) => setNewSocialPlatform(e.target.value)}
                          placeholder="Platform (e.g., LinkedIn)"
                          className="bg-background border-border w-1/3"
                        />
                        <Input
                          value={newSocialUrl}
                          onChange={(e) => setNewSocialUrl(e.target.value)}
                          placeholder="URL"
                          className="bg-background border-border flex-1"
                        />
                        <button
                          type="button"
                          onClick={addSocialLink}
                          className="px-3 py-2 bg-muted hover:bg-muted/80 border border-border rounded-md transition-colors"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                    </div>

                    {/* Cover Letter */}
                    <div className="space-y-2">
                      <Label
                        htmlFor="coverLetter"
                        className="text-sm font-medium"
                      >
                        Cover Letter{" "}
                        <span className="text-muted-foreground">(Optional)</span>
                      </Label>
                      <Textarea
                        id="coverLetter"
                        name="coverLetter"
                        value={formData.coverLetter}
                        onChange={handleChange}
                        placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                        rows={5}
                        className="bg-background border-border resize-none"
                      />
                    </div>

                    {/* Resume Upload */}
                    <div className="space-y-2">
                      <Label className="text-sm font-medium">
                        Resume <span className="text-destructive">*</span>
                      </Label>
                      <div className="relative">
                        <input
                          type="file"
                          id="resume"
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileChange}
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        />
                        <div className="flex items-center justify-center gap-3 p-6 border-2 border-dashed border-border rounded-lg bg-background hover:border-primary/50 transition-colors">
                          <Upload className="h-5 w-5 text-muted-foreground" />
                          <div className="text-center">
                            {resumeFile ? (
                              <p className="text-sm text-foreground font-medium">
                                {resumeFile.name}
                              </p>
                            ) : (
                              <>
                                <p className="text-sm text-foreground font-medium">
                                  Click to upload or drag and drop
                                </p>
                                <p className="text-xs text-muted-foreground mt-1">
                                  PDF, DOC, or DOCX (Max 5MB)
                                </p>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full inline-flex items-center justify-center text-primary-foreground px-8 py-3.5 rounded-lg font-medium text-base transition-all duration-150 hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
                      style={{
                        background:
                          "linear-gradient(to bottom, hsl(var(--primary)), hsl(var(--secondary)))",
                      }}
                    >
                      {submitting ? (
                        <>
                          <Loader2 className="h-5 w-5 animate-spin mr-2" />
                          Submitting...
                        </>
                      ) : (
                        "Submit Application"
                      )}
                    </button>

                    <p className="text-xs text-muted-foreground text-center">
                      By submitting this application, you agree to our privacy
                      policy and terms of service.
                    </p>
                  </form>
                </div>
              </div>
            </Container>
          </section>
        )}

        {/* CTA */}
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default CareerDetails;
