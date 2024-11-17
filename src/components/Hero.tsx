import { motion } from 'framer-motion';

export function Hero() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 ">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="glass-effect rounded-xl p-8 relative overflow-hidden"
      >
        <motion.div
          className="absolute top-7 right-11 w-24 h-24"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <svg viewBox="0 0 100 100" className="text-cyan-400">
            <path
              d="M50 0 A50 50 0 0 1 50 100 A50 50 0 0 1 50 0"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
          </svg>
        </motion.div>
        <h2 className="text-6xl md:text-7xl font-bold leading-tight">
          MERN Stack
          <br />
          <span className="text-cyan-400 italic">Developer</span> &
          <br />
          UI/UX Designer
        </h2>
      </motion.div>

      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="glass-effect rounded-xl overflow-hidden h-[300px] md:h-auto overflow-y-auto"
      >
        <img 
          src="src/components/images/Untitled.png"
          alt="Modern development workspace with code"
          className="w-full h-full object-cover opacity-80"
        />
      </motion.div>
    </div>
  );
}