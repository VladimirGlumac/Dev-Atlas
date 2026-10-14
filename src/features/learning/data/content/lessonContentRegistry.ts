import type { LessonContent } from "../../types/learning";

import { useStateContent } from "./react/useStateContent";
import { useEffectContent } from "./react/useEffectContent";
import { useRefContent } from "./react/useRefContent";
import { useContextContent } from "./react/useContextContent";
import { useMemoContent } from "./react/useMemoContent";
import { useCallbackContent } from "./react/useCallbackContent";
import { useTransitionContent } from "./react/useTransitionContent";
import { useOptimisticContent } from "./react/useOptimisticContent";
import { serverStateVsClientStateContent } from "./tanstack/serverStateVsClientStateContent";
import { queryClientProviderContent } from "./tanstack/queryClientProviderContent";
import { useQueryContent } from "./tanstack/useQueryContent";
import { queryKeysContent } from "./tanstack/queryKeysContent";
import { essentialGitCommandsContent } from "./git/essentialGitCommandsContent";
import { staleTimeContent } from "./tanstack/staleTimeContent";

export const lessonContentRegistry: Record<string, LessonContent> = {
  [useStateContent.lessonId]: useStateContent,

  [useEffectContent.lessonId]: useEffectContent,

  [useRefContent.lessonId]: useRefContent,

  [useContextContent.lessonId]: useContextContent,

  [useMemoContent.lessonId]: useMemoContent,

  [useCallbackContent.lessonId]: useCallbackContent,

  [useTransitionContent.lessonId]: useTransitionContent,

  [useOptimisticContent.lessonId]: useOptimisticContent,

  [serverStateVsClientStateContent.lessonId]: serverStateVsClientStateContent,

  [queryClientProviderContent.lessonId]: queryClientProviderContent,

  [useQueryContent.lessonId]: useQueryContent,

  [queryKeysContent.lessonId]: queryKeysContent,

  [essentialGitCommandsContent.lessonId]: essentialGitCommandsContent,

  [staleTimeContent.lessonId]: staleTimeContent,
};
