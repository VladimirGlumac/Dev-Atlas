import type { LessonContent } from "../types/learning";

interface LessonTableOfContentsProps {
  content: LessonContent;
}

export default function LessonTableOfContents({
  content,
}: LessonTableOfContentsProps) {
  const items = [
    {
      id: "overview",
      label: "Overview",
    },
    {
      id: "mental-model",
      label: "Mental model",
    },
    ...content.sections.map((section) => ({
      id: section.id,
      label: section.title,
    })),
    {
      id: "common-mistakes",
      label: "Common mistakes",
    },
    {
      id: "notebook-note",
      label: "Beleška za svesku",
    },
  ];

  return (
    <aside className="hidden xl:block">
      <div className="sticky top-24">
        <div
          className="
            rounded-2xl
            border border-slate-200
            bg-white
            p-4
            shadow-sm
            dark:border-slate-800
            dark:bg-slate-900
          "
        >
          <p className="text-sm font-semibold">On this page</p>

          <nav aria-label="Lesson sections" className="mt-4">
            <ul className="space-y-1">
              {items.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="
                      block rounded-lg
                      px-3 py-2
                      text-sm
                      text-slate-500
                      transition
                      hover:bg-slate-100
                      hover:text-slate-950
                      dark:text-slate-400
                      dark:hover:bg-slate-800
                      dark:hover:text-white
                    "
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </aside>
  );
}
