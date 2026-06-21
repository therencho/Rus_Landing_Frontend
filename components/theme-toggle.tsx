"use client";

import { useEffect, useState } from "react";
import { IconSun, IconMoon } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

/**
 * Dependency-free dark/light toggle. The actual theme class is applied before
 * paint by the inline script in layout.tsx; this just flips it and persists
 * the choice to localStorage. Renders nothing theme-dependent until mounted to
 * avoid a hydration mismatch.
 */
export default function ThemeToggle({ className }: { className?: string }) {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    setMounted(true);
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      /* ignore */
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle theme"
      className={cn(
        "flex h-9 w-9 items-center justify-center rounded-full",
        "text-fg-muted hover:text-fg hover:bg-surface-hover",
        "border border-border transition-colors",
        className,
      )}
    >
      {!mounted ? (
        <span className="block h-5 w-5" />
      ) : isDark ? (
        <IconSun size={18} />
      ) : (
        <IconMoon size={18} />
      )}
    </button>
  );
}
