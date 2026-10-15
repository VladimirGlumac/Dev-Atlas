import type { Lesson } from "../types/learning";

export const typeScriptLessons: Lesson[] = [
  // Fundamentals
  {
    id: "typescript-basic-types",
    technologyId: "typescript",
    sectionId: "typescript-fundamentals",
    title: "Basic Types",
    slug: "basic-types",
    description: "Understand primitive TypeScript types and type inference.",
    difficulty: "beginner",
    status: "published",
    order: 1,
  },

  {
    id: "typescript-arrays-objects",
    technologyId: "typescript",
    sectionId: "typescript-fundamentals",
    title: "Arrays & Objects",
    slug: "arrays-objects",
    description: "Model arrays and object structures with precise types.",
    difficulty: "beginner",
    status: "published",
    order: 2,
  },

  {
    id: "typescript-aliases-interfaces",
    technologyId: "typescript",
    sectionId: "typescript-fundamentals",
    title: "Type Aliases & Interfaces",
    slug: "type-aliases-interfaces",
    description:
      "Create reusable object contracts using type aliases and interfaces.",
    difficulty: "beginner",
    status: "published",
    order: 3,
  },

  // Functions
  {
    id: "typescript-functions",
    technologyId: "typescript",
    sectionId: "typescript-functions",
    title: "Functions",
    slug: "functions",
    description:
      "Type parameters, return values, optional arguments and safe function contracts.",
    difficulty: "beginner",
    status: "published",
    order: 1,
  },

  {
    id: "typescript-array-methods",
    technologyId: "typescript",
    sectionId: "typescript-functions",
    title: "Array Methods",
    slug: "array-methods",
    description:
      "Use map, filter, find, some and every with type-safe collections.",
    difficulty: "beginner",
    status: "published",
    order: 2,
  },

  // Type System
  {
    id: "typescript-union-literal-types",
    technologyId: "typescript",
    sectionId: "typescript-type-system",
    title: "Union & Literal Types",
    slug: "union-literal-types",
    description:
      "Model constrained values and alternatives with unions and literal types.",
    difficulty: "beginner",
    status: "published",
    order: 1,
  },

  {
    id: "typescript-unknown-narrowing",
    technologyId: "typescript",
    sectionId: "typescript-type-system",
    title: "unknown & Narrowing",
    slug: "unknown-narrowing",
    description:
      "Safely inspect unknown values using typeof and control-flow narrowing.",
    difficulty: "intermediate",
    status: "published",
    order: 2,
  },

  {
    id: "typescript-type-guards",
    technologyId: "typescript",
    sectionId: "typescript-type-system",
    title: "Type Guards",
    slug: "type-guards",
    description:
      "Create reusable runtime checks that narrow unknown values into safe TypeScript types.",
    difficulty: "intermediate",
    status: "published",
    order: 3,
  },

  // Generics
  {
    id: "typescript-generics",
    technologyId: "typescript",
    sectionId: "typescript-generics",
    title: "Generics",
    slug: "generics",
    description:
      "Build reusable functions and data structures while preserving precise type information.",
    difficulty: "intermediate",
    status: "published",
    order: 1,
  },

  {
    id: "typescript-generics-constraints-keyof",
    technologyId: "typescript",
    sectionId: "typescript-generics",
    title: "Generic Constraints & keyof",
    slug: "generic-constraints-keyof",
    description:
      "Restrict generic types and safely work with object keys using extends and keyof.",
    difficulty: "intermediate",
    status: "published",
    order: 2,
  },

  // Object Safety
  {
    id: "typescript-utility-types",
    technologyId: "typescript",
    sectionId: "typescript-object-safety",
    title: "Utility Types",
    slug: "utility-types",
    description:
      "Transform existing object types with Partial, Required, Pick, Omit, Record and related helpers.",
    difficulty: "intermediate",
    status: "published",
    order: 1,
  },

  {
    id: "typescript-readonly-tuples-as-const",
    technologyId: "typescript",
    sectionId: "typescript-object-safety",
    title: "Readonly, Tuples & as const",
    slug: "readonly-tuples-as-const",
    description:
      "Model immutable values, fixed-length arrays and precise literal data.",
    difficulty: "intermediate",
    status: "published",
    order: 2,
  },

  // Async
  {
    id: "typescript-null-undefined",
    technologyId: "typescript",
    sectionId: "typescript-async",
    title: "null, undefined & Safe Access",
    slug: "null-undefined-safe-access",
    description:
      "Handle missing values safely with unions, optional chaining and nullish coalescing.",
    difficulty: "intermediate",
    status: "published",
    order: 1,
  },

  {
    id: "typescript-async-api-response",
    technologyId: "typescript",
    sectionId: "typescript-async",
    title: "Async, Promises & API Responses",
    slug: "async-promises-api-responses",
    description:
      "Type asynchronous functions, Promise results and reusable API response models.",
    difficulty: "intermediate",
    status: "published",
    order: 2,
  },

  // Advanced Types
  {
    id: "typescript-discriminated-unions",
    technologyId: "typescript",
    sectionId: "typescript-advanced",
    title: "Discriminated Unions & never",
    slug: "discriminated-unions-never",
    description:
      "Model mutually exclusive application states and enforce exhaustive handling.",
    difficulty: "advanced",
    status: "published",
    order: 1,
  },

  {
    id: "typescript-indexed-access-typeof",
    technologyId: "typescript",
    sectionId: "typescript-advanced",
    title: "Indexed Access & typeof",
    slug: "indexed-access-typeof",
    description:
      "Derive types from existing values and object properties instead of duplicating type definitions.",
    difficulty: "advanced",
    status: "published",
    order: 2,
  },

  {
    id: "typescript-mapped-types",
    technologyId: "typescript",
    sectionId: "typescript-advanced",
    title: "Mapped Types",
    slug: "mapped-types",
    description:
      "Transform object types by iterating over their keys and modifying their properties.",
    difficulty: "advanced",
    status: "published",
    order: 3,
  },

  {
    id: "typescript-conditional-types",
    technologyId: "typescript",
    sectionId: "typescript-advanced",
    title: "Conditional Types & infer",
    slug: "conditional-types-infer",
    description:
      "Create types that change based on other types and extract nested type information.",
    difficulty: "advanced",
    status: "published",
    order: 4,
  },

  {
    id: "typescript-template-literal-types",
    technologyId: "typescript",
    sectionId: "typescript-advanced",
    title: "Template Literal Types",
    slug: "template-literal-types",
    description: "Build constrained string types by combining literal unions.",
    difficulty: "advanced",
    status: "published",
    order: 5,
  },

  // Production
  {
    id: "typescript-runtime-validation",
    technologyId: "typescript",
    sectionId: "typescript-production",
    title: "Runtime Validation",
    slug: "runtime-validation",
    description:
      "Validate external data before trusting it as a TypeScript domain model.",
    difficulty: "intermediate",
    status: "published",
    order: 1,
  },

  {
    id: "typescript-api-boundary-pattern",
    technologyId: "typescript",
    sectionId: "typescript-production",
    title: "Production API Boundary Pattern",
    slug: "production-api-boundary-pattern",
    description:
      "Combine unknown, runtime validation, typed services and discriminated results at an API boundary.",
    difficulty: "advanced",
    status: "published",
    order: 2,
  },
];
