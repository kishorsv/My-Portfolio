import { motion } from 'framer-motion';
import { featuredProjects, type FeaturedProject } from '../data/projects';
import { ProjectCard } from './ProjectCard';
import { ArrowUpRight } from 'lucide-react';

interface SelectedWorksProps {
  onSelectProject: (project: FeaturedProject) => void;
}

export function SelectedWorks({ onSelectProject }: SelectedWorksProps) {
  return (
    <section id="projects" className="bg-bg py-20 md:py-32 relative overflow-hidden border-t border-stroke/50">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-[#89AACC]" />
              <span className="text-xs uppercase tracking-[0.3em] text-muted font-medium">
                Featured Projects ⭐
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-sans tracking-tight text-text-primary">
              Proof of <span className="font-display italic text-[#89AACC]">execution</span>
            </h2>

            <p className="text-sm md:text-base text-muted max-w-xl mt-3 leading-relaxed">
              Curated builds demonstrating end-to-end engineering: from problem statement and architecture to live utility.
            </p>
          </div>

          <div className="hidden md:block">
            <a
              href="https://github.com/kishorsv?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-stroke hover:border-white/30 text-xs font-mono text-text-primary transition-colors group"
            >
              <span>Explore all on GitHub</span>
              <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </motion.div>

        {/* 7 Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {featuredProjects.map((project, idx) => (
            <div
              key={project.id}
              className={idx === 0 ? 'lg:col-span-2' : ''}
            >
              <ProjectCard
                project={project}
                onOpenCaseStudy={onSelectProject}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
