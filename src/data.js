export const siteData = {
  name: 'Snir Hordan',
  title: 'PhD Candidate, Applied Mathematics',
  tagline: 'Building provably complete and efficient neural networks for geometric data.',
  bio: 'I research machine learning models that process geometric data such as graphs and point clouds. My work focuses on identifying fundamental limitations of geometric models and developing provably complete architectures with moderate computational cost. These methods have direct applications in drug discovery, molecular simulation, and 3D computer vision.',
  affiliation: {
    university: { name: 'Technion, Israel Institute of Technology', url: 'https://www.technion.ac.il/' },
    faculty: 'Faculty of Mathematics',
    supervisor: { name: 'Asst. Prof. Nadav Dym', url: 'https://nadavdym.github.io/' },
  },
  links: {
    email: 'mailto:snirhordan@campus.technion.ac.il',
    scholar: 'https://scholar.google.com/citations?user=T2YJQPoAAAAJ&hl=en',
    github: 'https://github.com/snirhordan',
    linkedin: 'https://www.linkedin.com/in/senirhordan',
    cv: 'snir_hordan_cv.pdf',
  },
};

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'News', href: '#news' },
  { label: 'Publications', href: '#publications' },
  { label: 'Insights', href: '#insights' },
  { label: 'Awards', href: '#awards' },
  { label: 'Code', href: '#code' },
  { label: 'Talks', href: '#talks' },
  { label: 'CV', href: 'snir_hordan_cv.pdf' },
];

export const newsItems = [
  {
    date: '2026',
    content: 'Received the <strong><a href="https://graduate.technion.ac.il/en/pictures/">Jacobs Prize for Excellent Publication</a></strong> (6 out of all graduate students, Technion).',
  },
  {
    date: 'Jan 2026',
    content: 'Talk at the <strong>Pizza Seminar</strong>, Technion.',
  },
  {
    date: 'Dec 2025',
    content: 'Invited talk at the <strong><a href="https://www.simonsfoundation.org/flatiron/">Flatiron Institute</a></strong>, New York.',
  },
  {
    date: '2025',
    content: 'Our paper on spectral GNNs accepted at <strong>NeurIPS 2025</strong> as a <span class="spotlight">Spotlight (top 3%)</span>.',
  },
  {
    date: '2025',
    content: 'Co-organized <strong>Learning on Graphs</strong> workshop in Tel Aviv with Maya Bechler-Speicher and Guy Bar-Shalom.',
  },
  {
    date: '2024',
    content: 'Talk at the <strong><a href="https://www.idsai.technion.ac.il/">Israel Data Science Initiative (IDSI)</a></strong>.',
    hidden: true,
  },
  {
    date: '2024',
    content: 'Paper on Weisfeiler Leman for Euclidean equivariant ML presented at <strong>ICML 2024</strong>.',
    hidden: true,
  },
  {
    date: '2024',
    content: 'Paper on complete neural networks for Euclidean graphs presented at <strong>AAAI 2024</strong>.',
    hidden: true,
  },
];

export const awards = [
  {
    year: '2026',
    text: '<strong><a href="https://graduate.technion.ac.il/en/pictures/">Jacobs Prize for Excellent Publication</a></strong> (6 out of all graduate students, Technion).',
  },
  {
    year: '2025',
    text: '<strong>Gloria and Ken Levy Foundation Fellowship</strong>.',
  },
  {
    year: '2024',
    text: '<strong>Research Excellence Award in Memory of Prof. Lior Merkin</strong>, Technion, Department of Applied Mathematics.',
  },
  {
    year: '2023',
    text: '<strong>Department of Applied Mathematics Excellence Scholarship</strong>, Technion.',
  },
  {
    year: '2020',
    text: '<strong>Dean\'s Excellence Award</strong>, B.Sc. Mathematics, Technion.',
  },
];

