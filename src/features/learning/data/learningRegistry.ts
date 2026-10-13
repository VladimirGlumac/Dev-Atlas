import { reactLessons } from "./reactLessons";
import { reactSections } from "./reactSections";

import type { LearningSection, Lesson } from "../types/learning";

interface TechnologyLearningData {
  sections: LearningSection[];
  lessons: Lesson[];
}

export const learningRegistry: Record<string, TechnologyLearningData> = {
  react: {
    sections: reactSections,
    lessons: reactLessons,
  },
};
