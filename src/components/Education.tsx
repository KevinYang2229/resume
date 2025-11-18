import type { FC } from "react";
import { motion } from "framer-motion";
import type { Education as EducationType } from "../types";
import {
  GraduationCapIcon,
  StarIcon,
  BadgeIcon,
  CheckCircleIcon,
  CalendarIcon,
} from "./icons";

interface Props {
  data: EducationType[];
}

const Education: FC<Props> = ({ data }) => {
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
            教育背景
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-blue-600 to-purple-600 rounded-full"></div>
        </motion.div>

        {/* 教育卡片 */}
        <div className="space-y-8">
          {data.map((education, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{
                y: -5,
                transition: { duration: 0.3 },
              }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                {/* 左側：學位和學校 */}
                <div className="flex-1">
                  <div className="flex items-start gap-3 mb-3">
                    <GraduationCapIcon className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1 shrink-0" />
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-1">
                        {education.degree}
                      </h3>
                      <p className="text-lg text-gray-600 dark:text-gray-400 font-medium">
                        {education.school}
                      </p>
                    </div>
                  </div>

                  {/* GPA */}
                  {education.gpa && (
                    <div className="flex items-center gap-2 mb-4 ml-9">
                      <StarIcon className="w-5 h-5 text-yellow-500" />
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        GPA: {education.gpa}
                      </span>
                    </div>
                  )}

                  {/* 榮譽獎項 */}
                  {education.honors && education.honors.length > 0 && (
                    <div className="ml-9">
                      <div className="flex items-center gap-2 mb-3">
                        <BadgeIcon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                          榮譽獎項
                        </span>
                      </div>
                      <ul className="space-y-2">
                        {education.honors.map((honor, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                          >
                            <CheckCircleIcon className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 shrink-0" />
                            <span>{honor}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* 右側：時間 */}
                <div className="md:text-right">
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg text-sm font-medium">
                    <CalendarIcon className="w-4 h-4" />
                    {education.period}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
