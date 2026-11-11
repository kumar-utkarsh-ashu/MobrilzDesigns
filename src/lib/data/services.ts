export interface ServiceCategory {
  id: string;
  name: string;
  items: {
    title: string;
    description: string;
    image: string;
  }[];
}

export const servicesData: ServiceCategory[] = [
  {
    id: "development",
    name: "Development",
    items: [
      {
        title: "Web Development",
        description: "High performance responsive web applications engineered with modern reactive frameworks and secure API backends.",
        image: "/assets/expertise/cards/web-dev.jpg"
      },
      {
        title: "Mobile Apps",
        description: "Native iOS and Android mobile apps engineered with fluid 60fps animations, hardware integration, and offline first capability.",
        image: "/assets/expertise/cards/mobile-apps.jpg"
      },
      {
        title: "Cloud Solutions",
        description: "Resilient cloud architecture engineered for 99.99% availability, automated Kubernetes scaling, and end to end security.",
        image: "/assets/expertise/cards/cloud-solutions.jpg"
      },
      {
        title: "Custom Software",
        description: "Tailored enterprise platforms and automation software engineered to streamline high throughput business workflows.",
        image: "/assets/expertise/cards/custom-software.jpg"
      }
    ]
  },
  {
    id: "design",
    name: "Design",
    items: [
      {
        title: "UI/UX Design",
        description: "Intuitive digital interfaces and frictionless user journeys crafted through user research, wireframes, and design systems.",
        image: "/assets/expertise/cards/ui-ux-design.jpg"
      },
      {
        title: "Branding",
        description: "Distinct visual identities, typography guidelines, design tokens, and digital brand collateral that command attention.",
        image: "/assets/expertise/cards/branding.jpg"
      },
      {
        title: "Product Design",
        description: "End to end digital product design transforming complex business requirements into elegant, market validated prototypes.",
        image: "/assets/expertise/cards/product-design.jpg"
      }
    ]
  },
  {
    id: "infrastructure",
    name: "Infrastructure",
    items: [
      {
        title: "Cloud Solutions",
        description: "Resilient cloud architecture engineered for 99.99% availability, automated Kubernetes scaling, and end to end security.",
        image: "/assets/expertise/cards/cloud-solutions.jpg"
      },
      {
        title: "DevOps & CI/CD",
        description: "Continuous automated deployment pipelines with zero downtime rollouts and real-time observability.",
        image: "/assets/expertise/cards/custom-software.jpg"
      }
    ]
  },
  {
    id: "marketing",
    name: "Digital Marketing",
    items: [
      {
        title: "SEO & Growth",
        description: "Data-driven organic growth and technical SEO architecture engineered to dominate generative search and answer engines.",
        image: "/assets/expertise/cards/branding.jpg"
      }
    ]
  }
];

export const processStages = [
  {
    number: "01",
    title: "Discovery & Architecture",
    description: "We define technical data models, API endpoints, security bounds, and infrastructure specifications prior to coding.",
    milestone: "Blueprint Approval",
    deliverable: "Architecture & data contract sign off"
  },
  {
    number: "02",
    title: "UI/UX & Prototyping",
    description: "Interactive Figma prototypes and design systems tested against core user journeys to eliminate friction.",
    milestone: "Design System Sign off",
    deliverable: "High fidelity Figma flow approval"
  },
  {
    number: "03",
    title: "Sprint Engineering",
    description: "2 week agile sprints with bi weekly client demos and automated regression testing suites (WebDriverIO, Dusk).",
    milestone: "Sprint Demos & QA",
    deliverable: "Automated test suites & bi weekly demo"
  },
  {
    number: "04",
    title: "Cutover & Autoscaling",
    description: "Production hardening, zero downtime blue-green deployment, and 24/7 telemetry monitoring under strict SLA.",
    milestone: "Live Autoscaling",
    deliverable: "Zero downtime cutover & SLA monitoring"
  }
];

export const techStackData = {
  web: {
    title: "Web Tech Stack",
    categories: [
      { name: "Frontend", items: ["Next.js", "React.js", "Nuxt.js", "Vue.js", "Tailwind CSS", "TypeScript"] },
      { name: "Backend", items: ["Node.js", "Python", "Laravel", "FastAPI", "Go", "NestJS"] },
      { name: "Database", items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "MSSQL", "Supabase"] },
      { name: "API Gateway", items: ["Fastify", "Restify", "Express.js", "Lumen", "Koa.js", "Hapi.js"] }
    ]
  },
  mobile: {
    title: "Mobile Tech Stack",
    categories: [
      { name: "iOS", items: ["Swift", "SwiftUI", "Xcode", "Combine"] },
      { name: "Android", items: ["Kotlin", "Jetpack Compose", "Android Studio"] },
      { name: "Cross-Platform", items: ["React Native", "Flutter", "Expo"] }
    ]
  },
  cloud: {
    title: "Cloud & DevOps Stack",
    categories: [
      { name: "Cloud Providers", items: ["AWS", "Google Cloud", "Microsoft Azure", "Cloudflare"] },
      { name: "DevOps & Containers", items: ["Docker", "Kubernetes", "Terraform", "GitHub Actions", "Jenkins"] },
      { name: "Monitoring & Observability", items: ["Datadog", "Grafana", "Prometheus", "Sentry"] }
    ]
  },
  ai: {
    title: "AI & Model Context Protocol (MCP)",
    categories: [
      { name: "AI Frameworks", items: ["Model Context Protocol (MCP)", "LangChain", "LlamaIndex", "Vercel AI SDK"] },
      { name: "LLM Orchestration", items: ["OpenAI GPT-4o", "Claude 3.5 Sonnet", "Gemini 1.5 Pro", "Local Ollama"] },
      { name: "Vector & RAG", items: ["pgvector", "Pinecone", "Qdrant", "ChromaDB"] }
    ]
  }
};
