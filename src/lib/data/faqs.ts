export interface FaqItem { question: string; answer: string; }

export const faqsData: FaqItem[] = [
  {
    "question": "How does project pricing and billing work?",
    "answer": "We provide two transparent billing models: Fixed Price Milestone Contracts for clearly defined scopes and deliverables, and Dedicated Developer Retainers (Staff Augmentation) where you hire pre vetted senior engineers on a predictable monthly cadence with zero recruitment fees, delivering 50 to 65% cost arbitrage with no quality compromise."
  },
  {
    "question": "Who owns the intellectual property and code?",
    "answer": "You own 100% of all intellectual property, source code, and design assets from Day 1. Code is pushed directly to your private GitHub or GitLab repositories under strict mutual NDAs. We retain zero vendor lock in and zero secondary claims."
  },
  {
    "question": "How do you manage timezone differences and communication?",
    "answer": "You work with a dedicated technical project lead and senior developers providing a minimum of 4 to 5 hours of real time overlap with North American (EST/PST) and European (GMT/CET) working hours. We integrate directly into your Slack, run asynchronous daily video standups, and provide transparent weekly sprint demos."
  },
  {
    "question": "Can you take over and refactor an existing legacy codebase?",
    "answer": "Yes. Our senior architects conduct a rapid 3 day technical audit to identify bottlenecks, security gaps, and technical debt. We then formulate a modular migration roadmap, implementing CI/CD automated test suites and sprint based refactoring without disrupting ongoing production uptime."
  },
  {
    "question": "What post launch support and SLA guarantees do you offer?",
    "answer": "Every release includes a 30 day comprehensive bug warranty. Following that, we provide flexible ongoing maintenance packages covering 24/7 uptime monitoring, critical security patching, performance optimization, and on demand feature iterations."
  },
  {
    "question": "How fast can a dedicated Mobrilz engineering pod ramp up?",
    "answer": "Because we maintain internal benches of vetted senior full stack engineers and cloud architects, we can deploy a tailored team into your codebase within 5 to 7 business days following our initial scoping and architecture alignment call."
  }
];
