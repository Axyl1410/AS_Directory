"use client";
import { useTheme } from "./theme-context";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="rounded bg-gray-200 p-2 dark:bg-gray-800"
    >
      Switch to {theme === "light" ? "dark" : "light"} theme
    </button>
  );
};

export default ThemeSwitcher;
