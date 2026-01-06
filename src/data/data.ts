import {
  Brain,
  Building2,
  Globe,
  GraduationCap,
  Palette,
  ShoppingCart,
} from "lucide-react";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: typeof Globe;
  features: string[];
}

export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  category: string;
}

export interface OffshorePackage {
  id: string;
  name: string;
  teamSize: string;
  priceRange: string;
  features: string[];
  popular?: boolean;
}
// Job Vacancy Status Enum
export enum JobVacancyStatus {
  OPEN = "open",
  CLOSED = "closed",
}
export interface Job {
  _id: string;
  title: string;
  department: string;
  description: string;
  skills: string[];
  requirements: string[];
  keyResponsibilities: string[];
  whatWeOffer: string[];
  openPositions: number;
  status: JobVacancyStatus;
  createdAt: Date;
  updatedAt: Date;

  salary: string;
  salaryCurrency: string;
  deadline: Date;
  jobType: string;
  location?: string;
  locationType: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  category: string;
  tags: string[];
  publishedAt: string;
  image: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bgColor?: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "MD Seam Uddin",
    role: "Founder & CEO",
    image: "/team/seam_bhai.jpg",
  },
  {
    id: "2",
    name: "MD Salman Farshi",
    role: "Full Stack Developer",
    image: "/team/salman.jpg",
  },
  {
    id: "3",
    name: "Khadiza Akter",
    role: "Business Development Executive",
    image: "/team/khadiza.png",
  },
  {
    id: "73",
    name: "K M Sadidur Rahman",
    role: "Business Development Executive",
    image: "/team/sadidur.png",
  },
  {
    id: "4",
    name: "Khaled Mosaraf",
    role: "Market Research & Strategy Advisor",
    image: "/team/khaled.png",
  },
  {
    id: "33",
    name: "Md. Shahoraiar Hossain",
    role: "Software Developer",
    image: "/team/shahoraiar.png",
  },
  {
    id: "43",
    name: "Mainur Rahaman",
    role: "Software Developer",
    image: "/team/mainur.png",
  },
  {
    id: "5",
    name: "MD Sumon",
    role: "Frontend & Wordpress Developer",
    image: "/team/sumon.png",
  },
  {
    id: "6",
    name: "MD Nayem Mir",
    role: "UX/UI Designer",
    image: "/team/nayem.png",
  },
];

export const services: Service[] = [
  {
    id: "web-mobile",
    title: "Web & Mobile App Development",
    description:
      "Build powerful, scalable web and mobile applications tailored to your business needs. From responsive websites to native mobile apps, we deliver solutions that drive engagement.",
    icon: Globe,
    features: [
      "Custom Web Applications",
      "iOS & Android Mobile Apps",
      "Progressive Web Apps (PWA)",
      "Cross-platform Development",
      "API Development & Integration",
      "Maintenance & Support",
    ],
  },
  {
    id: "ai-solutions",
    title: "AI-Powered Solutions",
    description:
      "Leverage the power of artificial intelligence to automate processes, gain insights, and create intelligent applications that transform your business operations.",
    icon: Brain,
    features: [
      "Machine Learning Models",
      "Natural Language Processing",
      "Computer Vision Solutions",
      "Predictive Analytics",
      "Chatbots & Virtual Assistants",
      "AI Integration Services",
    ],
  },
  {
    id: "ecommerce",
    title: "E-commerce Development",
    description:
      "Create seamless online shopping experiences with our comprehensive e-commerce solutions. From storefront to checkout, we build platforms that convert visitors into customers.",
    icon: ShoppingCart,
    features: [
      "Custom E-commerce Platforms",
      "Shopify & WooCommerce Solutions",
      "Payment Gateway Integration",
      "Inventory Management",
      "Multi-vendor Marketplaces",
      "Mobile Commerce Apps",
    ],
  },
  {
    id: "lms",
    title: "LMS Development",
    description:
      "Transform education and training with our Learning Management System solutions. Create engaging online learning experiences with powerful content management and tracking.",
    icon: GraduationCap,
    features: [
      "Custom LMS Platforms",
      "Course Management",
      "Student Progress Tracking",
      "Interactive Content Tools",
      "Certification & Assessment",
      "Mobile Learning Apps",
    ],
  },
  {
    id: "erp",
    title: "ERP Development",
    description:
      "Streamline your business operations with custom Enterprise Resource Planning solutions. Integrate all aspects of your business into one unified system.",
    icon: Building2,
    features: [
      "Custom ERP Solutions",
      "Finance & Accounting Modules",
      "HR & Payroll Management",
      "Supply Chain Management",
      "CRM Integration",
      "Business Intelligence & Reporting",
    ],
  },
  {
    id: "ui-ux",
    title: "UI & UX Design",
    description:
      "Create stunning, user-centered designs that captivate your audience. Our design team crafts intuitive interfaces that enhance user experience and drive conversions.",
    icon: Palette,
    features: [
      "User Research & Analysis",
      "Wireframing & Prototyping",
      "Visual Design & Branding",
      "Interaction Design",
      "Usability Testing",
      "Design System Creation",
    ],
  },
];

