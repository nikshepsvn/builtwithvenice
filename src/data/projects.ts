export type ProjectCategory = 'ecosystem' | 'powered-by';

interface BaseProject {
  title: string;
  description: string;
  url: string;
  tags: string[];
  category: ProjectCategory;
  submittedBy?: string;
  featured?: boolean;
}

export interface WebsiteProject extends BaseProject {
  type: 'Website';
  preview?: string;
}

export interface RepoProject extends BaseProject {
  type: 'GitHub Repo';
  owner: string;
  repo: string;
  stars?: number;
  forks?: number;
  language?: string;
}

export type Project = WebsiteProject | RepoProject;

export const projects: Project[] = [
  // ── Venice Ecosystem ─────────────────────────────────
  {
    title: "VeniceStats",
    description: "Real-time analytics dashboard for the Venice network. Track model usage, performance metrics, and ecosystem growth.",
    type: "Website",
    url: "https://venicestats.com",
    tags: ["Analytics", "Dashboard", "Open Source"],
    category: "ecosystem",
    preview: "/preview-venicestats.png",
    submittedBy: "gekko.eth",
    featured: true,
  },
  {
    title: "venice-dev-tools",
    description: "TypeScript SDK for the Venice API with full type safety, streaming support, and extensive examples.",
    type: "GitHub Repo",
    url: "https://github.com/georgeglarson/venice-dev-tools",
    tags: ["SDK", "TypeScript", "Developer Tools"],
    category: "ecosystem",
    stars: 14,
    forks: 2,
    language: "TypeScript",
    owner: "georgeglarson",
    repo: "venice-dev-tools",
    submittedBy: "georgeglarson",
  },
  {
    title: "venice-ai",
    description: "Python SDK for Venice.ai. Sync/async support, streaming, and full coverage of chat, image gen, TTS, and embeddings.",
    type: "GitHub Repo",
    url: "https://github.com/sethbang/venice-ai",
    tags: ["SDK", "Python", "Developer Tools"],
    category: "ecosystem",
    stars: 11,
    forks: 4,
    language: "Python",
    owner: "sethbang",
    repo: "venice-ai",
    submittedBy: "sethbang",
  },
  {
    title: "venice-ai-php",
    description: "PHP SDK for Venice AI. Drop-in OpenAI-compatible client for text and image generation.",
    type: "GitHub Repo",
    url: "https://github.com/georgeglarson/venice-ai-php",
    tags: ["SDK", "PHP", "Developer Tools"],
    category: "ecosystem",
    stars: 7,
    forks: 3,
    language: "PHP",
    owner: "georgeglarson",
    repo: "venice-ai-php",
    submittedBy: "georgeglarson",
  },

  // ── Powered by Venice ────────────────────────────────
  {
    title: "openvenice",
    description: "Open-source frontend for Venice AI. Chat, image gen, audio, video, embeddings, and visual workflows in one UI. No backend required.",
    type: "GitHub Repo",
    url: "https://github.com/nikshepsvn/openvenice",
    tags: ["Frontend", "Open Source", "Privacy"],
    category: "powered-by",
    stars: 36,
    forks: 8,
    language: "TypeScript",
    owner: "nikshepsvn",
    repo: "openvenice",
    submittedBy: "nikshepsvn",
    featured: true,
  },
  {
    title: "deep-research-privacy",
    description: "Privacy-first research tool. Venice uncensored models + Brave private search, parallel queries, and structured citations.",
    type: "GitHub Repo",
    url: "https://github.com/georgeglarson/deep-research-privacy",
    tags: ["Research", "Privacy", "Search"],
    category: "powered-by",
    stars: 35,
    forks: 4,
    language: "TypeScript",
    owner: "georgeglarson",
    repo: "deep-research-privacy",
    submittedBy: "georgeglarson",
    featured: true,
  },
  {
    title: "llm-venice",
    description: "Venice AI plugin for the llm CLI. Use Venice models from your terminal alongside other LLM providers.",
    type: "GitHub Repo",
    url: "https://github.com/ar-jan/llm-venice",
    tags: ["CLI", "Plugin", "Developer Tools"],
    category: "powered-by",
    stars: 24,
    forks: 5,
    language: "Python",
    owner: "ar-jan",
    repo: "llm-venice",
    submittedBy: "ar-jan",
  },
  {
    title: "nanoclaw-venice",
    description: "Personal AI assistant on WhatsApp and Telegram. Private, uncensored conversations powered by Venice.",
    type: "GitHub Repo",
    url: "https://github.com/lorenzovenice/nanoclaw-venice",
    tags: ["Bot", "Messaging", "Privacy"],
    category: "powered-by",
    stars: 17,
    forks: 3,
    language: "TypeScript",
    owner: "lorenzovenice",
    repo: "nanoclaw-venice",
    submittedBy: "lorenzovenice",
  },
  {
    title: "venice_ai",
    description: "Home Assistant integration for Venice AI. Private AI conversations in your smart home.",
    type: "GitHub Repo",
    url: "https://github.com/grasponcrypto/venice_ai",
    tags: ["Smart Home", "Integration", "Privacy"],
    category: "powered-by",
    stars: 13,
    forks: 3,
    language: "Python",
    owner: "grasponcrypto",
    repo: "venice_ai",
    submittedBy: "grasponcrypto",
  },
];

export const categoryLabels: Record<ProjectCategory, string> = {
  ecosystem: "Ecosystem",
  'powered-by': "Powered by Venice",
};

export const langColors: Record<string, string> = {
  TypeScript: '#3178c6',
  Python: '#3572A5',
  Rust: '#dea584',
  JavaScript: '#f1e05a',
  Go: '#00ADD8',
  MDX: '#fcb32c',
  HTML: '#e34c26',
  PHP: '#4F5D95',
};
