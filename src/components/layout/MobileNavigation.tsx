import { NavLink } from "react-router";

import { navigationItems } from "../../app/navigation";

export default function MobileNavigation() {
  const mobileItems = navigationItems.filter((item) => item.mobile);

  return (
    <nav
      aria-label="Mobile navigation"
      className="
        fixed inset-x-0 bottom-0 z-50
        border-t border-slate-200/80
        bg-white/95
        shadow-[0_-10px_30px_rgba(15,23,42,0.08)]
        backdrop-blur-xl
        dark:border-slate-800
        dark:bg-slate-950/95
        lg:hidden
      "
    >
      <ul className="grid grid-cols-5">
        {mobileItems.map((item) => {
          const Icon = item.icon;

          return (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  [
                    "relative flex min-h-16 flex-col items-center justify-center gap-1",
                    "px-1 text-[11px] font-medium transition-colors",
                    isActive
                      ? "text-cyan-600 dark:text-cyan-400"
                      : "text-slate-500 dark:text-slate-400",
                  ].join(" ")
                }
              >
                {({ isActive }) => (
                  <>
                    <Icon size={20} />

                    <span>{item.label}</span>

                    {isActive && (
                      <span
                        className="
                          absolute top-0 h-0.5 w-8
                          rounded-full bg-cyan-500
                        "
                      />
                    )}
                  </>
                )}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
