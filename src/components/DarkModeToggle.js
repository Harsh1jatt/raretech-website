"use client";
import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored) {
      setTheme(stored);
      document.documentElement.classList.toggle("dark", stored === "dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  return (
    <button onClick={toggleTheme} className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded">
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
}
