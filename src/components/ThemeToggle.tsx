import type { FC } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../hooks/useTheme";
import { MoonIcon, SunIcon } from "./icons";

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
        <motion.div
          initial={{ rotate: 0, scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{ duration: 0.5 }}
          key="moon"
        >
          <MoonIcon className="w-7 h-7 text-gray-800" />
        </motion.div>
      ) : (
        <motion.div
          initial={{ rotate: 0, scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{ duration: 0.5 }}
          key="sun"
        >
          <SunIcon className="w-7 h-7 text-yellow-400" />
        </motion.div>
      )}
    </motion.button>
  );
};

export default ThemeToggle;
