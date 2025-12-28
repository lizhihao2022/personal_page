export type SiteLinks = {
  email: string;
  cv: string;
  github: string;
  scholar: string;
  linkedin?: string;
};

export type ProjectLinks = {
  paper?: string;
  code?: string;
  demo?: string;
  slides?: string;
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  links: ProjectLinks;
};

export type PublicationLinks = {
  pdf?: string;
  arxiv?: string;
  doi?: string;
  code?: string;
};

export type Publication = {
  title: string;
  authors: string;
  venue: string;
  year: number;
  links: PublicationLinks;
};

export type SiteConfig = {
  name: string;
  tagline: string;
  bio: string;
  siteUrl?: string;
  avatar?: string;
  links: SiteLinks;
  featuredProjects: Project[];
  selectedPublications: Publication[];
  contact: {
    email: string;
    location: string;
  };
};

export const siteConfig: SiteConfig = {
  name: "Zhihao Li",
  tagline: "[e.g., PhD Student · Neural Operators · Multi-scale PDE]",
  bio: "[2–3 sentences about your research focus, interests, and what you're excited to build next.]",
  siteUrl: "https://example.com",
  avatar: "/avatar.jpg",
  links: {
    email: "mailto:zli416@connect.hkust-gz.edu.cn",
    cv: "/files/cv.pdf",
    github: "https://github.com/lizhihao2022",
    scholar: "https://scholar.google.com/citations?hl=en&user=hDVWqfYAAAAJ",
    linkedin: "https://linkedin.com/in/[HANDLE]",
  },
  featuredProjects: [
    {
      title: "Project Atlas",
      description: "A lightweight toolkit for rapid prototyping of operator-learning architectures on multi-resolution PDE datasets.",
      tags: ["Neural Operators", "PDE", "TypeScript"],
      links: {
        paper: "https://arxiv.org/abs/0000.00000",
        code: "https://github.com/[USERNAME]/atlas",
        demo: "https://atlas-demo.example.com",
      },
    },
    {
      title: "SparseFlow",
      description: "Compressed inference pipeline for flow-based generative models with adaptive sparsity controls.",
      tags: ["Generative Models", "Compression", "Python"],
      links: {
        paper: "https://arxiv.org/abs/0000.00000",
        code: "https://github.com/[USERNAME]/sparseflow",
        slides: "https://slides.example.com/sparseflow.pdf",
      },
    },
    {
      title: "BoundaryNet",
      description: "Hybrid physics-ML solver that stabilizes boundary conditions for turbulent regimes in shallow water equations.",
      tags: ["Physics-ML", "Simulation", "C++"],
      links: {
        paper: "https://arxiv.org/abs/0000.00000",
        code: "https://github.com/[USERNAME]/boundarynet",
      },
    },
  ],
  selectedPublications: [
    {
      title: "Neural Operators for Multi-Scale PDEs",
      authors: "[Your Name], Collaborator A, Collaborator B",
      venue: "ICLR",
      year: 2024,
      links: {
        arxiv: "https://arxiv.org/abs/0000.00000",
        pdf: "https://papers.example.com/neural-operators.pdf",
      },
    },
    {
      title: "Stable Solvers via Boundary-Conscious Networks",
      authors: "[Your Name], Collaborator C",
      venue: "NeurIPS",
      year: 2023,
      links: {
        pdf: "https://papers.example.com/boundary-conscious.pdf",
        code: "https://github.com/[USERNAME]/boundary-conscious",
      },
    },
    {
      title: "Adaptive Sparsity for Flow Models",
      authors: "[Your Name], Collaborator D",
      venue: "ICML",
      year: 2023,
      links: {
        arxiv: "https://arxiv.org/abs/0000.00000",
        doi: "https://doi.org/10.0000/example",
      },
    },
    {
      title: "Operator Learning with Limited Data",
      authors: "[Your Name], Collaborator E",
      venue: "AAAI",
      year: 2022,
      links: {
        pdf: "https://papers.example.com/operator-learning.pdf",
        code: "https://github.com/[USERNAME]/operator-learning",
      },
    },
    {
      title: "Structured Priors for Turbulent Systems",
      authors: "[Your Name], Collaborator F",
      venue: "JMLR",
      year: 2021,
      links: {
        arxiv: "https://arxiv.org/abs/0000.00000",
        pdf: "https://papers.example.com/structured-priors.pdf",
      },
    },
  ],
  contact: {
    email: "[YOUR_EMAIL]",
    location: "[City, Country]",
  },
};
