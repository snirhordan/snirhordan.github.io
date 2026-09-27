export const siteData = {
  name: 'Snir Hordan',
  title: 'PhD Candidate, Applied Mathematics',
  bio: 'I research machine learning models that process geometric data such as graphs and point clouds. My work focuses on identifying fundamental limitations of geometric models and developing provably complete architectures with moderate computational cost. These methods have direct applications in drug discovery, molecular simulation, and 3D computer vision.',
  affiliation: {
    university: { name: 'Technion, Israel Institute of Technology', url: 'https://www.technion.ac.il/' },
    faculty: 'Faculty of Mathematics',
    supervisor: { name: 'Asst. Prof. Nadav Dym', url: 'https://nadavdym.github.io/' },
  },
  nextPosition: {
    role: 'Incoming Postdoctoral Researcher',
    institution: { name: 'University of Oxford', url: 'https://www.ox.ac.uk/' },
    department: { name: 'Department of Computer Science', url: 'https://www.cs.ox.ac.uk/' },
    host: { name: 'Prof. Michael Bronstein', url: 'https://www.cs.ox.ac.uk/people/michael.bronstein/' },
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
  { label: 'News', href: '#news' },
  { label: 'Publications', href: '#publications' },
  { label: 'Awards', href: '#awards' },
  { label: 'Talks', href: '#talks' },
  { label: 'CV', href: 'snir_hordan_cv.pdf' },
];

export const newsItems = [
  {
    date: 'Sep 2026',
    content: 'Will join the <strong><a href="https://www.cs.ox.ac.uk/">Department of Computer Science, University of Oxford</a></strong> as a postdoctoral researcher with <a href="https://www.cs.ox.ac.uk/people/michael.bronstein/">Prof. Michael Bronstein</a>.',
  },
  {
    date: 'Sep 2026',
    content: 'Two papers accepted at <strong>NeurIPS 2026</strong>: <strong><a href="https://arxiv.org/abs/2605.23446">PRiSM</a></strong> (Weisfeiler-Leman is incomplete on simple-spectrum graphs) as a <span class="spotlight">Spotlight (top 5.1% of accepted papers)</span>, and <strong><a href="https://arxiv.org/abs/2605.11008">When and How to Canonize</a></strong>.',
  },
  {
    date: 'July 2026',
    content: 'Mentored a student team at the <strong><a href="https://www.logml.ai/">London Geometry and Machine Learning Summer School (LogML 2026)</a></strong>, leading a project on canonicalizing symmetric molecular point clouds.',
  },
  {
    date: 'May 2026',
    content: 'New preprint: <strong><a href="https://arxiv.org/abs/2605.23446">PRiSM</a></strong>, the first provably complete canonicalization for simple-spectrum graphs, resolving the open problem of complete expressivity for spectral GNNs.',
  },
  {
    date: '2026',
    content: 'Received the <strong><a href="https://graduate.technion.ac.il/en/pictures/">Jacobs Prize for Excellent Publication</a></strong> (one of six recipients among all Technion graduate students).',
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
    content: 'Our paper on spectral GNNs accepted at <strong>NeurIPS 2025</strong> as a <span class="spotlight">Spotlight (top 14.5% of accepted papers)</span>.',
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
    text: '<strong><a href="https://graduate.technion.ac.il/en/pictures/">Jacobs Prize for Excellent Publication</a></strong> (one of six recipients among all Technion graduate students).',
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
    id: 'prism-simple-spectrum',
    title: 'Weisfeiler-Leman Is Incomplete on Simple Spectrum Graphs, so Canonicalize Them',
    titleUrl: 'https://arxiv.org/abs/2605.23446',
    authors: [
      { name: 'Snir Hordan', bold: true },
      { name: 'Nadav Dym', url: 'https://nadavdym.github.io/' },
      { name: 'Tim Seppelt', url: 'https://tseppelt.github.io/' },
    ],
    venue: 'Conference on Neural Information Processing Systems',
    venueShort: 'NeurIPS',
    year: 2026,
    featured: true,
    spotlight: 'Spotlight, top 5.1% of accepted papers',
    image: null,
    abstract: 'Graphs with a simple spectrum admit cubic-time isomorphism testing, yet we prove that for every k, the k-Weisfeiler-Leman (k-WL) test cannot distinguish all non-isomorphic graphs with a simple spectrum. Since the WL hierarchy upper-bounds the distinguishing power of GNNs, this incompleteness rules out completeness for every k-WL-aligned GNN family. To close this gap, we introduce PRiSM (Partition, Refine, Solve, Match), the first provably complete canonicalization of simple-spectrum eigendecompositions. Composed with DeepSets or a Transformer, PRiSM achieves universal approximation on simple-spectrum graphs — justifying canonicalized Laplacian positional encodings — and matches or outperforms existing spectral canonicalizations on graph regression, classification, and expressivity benchmarks.',
    links: [
      { label: 'arXiv', url: 'https://arxiv.org/abs/2605.23446' },
    ],
  },
  {
    id: 'canonize-generalization',
    title: 'When and How to Canonize: A Generalization Perspective',
    titleUrl: 'https://arxiv.org/abs/2605.11008',
    authors: [
      { name: 'Yonatan Sverdlov', url: 'https://scholar.google.com/citations?user=M4o74roAAAAJ&hl=en' },
      { name: 'Benjamin Friedman' },
      { name: 'Snir Hordan', bold: true },
      { name: 'Nadav Dym', url: 'https://nadavdym.github.io/' },
    ],
    venue: 'Conference on Neural Information Processing Systems',
    venueShort: 'NeurIPS',
    year: 2026,
    image: null,
    abstract: 'When should invariance be achieved by canonization rather than by an invariant architecture? We develop a theoretical framework that bounds the generalization error of group averaging and canonization via covering numbers, establishing a hierarchy: canonized models are at best as tight as structurally invariant and group-averaged models, and at worst as loose as non-invariant baselines, depending on the regularity of the canonization. Applied to point clouds, the framework proves that lexicographical sorting has a covering number growing exponentially with dimension, whereas Hilbert-curve canonization grows only polynomially — the first formal justification for the empirical success of Hilbert-curve serialization in state-of-the-art point cloud architectures.',
    links: [
      { label: 'arXiv', url: 'https://arxiv.org/abs/2605.11008' },
      { label: 'Code', url: 'https://github.com/yonatansverdlov/Canonization' },
    ],
  },
  {
    id: 'approx-rates',
    title: 'Quantitative Approximation Rates for Group Equivariant Learning',
    titleUrl: 'https://arxiv.org/abs/2602.20370',
    authors: [
      { name: 'Jonathan W. Siegel', url: 'https://jwsiegel2510.github.io/' },
      { name: 'Snir Hordan', bold: true },
      { name: 'Hannah Lawrence', url: 'https://hannahlawrence.github.io/' },
      { name: 'Ali Syed' },
      { name: 'Nadav Dym', url: 'https://nadavdym.github.io/' },
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
      { name: 'Snir Hordan', bold: true },
      { name: 'Maya Bechler-Speicher', url: 'https://scholar.google.com/citations?user=5Fj_AUoAAAAJ&hl=en' },
      { name: 'Gur Lifshitz' },
      { name: 'Nadav Dym', url: 'https://nadavdym.github.io/' },
    ],
    venue: 'Conference on Neural Information Processing Systems',
    venueShort: 'NeurIPS',
    year: 2025,
    spotlight: 'Spotlight, top 14.5% of accepted papers',
    image: 'projects/spectral-gnn/rep.png',
    imageAlt: 'Spectral GNN illustration',
    abstract: 'We prove that spectral graph neural networks are incomplete on graphs with a simple spectrum, establishing fundamental expressiveness limitations of spectral GNN architectures. We further propose a novel spectral GNN architecture that overcomes these limitations.',
    videoUrl: 'https://neurips.cc/virtual/2025/loc/san-diego/poster/120021',
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
      { name: 'Snir Hordan', bold: true },
      { name: 'Tal Amir', url: 'https://tal-amir.github.io/' },
      { name: 'Nadav Dym', url: 'https://nadavdym.github.io/' },
    ],
    venue: 'International Conference on Machine Learning',
    venueShort: 'ICML',
    year: 2024,
    image: 'projects/wl-euclidean/rep.png',
    imageAlt: 'WL for Euclidean equivariant ML',
    abstract: 'We construct a universal, equivariant 3D point cloud network with polynomial complexity, and show that a shallow 2-WL-based architecture (WeLNet) with polynomial-size features suffices. WeLNet achieves state-of-the-art results on molecular conformation generation and N-body dynamics benchmarks.',
    links: [
      { label: 'arXiv', url: 'https://arxiv.org/abs/2402.02484' },
      { label: 'Code', url: 'https://github.com/IntelliFinder/welnet' },
    ],
  },
  {
    id: 'complete-nn',
    title: 'Complete Neural Networks for Euclidean Graphs',
    titleUrl: 'https://arxiv.org/abs/2301.13821',
    authors: [
      { name: 'Snir Hordan', bold: true },
      { name: 'Tal Amir', url: 'https://tal-amir.github.io/' },
      { name: 'Steven J. Gortler', url: 'https://www.eecs.harvard.edu/~sjg/' },
      { name: 'Nadav Dym', url: 'https://nadavdym.github.io/' },
    ],
    venue: 'AAAI Conference on Artificial Intelligence',
    venueShort: 'AAAI',
    year: 2024,
    image: 'projects/complete-nn/rep.png',
    imageAlt: 'Complete neural networks for Euclidean graphs',
    abstract: 'We construct a universal invariant 3D point cloud network with polynomial time complexity, and prove that the architecture is complete for Euclidean graphs.',
    links: [
      { label: 'arXiv', url: 'https://arxiv.org/abs/2301.13821' },
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
    description: 'Equivariant spectral GNN that addresses the expressivity limitations of standard spectral architectures on graphs with a simple spectrum.',
    highlight: 'NeurIPS 2025 Spotlight',
    tags: ['Python', 'PyTorch', 'CUDA'],
  },
  {
    name: 'welnet',
    url: 'https://github.com/IntelliFinder/welnet',
    description: 'Universal equivariant 3D point cloud network with polynomial complexity; state-of-the-art results on molecular conformation generation (GEOM-QM9).',
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
  { name: 'Yonatan Sverdlov', url: 'https://scholar.google.com/citations?user=M4o74roAAAAJ&hl=en' },
  { name: 'Tim Seppelt', url: 'https://tseppelt.github.io/' },
  { name: 'Benjamin Friedman' },
];

export const teaching = [
  {
    title: 'Deep Learning and Groups',
    years: '2024, 2025',
    role: 'Head Teaching Assistant',
    details: 'Technion, Electrical and Computer Engineering Faculty. Co-wrote a new course with <a href="https://haggaim.github.io/">Asst. Prof. Haggai Maron</a>.',
  },
];

export const researchInterests = [
  'Geometric deep learning',
  'Expressive power of graph neural networks and the Weisfeiler-Leman hierarchy',
  'Spectral methods and canonicalization for graphs',
  'Equivariant and invariant neural networks',
  'Approximation theory for symmetry-constrained models',
  'Machine learning for molecules and 3D point clouds',
];