export const products: Product[] = [
  {
    id: "marketplace-hub",
    name: "MarketPlace Hub",
    tagline: "Multi-Vendor Marketplace Platform",
    description:
      "Build and manage thriving online marketplaces where multiple vendors can sell their products. Connect buyers and sellers with powerful tools for seamless transactions.",
    features: [
      "Vendor Management System",
      "Commission & Revenue Sharing",
      "Product Catalog Management",
      "Order & Fulfillment Tracking",
      "Vendor Analytics Dashboard",
      "Dispute Resolution System",
    ],
    category: "Marketplace",
  },
  {
    id: "retail-pos",
    name: "RetailPOS Pro",
    tagline: "Smart Point of Sale System",
    description:
      "Modern POS solution designed for retail businesses. Process transactions quickly, manage inventory in real-time, and gain insights into your sales performance.",
    features: [
      "Fast Transaction Processing",
      "Inventory Management",
      "Customer Management & Loyalty",
      "Sales Reports & Analytics",
      "Multi-location Support",
      "Offline Mode Capability",
    ],
    category: "POS",
  },
  {
    id: "edulearn-lms",
    name: "EduLearn LMS",
    tagline: "Next-Gen Learning Platform",
    description:
      "A powerful learning management system that makes online education engaging and effective. Perfect for schools, universities, and corporate training.",
    features: [
      "Interactive Course Builder",
      "Live Virtual Classrooms",
      "Assessment & Quizzes",
      "Progress Analytics",
      "Certificate Generation",
      "Mobile Learning App",
    ],
    category: "LMS",
  },
  {
    id: "commerce-hub",
    name: "CommerceHub",
    tagline: "Complete E-commerce Solution",
    description:
      "An all-in-one e-commerce platform that empowers businesses to sell online with ease. From inventory to checkout, everything you need in one place.",
    features: [
      "Multi-channel Selling",
      "Inventory Management",
      "Payment Processing",
      "Shipping Integration",
      "Customer Analytics",
      "Marketing Tools",
    ],
    category: "E-commerce",
  },
  {
    id: "enterprise-erp",
    name: "Enterprise ERP",
    tagline: "Unified Business Management",
    description:
      "Comprehensive ERP solution that integrates all core business processes. Streamline operations, improve efficiency, and gain complete visibility across your organization.",
    features: [
      "Finance & Accounting",
      "Supply Chain Management",
      "HR & Payroll",
      "CRM Integration",
      "Manufacturing & Production",
      "Business Intelligence & Reporting",
    ],
    category: "ERP",
  },
  {
    id: "cloudapp-saas",
    name: "CloudApp SaaS",
    tagline: "Software as a Service Platform",
    description:
      "Launch your SaaS business with our ready-to-deploy platform. Multi-tenant architecture, subscription management, and everything you need to scale your software business.",
    features: [
      "Multi-tenant Architecture",
      "Subscription Management",
      "User & Role Management",
      "API & Webhook Support",
      "Usage Analytics",
      "Automated Billing",
    ],
    category: "SaaS",
  },
];

export const offshorePackages: OffshorePackage[] = [
  {
    id: "starter",
    name: "Starter Team",
    teamSize: "2-3 Developers",
    priceRange: "From $4,000/month",
    features: [
      "Dedicated Development Team",
      "Daily Standups & Updates",
      "Project Manager Included",
      "Quality Assurance",
      "Flexible Working Hours",
      "Monthly Progress Reports",
    ],
  },
  {
    id: "growth",
    name: "Growth Team",
    teamSize: "4-6 Developers",
    priceRange: "From $7,500/month",
    popular: true,
    features: [
      "Everything in Starter",
      "Senior Developer Lead",
      "UI/UX Designer Included",
      "DevOps Support",
      "Code Reviews & Best Practices",
      "Weekly Strategy Calls",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise Team",
    teamSize: "7-12+ Developers",
    priceRange: "From $14,000/month",
    features: [
      "Everything in Growth",
      "Technical Architect",
      "Multiple Tech Stacks",
      "24/7 Support Coverage",
      "Dedicated QA Team",
      "Custom SLA Agreement",
    ],
  },
];

export const jobs: Job[] = [];

export const companyStats = [
  { label: "Projects Delivered", value: "50+" },
  { label: "Happy Clients", value: "20+" },
  { label: "Team Members", value: "22+" },
  { label: "Years of Experience", value: "5+" },
];

export const testimonials = [
  {
    id: "1",
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    content:
      "CodeFoTech transformed our business with their innovative solutions. Their team's expertise and dedication exceeded our expectations.",
    avatar: "SJ",
  },
  {
    id: "2",
    name: "Michael Chen",
    role: "CTO, GlobalRetail",
    content:
      "The e-commerce platform they built for us increased our sales by 300%. Highly recommend their services!",
    avatar: "MC",
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    role: "Director, EduForward",
    content:
      "Our LMS platform has revolutionized how we deliver education. The CodeFoTech team truly understands educational technology.",
    avatar: "ER",
  },
];