export const publications = [
  {
    id: 'approx-rates',
    title: 'Quantitative Approximation Rates for Group Equivariant Learning',
    titleUrl: 'https://arxiv.org/abs/2602.20370',
    authors: [
      { name: 'JW Siegel', url: 'https://jwsiegel2510.github.io/' },
      { name: 'S Hordan', bold: true },
      { name: 'H Lawrence', url: 'https://hannahlawrence.github.io/' },
      { name: 'A Syed' },
      { name: 'N Dym', url: 'https://nadavdym.github.io/' },
    ],
    venue: 'arXiv preprint',
    venueShort: 'arXiv',
    year: 2026,
    image: null,
    abstract: 'The universal approximation theorem establishes that neural networks can approximate any continuous function on a compact set. Later works in approximation theory provide quantitative approximation rates for ReLU networks on the class of α-Hölder functions f: [0,1]^N → ℝ. The goal of this paper is to provide similar quantitative approximation results in the context of group equivariant learning, where the learned α-Hölder function is known to obey certain group symmetries. While there has been much interest in the literature in understanding the universal approximation properties of equivariant models, very few quantitative approximation results are known for equivariant models. In this paper, we bridge this gap by deriving quantitative approximation rates for several prominent group-equivariant and invariant architectures. The architectures that we consider include: the permutation-invariant Deep Sets architecture; the permutation-equivariant Sumformer and Transformer architectures; joint invariance to permutations and rigid motions using invariant networks based on frame averaging; and general bi-Lipschitz invariant models. Overall, we show that equally-sized ReLU MLPs and equivariant architectures are equally expressive over equivariant functions. Thus, hard-coding equivariance does not result in a loss of expressivity or approximation power in these models.',
    links: [
      { label: 'arXiv', url: 'https://arxiv.org/abs/2602.20370' },
    ],
  },
  {
    id: 'spectral-gnn',
    title: 'Spectral Graph Neural Networks are Incomplete on Graphs with a Simple Spectrum',
    titleUrl: 'https://arxiv.org/abs/2506.05530',
    authors: [
      { name: 'S Hordan', bold: true },
      { name: 'M Bechler-Speicher', url: 'https://scholar.google.com/citations?user=5Fj_AUoAAAAJ&hl=en' },
      { name: 'G Lifshitz' },
      { name: 'N Dym', url: 'https://nadavdym.github.io/' },
    ],
    venue: 'Conference on Neural Information Processing Systems',
    venueShort: 'NeurIPS',
    year: 2025,
    spotlight: 'Spotlight, top 3%',
    image: 'projects/spectral-gnn/rep.png',
    imageAlt: 'Spectral GNN illustration',
    abstract: 'We prove that spectral graph neural networks are incomplete on graphs with a simple spectrum, establishing fundamental expressiveness limitations of spectral GNN architectures. We further propose a novel spectral GNN architecture that overcomes these limitations.',
    links: [
      { label: 'arXiv', url: 'https://arxiv.org/abs/2506.05530' },
      { label: 'Code (equiEPNN)', url: 'https://github.com/IntelliFinder/equiEPNN' },
    ],
  },
  {
    id: 'wl-euclidean',
    title: 'Weisfeiler Leman for Euclidean Equivariant Machine Learning',
    titleUrl: 'https://arxiv.org/abs/2402.02484',
    authors: [
      { name: 'S Hordan', bold: true },
      { name: 'T Amir', url: 'https://tal-amir.github.io/' },
      { name: 'N Dym', url: 'https://nadavdym.github.io/' },
    ],
    venue: 'International Conference on Machine Learning',
    venueShort: 'ICML',
    year: 2024,
    image: 'projects/wl-euclidean/rep.png',
    imageAlt: 'WL for Euclidean equivariant ML',
    abstract: 'We construct the first universal and equivariant 3D point cloud network with polynomial complexity, solving a key open problem in the field. We achieve state-of-the-art results on molecular conformation generation benchmarks.',
    links: [
      { label: 'arXiv', url: 'https://arxiv.org/abs/2402.02484' },
      { label: 'Code', url: 'https://github.com/IntelliFinder/welnet' },
      { label: 'ICML 2024', url: 'https://icml.cc/Conferences/2024' },
    ],
  },
  {
    id: 'complete-nn',
    title: 'Complete Neural Networks for Euclidean Graphs',
    titleUrl: 'https://arxiv.org/abs/2301.13821',
    authors: [
      { name: 'S Hordan', bold: true },
      { name: 'T Amir', url: 'https://tal-amir.github.io/' },
      { name: 'SJ Gortler', url: 'https://www.eecs.harvard.edu/~sjg/' },
      { name: 'N Dym', url: 'https://nadavdym.github.io/' },
    ],
    venue: 'AAAI Conference on Artificial Intelligence',
    venueShort: 'AAAI',
    year: 2024,
    image: 'projects/complete-nn/rep.png',
    imageAlt: 'Complete neural networks for Euclidean graphs',
    abstract: 'We construct a universal invariant 3D point cloud network with polynomial time complexity. The architecture is provably complete for Euclidean graphs, developed in collaboration with Harvard University.',
    links: [
      { label: 'arXiv', url: 'https://arxiv.org/abs/2301.13821' },
      { label: 'AAAI 2024', url: 'https://aaai-24.aaai.org/' },
    ],
  },
];

