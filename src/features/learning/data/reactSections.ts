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
  {
    id: "react-architecture",
    technologyId: "react",
    title: "Architecture",
    slug: "architecture",
    description:
      "Organize React applications with clear boundaries, feature-based structure and predictable state ownership.",
    order: 5,
  },
  {
    id: "react-testing",
    technologyId: "react",
    title: "Testing",
    slug: "testing",
    description:
      "Test React applications through user behavior using Vitest and React Testing Library.",
    order: 6,
  },
];
