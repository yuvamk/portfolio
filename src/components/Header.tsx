import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

export function Header() {
  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center py-6 px-8 glass-effect rounded-none md:rounded-full mx-0 md:mx-8 mt-0 md:mt-4"
    >
      <h1 className="text-xl font-medium">
        <span className="text-cyan-400 italic">YUVAM</span> RAJPUT
      </h1>
      <nav>
        <ul className="flex gap-8">
          <li>
            <Link 
              to="projects" 
              smooth={true} 
              duration={500} 
              className="hover:text-cyan-400 transition-colors cursor-pointer"
            >
              PROJECTS
            </Link>
          </li>
          <li>
            <Link 
              to="about" 
              smooth={true} 
              duration={500} 
              className="hover:text-cyan-400 transition-colors cursor-pointer"
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link 
              to="contact" 
              smooth={true} 
              duration={500} 
              className="hover:text-cyan-400 transition-colors cursor-pointer"
            >
              CONTACT
            </Link>
          </li>
        </ul>
      </nav>
    </motion.header>
  );
}