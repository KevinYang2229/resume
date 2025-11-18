import type { FC } from "react";
import { motion } from "framer-motion";
import type { SkillCategory } from "../types";

interface Props {
  data: SkillCategory;
}

const Skills: FC<Props> = ({ data }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-20 px-6 md:px-12 lg:px-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* 標題 */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            技能專長
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-blue-600 to-purple-600 rounded-full"></div>
        </motion.div>

        {/* 技能分類網格 */}
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {Object.entries(data).map(([category, skills]) => (
            <motion.div
              key={category}
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              whileHover={{
                scale: 1.03,
                transition: { duration: 0.3 },
              }}
            >
              {/* 分類標題 */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-8 bg-linear-to-b from-blue-500 to-purple-600 rounded-full"></div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                  {category}
                </h3>
              </div>

              {/* 技能標籤 */}
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.span
                    key={index}
                    className="px-4 py-2 bg-linear-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium hover:from-blue-100 hover:to-purple-100 dark:hover:from-blue-800/40 dark:hover:to-purple-800/40 transition-colors duration-200 border border-blue-200/50 dark:border-blue-700/50"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.4 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
