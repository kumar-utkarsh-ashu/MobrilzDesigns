export interface MegaMenuItem {
  title: string;
  description: string;
  href: string;
  icon?: string;
}

export interface MegaMenuColumn {
  category: string;
  items: MegaMenuItem[];
}

export const servicesMegaMenu: MegaMenuColumn[] = [
  {
    category: "Development",
    items: [
      {
        title: "Web Development",
        description: "Custom responsive web applications with modern reactive frameworks.",
        href: "#expertise",
        icon: "code-2"
      },
      {
        title: "Mobile Apps",
        description: "Native iOS & Android apps with 60fps animations.",
        href: "#expertise",
        icon: "smartphone"
      },
      {
        title: "Cloud Solutions",
        description: "Scalable cloud microservices with 99.99% SLA.",
        href: "#expertise",
        icon: "cloud"
      },
      {
        title: "Custom Software",
        description: "Tailored enterprise software and automation workflows.",
        href: "#expertise",
        icon: "cpu"
      }
    ]
  },
  {
    category: "Design",
    items: [
      {
        title: "UI/UX Design",
        description: "Intuitive interfaces and frictionless digital journeys.",
        href: "#expertise",
        icon: "palette"
      },
      {
        title: "Branding",
        description: "Distinct visual identities, typography, and brand collateral.",
        href: "#expertise",
        icon: "sparkles"
      },
      {
        title: "Product Design",
        description: "End-to-end digital product design for validated prototypes.",
        href: "#expertise",
        icon: "layout"
      },
      {
        title: "Graphics Design",
        description: "Marketing visual assets, 3D illustrations, and digital collateral.",
        href: "#expertise",
        icon: "image"
      }
    ]
  },
  {
    category: "Infrastructure & AI",
    items: [
      {
        title: "DevOps & CI/CD",
        description: "Automated test suites, Docker containers, and blue-green deploy.",
        href: "#expertise",
        icon: "terminal"
      },
      {
        title: "Custom AI Chatbots",
        description: "Intelligent conversational agents with domain knowledge.",
        href: "#expertise",
        icon: "bot"
      },
      {
        title: "MCP Servers",
        description: "Model Context Protocol enterprise bridges for autonomous agents.",
        href: "#expertise",
        icon: "workflow"
      },
      {
        title: "API Integration",
        description: "Unified REST, GraphQL, and webhook microservice connectors.",
        href: "#expertise",
        icon: "plug"
      }
    ]
  },
  {
    category: "Growth & Support",
    items: [
      {
        title: "SEO Services",
        description: "Technical search architecture optimized for GenAI answers.",
        href: "#expertise",
        icon: "trending-up"
      },
      {
        title: "App Maintenance",
        description: "24/7 telemetry monitoring, security patching, and SLA updates.",
        href: "#expertise",
        icon: "shield-check"
      }
    ]
  }
];

export const industriesMegaMenu = [
  { title: "Manufacturing", description: "IoT, factory automation & ERP portals", href: "#projects" },
  { title: "Finance & FinTech", description: "High-security banking, asset management & ledgers", href: "#projects" },
  { title: "Healthcare & MedTech", description: "HIPAA-compliant telemedicine & patient apps", href: "#projects" },
  { title: "Real Estate & PropTech", description: "Virtual tours, property listing engines & CRM", href: "#projects" },
  { title: "Education & EdTech", description: "Interactive LMS, course streaming & assessments", href: "#projects" },
  { title: "Retail & eCommerce", description: "High-volume stores, Shopify/Salla sync & checkout", href: "#projects" },
  { title: "Logistics & Supply", description: "Fleet dispatch tracking, routes & warehouse ops", href: "#projects" }
];

export const workMegaMenu = [
  { title: "Case Studies", description: "In-depth engineering architectural teardowns", href: "#projects" },
  { title: "Portfolios", description: "Multi-platform showcase across 37 live systems", href: "#projects" },
  { title: "Testimonials", description: "Direct feedback from founders and engineering VPs", href: "#reviews" }
];

