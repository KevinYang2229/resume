import { motion } from "framer-motion";

interface FooterProps {
  name: string;
}

const Footer = ({ name }: FooterProps) => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12 px-4 transition-colors duration-300">
      <div className="max-w-5xl mx-auto text-center">
        <motion.p
          className="text-gray-300 dark:text-gray-400 mb-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          © {new Date().getFullYear()} {name}
        </motion.p>
        <motion.p
          className="text-gray-500 dark:text-gray-600 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Built with React + TypeScript + Tailwind CSS
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
