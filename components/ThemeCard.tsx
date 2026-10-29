"use client";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useSyncExternalStore } from "react";

const cardClass =
  "card flex items-center justify-center w-full h-full hover:bg-zinc-100 dark:hover:bg-[#252525]";

export default function ThemeCard() {
  const { resolvedTheme, setTheme } = useTheme();
  // true en el cliente, false en el render del servidor
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  // Placeholder del mismo tamaño para que el grid no salte antes de montar
  if (!mounted) return <div aria-hidden="true" className={cardClass} />;

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
      className={`${cardClass} group cursor-pointer`}
    >
      {isDark ? (
        <Moon
          size={40}
          aria-hidden="true"
          className="text-white transition-transform duration-300 group-hover:-rotate-12"
        />
      ) : (
        <Sun
          size={40}
          aria-hidden="true"
          className="text-zinc-900 transition-transform duration-500 group-hover:rotate-45"
        />
      )}
    </button>
  );
}
