export type SiteLinks = {
  email: string;
  cv: string;
  github: string;
  scholar: string;
  linkedin?: string;
  dblp?: string;
};

export type ProjectLinks = {
  paper?: string;
  code?: string;
  demo?: string;
  slides?: string;
  zhihu?: string;
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

export type EducationItem = {
  school: string;
  degree: string;
  period: string;
  details?: string;
  highlights?: { label: string; url?: string }[];
  logo?: string;
};

export type ExperienceItem = {
  role: string;
  organization: string;
  period: string;
  details?: string;
  highlights?: { label: string; url?: string }[];
  logo?: string;
};

export type TeachingItem = {
  role: string;
  institution: string;
  courses: string[];
};

export type SiteConfig = {
  name: string;
  siteName: string;
  tagline: string;
  bio: string;
  siteUrl?: string;
  avatar?: string;
  lastUpdated: string;
  sourceUrl?: string;
  location: string;
  infoHubUrl?: string;
  links: SiteLinks;
  featuredProjects: Project[];
  selectedPublications: Publication[];
  resume?: {
    education: EducationItem[];
    experience: ExperienceItem[];
    academicService: string[];
    teaching: TeachingItem[];
  };
};

export const siteConfig: SiteConfig = {
  name: "Zhihao Li",
  siteName: "Zhihao Li",
  tagline: "PhD Student · DSA Thrust · Information Hub · HKUST(GZ)",
  bio: "My research focuses on AI for Science, particularly AI for PDEs, which involves leveraging machine learning to solve partial differential equations (PDEs) in interdisciplinary applications.",
  siteUrl: "https://lizhihao.me",
  avatar: "/avatar.jpg",
  lastUpdated: "2025-12-31",
  sourceUrl: "https://github.com/lizhihao2022/personal_page",
  location: "[Shenzhen, China]",
  infoHubUrl: "https://hkust-gz.edu.cn/academics/four-hubs/information-hub",
  links: {
    email: "mailto:zli416@connect.hkust-gz.edu.cn",
    cv: "/Academic_CV_Zhihao.pdf",
    github: "https://github.com/lizhihao2022",
    scholar: "https://scholar.google.com/citations?hl=en&user=hDVWqfYAAAAJ",
    dblp: "https://dblp.org/pid/40/2903-4.html",
    // linkedin: "https://www.linkedin.com/in/zhihao-li-561193246/",
  },
  featuredProjects: [
    {
      title: "Awesome AI4PDE",
      description: "A curated list of resources and literature focusing on the intersection of Artificial Intelligence and Partial Differential Equations (PDEs). ",
      tags: ["AI", "PDE", "Survey"],
      links: {
        demo: "https://ai4pde.notion.site/",
        zhihu: "https://www.zhihu.com/column/c_1872725027905990656",
        code: "https://github.com/lizhihao2022/Awesome-AI4PDE",
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
        doi: "https://dl.acm.org/doi/10.1145/3770854.3780179",
        arxiv: "https://arxiv.org/abs/2406.04822",
        code: "https://github.com/lizhihao2022/m2no"
      },
      cover: "/thumbnail/m2no.png",
      tags: ["Multi-Scale", "Multigrid", "Multi-Wavelet"],
    },
    {
      title: "Harnessing Scale and Physics: A Multi-Graph Neural Operator Framework for PDEs on Arbitrary Geometries",
      authors: "Zhihao Li, Haoze Song, Di Xiao, Zhilu Lai, Wei Wang",
      venue: "SIGKDD",
      year: 2025,
      links: {
        doi: "https://dl.acm.org/doi/10.1145/3690624.3709173",
        arxiv: "https://arxiv.org/abs/2411.15178",
        code: "https://github.com/lizhihao2022/AMG",
      },
      cover: "/thumbnail/amg.png",
      tags: ["Multi-Scale", "Arbitrary Geometry", "Graph Operator"],
    },
  ],
  resume: {
    education: [
      {
        school: "The Hong Kong University of Science and Technology (Guangzhou)",
        degree: "Ph.D. candidate, Data Science and Analytics",
        period: "Sep 2022 – Present",
        // details: "Ph.D. candidate in Data Science and Analytics.",
        highlights: [
          { label: "Supervisor: Prof. Wei Wang", url: "https://dbwangwei.github.io/" },
          { label: "Co-Supervisor: Prof. Zhilu Lai", url: "https://zlaidyn.github.io/" },
        ],
        logo: "/logos/ust.png",
      },
      {
        school: "Harbin Institute of Technology, Shenzhen",
        degree: "Bachelor's degree, Computer Science and Technology",
        period: "Sep 2018 – Jun 2022",
        // details: "Bachelor's degree in Computer Science and Technology.",
        highlights: [{ label: "Advisor: Prof. Qing Liao", url: "http://liaoqing.hitsz.edu.cn/" }],
        logo: "/logos/hit.png",
      },
    ],
    experience: [
      {
        role: "AI Engineering Intern",
        organization: "Huawei 2012 Lab",
        period: "Aug 2025 – Present",
        details: "Led end-to-end development of an ocean modeling system on Huawei Ascend using MindSpore.",
        highlights: [
          { label: "Leader: Dr. Fan Yu" },
          { label: "Mentor: Dr. Yi Zhang" },
        ],
        logo: "/logos/huawei.png",
      },
      {
        role: "Cross-Campus Study",
        organization: "The Hong Kong University of Science and Technology (CWB)",
        period: "Jan 2025 – Aug 2025",
        details: "Department of Mathematics; advanced deep learning methods for PDE and materials.",
        highlights: [
          { label: "Host Supervisor: Prof. Yang Xiang", url: "https://www.math.hkust.edu.hk/people/faculty/profile/maxiang/" },
        ],
        logo: "/logos/ust.png",
      },
      {
        role: "Research Internship",
        organization: "The Chinese University of Hong Kong",
        period: "Apr 2021 – Apr 2022",
        details: "Department of Computer Science and Engineering; work on knowledge graphs, recommender systems, and graph neural networks in hyperbolic space.",
        highlights: [
          { label: "Advisor: Prof. Irwin King", url: "https://www.cse.cuhk.edu.hk/irwin.king/home" },
          { label: "Mentor: Dr. Menglin Yang", url: "http://yangmenglin.site/" },
        ],
        logo: "/logos/cuhk.png",
      },
    ],
    academicService: ["Reviewer (2025): NeurIPS, ICLR, AAAI, AI4Math@ICML"],
    teaching: [
      {
        role: "Graduate Teaching Assistant",
        institution: "The Hong Kong University of Science and Technology (Guangzhou)",
        courses: [
          "DSAA 5009: Deep Learning in Data Science (2024 Spring)",
          "FUNH 5010: Introduction to Materials Informatics (2022 Fall)",
        ],
      },
    ],
  },
};
