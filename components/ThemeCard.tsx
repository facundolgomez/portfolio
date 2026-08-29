"use client";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeCard() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <article
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="rounded-2xl bg-zinc-200 dark:bg-[#151515] flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-zinc-300 dark:hover:bg-[#252525] transition"
    >
      {isDark ? (
        <Moon size={40} className="text-zinc-900 dark:text-white" />
      ) : (
        <Sun size={40} className="text-zinc-900 dark:text-white" />
      )}
    </article>
  );
}
