import { motion } from 'framer-motion';
import { SectionDivider } from './SectionDivider';
import { GithubIcon } from './icons';
import { GraduationCap, GitFork, Star, ArrowUpRight, BookOpen, Code2 } from 'lucide-react';

export function EducationAndGithub() {
  const learningAreas = [
    'Data Structures & Algorithms',
    'Machine Learning Foundations',
    'Linear Algebra & Calculus',
    'Database Management Systems',
    'Computer Networks & Protocols',
    'Software Engineering Principles',
  ];

  const repos = [
    {
      name: 'aqenix-career-os',
      desc: 'Multi-agent AI career pathway and semantic skill audit operating system.',
      lang: 'TypeScript',
      langColor: '#3178c6',
      stars: 18,
      forks: 4,
      url: 'https://github.com/kishorsv/aqenix-career-os',
    },
    {
      name: 'posture-guardian-ai',
      desc: 'Client-side 60 FPS pose estimation ergonomic assistant via WASM & MediaPipe.',
      lang: 'Python / WASM',
      langColor: '#3572A5',
      stars: 24,
      forks: 6,
      url: 'https://github.com/kishorsv/posture-guardian-ai',
    },
    {
      name: 'civicfind-india',
      desc: 'Spatial public service discovery engine with colloquial vernacular queries.',
      lang: 'React / FastAPI',
      langColor: '#61dafb',
      stars: 15,
      forks: 3,
      url: 'https://github.com/kishorsv/civicfind-india',
    },
    {
      name: 'linguabridge',
      desc: 'Kannada-to-English contextual translation fine-tuned on regional Indic idioms.',
      lang: 'PyTorch',
      langColor: '#ee4c2c',
      stars: 21,
      forks: 5,
      url: 'https://github.com/kishorsv/linguabridge',
    },
  ];

  const heatmapCols = 32;
  const heatmapRows = 7;
  const generateLevel = (col: number, row: number) => {
    const seed = (col * 7 + row * 13) % 19;
    if (seed > 14) return 3;
    if (seed > 9) return 2;
    if (seed > 4) return 1;
    return 0;
  };

  const levelColors = [
    'bg-white/5',
    'bg-[#4E85BF]/30',
    'bg-[#4E85BF]/60',
    'bg-[#89AACC]',
  ];

  return (
    <section id="education" className="bg-[#080808] py-24 md:py-36 relative overflow-hidden">
      {/* Editorial Section Divider */}
      <SectionDivider number="09" label="ACADEMICS & GITHUB VELOCITY" />

      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 pt-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-14"
        >
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#89AACC] mb-3 block">
            Academic & Developer Footprint
          </span>
          <h2 className="heading-clamp font-light tracking-tight text-text-primary">
            Education & <span className="font-display italic text-[#89AACC]">activity</span>
          </h2>
          <p className="text-sm md:text-base text-muted max-w-xl mt-3 leading-relaxed font-light">
            Formal engineering grounding paired with consistent daily GitHub open-source code commits and development velocity.
          </p>
        </motion.div>

        {/* 2 Main Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Education Card (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 p-8 sm:p-9 rounded-3xl border border-white/10 flex flex-col justify-between"
            style={{
              background: 'rgba(255, 255, 255, 0.02)',
              backdropFilter: 'blur(16px)',
            }}
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#89AACC]">
                  <GraduationCap size={24} />
                </div>
                <span className="text-xs font-mono text-[#89AACC] px-3 py-1 rounded-full bg-white/5 border border-white/10">
                  2022 — 2026
                </span>
              </div>

              <div className="mb-6">
                <span className="text-[11px] font-mono uppercase tracking-widest text-muted block mb-1">
                  Degree & Focus
                </span>
                <h3 className="text-2xl font-display italic text-text-primary mb-2">
                  Bachelor of Engineering — 2nd Year
                </h3>
                <p className="text-sm font-medium text-[#89AACC] mb-1">
                  Artificial Intelligence & Machine Learning
                </p>
                <p className="text-xs text-muted font-mono">
                  Engineering Institution • Bengaluru, Karnataka, India
                </p>
              </div>

              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-muted block mb-3 flex items-center gap-1.5">
                  <BookOpen size={13} className="text-[#89AACC]" />
                  Core Learning Areas
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {learningAreas.map((area) => (
                    <div
                      key={area}
                      className="p-2.5 rounded-xl bg-black/40 border border-white/10 text-xs text-text-primary/90 font-mono flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#4E85BF] shrink-0" />
                      <span className="truncate">{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-muted font-mono">
              <span>Status: Active Enrolled</span>
              <span className="text-emerald-400">Good Academic Standing</span>
            </div>
          </motion.div>

          {/* Right Column: GitHub Developer Activity (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7 p-8 sm:p-9 rounded-3xl border border-white/10 flex flex-col justify-between"
            style={{
              background: 'rgba(255, 255, 255, 0.02)',
              backdropFilter: 'blur(16px)',
            }}
          >
            <div>
              {/* GitHub Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-text-primary">
                    <GithubIcon size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-text-primary flex items-center gap-2">
                      <span>Kishor S V</span>
                      <span className="text-xs font-mono text-muted">@kishorsv</span>
                    </h3>
                    <p className="text-xs text-muted font-mono">
                      Public Repositories: 15+ • Active Commits Daily
                    </p>
                  </div>
                </div>

                <a
                  href="https://github.com/kishorsv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/10 bg-white/5 hover:border-white/30 text-xs font-mono text-text-primary transition-colors self-start sm:self-auto group"
                  data-cursor="link"
                >
                  <span>View GitHub Profile</span>
                  <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>

              {/* Reliable Client-Side Contribution Graph */}
              <div className="p-5 rounded-2xl bg-black/40 border border-white/10 mb-6 overflow-hidden">
                <div className="flex items-center justify-between mb-3 text-xs font-mono text-muted">
                  <span>Contribution Velocity</span>
                  <div className="flex items-center gap-1.5 text-[10px]">
                    <span>Less</span>
                    <span className="w-2.5 h-2.5 rounded-sm bg-white/5 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-sm bg-[#4E85BF]/30 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-sm bg-[#4E85BF]/60 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-sm bg-[#89AACC] inline-block" />
                    <span>More</span>
                  </div>
                </div>

                <div className="grid grid-flow-col gap-1 overflow-x-auto pb-1 custom-scrollbar">
                  {Array.from({ length: heatmapCols }).map((_, cIdx) => (
                    <div key={cIdx} className="grid grid-rows-7 gap-1">
                      {Array.from({ length: heatmapRows }).map((_, rIdx) => {
                        const level = generateLevel(cIdx, rIdx);
                        return (
                          <div
                            key={rIdx}
                            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-sm ${levelColors[level]} transition-colors hover:ring-1 hover:ring-[#89AACC]`}
                            title={`Contribution activity day ${cIdx * 7 + rIdx + 1}`}
                          />
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>

              {/* Public Repos Showcase */}
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-muted block mb-3 flex items-center gap-1.5">
                  <Code2 size={13} className="text-[#89AACC]" />
                  Selected Public Repositories
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {repos.map((repo) => (
                    <a
                      key={repo.name}
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 rounded-xl bg-black/30 border border-white/10 hover:border-white/25 transition-all block group/repo"
                      data-cursor="link"
                    >
                      <div className="flex items-center justify-between text-xs font-mono mb-1">
                        <span className="font-semibold text-text-primary group-hover/repo:text-[#89AACC] transition-colors truncate">
                          {repo.name}
                        </span>
                        <ArrowUpRight size={12} className="text-muted group-hover/repo:text-text-primary" />
                      </div>
                      <p className="text-[11px] text-muted line-clamp-2 mb-3 font-light leading-snug">
                        {repo.desc}
                      </p>
                      <div className="flex items-center gap-3 text-[10px] font-mono text-muted/70">
                        <span className="flex items-center gap-1">
                          <span
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: repo.langColor }}
                          />
                          {repo.lang}
                        </span>
                        <span className="flex items-center gap-0.5">
                          <Star size={10} />
                          {repo.stars}
                        </span>
                        <span className="flex items-center gap-0.5">
                          <GitFork size={10} />
                          {repo.forks}
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
