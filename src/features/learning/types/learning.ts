export type TechnologyStatus = "available" | "in-progress" | "planned";

export interface Technology {
  id: string;
  name: string;
  slug: string;
  description: string;
  status: TechnologyStatus;
}

export type LessonDifficulty = "beginner" | "intermediate" | "advanced";

export type LessonStatus = "published" | "draft";

export interface Lesson {
  id: string;
  technologyId: string;
  sectionId: string;

  title: string;
  slug: string;
  description: string;

  difficulty: LessonDifficulty;
  status: LessonStatus;

  order: number;
}

export interface LearningSection {
  id: string;
  technologyId: string;

  title: string;
  slug: string;

  description?: string;

  order: number;
}

export interface CodeExample {
  id: string;
  title: string;
  language: "tsx" | "ts" | "js" | "bash" | "json";
  code: string;
  explanation?: string;
}

export interface LessonContentSection {
  id: string;
  title: string;
  body: string;
  codeExamples?: CodeExample[];
}

export interface LessonContent {
  lessonId: string;

  overview: string;
  mentalModel: string;

  sections: LessonContentSection[];

  commonMistakes: string[];

  notebookNote: string;

  relatedLessonIds?: string[];
}
