import { useEffect, useState } from "react";

export type Theme = "light" | "dark";

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    // 檢查 localStorage
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    if (savedTheme) {
      console.log("📦 從 localStorage 讀取主題:", savedTheme);
      return savedTheme;
    }

    // 檢查系統偏好
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      console.log("🌙 系統偏好深色模式");
      return "dark";
    }
    console.log("☀️ 預設使用淺色模式");
    return "light";
  });

  useEffect(() => {
    const root = document.documentElement;

    console.log("🎨 應用主題:", theme);

    if (theme === "dark") {
      root.classList.add("dark");
      console.log("✅ 已添加 dark 類別");
    } else {
      root.classList.remove("dark");
      console.log("✅ 已移除 dark 類別");
    }

    // 儲存到 localStorage
    localStorage.setItem("theme", theme);
    console.log("💾 已儲存到 localStorage:", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return { theme, toggleTheme };
};
