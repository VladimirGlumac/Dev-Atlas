import type { LessonContent } from "../../types/learning";

import { useStateContent } from "./react/useStateContent";
import { useEffectContent } from "./react/useEffectContent";
import { useRefContent } from "./react/useRefContent";
import { useContextContent } from "./react/useContextContent";
import { useMemoContent } from "./react/useMemoContent";
import { useCallbackContent } from "./react/useCallbackContent";
import { useTransitionContent } from "./react/useTransitionContent";
import { useOptimisticContent } from "./react/useOptimisticContent";

export const lessonContentRegistry: Record<string, LessonContent> = {
  [useStateContent.lessonId]: useStateContent,

  [useEffectContent.lessonId]: useEffectContent,

  [useRefContent.lessonId]: useRefContent,

  [useContextContent.lessonId]: useContextContent,

  [useMemoContent.lessonId]: useMemoContent,

  [useCallbackContent.lessonId]: useCallbackContent,

  [useTransitionContent.lessonId]: useTransitionContent,

  [useOptimisticContent.lessonId]: useOptimisticContent,
};
