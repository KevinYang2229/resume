# 線上履歷 Resume Website

[![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=flat&logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.17-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-7.2.2-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)

一個現代化、響應式的線上履歷網站，使用 React + TypeScript + Tailwind CSS 建立。

## ✨ 特色功能

- **現代化設計** - 簡潔優雅的使用者介面
- **深色/淺色模式** - 支援主題切換，提供舒適的閱讀體驗
- **響應式設計** - 完美適配桌面、平板和手機
- **高效能** - 使用 Vite 建構，快速載入
- **組件化架構** - 易於維護和擴展
- **流暢動畫** - 使用 Framer Motion 打造優雅的互動效果
- **Tailwind CSS** - 現代化的 utility-first CSS 框架

## 🚀 快速開始

### 前置需求

- Node.js 18+
- npm 或 yarn

### 安裝

```bash
# 克隆專案
git clone https://github.com/KevinYang2229/resume.git

# 進入專案目錄
cd resume

# 安裝依賴
npm install
```

### 開發

```bash
# 啟動開發伺服器
npm run dev
```

開啟瀏覽器訪問 `http://localhost:5173`

### 建置

```bash
# 建置生產版本
npm run build

# 預覽建置結果
npm run preview
```

## 📁 專案結構

```text
resume/
├── public/              # 靜態資源
├── src/
│   ├── components/      # React 組件
│   │   ├── icons/      # 圖示組件
│   │   ├── Education.tsx
│   │   ├── Experience.tsx
│   │   ├── Footer.tsx
│   │   ├── PersonalInfo.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   └── ThemeToggle.tsx
│   ├── data/           # 資料檔案
│   │   └── resumeData.ts
│   ├── hooks/          # 自定義 Hooks
│   │   └── useTheme.ts
│   ├── types/          # TypeScript 型別定義
│   │   └── index.ts
│   ├── App.tsx         # 主應用組件
│   ├── main.tsx        # 應用入口
│   └── index.css       # 全域樣式
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🛠️ 技術棧

### 核心框架

- **React 19.2.0** - 使用者介面函式庫
- **TypeScript 5.9.3** - 型別安全的 JavaScript
- **Vite 7.2.2** - 現代化前端建構工具

### 樣式與動畫

- **Tailwind CSS 4.1.17** - Utility-first CSS 框架
- **Framer Motion 12.23.24** - 動畫函式庫

### 開發工具

- **ESLint** - 程式碼品質檢查
- **TypeScript ESLint** - TypeScript 程式碼規範

## 📝 自訂履歷內容

編輯 `src/data/resumeData.ts` 檔案來更新您的個人資訊：

```typescript
export const resumeData: ResumeData = {
  personalInfo: {
    name: "您的姓名",
    title: "您的職稱",
    email: "your.email@example.com",
    // ... 其他資訊
  },
  skills: {
    // 您的技能
  },
  experiences: [
    // 您的工作經驗
  ],
  projects: [
    // 您的專案
  ],
  education: [
    // 您的學歷
  ],
};
```

## 🎨 主題切換

本專案支援深色和淺色模式，使用 `useTheme` Hook 實作：

- 主題設定會自動儲存在 localStorage
- 支援系統主題偏好設定
- 平滑的主題切換動畫

## 📦 建置與部署

### 建置專案

```bash
npm run build
```

建置完成後，產出檔案會在 `dist` 目錄中。

### 部署建議

專案可以部署到以下平台：

- **Vercel** - 推薦，零設定部署
- **Netlify** - 簡單快速的靜態網站託管
- **GitHub Pages** - 免費的靜態網站託管
- **Cloudflare Pages** - 全球 CDN 加速

## 🤝 貢獻

歡迎提交 Issue 或 Pull Request！

## 📄 授權

MIT License

## 👤 作者

楊明倫 (Kevin Yang)

- GitHub: [@KevinYang2229](https://github.com/KevinYang2229)
- LinkedIn: [楊明倫](https://www.linkedin.com/in/%E6%98%8E%E5%80%AB-%E6%A5%8A-4b87371a0/)
- Email: <kk2229.yang@gmail.com>

## ⭐ 支持

如果這個專案對您有幫助，歡迎給一個星星 ⭐️

---

Made with by Kevin Yang
