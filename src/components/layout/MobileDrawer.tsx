import { LogIn, User, X } from "lucide-react";
import { useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router";

import { navigationItems } from "../../app/navigation";

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const location = useLocation();

  useEffect(() => {
    if (!isOpen) return;

    closeButtonRef.current?.focus();

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent): void {
      if (event.key === "Escape") {
        onClose();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;

      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      onClose();
    }
  }, [location.pathname]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-100 lg:hidden" role="presentation">
      <button
        type="button"
        aria-label="Close navigation"
        onClick={onClose}
        className="
          absolute inset-0
          bg-slate-950/60
          backdrop-blur-sm
        "
      />

      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className="
          absolute right-0 top-0
          flex h-full w-[min(88vw,22rem)]
          flex-col
          border-l border-slate-200
          bg-white
          shadow-2xl
          dark:border-slate-800
          dark:bg-slate-950
        "
      >
        <div
          className="
            flex h-16 items-center
            justify-between
            border-b border-slate-200
            px-5
            dark:border-slate-800
          "
        >
          <div>
            <p className="font-semibold">Navigation</p>

            <p className="text-xs text-slate-500">Explore DevAtlas</p>
          </div>

          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close navigation menu"
            className="
              rounded-xl
              border border-slate-200
              p-2.5
              text-slate-600
              transition
              hover:bg-slate-100
              dark:border-slate-800
              dark:text-slate-300
              dark:hover:bg-slate-900
            "
          >
            <X size={19} />
          </button>
        </div>

        <nav
          aria-label="Mobile drawer navigation"
          className="flex-1 overflow-y-auto px-4 py-5"
        >
          <ul className="space-y-1">
            {navigationItems.map((item) => {
              const Icon = item.icon;

              return (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    end={item.to === "/"}
                    className={({ isActive }) =>
                      [
                        "flex items-center gap-3 rounded-xl px-3 py-3",
                        "text-sm font-medium transition-colors",
                        isActive
                          ? "bg-cyan-500/10 text-cyan-700 dark:text-cyan-400"
                          : "text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-900",
                      ].join(" ")
                    }
                  >
                    <Icon size={19} aria-hidden="true" />

                    {item.label}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>

        <div
          className="
            border-t border-slate-200
            p-4
            dark:border-slate-800
          "
        >
          <div
            className="
              rounded-2xl
              border border-slate-200
              bg-slate-50
              p-4
              dark:border-slate-800
              dark:bg-slate-900
            "
          >
            <div className="flex items-center gap-3">
              <span
                className="
                  flex size-10 items-center
                  justify-center
                  rounded-full
                  bg-cyan-500/10
                  text-cyan-600
                  dark:text-cyan-400
                "
              >
                <User size={18} />
              </span>

              <div>
                <p className="text-sm font-semibold">Guest user</p>

                <p className="text-xs text-slate-500">
                  Sign in to sync progress
                </p>
              </div>
            </div>

            <NavLink
              to="/login"
              className="
                mt-4 flex w-full
                items-center justify-center
                gap-2 rounded-xl
                bg-cyan-500
                px-4 py-2.5
                text-sm font-semibold
                text-slate-950
                transition
                hover:bg-cyan-400
              "
            >
              <LogIn size={17} />
              Sign in
            </NavLink>
          </div>
        </div>
      </aside>
    </div>
  );
}
