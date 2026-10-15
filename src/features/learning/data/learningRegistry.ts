import { reactLessons } from "./reactLessons";
import { reactSections } from "./reactSections";

import type { LearningSection, Lesson } from "../types/learning";
import { tanStackQueryLessons } from "./tanStackQueryLessons";
import { tanStackQuerySections } from "./tanStackQuerySections";

import { gitLessons } from "./gitLessons";
import { gitSections } from "./gitSections";

import { typeScriptLessons } from "./typeScriptLessons";
import { typeScriptSections } from "./typeScriptSections";

import { reduxToolkitSections } from "./reduxToolkitSections";
import { reduxToolkitLessons } from "./reduxToolkitLessons";

import { restApiSections } from "./restApiSections";
import { restApiLessons } from "./restApiLessons";

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
  typescript: {
    sections: typeScriptSections,
    lessons: typeScriptLessons,
  },
  "redux-toolkit": {
    sections: reduxToolkitSections,
    lessons: reduxToolkitLessons,
  },
  "rest-api": {
    sections: restApiSections,
    lessons: restApiLessons,
  },
};
