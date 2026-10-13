import { ArrowLeft, BookOpen } from "lucide-react";
import { Link, useParams } from "react-router";
import {
  getLessonBySlug,
  getSectionBySlug,
  getTechnologyBySlug,
  getLessonContent,
} from "../features/learning/services/learningService";
import LessonContent from "../features/learning/components/LessonContent";
import LessonTableOfContents from "../features/learning/components/LessonTableOfContents";
import RelatedLessons from "../features/learning/components/RelatedLessons";
import LessonNavigation from "../features/learning/components/LessonNavigation";
import LessonBookmarkButton from "../features/bookmarks/components/LessonBookmarkButton";
import LessonProgressControls from "../features/progress/components/LessonProgressControls";
import { useAutoStartLessonProgress } from "../features/progress/hooks/useAutoStartLessonProgress";
import CompleteLessonButton from "../features/progress/components/CompleteLessonButton";

export default function LessonPage() {
  const {
    technologySlug = "",
    sectionSlug = "",
    lessonSlug = "",
  } = useParams();

  const technology = getTechnologyBySlug(technologySlug);

  const section = getSectionBySlug(technology?.id ?? "", sectionSlug);

  const lesson = getLessonBySlug(
    technology?.id ?? "",
    section?.id ?? "",
    lessonSlug,
  );

  useAutoStartLessonProgress(lesson?.id ?? "");

  if (!technologySlug || !sectionSlug || !lessonSlug) {
    return <div className="px-6 py-10 lg:px-10">Invalid lesson URL.</div>;
  }

  if (!technology) {
    return <div className="px-6 py-10 lg:px-10">Technology not found.</div>;
  }

  if (!section) {
    return <div className="px-6 py-10 lg:px-10">Section not found.</div>;
  }

  if (!lesson) {
    return <div className="px-6 py-10 lg:px-10">Lesson not found.</div>;
  }

  const content = getLessonContent(lesson.id);

  return (
    <div className="px-6 py-10 lg:px-10">
      <div className="mx-auto max-w-350">
        <Link
          to={`/learn/${technology.slug}`}
          className="
            inline-flex items-center gap-2
            text-sm font-medium
            text-slate-500
            transition
            hover:text-cyan-600
            dark:hover:text-cyan-400
          "
        >
          <ArrowLeft size={16} />
          Back to {technology.name}
        </Link>

        <nav
          aria-label="Breadcrumb"
          className="
            mt-8 flex flex-wrap
            items-center gap-2
            text-sm text-slate-500
          "
        >
          <Link to="/learn" className="hover:text-cyan-500">
            Learn
          </Link>

          <span>/</span>

          <Link
            to={`/learn/${technology.slug}`}
            className="hover:text-cyan-500"
          >
            {technology.name}
          </Link>

          <span>/</span>

          <span>{section.title}</span>

          <span>/</span>

          <span className="text-slate-900 dark:text-slate-200">
            {lesson.title}
          </span>
        </nav>

        <header className="mt-8">
          <div
            className="
      flex flex-col
      gap-6
      sm:flex-row
      sm:items-start
      sm:justify-between
    "
          >
            <div className="flex items-start gap-4">
              <span
                className="
          flex size-12 shrink-0
          items-center justify-center
          rounded-2xl
          bg-cyan-500/10
          text-cyan-600
          dark:text-cyan-400
        "
              >
                <BookOpen size={22} />
              </span>

              <div>
                <p
                  className="
            text-sm font-medium
            text-cyan-600
            dark:text-cyan-400
          "
                >
                  {section.title}
                </p>

                <h1
                  className="
            mt-1 text-4xl
            font-bold tracking-tight
          "
                >
                  {lesson.title}
                </h1>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:items-end">
              <LessonBookmarkButton lessonId={lesson.id} />

              <LessonProgressControls lessonId={lesson.id} />
            </div>
          </div>

          <p
            className="
            mt-6 max-w-3xl
            text-lg leading-8
            text-slate-600
            dark:text-slate-400
          "
          >
            {lesson.description}
          </p>
        </header>

        {content && (
          <details
            className="
      mt-8 rounded-2xl
      border border-slate-200
      bg-white
      p-4
      dark:border-slate-800
      dark:bg-slate-900
      xl:hidden
    "
          >
            <summary
              className="
        cursor-pointer
        text-sm font-semibold
      "
            >
              On this page
            </summary>

            <nav aria-label="Lesson sections" className="mt-4">
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#overview"
                    className="text-slate-500 hover:text-cyan-500"
                  >
                    Overview
                  </a>
                </li>

                <li>
                  <a
                    href="#mental-model"
                    className="text-slate-500 hover:text-cyan-500"
                  >
                    Mental model
                  </a>
                </li>

                {content.sections.map((contentSection) => (
                  <li key={contentSection.id}>
                    <a
                      href={`#${contentSection.id}`}
                      className="text-slate-500 hover:text-cyan-500"
                    >
                      {contentSection.title}
                    </a>
                  </li>
                ))}

                <li>
                  <a
                    href="#common-mistakes"
                    className="text-slate-500 hover:text-cyan-500"
                  >
                    Common mistakes
                  </a>
                </li>

                <li>
                  <a
                    href="#notebook-note"
                    className="text-slate-500 hover:text-cyan-500"
                  >
                    Beleška za svesku
                  </a>
                </li>
              </ul>
            </nav>
          </details>
        )}

        {content ? (
          <>
            <div
              className="
      mt-12 grid
      gap-8
      xl:grid-cols-[13rem_minmax(0,1fr)_18rem]
    "
            >
              <LessonTableOfContents content={content} />

              <div className="min-w-0">
                <LessonContent content={content} />

                <div className="mt-10 xl:hidden">
                  <RelatedLessons
                    lessonIds={content.relatedLessonIds}
                    technology={technology}
                  />
                </div>
              </div>

              <div className="hidden xl:block">
                <div className="sticky top-24">
                  <RelatedLessons
                    lessonIds={content.relatedLessonIds}
                    technology={technology}
                  />
                </div>
              </div>
            </div>

            <div
              className="
    mt-12 flex
    justify-end
    border-t
    border-slate-200
    pt-8
    dark:border-slate-800
  "
            >
              <CompleteLessonButton lesson={lesson} technology={technology} />
            </div>

            <LessonNavigation lesson={lesson} technology={technology} />
          </>
        ) : (
          <div
            className="
      mt-10 rounded-2xl
      border border-dashed
      border-slate-300
      p-6
      text-sm text-slate-500
      dark:border-slate-700
    "
          >
            This lesson is registered, but its content has not been published
            yet.
          </div>
        )}
      </div>
    </div>
  );
}
