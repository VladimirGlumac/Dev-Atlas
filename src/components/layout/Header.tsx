import { useState } from "react";
import MobileDrawer from "./MobileDrawer";
import { Layers3, Menu, Moon, Search, Sun, User } from "lucide-react";
import { Link } from "react-router";
import { useTheme } from "../../features/theme/useTheme";
import GlobalSearch from "../../features/search/components/GlobalSearch";
import MobileSearchOverlay from "../../features/search/components/MobileSearchOverlay";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);

  return (
    <>
      <header
        className="
        sticky top-0 z-50
        border-b border-slate-200/80
        bg-white/85
        backdrop-blur-xl
        dark:border-slate-800/80
        dark:bg-slate-950/85
      "
      >
        <div
          className="
          mx-auto flex h-16 w-full max-w-[1600px]
          items-center gap-4 px-4 sm:px-6
        "
        >
          <Link
            to="/"
            aria-label="DevAtlas home"
            className="flex shrink-0 items-center gap-2"
          >
            <span
              className="
              flex size-9 items-center justify-center
              rounded-xl
              bg-linear-to-br from-cyan-400 to-blue-600
              text-white
              shadow-lg shadow-cyan-500/20
            "
            >
              <Layers3 size={20} />
            </span>

            <span
              className="
              hidden text-lg font-bold tracking-tight
              sm:block
            "
            >
              DevAtlas
            </span>
          </Link>

          <div className="hidden flex-1 md:flex md:justify-center">
            <GlobalSearch />
          </div>

          <div className="ml-auto flex items-center gap-2">
            <button
              type="button"
              aria-label="Open global search"
              className="
              rounded-xl border border-slate-200
              p-2.5 text-slate-600
              transition hover:bg-slate-100
              dark:border-slate-800
              dark:text-slate-300
              dark:hover:bg-slate-900
              md:hidden
            "
              onClick={() => setIsMobileSearchOpen(true)}
            >
              <Search size={19} />
            </button>

            <button
              type="button"
              onClick={toggleTheme}
              aria-label={
                theme === "dark"
                  ? "Switch to light theme"
                  : "Switch to dark theme"
              }
              className="
              rounded-xl border border-slate-200
              p-2.5 text-slate-600
              transition hover:bg-slate-100
              dark:border-slate-800
              dark:text-slate-300
              dark:hover:bg-slate-900
            "
            >
              {theme === "dark" ? <Sun size={19} /> : <Moon size={19} />}
            </button>

            <button
              type="button"
              aria-label="Open profile menu"
              className="
              hidden size-10 items-center justify-center
              rounded-full
              border border-slate-200
              bg-slate-100
              text-slate-600
              dark:border-slate-800
              dark:bg-slate-900
              dark:text-slate-300
              sm:flex
            "
            >
              <User size={18} />
            </button>

            <button
              type="button"
              onClick={() => setIsDrawerOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={isDrawerOpen}
              className="
    rounded-xl border border-slate-200
    p-2.5 text-slate-600
    dark:border-slate-800
    dark:text-slate-300
    lg:hidden
  "
            >
              <Menu size={19} />
            </button>
          </div>
        </div>
      </header>
      <MobileDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />

      <MobileSearchOverlay
        isOpen={isMobileSearchOpen}
        onClose={() => setIsMobileSearchOpen(false)}
      />
    </>
  );
}
