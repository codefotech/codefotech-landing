import { useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/shared/Container";
import PageBanner from "@/components/shared/PageBanner";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import bannerContact from "@/assets/banner-contact.png";
import { useLocation } from "react-router-dom";

const contactInfo = [
  {
    icon: "/contact/spain.svg",
    title: "Spain Office (Headquarter)",
    phone: "+240 555626447 (WhatsApp)",
    details: ["Calle Ejemplo 123", "Piso 4B", "29099 Málaga", "Spain"],
  },
  {
    icon: "/contact/bangladesh.svg",
    title: "Bangladesh Office",
    phone: "+8801961185367",
    details: [
      "62–63, Sana Kalyan Business Center",
      "(8th Floor)",
      "M–701/B, Motijheel B/A",
      "Dhaka–1000, Bangladesh",
    ],
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["info@codefotech.com"],
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Mon - Fri: 09:00 - 18:00 CET"],
  },
];

const Contact = () => {
  const location = useLocation();
  const packageName = (location.state as { packageName?: string })?.packageName;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });

  // Prefill subject if coming from a package selection
  useEffect(() => {
    if (packageName) {
      setFormData((prev) => ({
        ...prev,
        subject: `Discuss for ${packageName} package`,
      }));
    }
  }, [packageName]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description:
        "Thank you for reaching out. We'll get back to you within 24 hours.",
    });
    setFormData({
      name: "",
      email: "",
      company: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <PageBanner
          title="Let's Discuss Your Project"
          subtitle="Have a project in mind or looking to scale your team? Our experts are ready to help you find the right solution."
          image={bannerContact}
          imageAlt="Abstract communication and connection illustration"
        />

        {/* Contact Form & Info */}
        <section className="py-16 lg:py-24">
          <Container>
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="p-8 rounded-xl border border-border bg-card">
                  <h2 className="text-xl font-semibold text-foreground mb-6">
                    Talk to Our Experts
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-sm font-medium">
                          Full Name *
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
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@company.com"
                          required
                          className="bg-background border-border"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label
                          htmlFor="company"
                          className="text-sm font-medium"
                        >
                          Company
                        </Label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your Company"
                          className="bg-background border-border"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label
                          htmlFor="subject"
                          className="text-sm font-medium"
                        >
                          Subject *
                        </Label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="Project Inquiry"
                          required
                          className="bg-background border-border"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-sm font-medium">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project..."
                        required
                        rows={5}
                        className="bg-background border-border resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="inline-flex items-center justify-center text-primary-foreground px-8 py-3 rounded-lg font-medium text-base transition-all duration-150 hover:opacity-90"
                      style={{
                        background:
                          "linear-gradient(to bottom, hsl(var(--primary)), hsl(var(--secondary)))",
                      }}
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-xl border border-border bg-card"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        {typeof item.icon === "string" ? (
                          <img
                            src={item.icon}
                            alt={item.title}
                            className="h-6 w-6 object-contain"
                          />
                        ) : (
                          <item.icon className="h-5 w-5 text-primary" />
                        )}
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground mb-1 text-sm">
                          {item.title}
                        </h3>
                        {"phone" in item && (
                          <p className="text-muted-foreground text-sm font-medium mb-1">
                            {item.phone}
                          </p>
                        )}
                        {item.details.map((detail, idx) => (
                          <p
                            key={idx}
                            className="text-muted-foreground text-sm"
                          >
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
