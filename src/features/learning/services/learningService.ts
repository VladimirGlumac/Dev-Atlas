import { technologies } from "../data/technologies";
import { lessonContentRegistry } from "../data/content/lessonContentRegistry";
import { learningRegistry } from "../data/learningRegistry";
import type {
  LearningSection,
  Lesson,
  Technology,
  LessonContent,
} from "../types/learning";

export function getLessonsBySection(
  technologyId: string,
  sectionId: string,
): Lesson[] {
  const data = learningRegistry[technologyId];

  if (!data) {
    return [];
  }

  return data.lessons
    .filter(
      (lesson) =>
        lesson.sectionId === sectionId && lesson.status === "published",
    )
    .sort((a, b) => a.order - b.order);
}

export function getTechnologyBySlug(
  technologySlug: string,
): Technology | undefined {
  return technologies.find((technology) => technology.slug === technologySlug);
}

export function getSectionBySlug(
  technologyId: string,
  sectionSlug: string,
): LearningSection | undefined {
  const data = learningRegistry[technologyId];

  return data?.sections.find((section) => section.slug === sectionSlug);
}

export function getLessonBySlug(
  technologyId: string,
  sectionId: string,
  lessonSlug: string,
): Lesson | undefined {
  const data = learningRegistry[technologyId];

  return data?.lessons.find(
    (lesson) =>
      lesson.sectionId === sectionId &&
      lesson.slug === lessonSlug &&
      lesson.status === "published",
  );
}

export function getLessonContent(lessonId: string): LessonContent | undefined {
  return lessonContentRegistry[lessonId];
}

interface LessonNavigation {
  previous: Lesson | undefined;
  next: Lesson | undefined;
}

export function getLessonNavigation(lesson: Lesson): LessonNavigation {
  const data = learningRegistry[lesson.technologyId];

  if (!data) {
    return {
      previous: undefined,
      next: undefined,
    };
  }

  const orderedSections = [...data.sections].sort((a, b) => a.order - b.order);

  const orderedLessons = orderedSections.flatMap((section) =>
    data.lessons
      .filter(
        (item) => item.sectionId === section.id && item.status === "published",
      )
      .sort((a, b) => a.order - b.order),
  );

  const currentIndex = orderedLessons.findIndex(
    (item) => item.id === lesson.id,
  );

  if (currentIndex === -1) {
    return {
      previous: undefined,
      next: undefined,
    };
  }

  return {
    previous: orderedLessons[currentIndex - 1],

    next: orderedLessons[currentIndex + 1],
  };
}

export function getSectionById(
  technologyId: string,
  sectionId: string,
): LearningSection | undefined {
  const data = learningRegistry[technologyId];

  return data?.sections.find((section) => section.id === sectionId);
}

export function getSectionsByTechnology(
  technologyId: string,
): LearningSection[] {
  const data = learningRegistry[technologyId];

  if (!data) {
    return [];
  }

  return [...data.sections].sort((a, b) => a.order - b.order);
}

//Lessons
export function getLessonsByTechnology(technologyId: string): Lesson[] {
  const data = learningRegistry[technologyId];

  if (!data) {
    return [];
  }

  return [...data.lessons].sort((a, b) => a.order - b.order);
}

export function getLessonsByIds(
  technologyId: string,
  lessonIds: string[],
): Lesson[] {
  const data = learningRegistry[technologyId];

  if (!data) {
    return [];
  }

  return data.lessons.filter(
    (lesson) => lessonIds.includes(lesson.id) && lesson.status === "published",
  );
}

export function getPublishedLessonCount(technologyId: string): number {
  const data = learningRegistry[technologyId];

  if (!data) {
    return 0;
  }

  return data.lessons.filter((lesson) => lesson.status === "published").length;
}

export function getLessonById(
  technologyId: string,
  lessonId: string,
): Lesson | undefined {
  const data = learningRegistry[technologyId];

  return data?.lessons.find(
    (lesson) => lesson.id === lessonId && lesson.status === "published",
  );
}

export function findLessonById(lessonId: string): Lesson | undefined {
  for (const data of Object.values(learningRegistry)) {
    const lesson = data.lessons.find(
      (item) => item.id === lessonId && item.status === "published",
    );

    if (lesson) {
      return lesson;
    }
  }

  return undefined;
}

export function getTechnologyById(
  technologyId: string,
): Technology | undefined {
  return technologies.find((technology) => technology.id === technologyId);
}

export function getAllPublishedLessons(): Lesson[] {
  return Object.values(learningRegistry).flatMap((data) =>
    data.lessons.filter((lesson) => lesson.status === "published"),
  );
}
