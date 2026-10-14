import { reactLessons } from "./reactLessons";
import { reactSections } from "./reactSections";

import type { LearningSection, Lesson } from "../types/learning";
import { tanStackQueryLessons } from "./tanStackQueryLessons";
import { tanStackQuerySections } from "./tanStackQuerySections";

import { gitLessons } from "./gitLessons";
import { gitSections } from "./gitSections";

interface TechnologyLearningData {
  sections: LearningSection[];
  lessons: Lesson[];
}

export const learningRegistry: Record<string, TechnologyLearningData> = {
  react: {
    sections: reactSections,
    lessons: reactLessons,
  },

  "tanstack-query": {
    sections: tanStackQuerySections,
    lessons: tanStackQueryLessons,
  },
  "git-github": {
    sections: gitSections,
    lessons: gitLessons,
  },
};
