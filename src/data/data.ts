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

export interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  requirements: string[];
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
  readTime: string;
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
    role: "Content Writer Specialist",
    image: "/team/khadiza.png",
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

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "future-of-ai-in-software-development",
    title: "The Future of AI in Software Development: Trends to Watch in 2025",
    excerpt:
      "Explore how artificial intelligence is reshaping the software development landscape and what developers need to know to stay ahead.",
    content: `
      <p>Artificial Intelligence is no longer just a buzzword in the tech industry—it's becoming an integral part of how we build, test, and deploy software. As we move through 2025, the integration of AI into software development workflows is accelerating at an unprecedented pace.</p>

      <h2>AI-Powered Code Generation</h2>
      <p>One of the most significant developments is the rise of AI-powered code generation tools. These tools can now write entire functions, suggest code completions, and even help debug complex issues. However, it's important to understand that these tools are meant to augment developers, not replace them.</p>

      <h2>Automated Testing and Quality Assurance</h2>
      <p>AI is revolutionizing how we approach testing. Machine learning algorithms can now identify patterns in code that are likely to cause bugs, predict which parts of an application are most prone to failures, and automatically generate test cases that cover edge scenarios human testers might miss.</p>

      <h2>Intelligent DevOps</h2>
      <p>The DevOps pipeline is becoming smarter with AI integration. From automated deployment decisions based on real-time metrics to predictive scaling that anticipates traffic spikes before they happen, AI is making infrastructure management more efficient and reliable.</p>

      <h2>What This Means for Developers</h2>
      <p>For software developers, this shift means adapting to new tools and workflows. Understanding how to effectively collaborate with AI assistants, knowing when to trust their suggestions, and maintaining the ability to think critically about code will be essential skills.</p>

      <h2>Conclusion</h2>
      <p>The future of AI in software development is bright and full of possibilities. By embracing these changes while maintaining our core engineering principles, we can build better software faster than ever before.</p>
    `,
    author: {
      name: "Alex Thompson",
      avatar: "AT",
      role: "Senior Software Engineer",
    },
    category: "Technology",
    tags: ["AI", "Machine Learning", "Software Development", "Trends"],
    publishedAt: "2025-01-15",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
  },
  {
    id: "2",
    slug: "building-scalable-ecommerce-platforms",
    title: "Building Scalable E-commerce Platforms: A Technical Deep Dive",
    excerpt:
      "Learn the architectural patterns and best practices for building e-commerce platforms that can handle millions of users.",
    content: `
      <p>Building an e-commerce platform that can scale to handle millions of concurrent users requires careful planning and the right architectural decisions from day one. In this article, we'll explore the key considerations and patterns that successful platforms use.</p>

      <h2>Microservices Architecture</h2>
      <p>Modern e-commerce platforms benefit from a microservices approach. By breaking down the application into smaller, independent services—such as product catalog, shopping cart, payment processing, and order management—teams can develop, deploy, and scale each component independently.</p>

      <h2>Database Strategies</h2>
      <p>Choosing the right database strategy is crucial. Many platforms use a combination of SQL databases for transactional data and NoSQL solutions for product catalogs and session management. Implementing read replicas and sharding helps distribute the load across multiple servers.</p>

      <h2>Caching at Every Level</h2>
      <p>Performance at scale requires aggressive caching. From CDN caching for static assets to Redis clusters for session data and product information, implementing a multi-tier caching strategy can dramatically reduce database load and improve response times.</p>

      <h2>Event-Driven Architecture</h2>
      <p>Asynchronous processing through event queues helps decouple services and handle traffic spikes gracefully. Order processing, inventory updates, and notification systems all benefit from event-driven patterns using tools like Apache Kafka or RabbitMQ.</p>

      <h2>Monitoring and Observability</h2>
      <p>At scale, you need comprehensive monitoring. Distributed tracing, centralized logging, and real-time metrics dashboards help teams identify and resolve issues before they impact customers.</p>
    `,
    author: {
      name: "Priya Sharma",
      avatar: "PS",
      role: "Technical Architect",
    },
    category: "Development",
    tags: ["E-commerce", "Architecture", "Scalability", "Microservices"],
    publishedAt: "2025-01-10",
    readTime: "12 min read",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop",
  },
  {
    id: "3",
    slug: "ui-ux-best-practices-2025",
    title: "UI/UX Best Practices for Modern Web Applications in 2025",
    excerpt:
      "Discover the latest trends and best practices in UI/UX design that are shaping user experiences across the web.",
    content: `
      <p>User experience has never been more important than it is today. With users having countless options at their fingertips, creating intuitive, accessible, and delightful interfaces is crucial for product success.</p>

      <h2>Mobile-First Design</h2>
      <p>With over 60% of web traffic coming from mobile devices, designing for mobile first isn't optional—it's essential. This approach ensures that the core user experience works perfectly on smaller screens, with enhancements added for larger displays.</p>

      <h2>Accessibility as a Priority</h2>
      <p>Inclusive design benefits everyone. Implementing proper ARIA labels, ensuring sufficient color contrast, supporting keyboard navigation, and testing with screen readers should be standard practice, not an afterthought.</p>

      <h2>Micro-interactions and Animation</h2>
      <p>Subtle animations and micro-interactions provide feedback and delight users. From button hover states to loading animations, these small details make interfaces feel responsive and polished.</p>

      <h2>Design Systems and Consistency</h2>
      <p>Maintaining consistency across large applications requires a robust design system. Component libraries, style guides, and shared design tokens help teams build cohesive experiences even as products grow.</p>

      <h2>Performance as UX</h2>
      <p>Slow applications frustrate users. Core Web Vitals, skeleton loaders, and optimistic UI updates all contribute to perceived performance and user satisfaction.</p>
    `,
    author: {
      name: "Maria Garcia",
      avatar: "MG",
      role: "Lead UI/UX Designer",
    },
    category: "Design",
    tags: ["UI/UX", "Web Design", "Accessibility", "User Experience"],
    publishedAt: "2025-01-05",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=400&fit=crop",
  },
  {
    id: "4",
    slug: "remote-team-management-strategies",
    title: "Effective Strategies for Managing Remote Development Teams",
    excerpt:
      "Master the art of leading distributed teams with proven strategies for communication, collaboration, and productivity.",
    content: `
      <p>Remote work has transformed from a temporary solution to a permanent reality for many software development teams. Successfully managing distributed teams requires new approaches to communication, collaboration, and culture building.</p>

      <h2>Clear Communication Channels</h2>
      <p>Establish clear guidelines for different types of communication. Async-first approaches using tools like Slack and Notion work well for non-urgent matters, while video calls should be reserved for complex discussions and team bonding.</p>

      <h2>Documentation Culture</h2>
      <p>In remote settings, documentation becomes crucial. Decision logs, architectural documents, and runbooks help team members work independently and onboard new members efficiently.</p>

      <h2>Results Over Hours</h2>
      <p>Focus on outcomes rather than time spent. Clear goals, measurable deliverables, and regular check-ins help maintain productivity while respecting team members' autonomy and work-life balance.</p>

      <h2>Building Team Culture</h2>
      <p>Remote doesn't mean isolated. Virtual coffee chats, team retrospectives, and occasional in-person meetups help build the trust and camaraderie that make teams effective.</p>

      <h2>Tools and Infrastructure</h2>
      <p>Invest in the right tools—reliable video conferencing, collaborative design tools, and robust CI/CD pipelines. The right infrastructure removes friction and enables seamless collaboration.</p>
    `,
    author: {
      name: "David Kim",
      avatar: "DK",
      role: "Engineering Manager",
    },
    category: "Management",
    tags: ["Remote Work", "Team Management", "Leadership", "Productivity"],
    publishedAt: "2024-12-28",
    readTime: "9 min read",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=400&fit=crop",
  },
  {
    id: "5",
    slug: "securing-modern-web-applications",
    title: "Securing Modern Web Applications: A Comprehensive Guide",
    excerpt:
      "Learn essential security practices to protect your web applications from common vulnerabilities and emerging threats.",
    content: `
      <p>Security should be a fundamental consideration in every stage of application development. With cyber threats becoming more sophisticated, implementing robust security measures is no longer optional—it's a business necessity.</p>

      <h2>OWASP Top 10 Awareness</h2>
      <p>Understanding and mitigating the OWASP Top 10 vulnerabilities—including injection attacks, broken authentication, and cross-site scripting—forms the foundation of web application security.</p>

      <h2>Authentication and Authorization</h2>
      <p>Implement strong authentication mechanisms including multi-factor authentication, proper session management, and role-based access control. OAuth 2.0 and OpenID Connect provide standardized approaches for these challenges.</p>

      <h2>Data Protection</h2>
      <p>Encrypt sensitive data both in transit and at rest. Use HTTPS everywhere, implement proper key management, and be mindful of what data you store and for how long.</p>

      <h2>Security Testing</h2>
      <p>Integrate security testing into your CI/CD pipeline. Static analysis tools, dependency vulnerability scanning, and regular penetration testing help identify issues before they reach production.</p>

      <h2>Incident Response</h2>
      <p>Have a plan for when things go wrong. Logging, monitoring, and documented incident response procedures help minimize damage and enable quick recovery from security incidents.</p>
    `,
    author: {
      name: "James Wilson",
      avatar: "JW",
      role: "Security Engineer",
    },
    category: "Security",
    tags: ["Security", "Web Development", "Best Practices", "OWASP"],
    publishedAt: "2024-12-20",
    readTime: "11 min read",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop",
  },
  {
    id: "6",
    slug: "lms-development-complete-guide",
    title: "The Complete Guide to Learning Management System Development",
    excerpt:
      "Everything you need to know about building a modern LMS platform that engages learners and delivers results.",
    content: `
      <p>Learning Management Systems have evolved from simple course delivery platforms to comprehensive learning ecosystems. Building a modern LMS requires understanding both educational principles and technical requirements.</p>

      <h2>Core Features</h2>
      <p>Essential LMS features include course management, user enrollment, progress tracking, assessment tools, and certificate generation. A solid foundation in these areas is crucial before adding advanced functionality.</p>

      <h2>Content Delivery</h2>
      <p>Support various content types—video, interactive modules, documents, and SCORM packages. Adaptive streaming for video content and offline access capabilities improve the learning experience.</p>

      <h2>Gamification and Engagement</h2>
      <p>Points, badges, leaderboards, and learning paths keep users motivated. Social features like discussion forums and peer reviews create community and enhance understanding.</p>

      <h2>Analytics and Reporting</h2>
      <p>Comprehensive analytics help instructors and administrators understand learner behavior, identify struggling students, and measure course effectiveness.</p>

      <h2>Mobile Learning</h2>
      <p>With learners accessing content from various devices, responsive design and native mobile apps ensure a seamless experience across platforms.</p>
    `,
    author: {
      name: "Sarah Chen",
      avatar: "SC",
      role: "Product Manager",
    },
    category: "Education",
    tags: ["LMS", "E-Learning", "Education Technology", "Development"],
    publishedAt: "2024-12-15",
    readTime: "10 min read",
    image:
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=400&fit=crop",
  },
];
