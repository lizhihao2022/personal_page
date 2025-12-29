export type PublicationLink = {
  label: string;
  href: string;
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
};

export const publicationEntries: PublicationEntry[] = [
  {
    id: "C3",
    title: "M2NO: An Efficient Multi-Resolution Operator Framework for Dynamic Multi-Scale PDE Solvers",
    authors: "Zhihao Li, Zhilu Lai, Xiaobo Zhang, Wei Wang",
    year: 2025,
    venue: "Proceedings of the 32nd ACM SIGKDD Conference on Knowledge Discovery and Data Mining",
    type: "C",
    links: [{ label: "Arxiv", href: "https://arxiv.org/abs/2406.04822" }],
    tags: ["Conference"],
  },
  {
    id: "C2",
    title: "Harnessing Scale and Physics: A Multi-Graph Neural Operator Framework for PDEs on Arbitrary Geometries",
    authors: "Zhihao Li, Haoze Song, Di Xiao, Zhilu Lai, Wei Wang",
    year: 2024,
    venue: "Proceedings of the 31th ACM SIGKDD Conference on Knowledge Discovery and Data Mining",
    type: "C",
    links: [
      { label: "Paper", href: "https://dl.acm.org/doi/10.1145/3690624.3709173" },
      { label: "Arxiv", href: "https://arxiv.org/abs/2411.15178" },
      { label: "Github", href: "https://github.com/lizhihao2022/amg" },
    ],
    tags: ["Conference", "Graph Operators"],
  },
  {
    id: "C1",
    title: "HICF: Hyperbolic Informative Collaborative Filtering",
    authors: "Menglin Yang, Zhihao Li, Min Zhou, Jiahong Liu, Irwin King",
    year: 2022,
    venue: "Proceedings of the 28th ACM SIGKDD Conference on Knowledge Discovery and Data Mining",
    type: "C",
    links: [
      { label: "Paper", href: "https://dl.acm.org/doi/10.1145/3534678.3539475" },
      { label: "Arxiv", href: "https://arxiv.org/abs/2207.09051" },
      { label: "Github", href: "https://github.com/marlin-codes/HICF" },
    ],
    tags: ["Conference", "Recommender Systems"],
  },
  {
    id: "P1",
    title: "Hyperbolic Graph Neural Networks: A Review of Methods and Applications",
    authors: "Menglin Yang, Min Zhou, Zhihao Li, Jiahong Liu, Lujia Pan, Hui Xiong, Irwin King",
    year: 2022,
    venue: "Preprint",
    type: "P",
    links: [{ label: "Arxiv", href: "https://arxiv.org/abs/2202.13852" }],
    tags: ["Preprint", "Survey"],
  },
];
