export type ArticleSection = { heading: string; paragraphs: string[]; bullets?: string[] };
export type Article = {
  title: string; slug: string; category: string; excerpt: string; publicationDate: string;
  readingTime: string; seoTitle: string; seoDescription: string; sections: ArticleSection[];
};

export const articles: Article[] = [
  {
    title: "Hiring Developers in India: A Guide for International Companies",
    slug: "hiring-developers-in-india",
    category: "Hiring in India",
    excerpt: "A practical framework for defining, evaluating and coordinating an India-based developer search from abroad.",
    publicationDate: "2026-11-12", readingTime: "7 min read",
    seoTitle: "Hiring Developers in India | A Guide for Companies",
    seoDescription: "A practical guide for international companies planning to hire developers in India.",
    sections: [
      { heading: "Start with the work, not the wish list", paragraphs: ["A useful brief explains the product context, the problems the engineer will own and the decisions they are expected to make. Separate essential capabilities from tools that can be learned on the job."], bullets: ["Define the first 90 days", "Clarify collaboration hours", "Name the actual technical constraints"] },
      { heading: "Make evaluation consistent", paragraphs: ["Agree on what good looks like before profiles arrive. A compact scorecard makes screening more focused and gives interviewers a shared language for feedback."], bullets: ["Technical depth", "Product judgement", "Communication", "Ownership"] },
      { heading: "Design for cross-border coordination", paragraphs: ["International recruitment succeeds when response times, interview ownership and candidate communication are explicit. A recruiter can coordinate the process, but the hiring team still owns the final assessment and employment decision."] }
    ]
  },
  {
    title: "Building and Strengthening Your Engineering Team",
    slug: "building-your-first-engineering-team",
    category: "Engineering Hiring",
    excerpt: "How companies at different stages can turn product priorities into a focused, realistic engineering hiring plan.",
    publicationDate: "2026-11-05", readingTime: "6 min read",
    seoTitle: "Building and Strengthening an Engineering Team | Scouttal",
    seoDescription: "A clear framework for companies building or strengthening an engineering team.",
    sections: [
      { heading: "Sequence roles around risk", paragraphs: ["The first hires should reduce the most important delivery risks. That may mean broad product engineers, a backend specialist or infrastructure experience depending on what the roadmap demands."], bullets: ["Map the next two product milestones", "Identify single points of failure", "Prioritise complementary strengths"] },
      { heading: "Hire for the stage you are in", paragraphs: ["A new team may need broad ownership, while an established function may need deeper specialization or leadership. Make those conditions visible rather than presenting a generic role description."] },
      { heading: "Keep the process decisive", paragraphs: ["Use a small, informed interview panel, collect evidence against a shared scorecard and give candidates clear next steps after every conversation."] }
    ]
  },
  {
    title: "Understanding India’s Web3 and Blockchain Talent Market",
    slug: "india-web3-blockchain-talent-market",
    category: "Web3 & Blockchain",
    excerpt: "A role-first view of recruiting Solana, Rust, smart-contract and Web3 engineering talent in India.",
    publicationDate: "2026-10-28", readingTime: "8 min read",
    seoTitle: "India Web3 & Blockchain Talent Market | Scouttal",
    seoDescription: "A role-first guide to recruiting Web3 and blockchain engineering talent in India.",
    sections: [
      { heading: "Web3 is not one talent category", paragraphs: ["Protocol, smart-contract, wallet, exchange and application-layer work require different evidence. Begin with the system being built and the risks the role will own."], bullets: ["Chain and protocol context", "Security expectations", "Production ownership", "Relevant language depth"] },
      { heading: "Evaluate evidence, not labels", paragraphs: ["Candidates may use similar titles while working at very different layers of the stack. Review shipped work, technical decisions and security reasoning alongside language and framework experience."] },
      { heading: "Use specialist screening carefully", paragraphs: ["Recruitment screening can validate relevance, communication and career context. Deep technical decisions should be owned by qualified technical interviewers, with evaluation coordination where useful."] }
    ]
  }
];

export const getArticle = (slug: string) => articles.find((article) => article.slug === slug);
