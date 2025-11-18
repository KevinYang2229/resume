import type { ResumeData } from "../types";

export const resumeData: ResumeData = {
  personalInfo: {
    name: "楊明倫 (Kevin)",
    title: "全端工程師 Full Stack Developer",
    email: "kk2229.yang@gmail.com",
    phone: "+886 933-047-720",
    location: "台北市, 台灣",
    linkedin:
      "https://www.linkedin.com/in/%E6%98%8E%E5%80%AB-%E6%A5%8A-4b87371a0/",
    github: "https://github.com/KevinYang2229",
    website: "zhangsan.dev",
    summary:
      "具有 15 年以上軟體開發經驗的全端工程師，專精於 React、Node.js 和雲端服務。熱衷於創建高效能、可擴展的應用程式，並持續學習新技術。擅長團隊協作與敏捷開發流程，致力於提供卓越的使用者體驗。",
  },

  skills: {
    前端技術: [
      "React",
      "React Native",
      "TypeScript",
      "Vue.js",
      "Tailwind CSS",
      "Next.js",
      "Nuxt.js",
      "Redux",
      "Sass",
    ],
    後端技術: [
      "Node.js",
      "Express",
      "PostgreSQL",
      "MySQL",
      "SQLite",
      "Supabase",
      "RESTful API",
      "Java",
      "Pro*C",
      "Shell Script",
    ],
    開發工具: ["Git", "Docker", "Swagger", "GCP", "CI/CD", "Jest", "n8n"],
    語言: ["中文（母語）", "英文（普通）"],
  },

  experiences: [
    {
      title: "正工程師 ( Senior Technical Engineer )",
      company: "友達光電股份有限公司",
      period: "2024/03 - 現在",
      description: [
        "參與醫療系統平台開發，負責前端介面與後端 API 整合",
        "設計系統開發及維護，建立UI元件庫，提升前端開發效率",
        "設計系統 Live Demo 開發講師",
      ],
    },
    {
      title: "高級工程師 ( Senior Technical Engineer )",
      company: "台灣大哥大股份有限公司",
      period: "2023/03 - 2024/03",
      description: [
        "整合各通路的申裝服務及行銷活動頁面",
        "HBO GO 影音平台維護與新功能開發",
        "參與第一屆台北市大黑客松城市儀表板，獲得冠軍",
      ],
    },
    {
      title: "系統分析師 ( Systems Analyst )",
      company: "博暉科技股份有限公司",
      period: "2021/11 - 2023/03",
      description: [
        "使用 Vue2 搭配 Nuxt 和同事協作完成基金平台開發",
        "使用 Vue3 搭配 Tailwind CSS 獨立完成電子簽核開發",
      ],
    },
    {
      title: "軟體工程師 ( Senior Software Engineer )",
      company: "凌網全球科技股份有限公司",
      period: "2012/07 - 2021/11",
      description: [
        "開發金融交易相關後端批次、報表及 API",
        "實作儲值系統製卡功能",
        "改寫批次多線程流程，提升交易處理速度",
      ],
    },
    {
      title: "軟體工程師 ( Junior Software Engineer )",
      company: "豐揚科技股份有限公司",
      period: "2010/05 - 2012/06",
      description: [
        "參與開發通訊 Raw Data 資料整合",
        "使用 Pro*C 開發帳單整合(台灣固網和台灣大哥大)",
      ],
    },
  ],

  projects: [
    {
      name: "Pick-Mind 股票篩選系統（前端）",
      description:
        "提供使用者友好的股票篩選介面，支援多種篩選條件和即時數據顯示。",
      technologies: [
        "React.js",
        "TypeScript",
        "Tailwind CSS",
        "Sass",
        "Markdown",
        "Axios",
      ],
      link: "https://zhangsan.dev",
      github: "https://github.com/zhangsan/blog",
    },
    {
      name: "Pick-Mind 股票篩選系統（後端）",
      description: "提供股票篩選系統的 API 服務，支援前端需求並確保高效能。",
      technologies: ["Express.js", "Node.js", "Supabase", "JWT", "RESTful API"],
      github: "https://github.com/zhangsan/todo-app",
    },
    {
      name: "Pick-Mind 股票篩選系統（App）",
      description:
        "整合多個天氣 API 的即時天氣預報應用，提供詳細的氣象資訊和 7 天預報。",
      technologies: ["React Native", "JWT", "Axios", "Markdown"],
      link: "https://weather.zhangsan.dev",
    },
  ],

  education: [
    {
      degree: "電機工程系學士",
      school: "私立聖約翰科技大學",
      period: "2001 - 2005",
      // gpa: "3.8/4.0",
      // honors: ["書卷獎（2017、2018）", "程式設計競賽第二名", "專題研究優等獎"],
    },
  ],
};
