import { ArrowRight, CheckCircle2 } from "lucide-react";

import {
  getLessonNavigation,
  getSectionById,
} from "../../learning/services/learningService";

import { buildLessonRoute } from "../../learning/utils/learningRoutes";

import type { Lesson, Technology } from "../../learning/types/learning";

import { useCompleteAndContinue } from "../hooks/useCompleteAndContinue";

interface CompleteLessonButtonProps {
  lesson: Lesson;
  technology: Technology;
}

export default function CompleteLessonButton({
  lesson,
  technology,
}: CompleteLessonButtonProps) {
  const { completeAndContinue, isCompleting } = useCompleteAndContinue();

  const navigation = getLessonNavigation(lesson);

  const nextLesson = navigation.next;

  const nextSection = nextLesson
    ? getSectionById(technology.id, nextLesson.sectionId)
    : undefined;

  const nextRoute =
    nextLesson && nextSection
      ? buildLessonRoute(technology, nextSection, nextLesson)
      : undefined;

  function handleComplete(): void {
    completeAndContinue({
      lessonId: lesson.id,

      nextRoute,
    });
  }

  return (
    <button
      type="button"
      onClick={handleComplete}
      disabled={isCompleting}
      className="
        inline-flex
        items-center
        justify-center
        gap-2
        rounded-xl
        bg-cyan-500
        px-5 py-3
        text-sm font-semibold
        text-slate-950
        transition
        hover:bg-cyan-400
        disabled:cursor-not-allowed
        disabled:opacity-50
      "
    >
      <CheckCircle2 size={17} />

      {isCompleting
        ? "Saving..."
        : nextRoute
          ? "Complete & next"
          : "Mark complete"}

      {nextRoute && <ArrowRight size={16} />}
    </button>
  );
}
