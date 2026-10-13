import { AlertTriangle, Brain, NotebookPen } from "lucide-react";

import type { LessonContent as LessonContentType } from "../types/learning";

import CodeBlock from "./CodeBlock";

interface LessonContentProps {
  content: LessonContentType;
}

export default function LessonContent({ content }: LessonContentProps) {
  return (
    <div className="space-y-12">
      <section id="overview">
        <h2 className="text-2xl font-bold">Overview</h2>

        <p className="mt-4 max-w-3xl leading-7 text-slate-600 dark:text-slate-400">
          {content.overview}
        </p>
      </section>

      <section
        id="mental-model"
        className="
          rounded-2xl
          border border-cyan-500/20
          bg-cyan-500/5
          p-6
        "
      >
        <div className="flex gap-4">
          <Brain
            className="mt-1 shrink-0 text-cyan-600 dark:text-cyan-400"
            size={22}
          />

          <div>
            <h2 className="font-semibold">Mental model</h2>

            <p className="mt-2 leading-7 text-slate-600 dark:text-slate-400">
              {content.mentalModel}
            </p>
          </div>
        </div>
      </section>

      {content.sections.map((section) => (
        <section key={section.id} id={section.id}>
          <h2 className="text-2xl font-bold">{section.title}</h2>

          <p className="mt-4 max-w-3xl leading-7 text-slate-600 dark:text-slate-400">
            {section.body}
          </p>

          {section.codeExamples && (
            <div className="mt-6 space-y-5">
              {section.codeExamples.map((example) => (
                <div key={example.id}>
                  <CodeBlock
                    title={example.title}
                    language={example.language}
                    code={example.code}
                  />

                  {example.explanation && (
                    <p className="mt-3 text-sm leading-6 text-slate-500">
                      {example.explanation}
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}
        </section>
      ))}

      <section id="common-mistakes">
        <div className="flex items-center gap-3">
          <AlertTriangle size={22} className="text-amber-500" />

          <h2 className="text-2xl font-bold">Common mistakes</h2>
        </div>

        <ul className="mt-5 space-y-3">
          {content.commonMistakes.map((mistake) => (
            <li
              key={mistake}
              className="
                  rounded-xl
                  border border-slate-200
                  bg-white
                  px-4 py-3
                  text-sm leading-6
                  text-slate-600
                  dark:border-slate-800
                  dark:bg-slate-900
                  dark:text-slate-400
                "
            >
              {mistake}
            </li>
          ))}
        </ul>
      </section>

      <section
        id="notebook-note"
        className="
          rounded-2xl
          border border-violet-500/20
          bg-violet-500/5
          p-6
        "
      >
        <div className="flex gap-4">
          <NotebookPen size={22} className="mt-1 shrink-0 text-violet-500" />

          <div>
            <h2 className="font-semibold">Beleška za svesku</h2>

            <p className="mt-2 leading-7 text-slate-600 dark:text-slate-400">
              {content.notebookNote}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
