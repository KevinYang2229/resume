import type { FC } from "react";
import { motion } from "framer-motion";
import type { Experience as ExperienceType } from "../types";
import {
  CalendarIcon,
  BuildingIcon,
  CheckCircleIcon,
  GearIcon,
  LightBulbIcon,
  RocketIcon,
  TrophyIcon,
} from "./icons";

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
                        <GearIcon
                          className="w-full h-full text-blue-400 dark:text-blue-600 animate-spin"
                          style={{ animationDuration: "8s" }}
                        />
                      )}
                      {index % 4 === 1 && (
                        // 燈泡圖示
                        <div className="relative w-full h-full">
                          <LightBulbIcon className="w-full h-full text-purple-400 dark:text-purple-600 animate-pulse" />
                          {/* 光暈效果 */}
                          <div className="absolute inset-0 bg-purple-300 dark:bg-purple-500 rounded-full blur-xl animate-ping opacity-20"></div>
                        </div>
                      )}
                      {index % 4 === 2 && (
                        // 火箭圖示
                        <RocketIcon className="w-full h-full text-cyan-400 dark:text-cyan-600 animate-bounce" />
                      )}
                      {index % 4 === 3 && (
                        // 獎盃圖示
                        <TrophyIcon className="w-full h-full text-indigo-400 dark:text-indigo-600" />
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
