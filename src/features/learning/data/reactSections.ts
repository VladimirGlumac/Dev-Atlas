import type { LearningSection } from "../types/learning";

export const reactSections: LearningSection[] = [
  {
    id: "react-core-hooks",
    technologyId: "react",
    title: "Core Hooks",
    slug: "core-hooks",
    description:
      "Core React hooks used for state, effects, refs and shared state.",
    order: 1,
  },

  {
    id: "react-production",
    technologyId: "react",
    title: "Production React",
    slug: "production",
    description:
      "Patterns used when building maintainable production React applications.",
    order: 2,
  },

  {
    id: "react-performance",
    technologyId: "react",
    title: "Performance",
    slug: "performance",
    description: "Rendering behavior, memoization and responsive UI patterns.",
    order: 3,
  },

  {
    id: "react-advanced-hooks",
    technologyId: "react",
    title: "Advanced Hooks",
    slug: "advanced-hooks",
    description:
      "Modern React hooks for transitions, optimistic UI and advanced workflows.",
    order: 4,
  },
];
