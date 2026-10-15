import type { Technology } from "../types/learning";

export const technologies: Technology[] = [
  {
    id: "git-github",
    name: "Git & GitHub",
    slug: "git-github",
    description:
      "Version control, branching, collaboration, remote repositories and professional Git workflows.",
    status: "available",
  },
  {
    id: "typescript",
    name: "TypeScript",
    slug: "typescript",
    description:
      "Static typing, generics, utility types and production TypeScript patterns.",
    status: "available",
  },
  {
    id: "react",
    name: "React",
    slug: "react",
    description:
      "Components, hooks, routing, forms, server state, performance and testing.",
    status: "available",
  },
  {
    id: "redux-toolkit",
    name: "Redux Toolkit",
    slug: "redux-toolkit",
    description:
      "Global client state, slices, selectors, async workflows and architecture.",
    status: "available",
  },
  {
    id: "tanstack-query",
    name: "TanStack Query",
    slug: "tanstack-query",
    description:
      "Server-state management, caching, queries, mutations and synchronization for React applications.",
    status: "available",
  },
  {
    id: "rest-api",
    name: "RESTful API",
    slug: "rest-api",
    description:
      "HTTP fundamentals, REST resource design, status codes, pagination, authentication and production API conventions.",
    status: "available",
  },
  {
    id: "nextjs",
    name: "Next.js",
    slug: "nextjs",
    description:
      "Full-stack React with routing, server rendering, data fetching and deployment.",
    status: "planned",
  },
  {
    id: "nodejs",
    name: "Node.js",
    slug: "nodejs",
    description:
      "Server-side JavaScript, APIs, asynchronous programming and backend architecture.",
    status: "planned",
  },
  {
    id: "express",
    name: "Express",
    slug: "express",
    description:
      "REST APIs, middleware, routing, validation, authentication and error handling.",
    status: "planned",
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    slug: "postgresql",
    description:
      "Relational database design, SQL, indexing, relations and production data modeling.",
    status: "planned",
  },
  {
    id: "prisma",
    name: "Prisma",
    slug: "prisma",
    description:
      "Type-safe database access, migrations, relations and backend integration.",
    status: "planned",
  },
  {
    id: "testing",
    name: "Testing",
    slug: "testing",
    description: "Unit, component, integration and end-to-end testing.",
    status: "in-progress",
  },
  {
    id: "docker",
    name: "Docker",
    slug: "docker",
    description:
      "Containers, images, Docker Compose and application deployment workflows.",
    status: "planned",
  },
];
