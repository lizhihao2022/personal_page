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
  cover?: string;
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
  cover?: string;
  tags?: string[];
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
  tagline: "PhD Student · DSA Thrust · HKUST(GZ)",
  bio: "My research focuses on AI for Science, particularly AI for PDEs, which involves leveraging machine learning to solve partial differential equations (PDEs) in interdisciplinary applications.",
  siteUrl: "https://lizhihao.me",
  avatar: "/avatar.jpg",
  links: {
    email: "mailto:zli416@connect.hkust-gz.edu.cn",
    cv: "/Academic_CV_Zhihao.pdf",
    github: "https://github.com/lizhihao2022",
    scholar: "https://scholar.google.com/citations?hl=en&user=hDVWqfYAAAAJ",
    linkedin: "https://linkedin.com/in/[HANDLE]",
  },
  featuredProjects: [
    {
      title: "Awesome AI4PDE",
      description: "A curated list of resources and literature focusing on the intersection of Artificial Intelligence and Partial Differential Equations (PDEs). ",
      tags: ["AI", "PDE", "Survey"],
      links: {
        paper: "https://arxiv.org/abs/0000.00000",
        code: "https://github.com/lizhihao2022/Awesome-AI4PDE",
        demo: "https://ai4pde.notion.site/",
      },
      cover: "/thumbnail/ai4pde.png",
    },
  ],
  selectedPublications: [
    {
      title: "M2NO: An Efficient Multi-Resolution Operator Framework for Dynamic Multi-Scale PDE Solvers",
      authors: "Zhihao Li, Zhilu Lai, Xiaobo Zhang, Wei Wang",
      venue: "SIGKDD",
      year: 2026,
      links: {
        arxiv: "https://arxiv.org/abs/2406.04822",
        doi: "https://papers.example.com/neural-operators.pdf",
        code: "https://github.com/lizhihao2022/m2no"
      },
      cover: "/thumbnail/m2no.png",
      tags: ["PDE", "Operator Learning"],
    },
    {
      title: "Harnessing Scale and Physics: A Multi-Graph Neural Operator Framework for PDEs on Arbitrary Geometries",
      authors: "Zhihao Li, Haoze Song, Di Xiao, Zhilu Lai, Wei Wang",
      venue: "SIGKDD",
      year: 2025,
      links: {
        doi: "https://dl.acm.org/doi/10.1145/3690624.3709173",
        arxiv: "https://arxiv.org/abs/2411.15178",
        code: "https://github.com/lizhihao2022/amg",
      },
      cover: "/thumbnail/amg.png",
      tags: ["Multi-Scale", "Graph Operators"],
    },
    {
      title: "HICF: Hyperbolic Informative Collaborative Filtering",
      authors: "Menglin Yang, Zhihao Li, Min Zhou, Jiahong Liu, Irwin King",
      venue: "SIGKDD",
      year: 2022,
      links: {
        doi: "https://dl.acm.org/doi/10.1145/3534678.3539475",
        arxiv: "https://arxiv.org/abs/2207.09051",
        code: "https://github.com/marlin-codes/HICF"
      },
      cover: "/publication-placeholder.svg",
      tags: ["Recommender", "Hyperbolic"],
    },
  ],
  contact: {
    email: "[YOUR_EMAIL]",
    location: "[City, Country]",
  },
};
