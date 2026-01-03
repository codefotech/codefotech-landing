import {
  ShoppingCart,
  Building2,
  GraduationCap,
  Heart,
  Store,
  Laptop,
  UtensilsCrossed,
  Users,
  ClipboardList,
  UserCog,
  Package,
  School,
  BookOpen,
  Video,
  Hospital,
  Stethoscope,
  Pill,
  type LucideIcon,
} from "lucide-react";

// Type Definitions
export interface SoftwareProduct {
  id: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  image: string;
  highlighted?: boolean;
}

export interface ProductSubcategory {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  products: SoftwareProduct[];
}

export interface ProductCategory {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  subcategories: ProductSubcategory[];
}

// Products Data
export const productCategories: ProductCategory[] = [
  {
    id: "ecommerce",
    name: "E-commerce Software",
    description: "Complete e-commerce solutions for various retail sectors",
    icon: ShoppingCart,
    subcategories: [
      {
        id: "clothing-ecommerce",
        name: "Clothing & Fashion",
        description:
          "E-commerce solutions tailored for fashion and apparel businesses",
        icon: Store,
        products: [
          {
            id: "fashion-hub",
            name: "FashionHub Pro",
            tagline: "Complete Fashion E-commerce Platform",
            description:
              "A comprehensive e-commerce solution designed specifically for clothing and fashion retailers. Features virtual try-on, size recommendations, and seasonal collection management.",
            image:
              "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
            features: [
              "Virtual Try-On Technology",
              "AI-Powered Size Recommendations",
              "Collection & Season Management",
              "Lookbook & Style Guides",
              "Multi-brand Support",
              "Influencer Integration",
            ],
            highlighted: true,
          },
          {
            id: "boutique-cart",
            name: "BoutiqueCart",
            tagline: "Elegant Boutique Store Solution",
            description:
              "Perfect for small to medium boutiques looking to establish a strong online presence with premium design templates and personalized shopping experiences.",
            image:
              "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
            features: [
              "Premium Design Templates",
              "Personal Stylist Chat",
              "Customer Wishlist",
              "Gift Registry",
              "Loyalty Points System",
              "Social Shopping Features",
            ],
          },
          {
            id: "apparel-connect",
            name: "ApparelConnect",
            tagline: "B2B Fashion Wholesale Platform",
            description:
              "Streamline your wholesale fashion business with bulk ordering, dealer management, and trade show integration features.",
            image:
              "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
            features: [
              "Bulk Order Management",
              "Dealer Price Tiers",
              "Trade Show Integration",
              "Sample Request System",
              "Territory Management",
              "Invoice & Payment Terms",
            ],
          },
        ],
      },
      {
        id: "electronics-ecommerce",
        name: "Electronics & Gadgets",
        description:
          "Feature-rich platforms for electronics and technology retailers",
        icon: Laptop,
        products: [
          {
            id: "tech-mart",
            name: "TechMart Plus",
            tagline: "Advanced Electronics Marketplace",
            description:
              "Built for electronics retailers with detailed product specifications, comparison tools, and tech-focused shopping experiences.",
            image:
              "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=600&h=400&fit=crop",
            features: [
              "Product Specification Engine",
              "Comparison Tool",
              "Compatibility Checker",
              "Tech Reviews Integration",
              "Warranty Management",
              "Trade-in Program Support",
            ],
            highlighted: true,
          },
          {
            id: "gadget-store",
            name: "GadgetStore Pro",
            tagline: "Consumer Electronics Platform",
            description:
              "User-friendly platform for consumer electronics with focus on product discovery, reviews, and expert recommendations.",
            image:
              "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop",
            features: [
              "Expert Reviews Section",
              "Video Demonstrations",
              "Product Q&A System",
              "Bundle Deals Engine",
              "Pre-order Management",
              "Stock Alerts",
            ],
          },
        ],
      },
      {
        id: "food-ecommerce",
        name: "Food & Grocery",
        description:
          "E-commerce solutions for food delivery and grocery businesses",
        icon: UtensilsCrossed,
        products: [
          {
            id: "fresh-market",
            name: "FreshMarket Online",
            tagline: "Complete Grocery E-commerce Solution",
            description:
              "End-to-end grocery e-commerce platform with inventory management, delivery scheduling, and freshness tracking.",
            image:
              "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&h=400&fit=crop",
            features: [
              "Real-time Inventory Sync",
              "Delivery Slot Management",
              "Freshness Date Tracking",
              "Subscription Boxes",
              "Recipe Integration",
              "Dietary Filter System",
            ],
            highlighted: true,
          },
          {
            id: "food-delivery-hub",
            name: "FoodDelivery Hub",
            tagline: "Restaurant & Food Delivery Platform",
            description:
              "Multi-restaurant food ordering platform with real-time tracking, driver management, and kitchen display systems.",
            image:
              "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=400&fit=crop",
            features: [
              "Multi-restaurant Support",
              "Real-time Order Tracking",
              "Driver Assignment System",
              "Kitchen Display System",
              "Menu Management",
              "Customer Feedback Loop",
            ],
          },
        ],
      },
      {
        id: "marketplace",
        name: "Multi-vendor Marketplaces",
        description: "Scalable multi-vendor marketplace platforms",
        icon: Users,
        products: [
          {
            id: "vendor-hub",
            name: "VendorHub Enterprise",
            tagline: "Enterprise Multi-vendor Platform",
            description:
              "Robust marketplace solution supporting thousands of vendors with advanced commission structures, dispute resolution, and analytics.",
            image:
              "https://images.unsplash.com/photo-1556740758-90de374c12ad?w=600&h=400&fit=crop",
            features: [
              "Unlimited Vendor Support",
              "Flexible Commission Engine",
              "Dispute Resolution System",
              "Vendor Performance Analytics",
              "Automated Payouts",
              "Multi-currency Support",
            ],
            highlighted: true,
          },
          {
            id: "local-market",
            name: "LocalMarket Pro",
            tagline: "Community Marketplace Solution",
            description:
              "Perfect for local business networks and community marketplaces with geo-targeting and local delivery options.",
            image:
              "https://images.unsplash.com/photo-1534723452862-4c874018d66d?w=600&h=400&fit=crop",
            features: [
              "Geo-targeted Listings",
              "Local Delivery Integration",
              "Community Features",
              "Local SEO Optimization",
              "Event & Pop-up Support",
              "Business Directory",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "erp",
    name: "ERP Solutions",
    description: "Enterprise resource planning systems for business operations",
    icon: Building2,
    subcategories: [
      {
        id: "crm",
        name: "CRM Systems",
        description: "Customer relationship management solutions",
        icon: Users,
        products: [
          {
            id: "sales-force-pro",
            name: "SalesForcePro",
            tagline: "Complete Sales CRM Platform",
            description:
              "Comprehensive CRM solution for managing sales pipelines, customer relationships, and revenue forecasting with AI-powered insights.",
            image:
              "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
            features: [
              "Visual Sales Pipeline",
              "Lead Scoring & Qualification",
              "Email & Call Integration",
              "Revenue Forecasting",
              "Territory Management",
              "Mobile CRM App",
            ],
            highlighted: true,
          },
          {
            id: "customer-360",
            name: "Customer360",
            tagline: "Unified Customer Data Platform",
            description:
              "Consolidate customer data from multiple touchpoints for a complete view of customer journey and behavior.",
            image:
              "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
            features: [
              "Unified Customer Profiles",
              "Journey Mapping",
              "Behavioral Analytics",
              "Segmentation Engine",
              "Campaign Attribution",
              "Data Enrichment",
            ],
          },
          {
            id: "service-desk-crm",
            name: "ServiceDesk CRM",
            tagline: "Customer Service Excellence",
            description:
              "Streamline customer support with ticketing, knowledge base, and multi-channel communication management.",
            image:
              "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop",
            features: [
              "Ticket Management",
              "Knowledge Base",
              "Live Chat Integration",
              "SLA Management",
              "Customer Satisfaction Surveys",
              "Agent Performance Tracking",
            ],
          },
        ],
      },
      {
        id: "task-management",
        name: "Task Management",
        description: "Project and task management solutions",
        icon: ClipboardList,
        products: [
          {
            id: "project-flow",
            name: "ProjectFlow",
            tagline: "Agile Project Management",
            description:
              "Modern project management platform with Kanban boards, sprint planning, and team collaboration features.",
            image:
              "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=600&h=400&fit=crop",
            features: [
              "Kanban & Scrum Boards",
              "Sprint Planning",
              "Time Tracking",
              "Resource Allocation",
              "Burndown Charts",
              "Integration Ecosystem",
            ],
            highlighted: true,
          },
          {
            id: "task-master",
            name: "TaskMaster Pro",
            tagline: "Enterprise Task Management",
            description:
              "Scalable task management for enterprises with workflow automation, dependencies, and cross-team visibility.",
            image:
              "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
            features: [
              "Workflow Automation",
              "Task Dependencies",
              "Cross-project Visibility",
              "Workload Balancing",
              "Custom Field Support",
              "Advanced Reporting",
            ],
          },
        ],
      },
      {
        id: "hr-management",
        name: "HR Management",
        description: "Human resources and payroll management systems",
        icon: UserCog,
        products: [
          {
            id: "people-hub",
            name: "PeopleHub HRMS",
            tagline: "Complete HR Management System",
            description:
              "All-in-one HRMS covering recruitment, onboarding, performance management, and payroll processing.",
            image:
              "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&h=400&fit=crop",
            features: [
              "Recruitment & ATS",
              "Onboarding Workflows",
              "Performance Reviews",
              "Payroll Processing",
              "Leave Management",
              "Employee Self-Service",
            ],
            highlighted: true,
          },
          {
            id: "talent-grow",
            name: "TalentGrow",
            tagline: "Employee Development Platform",
            description:
              "Focus on employee growth with goal setting, skill tracking, learning paths, and career development tools.",
            image:
              "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
            features: [
              "Goal Management",
              "Skill Matrix",
              "Learning Paths",
              "Career Planning",
              "360° Feedback",
              "Succession Planning",
            ],
          },
          {
            id: "payroll-ease",
            name: "PayrollEase",
            tagline: "Automated Payroll Solution",
            description:
              "Compliant payroll processing with tax calculations, direct deposits, and comprehensive reporting.",
            image:
              "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
            features: [
              "Automated Tax Calculations",
              "Direct Deposit",
              "Compliance Management",
              "Expense Reimbursement",
              "Benefits Administration",
              "Year-end Reporting",
            ],
          },
        ],
      },
      {
        id: "inventory-management",
        name: "Inventory Management",
        description: "Stock and warehouse management solutions",
        icon: Package,
        products: [
          {
            id: "stock-control",
            name: "StockControl Pro",
            tagline: "Advanced Inventory Management",
            description:
              "Real-time inventory tracking with barcode scanning, automated reordering, and multi-warehouse support.",
            image:
              "https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&h=400&fit=crop",
            features: [
              "Real-time Stock Tracking",
              "Barcode/QR Scanning",
              "Auto Reorder Points",
              "Multi-warehouse Support",
              "Batch/Serial Tracking",
              "Demand Forecasting",
            ],
            highlighted: true,
          },
          {
            id: "warehouse-ops",
            name: "WarehouseOps",
            tagline: "Warehouse Operations Platform",
            description:
              "Optimize warehouse operations with pick-pack-ship workflows, zone management, and workforce planning.",
            image:
              "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop",
            features: [
              "Pick-Pack-Ship Workflow",
              "Zone Management",
              "Workforce Scheduling",
              "Receiving & Putaway",
              "Cycle Counting",
              "Shipping Integration",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "lms",
    name: "Learning Management Systems",
    description:
      "Educational platforms for schools, universities, and corporate training",
    icon: GraduationCap,
    subcategories: [
      {
        id: "school-management",
        name: "School Management",
        description: "Complete solutions for K-12 and school administration",
        icon: School,
        products: [
          {
            id: "school-erp",
            name: "SchoolERP Complete",
            tagline: "All-in-one School Management",
            description:
              "Comprehensive school management system covering admissions, academics, finance, and parent communication.",
            image:
              "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&h=400&fit=crop",
            features: [
              "Admission Management",
              "Timetable & Scheduling",
              "Grade & Report Cards",
              "Fee Management",
              "Parent Communication Portal",
              "Transport Management",
            ],
            highlighted: true,
          },
          {
            id: "classroom-connect",
            name: "ClassroomConnect",
            tagline: "Interactive Learning Platform",
            description:
              "Engage students with interactive lessons, assignments, and real-time collaboration tools.",
            image:
              "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop",
            features: [
              "Virtual Classrooms",
              "Assignment Management",
              "Interactive Whiteboards",
              "Student Collaboration",
              "Progress Tracking",
              "Resource Library",
            ],
          },
        ],
      },
      {
        id: "corporate-training",
        name: "Corporate Training",
        description: "Enterprise learning and development platforms",
        icon: BookOpen,
        products: [
          {
            id: "learn-enterprise",
            name: "LearnEnterprise",
            tagline: "Corporate Learning Platform",
            description:
              "Scalable learning platform for enterprises with compliance tracking, certification management, and skill development.",
            image:
              "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
            features: [
              "Course Authoring Tools",
              "Compliance Training",
              "Certification Programs",
              "Skill Gap Analysis",
              "Learning Paths",
              "SCORM/xAPI Support",
            ],
            highlighted: true,
          },
          {
            id: "onboard-pro",
            name: "OnboardPro",
            tagline: "Employee Onboarding Platform",
            description:
              "Streamline new hire onboarding with structured programs, checklists, and progress monitoring.",
            image:
              "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop",
            features: [
              "Onboarding Workflows",
              "Document Collection",
              "Training Assignments",
              "Mentor Matching",
              "Progress Dashboards",
              "Integration with HRMS",
            ],
          },
        ],
      },
      {
        id: "online-courses",
        name: "Online Courses",
        description: "Platforms for creating and selling online courses",
        icon: Video,
        products: [
          {
            id: "course-creator",
            name: "CourseCreator Pro",
            tagline: "Professional Course Platform",
            description:
              "Create and sell online courses with video hosting, student management, and payment processing.",
            image:
              "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop",
            features: [
              "Video Course Builder",
              "Student Management",
              "Payment Processing",
              "Certificate Generation",
              "Drip Content",
              "Affiliate Program",
            ],
            highlighted: true,
          },
          {
            id: "live-academy",
            name: "LiveAcademy",
            tagline: "Live Learning Platform",
            description:
              "Host live classes, webinars, and interactive workshops with recording and replay features.",
            image:
              "https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?w=600&h=400&fit=crop",
            features: [
              "Live Class Scheduling",
              "Webinar Hosting",
              "Recording & Replay",
              "Interactive Polls",
              "Breakout Rooms",
              "Attendance Tracking",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "healthcare",
    name: "Healthcare Solutions",
    description: "Medical and healthcare management systems",
    icon: Heart,
    subcategories: [
      {
        id: "hospital-management",
        name: "Hospital Management",
        description: "Complete hospital information systems",
        icon: Hospital,
        products: [
          {
            id: "hospital-care",
            name: "HospitalCare HMS",
            tagline: "Hospital Information System",
            description:
              "Comprehensive hospital management covering patient records, billing, pharmacy, and lab management.",
            image:
              "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=400&fit=crop",
            features: [
              "Electronic Health Records",
              "Appointment Scheduling",
              "Inpatient Management",
              "Billing & Insurance",
              "Lab & Radiology Integration",
              "Pharmacy Management",
            ],
            highlighted: true,
          },
          {
            id: "med-staff",
            name: "MedStaff Manager",
            tagline: "Hospital Staff Management",
            description:
              "Manage hospital workforce with scheduling, credential tracking, and departmental coordination.",
            image:
              "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&h=400&fit=crop",
            features: [
              "Staff Scheduling",
              "Credential Management",
              "Department Coordination",
              "Time & Attendance",
              "On-call Management",
              "Compliance Tracking",
            ],
          },
        ],
      },
      {
        id: "clinic-management",
        name: "Clinic Management",
        description: "Solutions for clinics and private practices",
        icon: Stethoscope,
        products: [
          {
            id: "clinic-pro",
            name: "ClinicPro",
            tagline: "Modern Clinic Management",
            description:
              "Streamlined clinic management with online booking, patient records, and practice analytics.",
            image:
              "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&h=400&fit=crop",
            features: [
              "Online Appointment Booking",
              "Patient Records",
              "Prescription Management",
              "Billing & Invoicing",
              "SMS/Email Reminders",
              "Practice Analytics",
            ],
            highlighted: true,
          },
          {
            id: "tele-health",
            name: "TeleHealth Connect",
            tagline: "Telemedicine Platform",
            description:
              "Enable virtual consultations with secure video calls, digital prescriptions, and patient monitoring.",
            image:
              "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
            features: [
              "Video Consultations",
              "Digital Prescriptions",
              "Remote Patient Monitoring",
              "Secure Messaging",
              "Appointment Integration",
              "Payment Processing",
            ],
          },
        ],
      },
      {
        id: "pharmacy-management",
        name: "Pharmacy Management",
        description: "Pharmacy and medication management systems",
        icon: Pill,
        products: [
          {
            id: "pharma-hub",
            name: "PharmaHub",
            tagline: "Complete Pharmacy Solution",
            description:
              "End-to-end pharmacy management with inventory control, prescription processing, and POS integration.",
            image:
              "https://images.unsplash.com/photo-1585435557343-3b092031a831?w=600&h=400&fit=crop",
            features: [
              "Prescription Processing",
              "Inventory Management",
              "Drug Interaction Alerts",
              "POS Integration",
              "Insurance Claims",
              "Controlled Substance Tracking",
            ],
            highlighted: true,
          },
          {
            id: "med-inventory",
            name: "MedInventory Pro",
            tagline: "Pharmaceutical Stock Management",
            description:
              "Specialized inventory management for pharmaceuticals with expiry tracking and batch management.",
            image:
              "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&h=400&fit=crop",
            features: [
              "Expiry Date Tracking",
              "Batch Management",
              "Supplier Management",
              "Auto Reorder",
              "Return Management",
              "Regulatory Compliance",
            ],
          },
        ],
      },
    ],
  },
];

// Helper function to get all products (flat list)
export const getAllProducts = (): SoftwareProduct[] => {
  const products: SoftwareProduct[] = [];
  productCategories.forEach((category) => {
    category.subcategories.forEach((subcategory) => {
      products.push(...subcategory.products);
    });
  });
  return products;
};

// Helper function to get highlighted products
export const getHighlightedProducts = (): SoftwareProduct[] => {
  return getAllProducts().filter((product) => product.highlighted);
};

// Helper function to get products by category
export const getProductsByCategory = (
  categoryId: string
): SoftwareProduct[] => {
  const category = productCategories.find((c) => c.id === categoryId);
  if (!category) return [];

  const products: SoftwareProduct[] = [];
  category.subcategories.forEach((subcategory) => {
    products.push(...subcategory.products);
  });
  return products;
};

// Helper function to get products by subcategory
export const getProductsBySubcategory = (
  categoryId: string,
  subcategoryId: string
): SoftwareProduct[] => {
  const category = productCategories.find((c) => c.id === categoryId);
  if (!category) return [];

  const subcategory = category.subcategories.find(
    (s) => s.id === subcategoryId
  );
  if (!subcategory) return [];

  return subcategory.products;
};

// Helper function to get a product by ID
export const getProductById = (
  productId: string
): {
  product: SoftwareProduct;
  category: ProductCategory;
  subcategory: ProductSubcategory;
} | null => {
  for (const category of productCategories) {
    for (const subcategory of category.subcategories) {
      const product = subcategory.products.find((p) => p.id === productId);
      if (product) {
        return { product, category, subcategory };
      }
    }
  }
  return null;
};

// Helper function to get related products (from same subcategory)
export const getRelatedProducts = (
  productId: string,
  limit: number = 3
): SoftwareProduct[] => {
  const result = getProductById(productId);
  if (!result) return [];

  return result.subcategory.products
    .filter((p) => p.id !== productId)
    .slice(0, limit);
};
