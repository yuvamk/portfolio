import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { ProjectCard } from './components/ProjectCard';
import { TechGrid } from './components/TechGrid';
import { ContactForm } from './components/ContactForm';
import { motion } from 'framer-motion';
import { Instagram, Twitter, Linkedin, Github } from 'lucide-react';

const projects = [
  {
    title: "Apple iPhone 15 Pro Website",
    description: "An immersive website showcasing the iPhone 15 Pro with stunning 3D models and smooth animations. Features include custom video carousel, 3D model rendering with different colors and sizes, and responsive design.",
    technologies: ["Figma", "React", "Tailwind CSS", "Three.js", "Three Fiber", "GSAP"],
    image: "src/components/images/Screenshot 2024-11-17 at 1.39.10 PM.png"
  },
  {
    title: "Banking App with Finance Dashboard",
    description: "A comprehensive banking application with finance management dashboard built using Next.js 14. Features include secure authentication, real-time banking data, multiple account management, and transaction tracking.",
    technologies: ["Next.js 14", "Appwrite", "Plaid API", "Dwolla", "Sentry", "TypeScript"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
  },
  {
    title: "Video Calling App",
    description: "A real-time video calling application enabling peer-to-peer communication. Features include screen sharing, room-based calling, device management, and secure encrypted connections.",
    technologies: ["WebRTC", "Node.js", "Socket.io", "Express.js"],
    image: "src/components/images/Screenshot 2024-11-17 at 1.41.56 PM.png"
  }
];

export default function App() {
  return (
    <div className="min-h-screen p-8 pt-24 font-sans text-white">
      <Header />
      <Hero />
      <About />
      
      <motion.section
        id="projects"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="space-y-6 mb-8"
      >
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            image={project.image}
            delay={index * 0.2}
          />
        ))}
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="glass-effect rounded-xl p-8 mb-8"
      >
        <h2 className="text-3xl font-bold mb-6">Technology Stack</h2>
        <TechGrid />
      </motion.section>

      <motion.section
        id="contact"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="glass-effect rounded-xl p-8 mb-8"
      >
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
        <ContactForm />
      </motion.section>

      <motion.footer
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="glass-effect rounded-xl p-8 flex justify-between items-center"
      >
        <div className="flex gap-8">
          <a href="https://github.com/yuvamk" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
            <Github size={24} />
          </a>
          <a href="https://www.instagram.com/_yu.vi_0/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
            <Instagram size={24} />
          </a>
          <a href="https://x.com/RajputYuvam" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
            <Twitter size={24} />
          </a>
          <a href="https://www.linkedin.com/in/yuvam-kumar-637712227" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
            <Linkedin size={24} />
          </a>
        </div>
      </motion.footer>
    </div>
  );
}