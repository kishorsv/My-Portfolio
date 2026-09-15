import { motion } from 'framer-motion';
import { projects, type Project } from '../data/projects';
import { ProjectCard } from './ProjectCard';

interface SelectedWorksProps {
  onSelectProject: (project: Project) => void;
}

export function SelectedWorks({ onSelectProject }: SelectedWorksProps) {
  return (
    <section id="work" className="bg-bg py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6"
        >
          <div>
            {/* Eyebrow: small line + Selected Work */}
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-[#89AACC]" />
              <span className="text-xs uppercase tracking-[0.3em] text-muted font-medium">
                Selected Work
              </span>
            </div>

            {/* Heading: Featured projects (projects in Instrument Serif italic) */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-sans tracking-tight text-text-primary">
              Featured <span className="font-display italic text-[#89AACC]">projects</span>
            </h2>

            {/* Description */}
            <p className="text-sm md:text-base text-muted max-w-lg mt-4 leading-relaxed">
              A selection of AI and full-stack products built from concept to working experience.
            </p>
          </div>

          {/* Desktop Only "View all work" button */}
          <div className="hidden md:block">
            <a
              href="https://github.com/kishorsv?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-stroke hover:border-white/30 text-xs font-medium text-text-primary transition-all duration-300"
            >
              <span>View all work</span>
              <span className="text-xs transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </motion.div>

        {/* Bento Grid Layout (cols: 12, alternating spans 7/5/5/7/7/5) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={onSelectProject}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
