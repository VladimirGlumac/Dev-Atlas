import type { LearningSection } from "../types/learning";

export const restApiSections: LearningSection[] = [
  {
    id: "rest-http-foundations",
    technologyId: "rest-api",
    title: "HTTP Foundations",
    slug: "http-foundations",
    description:
      "Understand requests, responses, methods, headers and status codes.",
    order: 1,
  },

  {
    id: "rest-design",
    technologyId: "rest-api",
    title: "REST Design",
    slug: "rest-design",
    description:
      "Design predictable resource-oriented API routes and operations.",
    order: 2,
  },

  {
    id: "rest-api-features",
    technologyId: "rest-api",
    title: "API Features",
    slug: "api-features",
    description:
      "Design filtering, sorting, pagination and consistent error responses.",
    order: 3,
  },

  {
    id: "rest-production",
    technologyId: "rest-api",
    title: "Production Patterns",
    slug: "production",
    description:
      "Apply authentication, versioning, consistency and maintainable REST API practices.",
    order: 4,
  },
];
