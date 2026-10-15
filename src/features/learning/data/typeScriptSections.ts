import type { LearningSection } from "../types/learning";

export const typeScriptSections: LearningSection[] = [
  {
    id: "typescript-fundamentals",
    technologyId: "typescript",
    title: "Fundamentals",
    slug: "fundamentals",
    description:
      "Core TypeScript types, objects, arrays, aliases and interfaces.",
    order: 1,
  },

  {
    id: "typescript-functions",
    technologyId: "typescript",
    title: "Functions & Collections",
    slug: "functions-collections",
    description:
      "Typed functions and safe work with arrays and collection helpers.",
    order: 2,
  },

  {
    id: "typescript-type-system",
    technologyId: "typescript",
    title: "Type System",
    slug: "type-system",
    description: "Unions, literals, narrowing, unknown and type guards.",
    order: 3,
  },

  {
    id: "typescript-generics",
    technologyId: "typescript",
    title: "Generics",
    slug: "generics",
    description:
      "Reusable type-safe abstractions using generics, constraints and keyof.",
    order: 4,
  },

  {
    id: "typescript-object-safety",
    technologyId: "typescript",
    title: "Object Safety",
    slug: "object-safety",
    description:
      "Utility types, readonly data, tuples and immutable object patterns.",
    order: 5,
  },

  {
    id: "typescript-async",
    technologyId: "typescript",
    title: "Async & APIs",
    slug: "async-apis",
    description:
      "Promises, async functions, nullable values and safe API response modeling.",
    order: 6,
  },

  {
    id: "typescript-advanced",
    technologyId: "typescript",
    title: "Advanced Types",
    slug: "advanced-types",
    description: "Discriminated unions, never and exhaustive type-safe logic.",
    order: 7,
  },

  {
    id: "typescript-production",
    technologyId: "typescript",
    title: "Production Patterns",
    slug: "production-patterns",
    description:
      "Practical TypeScript patterns for frontend and full-stack applications.",
    order: 8,
  },
];
