import type { FC } from "react";
import { motion } from "framer-motion";
import type { Project as ProjectType } from "../types";
import { CodeIcon, ExternalLinkIcon, GitHubIcon } from "./icons";

interface Props {
  data: ProjectType[];
}

const Projects: FC<Props> = ({ data }) => {
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
            專案作品
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-blue-600 to-purple-600 rounded-full"></div>
        </motion.div>

        {/* 專案網格 */}
        <div className="grid md:grid-cols-2 gap-8">
          {data.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 },
              }}
            >
              {/* 專案標題 */}
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-3">
                  {project.name}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* 技術標籤 */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <CodeIcon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                    技術棧
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-linear-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 text-gray-700 dark:text-gray-300 rounded-lg text-xs font-medium border border-blue-200/50 dark:border-blue-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* 連結 */}
              <div className="flex gap-4">
                {project.link && (
                  <button
                    disabled
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-500 rounded-lg text-sm font-medium cursor-not-allowed opacity-60"
                  >
                    <ExternalLinkIcon className="w-4 h-4" />
                    查看網站
                  </button>
                )}
                {project.github && (
                  <button
                    disabled
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-500 rounded-lg text-sm font-medium cursor-not-allowed opacity-60"
                  >
                    <GitHubIcon className="w-4 h-4" />
                    查看代碼
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
