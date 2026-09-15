import { motion } from 'framer-motion';
import { featuredProjects, type FeaturedProject } from '../data/projects';
import { ProjectCard } from './ProjectCard';
import { SectionDivider } from './SectionDivider';
import { ArrowUpRight } from 'lucide-react';

interface SelectedWorksProps {
  onSelectProject: (project: FeaturedProject) => void;
}

export function SelectedWorks({ onSelectProject }: SelectedWorksProps) {
  // Asymmetric 12-column Bento Spans for 7 curated builds
  const bentoSpans = [
    'lg:col-span-12', // 01: Flagship AQENIX Career OS (Full width hero bento)
    'lg:col-span-7',  // 02: AQENIX Chat AI
    'lg:col-span-5',  // 03: Health Companion AI
    'lg:col-span-5',  // 04: CivicFind India
    'lg:col-span-7',  // 05: Posture Guardian AI
    'lg:col-span-7',  // 06: Lingua Bridge
    'lg:col-span-5',  // 07: LifeOS
  ];

  return (
    <section id="projects" className="bg-[#080808] py-24 md:py-36 relative overflow-hidden">
      {/* Editorial Section Divider */}
      <SectionDivider number="03" label="SELECTED WORK / BENTO ARCHITECTURE" />

      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 pt-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-14 md:mb-18 gap-6"
        >
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#89AACC] mb-3 block">
              Case Studies & Software
            </span>
            <h2 className="heading-clamp font-light tracking-tight text-text-primary">
              Featured <span className="font-display italic text-[#89AACC]">projects</span>
            </h2>
            <p className="text-sm md:text-base text-muted max-w-lg mt-3 leading-relaxed font-light">
              A selection of intelligent systems built from concept to working code—engineered for real-world utility.
            </p>
          </div>

          <div className="hidden md:block">
            <a
              href="https://github.com/kishorsv?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 hover:border-white/30 text-xs font-mono text-text-primary transition-colors group"
              data-cursor="link"
            >
              <span>View all repositories</span>
              <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </motion.div>

        {/* Asymmetric 12-Column Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {featuredProjects.map((project, idx) => (
            <div
              key={project.id}
              className={`${bentoSpans[idx] || 'lg:col-span-6'}`}
            >
              <ProjectCard
                project={project}
                onOpenCaseStudy={onSelectProject}
                isLarge={idx === 0}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
