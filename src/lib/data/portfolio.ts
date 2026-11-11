import portfolioRaw from "./portfolio_data.json";

export interface ProjectItem {
  slug: string;
  title: string;
  kind: "Mobile App" | "Website" | string;
  industry: string;
  image: string;
  desc: string;
  live_link: string;
  mobrilz_url: string;
  technologies: string[];
}

export const projectsData: ProjectItem[] = portfolioRaw as ProjectItem[];

export const portfolioCategories = [
  "All",
  "Website",
  "Mobile App",
  "FinTech & Asset Management",
  "Travel & Tourism",
  "Health & Telemedicine",
  "E-Commerce & Retail"
];
