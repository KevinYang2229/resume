import "./App.css";
import { motion } from "framer-motion";
import PersonalInfo from "./components/PersonalInfo";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import ThemeToggle from "./components/ThemeToggle";
import Footer from "./components/Footer";
import { resumeData } from "./data/resumeData";

function App() {
  return (
    <motion.div
      className="w-full overflow-x-hidden bg-white dark:bg-gray-900 transition-colors duration-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <ThemeToggle />

      {/* 個人資訊 - 滿版英雄區 */}
      <PersonalInfo data={resumeData.personalInfo} />

      {/* 技能區塊 */}
      <Skills data={resumeData.skills} />

      {/* 工作經驗 - 時間軸設計 */}
      <Experience data={resumeData.experiences} />

      {/* 專案作品 */}
      <Projects data={resumeData.projects} />

      {/* 教育背景 */}
      <Education data={resumeData.education} />

      {/* Footer */}
      <Footer name={resumeData.personalInfo.name} />
    </motion.div>
  );
}

export default App;
