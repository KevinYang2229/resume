import type { FC } from "react";
import { motion } from "framer-motion";
import type { PersonalInfo as PersonalInfoType } from "../types";
import {
  EmailIcon,
  PhoneIcon,
  LocationIcon,
  GitHubIcon,
  LinkedInIcon,
  WebsiteIcon,
  UserAvatarIcon,
} from "./icons";

interface Props {
  data: PersonalInfoType;
}

const PersonalInfo: FC<Props> = ({ data }) => {
  return (
    <section className="hero-section py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* 左側:個人資訊 */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-3 bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {data.name}
              </h1>
              <p className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 font-medium">
                {data.title}
              </p>
            </motion.div>

            <motion.p
              className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {data.summary}
            </motion.p>

            {/* 聯絡資訊 */}
            <motion.div
              className="space-y-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                <EmailIcon className="w-5 h-5" />
                <a
                  href={`mailto:${data.email}`}
                  className="hover:text-blue-600 transition-colors"
                >
                  {data.email}
                </a>
              </div>

              <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                <PhoneIcon className="w-5 h-5" />
                <span>{data.phone}</span>
              </div>

              <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                <LocationIcon className="w-5 h-5" />
                <span>{data.location}</span>
              </div>
            </motion.div>

            {/* 社交連結 */}
            <motion.div
              className="flex gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              {data.github && (
                <a
                  href={`https://${data.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-linear-to-br from-gray-800 to-gray-700 text-white dark:bg-gray-800 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                  aria-label="GitHub"
                >
                  <GitHubIcon className="w-6 h-6" />
                </a>
              )}

              {data.linkedin && (
                <a
                  href={`https://${data.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-linear-to-br from-gray-800 to-gray-700 text-white dark:bg-gray-800 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon className="w-6 h-6" />
                </a>
              )}

              {data.website && (
                <a
                  href={`https://${data.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-linear-to-br from-gray-800 to-gray-700 text-white dark:bg-gray-800 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                  aria-label="Website"
                >
                  <WebsiteIcon className="w-6 h-6" />
                </a>
              )}
            </motion.div>
          </motion.div>

          {/* 右側:頭像圖示 */}
          <motion.div
            className="flex justify-center md:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative">
              {/* 背景裝飾 */}
              <div className="absolute inset-0 bg-linear-to-br from-blue-400 to-purple-600 rounded-full blur-2xl opacity-20 animate-pulse"></div>

              {/* 頭像容器 */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-linear-to-br from-blue-500 to-purple-600 rounded-full p-1 shadow-2xl">
                <div className="w-full h-full bg-white dark:bg-gray-800 rounded-full flex items-center justify-center overflow-hidden">
                  {/* 預設頭像圖示 */}
                  {/* <UserAvatarIcon className="w-3/4 h-3/4 text-gray-300 dark:text-gray-600" /> */}
                  {/* 如果有實際圖片,可以替換為: */}
                  <img
                    src="/personal.png"
                    alt={data.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* 裝飾元素 */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full opacity-20 animate-bounce"></div>
              <div
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-pink-400 rounded-full opacity-20 animate-bounce"
                style={{ animationDelay: "0.5s" }}
              ></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PersonalInfo;
