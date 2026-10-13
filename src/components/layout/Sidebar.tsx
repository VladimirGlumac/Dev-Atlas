import { NavLink } from "react-router";

import { navigationItems } from "../../app/navigation";

export default function Sidebar() {
  return (
    <aside
      className="
        hidden min-h-[calc(100vh-4rem)] w-64 shrink-0
        border-r border-slate-200/80
        bg-white/70
        px-4 py-6
        dark:border-slate-800/80
        dark:bg-slate-950/40
        lg:block
      "
    >
      <nav aria-label="Primary navigation">
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
                      "group flex items-center gap-3 rounded-xl px-3 py-2.5",
                      "text-sm font-medium transition-all duration-200",
                      isActive
                        ? "bg-cyan-500/10 text-cyan-700 shadow-sm dark:text-cyan-400"
                        : "text-slate-600 hover:bg-slate-100 hover:text-slate-950 dark:text-slate-400 dark:hover:bg-slate-900 dark:hover:text-slate-100",
                    ].join(" ")
                  }
                >
                  <Icon size={19} className="shrink-0" aria-hidden="true" />

                  <span>{item.label}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
