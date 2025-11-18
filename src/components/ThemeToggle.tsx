import type { FC } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../hooks/useTheme";

const ThemeToggle: FC = () => {
  const { theme, toggleTheme } = useTheme();

  const handleToggle = () => {
    console.log("🔄 切換前:", {
      theme,
      htmlClass: document.documentElement.className,
    });
    toggleTheme();
    setTimeout(() => {
      console.log("✅ 切換後:", {
        theme: theme === "light" ? "dark" : "light",
        htmlClass: document.documentElement.className,
        hasDarkClass: document.documentElement.classList.contains("dark"),
      });
    }, 100);
  };

  return (
    <motion.button
      onClick={handleToggle}
      className="fixed top-8 right-8 z-50 p-4 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-300 dark:border-gray-600"
      aria-label="切換深色模式"
      whileHover={{ scale: 1.1, rotate: 15 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {theme === "light" ? (
        <motion.svg
          className="w-7 h-7 text-gray-800"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          initial={{ rotate: 0, scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{ duration: 0.5 }}
          key="moon"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </motion.svg>
      ) : (
        <motion.svg
          className="w-7 h-7 text-yellow-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          initial={{ rotate: 0, scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{ duration: 0.5 }}
          key="sun"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </motion.svg>
      )}
    </motion.button>
  );
};

export default ThemeToggle;
