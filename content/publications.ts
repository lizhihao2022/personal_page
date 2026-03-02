export type PublicationLink = {
  label: string;
  href: string;
  stars?: number;
  repo?: string;
};

export type PublicationEntry = {
  id: string;
  title: string;
  authors: string;
  year: number;
  venue: string;
  type: "C" | "J" | "P" | "T";
  links: PublicationLink[];
  tags?: string[];
  logo?: string;
};

export const publicationEntries: PublicationEntry[] = [
  {
    id: "C4",
    title: "Physics-Consistent Diffusion for Efficient Fluid Super-Resolution via Multiscale Residual Correction",
    authors: "Zhihao Li, Shengwei Dong, Chuang Yi, Junxuan Gao, Zhilu Lai, Zhiqiang Liu, Wei Wang, Guangtao Zhang",
    year: 2026,
    venue: "Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition",
    type: "C",
    links: [
      { label: "GitHub", href: "https://github.com/lizhihao2022/ReMD", stars: 0, repo: "lizhihao2022/ReMD" },
    ],
    tags: ["Fluid", "Super-Resolution", "Diffusion Model", "Multigrid"],
    logo: "/logos/cvpr.png",
  },
  {
    id: "P3",
    title: "From Basis to Basis: Gaussian Particle Representation for Interpretable PDE Operators",
    authors: "Zhihao Li, Yu Feng, Zhilu Lai, Wei Wang",
    year: 2026,
    venue: "Preprint",
    type: "P",
    links: [
      { label: "arXiv", href: "https://arxiv.org/abs/2602.21551" },
    ],
    tags: ["Gaussian Particles", "Interpretable Operators"],
    logo: "/logos/arxiv.svg",
  },
  {
    id: "P2",
    title: " Neural Preconditioning Operator for Efficient PDE Solves",
    authors: "Zhihao Li, Di Xiao, Zhilu Lai, Wei Wang",
    year: 2025,
    venue: "Preprint",
    type: "P",
    links: [
      { label: "arXiv", href: "https://arxiv.org/abs/2502.01337" },
    ],
    tags: ["Preconditioner", "PDE Solvers"],
    logo: "/logos/arxiv.svg",
  },
  {
    id: "C3",
    title: "M2NO: An Efficient Multi-Resolution Operator Framework for Dynamic Multi-Scale PDE Solvers",
    authors: "Zhihao Li, Zhilu Lai, Xiaobo Zhang, Wei Wang",
    year: 2025,
    venue: "Proceedings of the 32nd ACM SIGKDD Conference on Knowledge Discovery and Data Mining",
    type: "C",
    links: [
      { label: "DOI", href: "https://dl.acm.org/doi/10.1145/3770854.3780179" },
      { label: "arXiv", href: "https://arxiv.org/abs/2406.04822" },
      { label: "GitHub", href: "https://github.com/lizhihao2022/m2no", stars: 0, repo: "lizhihao2022/m2no" },
    ],
    tags: ["Multi-Wavelet", "Multigrid"],
    logo: "/logos/sigkdd.png",
  },
  {
    id: "C2",
    title: "Harnessing Scale and Physics: A Multi-Graph Neural Operator Framework for PDEs on Arbitrary Geometries",
    authors: "Zhihao Li, Haoze Song, Di Xiao, Zhilu Lai, Wei Wang",
    year: 2024,
    venue: "Proceedings of the 31th ACM SIGKDD Conference on Knowledge Discovery and Data Mining",
    type: "C",
    links: [
      { label: "DOI", href: "https://dl.acm.org/doi/10.1145/3690624.3709173" },
      { label: "arXiv", href: "https://arxiv.org/abs/2411.15178" },
      { label: "GitHub", href: "https://github.com/lizhihao2022/AMG", stars: 0, repo: "lizhihao2022/AMG" },
    ],
    tags: ["Graph Operators", "Arbitrary Geometry"],
    logo: "/logos/sigkdd.png",
  },
  {
    id: "C1",
    title: "HICF: Hyperbolic Informative Collaborative Filtering",
    authors: "Menglin Yang, Zhihao Li, Min Zhou, Jiahong Liu, Irwin King",
    year: 2022,
    venue: "Proceedings of the 28th ACM SIGKDD Conference on Knowledge Discovery and Data Mining",
    type: "C",
    links: [
      { label: "DOI", href: "https://dl.acm.org/doi/10.1145/3534678.3539475" },
      { label: "arXiv", href: "https://arxiv.org/abs/2207.09051" },
      { label: "GitHub", href: "https://github.com/marlin-codes/HICF", stars: 0, repo: "marlin-codes/HICF" },
    ],
    tags: ["Recommender Systems", "Hyperbolic"],
    logo: "/logos/sigkdd.png",
  },
  {
    id: "P1",
    title: "Hyperbolic Graph Neural Networks: A Review of Methods and Applications",
    authors: "Menglin Yang, Min Zhou, Zhihao Li, Jiahong Liu, Lujia Pan, Hui Xiong, Irwin King",
    year: 2022,
    venue: "Preprint",
    type: "P",
    links: [
      { label: "arXiv", href: "https://arxiv.org/abs/2202.13852" },
      { label: "GitHub", href: "https://github.com/digailab/awesome-hyperbolic-graph-learning", stars: 0, repo: "digailab/awesome-hyperbolic-graph-learning" },
    ],
    tags: ["Survey", "Hyperbolic", "Graph Neural Networks"],
    logo: "/logos/arxiv.svg",
  },
];
