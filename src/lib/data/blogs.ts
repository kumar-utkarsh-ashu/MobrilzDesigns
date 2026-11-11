export interface BlogItem {
  title: string;
  category: string;
  description: string;
  image: string;
  date: string;
}

export const blogsData: BlogItem[] = [
  {
    title: "How Generative AI and Google's AI Overviews Are Rewriting the SEO Playbook in 2026",
    category: "AI & Search Strategy",
    description: "Why keyword density is obsolete and how semantic entity graphs drive sustained organic authority in modern conversational answer engines.",
    image: "https://flubble.io/blog/coklu-platform-gelistirme-mobil-web-ve.webp",
    date: "Apr 14, 2026 · 6 min read"
  },
  {
    title: "Why Model Context Protocol (MCP) is the Missing Bridge Between LLMs and Enterprise Data",
    category: "Enterprise AI & MCP",
    description: "A deep architectural teardown of connecting private enterprise microservices with autonomous Gemini and Claude agents with zero data leakages.",
    image: "https://flubble.io/images/web-ve-saas-gelistirme-gorseli-e.webp",
    date: "Mar 24, 2026 · 8 min read"
  },
  {
    title: "12 Architecture Trends Dominating Modern Mobile App Engineering in 2026",
    category: "Mobile Engineering",
    description: "From offline first event sourcing and native biometric passes to edge model inference on iOS and Android devices.",
    image: "https://flubble.io/blog/mobil-uygulamalarda-kullanici-bagliligi-olusturmanin-7.webp",
    date: "Feb 12, 2026 · 5 min read"
  }
];
