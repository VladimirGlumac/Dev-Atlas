import { technologies } from "../../learning/data/technologies";

import {
  getLessonsByTechnology,
  getSectionsByTechnology,
} from "../../learning/services/learningService";

import {
  buildLessonRoute,
  buildTechnologyRoute,
} from "../../learning/utils/learningRoutes";

import type { SearchResult } from "../types/search";

export function searchLearningContent(query: string): SearchResult[] {
  const normalizedQuery = query.trim().toLowerCase();

  if (!normalizedQuery) {
    return [];
  }

  const results: SearchResult[] = [];

  for (const technology of technologies) {
    const technologyMatches =
      technology.name.toLowerCase().includes(normalizedQuery) ||
      technology.description.toLowerCase().includes(normalizedQuery);

    if (technologyMatches) {
      results.push({
        id: `technology-${technology.id}`,
        type: "technology",
        title: technology.name,
        description: technology.description,
        route: buildTechnologyRoute(technology),
      });
    }

    const sections = getSectionsByTechnology(technology.id);

    for (const section of sections) {
      const sectionMatches =
        section.title.toLowerCase().includes(normalizedQuery) ||
        section.description?.toLowerCase().includes(normalizedQuery);

      if (sectionMatches) {
        results.push({
          id: `section-${section.id}`,
          type: "section",
          title: section.title,
          description: technology.name,
          route: buildTechnologyRoute(technology),
        });
      }
    }

    const lessons = getLessonsByTechnology(technology.id);

    for (const lesson of lessons) {
      const lessonMatches =
        lesson.title.toLowerCase().includes(normalizedQuery) ||
        lesson.description.toLowerCase().includes(normalizedQuery);

      if (!lessonMatches) {
        continue;
      }

      const section = sections.find((item) => item.id === lesson.sectionId);

      if (!section) {
        continue;
      }

      results.push({
        id: `lesson-${lesson.id}`,
        type: "lesson",
        title: lesson.title,
        description: `${technology.name} · ${section.title}`,
        route: buildLessonRoute(technology, section, lesson),
      });
    }
  }

  return results.slice(0, 8);
}
