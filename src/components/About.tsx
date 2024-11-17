import { motion } from 'framer-motion';

export function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="glass-effect rounded-xl p-8 mb-8"
    >
      <h2 className="text-3xl font-bold mb-6">About Me</h2>
      <div className="space-y-4 text-gray-300 leading-relaxed">
        <p>
          I'm a passionate MERN Stack Developer with a keen eye for crafting seamless UI/UX designs. 
          My expertise lies in building full-stack applications that not only function smoothly but 
          also provide an engaging user experience.
        </p>
        <p>
          By blending my development skills with design principles, I aim to create intuitive, 
          responsive, and visually appealing interfaces.
        </p>
        <p>
          Whether it's coding the backend logic or fine-tuning the front-end details, I enjoy 
          solving complex problems and transforming ideas into efficient, user-centered solutions.
        </p>
      </div>
    </motion.section>
  );
}