import {
  ArrowRight,
  BookOpen,
  Code2,
  Database,
  Server,
  Boxes,
} from "lucide-react";
import { Link } from "react-router";

const techItems = [
  {
    label: "React",
    icon: Code2,
  },
  {
    label: "TypeScript",
    icon: Boxes,
  },
  {
    label: "Node.js",
    icon: Server,
  },
  {
    label: "PostgreSQL",
    icon: Database,
  },
];

export default function HomePage() {
  return (
    <section
      className="
        relative overflow-hidden
        border-b border-slate-200
        dark:border-slate-800
      "
    >
      <div
        className="
          mx-auto grid
          max-w-[1600px]
          gap-12
          px-6 py-16
          lg:grid-cols-[1.1fr_0.9fr]
          lg:px-10
          lg:py-24
        "
      >
        <div className="flex flex-col justify-center">
          <span
            className="
              mb-5 inline-flex
              w-fit items-center gap-2
              rounded-full
              border border-cyan-500/20
              bg-cyan-500/10
              px-3 py-1.5
              text-sm font-medium
              text-cyan-700
              dark:text-cyan-300
            "
          >
            <BookOpen size={16} />
            Learn. Build. Practice.
          </span>

          <h1
            className="
              max-w-3xl
              text-4xl font-bold
              tracking-tight
              text-slate-950
              sm:text-5xl
              lg:text-6xl
              dark:text-white
            "
          >
            Your full-stack{" "}
            <span className="text-cyan-500">learning workspace</span>
          </h1>

          <p
            className="
              mt-6 max-w-2xl
              text-base leading-7
              text-slate-600
              sm:text-lg
              dark:text-slate-400
            "
          >
            Learn TypeScript, React, Next.js, Node.js, PostgreSQL, Docker,
            testing, APIs and more through structured lessons, real examples and
            practical projects.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/learn"
              className="
                inline-flex items-center gap-2
                rounded-xl
                bg-cyan-500
                px-5 py-3
                text-sm font-semibold
                text-slate-950
                shadow-lg
                shadow-cyan-500/20
                transition
                hover:bg-cyan-400
              "
            >
              Start learning
              <ArrowRight size={17} />
            </Link>

            <Link
              to="/dashboard"
              className="
                inline-flex items-center gap-2
                rounded-xl
                border border-slate-200
                bg-white
                px-5 py-3
                text-sm font-semibold
                text-slate-700
                transition
                hover:bg-slate-100
                dark:border-slate-800
                dark:bg-slate-900
                dark:text-slate-200
                dark:hover:bg-slate-800
              "
            >
              Explore dashboard
            </Link>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div
            className="
              relative
              w-full max-w-xl
              rounded-3xl
              border border-slate-200
              bg-white/80
              p-6
              shadow-2xl
              backdrop-blur
              dark:border-slate-800
              dark:bg-slate-900/70
            "
          >
            <div
              className="
                rounded-2xl
                border border-slate-200
                bg-slate-950
                p-5
                shadow-xl
                dark:border-slate-700
              "
            >
              <div className="mb-5 flex gap-2">
                <span className="size-3 rounded-full bg-red-400" />
                <span className="size-3 rounded-full bg-amber-400" />
                <span className="size-3 rounded-full bg-emerald-400" />
              </div>

              <div className="space-y-3">
                <div className="h-3 w-2/3 rounded bg-cyan-400/80" />
                <div className="h-3 w-1/2 rounded bg-blue-400/70" />
                <div className="h-3 w-5/6 rounded bg-emerald-400/60" />
                <div className="h-3 w-2/5 rounded bg-violet-400/60" />
                <div className="h-3 w-3/4 rounded bg-cyan-400/50" />
              </div>
            </div>

            <div
              className="
                mt-6 grid
                grid-cols-2
                gap-3
                sm:grid-cols-4
              "
            >
              {techItems.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="
                      flex flex-col items-center
                      justify-center gap-2
                      rounded-2xl
                      border border-slate-200
                      bg-slate-50
                      p-4
                      text-center
                      dark:border-slate-800
                      dark:bg-slate-950
                    "
                  >
                    <span
                      className="
                        flex size-10
                        items-center justify-center
                        rounded-xl
                        bg-cyan-500/10
                        text-cyan-600
                        dark:text-cyan-400
                      "
                    >
                      <Icon size={20} />
                    </span>

                    <span
                      className="
                        text-xs font-medium
                        text-slate-700
                        dark:text-slate-300
                      "
                    >
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div
            className="
              pointer-events-none
              absolute -z-10
              size-72
              rounded-full
              bg-cyan-500/20
              blur-3xl
            "
          />
        </div>
      </div>
    </section>
  );
}