export const talks = [
  { venue: 'Pizza Seminar, Technion', date: 'Jan 2026' },
  { venue: 'Flatiron Institute', venueUrl: 'https://www.simonsfoundation.org/flatiron/', suffix: ', New York', date: 'Dec 2025' },
  { venue: 'Learning on Graphs Workshop, Tel Aviv (Co-organizer)', date: '2025' },
  { venue: 'Israel Data Science Initiative (IDSI)', venueUrl: 'https://www.idsai.technion.ac.il/', date: '2024' },
];

export const codeProjects = [
  {
    name: 'equiEPNN',
    url: 'https://github.com/IntelliFinder/equiEPNN',
    description: 'Equivariant spectral GNN for molecular property prediction. Fixes fundamental expressiveness limitations of standard spectral architectures.',
    highlight: 'NeurIPS 2025 Spotlight',
    tags: ['Python', 'PyTorch', 'CUDA'],
  },
  {
    name: 'welnet',
    url: 'https://github.com/IntelliFinder/welnet',
    description: 'Universal equivariant 3D point cloud network with polynomial complexity. Achieves SOTA on molecular conformation generation (GEOM-QM9).',
    highlight: 'ICML 2024',
    tags: ['Python', 'PyTorch Geometric'],
  },
];

export const collaborators = [
  { name: 'Hannah Lawrence', url: 'https://hannahlawrence.github.io/' },
  { name: 'Jonathan Siegel', url: 'https://jwsiegel2510.github.io/' },
  { name: 'Maya Bechler-Speicher', url: 'https://scholar.google.com/citations?user=5Fj_AUoAAAAJ&hl=en' },
  { name: 'Tal Amir', url: 'https://tal-amir.github.io/' },
  { name: 'Steven J. Gortler', url: 'https://www.eecs.harvard.edu/~sjg/' },
  { name: 'Nadav Dym', url: 'https://nadavdym.github.io/' },
  { name: 'Gur Lifshitz', url: 'https://www.semanticscholar.org/author/2052395556' },
];

export const teaching = [
  {
    title: 'Deep Learning and Groups',
    years: '2024, 2025',
    role: 'Head Teaching Assistant',
    details: 'Technion, Electrical and Computer Engineering Faculty. Co-wrote a new course with <a href="https://haggaim.github.io/">Asst. Prof. Haggai Maron</a>.',
  },
];

export const insights = [
  {
    title: 'Why Your GNN Fails on Symmetric Molecules',
    summary: 'Spectral features like Laplacian eigenvectors are widely used to boost GNN expressiveness, but we proved that spectral GNN architectures still cannot distinguish certain non-isomorphic graphs — even when the spectrum has no repeated eigenvalues. We propose a provably more expressive spectral architecture based on rotation-equivariant networks.',
    domains: ['Graph Learning', 'GNN Design'],
    paperUrl: 'https://arxiv.org/abs/2506.05530',
  },
  {
    title: 'Processing 3D Point Clouds Without Exponential Blowup',
    summary: 'Prior complete 3D point cloud networks required exponential time, making them impractical for real-world molecules. We constructed the first universal equivariant architecture with polynomial complexity, achieving state-of-the-art results on molecular conformation generation and N-body dynamics.',
    domains: ['Molecular Simulation', '3D Vision', 'Physics Simulation'],
    paperUrl: 'https://arxiv.org/abs/2402.02484',
  },
  {
    title: 'Hard-Coding Symmetry Doesn\'t Cost You Expressiveness',
    summary: 'A common concern is that hard-coding symmetry constraints might limit what a network can learn. We proved this is not the case: for several prominent equivariant architectures — including Deep Sets, Transformers, and frame-averaging models — equivariant networks match the approximation rates of equally-sized unconstrained MLPs on symmetric functions.',
    domains: ['ML Theory', 'Architecture Design'],
    paperUrl: 'https://arxiv.org/abs/2602.20370',
  },
];

export const skills = [
  { category: 'ML & Deep Learning', items: ['PyTorch', 'PyTorch Geometric', 'CUDA', 'Graph Neural Networks', 'Equivariant Networks', 'Spectral Methods'] },
  { category: 'Languages & Tools', items: ['Python', 'Git', 'Linux', 'LaTeX'] },
  { category: 'Research Domains', items: ['Group Theory', 'Spectral Theory', 'Approximation Theory', 'Geometric Deep Learning'] },
];
