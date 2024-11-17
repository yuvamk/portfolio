import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  delay?: number;
}

export function ProjectCard({ title, description, technologies, image, delay = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay }}
      className="group relative glass-effect rounded-xl p-6 hover:bg-white/20 transition-colors"
    >
      <div className="flex justify-between items-start">
        <h3 className="text-2xl font-medium">{title}</h3>
        <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity text-cyan-400" />
      </div>
      
      <p className="mt-4 text-gray-300 leading-relaxed">{description}</p>
      
      <div className="mt-6 flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span 
            key={tech}
            className="px-3 py-1 bg-cyan-400/10 text-cyan-400 rounded-full text-sm font-medium"
          >
            {tech}
          </span>
        ))}
      </div>

      {image && (
        <div className="mt-6">
          <img src={image} alt={title} className="rounded-lg w-full h-48 object-cover opacity-80" />
        </div>
      )}
    </motion.div>
  );
}