export interface ExplorationItem {
  id: string;
  title: string;
  subtitle: string;
  rotation: number;
  speed: number; // for parallax offset calculation
  category: string;
  tags: string[];
  gradient: string;
  accent: string;
  aspectDesc: string;
  svgIcon: string;
}

export const explorations: ExplorationItem[] = [
  {
    id: 'exp-01',
    title: 'Neural Latent Topology',
    subtitle: 'High-dimensional embedding manifold projections in real-time WebGL',
    rotation: -3,
    speed: 0.15,
    category: 'Generative Visualization',
    tags: ['Three.js', 'Shaders', 't-SNE'],
    gradient: 'from-[#142332] via-[#0b1622] to-[#050c14]',
    accent: '#89AACC',
    aspectDesc: 'Interactive particle manifold simulating 10,000 vector embeddings clustering by semantic similarity.',
    svgIcon: 'manifold',
  },
  {
    id: 'exp-02',
    title: 'Kinetic Typography Engine',
    subtitle: 'Variable font morphing driven by audio FFT frequency bins',
    rotation: 2,
    speed: 0.35,
    category: 'Creative Coding',
    tags: ['Web Audio API', 'Variable Fonts', 'Canvas'],
    gradient: 'from-[#1e2330] via-[#10141f] to-[#07090f]',
    accent: '#4E85BF',
    aspectDesc: 'Real-time serif weight and optical size interpolation reacting dynamically to ambient microphone frequencies.',
    svgIcon: 'typography',
  },
  {
    id: 'exp-03',
    title: 'Spatial Audio Radar',
    subtitle: 'Binaural positional audio canvas for virtual collaboration rooms',
    rotation: -2,
    speed: 0.2,
    category: 'Audio Engineering',
    tags: ['Binaural Panner', 'WebRTC', 'DSP'],
    gradient: 'from-[#16272e] via-[#0d171c] to-[#060b0e]',
    accent: '#5C93C4',
    aspectDesc: '3D coordinate soundstage allowing listeners to reposition multi-track voice feeds with natural acoustic attenuation.',
    svgIcon: 'radar',
  },
  {
    id: 'exp-04',
    title: 'Autonomous Agent Graph',
    subtitle: 'Hierarchical state machine visualizer for multi-agent LLM consensus',
    rotation: 3,
    speed: 0.4,
    category: 'Agentic Systems',
    tags: ['DAG', 'State Charts', 'Graphviz'],
    gradient: 'from-[#1a2133] via-[#0e1320] to-[#080b13]',
    accent: '#89AACC',
    aspectDesc: 'Live directed acyclic graph depicting agent prompt handoffs, error recovery loops, and synthesis checkpoints.',
    svgIcon: 'graph',
  },
  {
    id: 'exp-05',
    title: 'Fluid Chroma Dispersion',
    subtitle: 'GPU-accelerated Navier-Stokes fluid grid with chromatic aberration',
    rotation: -1,
    speed: 0.18,
    category: 'Shader Art',
    tags: ['GLSL', 'WebGL 2.0', 'Physics'],
    gradient: 'from-[#152538] via-[#0c1824] to-[#060c13]',
    accent: '#72A1CF',
    aspectDesc: 'Mouse-reactive fluid simulation resolving pressure poisson equations on a 512x512 texture grid.',
    svgIcon: 'fluid',
  },
  {
    id: 'exp-06',
    title: 'Quantum Gate Circuit',
    subtitle: 'State vector evolution and Bloch sphere interactive simulator',
    rotation: 2,
    speed: 0.32,
    category: 'Quantum Computing',
    tags: ['Qubit Math', 'Matrix Algebra', 'SVG'],
    gradient: 'from-[#1b2633] via-[#101720] to-[#080c12]',
    accent: '#4E85BF',
    aspectDesc: 'Step-through simulator for Hadamard, CNOT, and Phase shift gates with real-time probability density rendering.',
    svgIcon: 'quantum',
  },
];
