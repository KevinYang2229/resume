import type { FC } from "react";
import { motion } from "framer-motion";
import type { Experience as ExperienceType } from "../types";
import { CalendarIcon, BuildingIcon, CheckCircleIcon } from "./icons";

interface Props {
  data: ExperienceType[];
}

const Experience: FC<Props> = ({ data }) => {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-20">
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
            工作經驗
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-blue-600 to-purple-600 rounded-full"></div>
        </motion.div>

        {/* 經驗時間軸 */}
        <div className="relative">
          {/* 中央時間軸線條 */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-blue-500 to-purple-600 -translate-x-1/2"></div>

          <div className="space-y-12">
            {data.map((experience, index) => {
              const isLeft = index % 2 === 0;

              // 為 light mode 定義不同的亮色系背景
              const lightBgColors = [
                "bg-blue-50",
                "bg-purple-50",
                "bg-cyan-50",
                "bg-indigo-50",
                "bg-violet-50",
              ];
              const lightBg = lightBgColors[index % lightBgColors.length];

              return (
                <motion.div
                  key={index}
                  className={`relative md:flex ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  } items-center gap-8`}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  {/* 時間軸圓點 */}
                  <div className="hidden md:block absolute left-1/2 top-1/2 w-6 h-6 bg-linear-to-br from-blue-500 to-purple-600 rounded-full -translate-x-1/2 -translate-y-1/2 ring-4 ring-white dark:ring-gray-950 shadow-lg z-10"></div>

                  {/* 經驗卡片 */}
                  <div className="md:w-[calc(50%-2rem)]">
                    <motion.div
                      className={`${lightBg} dark:bg-gray-800 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${
                        isLeft ? "md:ml-auto" : "md:mr-auto"
                      }`}
                      whileHover={{
                        y: -8,
                        transition: { duration: 0.3 },
                      }}
                    >
                      {/* 標題與公司 */}
                      <div className="mb-4">
                        <div className="flex flex-col gap-2 mb-2">
                          <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                            {experience.title}
                          </h3>
                          <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400">
                            <CalendarIcon className="w-4 h-4" />
                            {experience.period}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-lg text-gray-600 dark:text-gray-400">
                          <BuildingIcon className="w-5 h-5" />
                          <span className="font-semibold">
                            {experience.company}
                          </span>
                        </div>
                      </div>

                      {/* 工作內容 */}
                      <ul className="space-y-3">
                        {experience.description.map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                          >
                            <CheckCircleIcon className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>

                  {/* 空白佔位 (對側) - 添加裝飾插圖 */}
                  <div className="hidden md:flex md:w-[calc(50%-2rem)] items-center justify-center">
                    <div className="relative w-32 h-32 opacity-20">
                      {/* 根據索引顯示不同的裝飾圖案 */}
                      {index % 4 === 0 && (
                        // 齒輪圖示
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          className="w-full h-full text-blue-400 dark:text-blue-600 animate-spin"
                          style={{ animationDuration: "8s" }}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      )}
                      {index % 4 === 1 && (
                        // 燈泡圖示
                        <div className="relative w-full h-full">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            className="w-full h-full text-purple-400 dark:text-purple-600 animate-pulse"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                            />
                          </svg>
                          {/* 光暈效果 */}
                          <div className="absolute inset-0 bg-purple-300 dark:bg-purple-500 rounded-full blur-xl animate-ping opacity-20"></div>
                        </div>
                      )}
                      {index % 4 === 2 && (
                        // 火箭圖示
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          className="w-full h-full text-cyan-400 dark:text-cyan-600 animate-bounce"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                      )}
                      {index % 4 === 3 && (
                        // 獎盃圖示
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          className="w-full h-full text-indigo-400 dark:text-indigo-600"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                          />
                        </svg>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
