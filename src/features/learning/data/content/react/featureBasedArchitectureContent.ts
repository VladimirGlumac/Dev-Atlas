import type { LessonContent } from "../../../types/learning";

export const featureBasedArchitectureContent: LessonContent = {
  lessonId: "react-feature-based-architecture",

  overview:
    "Feature-based architecture groups code by business capability or domain. Components, hooks, services and types that belong to the same feature live close together.",

  mentalModel:
    "A feature should own the code required to perform its responsibility. Think in terms of auth, issues, billing or search rather than only components, hooks and services.",

  sections: [
    {
      id: "feature-example",
      title: "Feature boundary",
      body: "A feature can contain its own UI, hooks, services, types and tests.",
      codeExamples: [
        {
          id: "feature-folder-example",
          title: "Issues feature",
          language: "bash",
          code: `features/issues/
├── components/
│   ├── IssueCard.tsx
│   └── IssueForm.tsx
├── hooks/
│   └── useIssues.ts
├── services/
│   └── issueService.ts
├── types/
│   └── issue.ts
└── tests/`,
        },
      ],
    },

    {
      id: "public-api",
      title: "Feature public API",
      body: "Larger projects may expose only selected parts of a feature to the rest of the application.",
      codeExamples: [
        {
          id: "feature-index-example",
          title: "Controlled exports",
          language: "ts",
          code: `export { IssueCard } from "./components/IssueCard";
export { useIssues } from "./hooks/useIssues";
export type { Issue } from "./types/issue";`,
        },
      ],
    },

    {
      id: "feature-independence",
      title: "Reduce cross-feature coupling",
      body: "Features should avoid reaching deeply into each other's internal folders. Shared behavior should have a clear shared owner.",
    },

    {
      id: "domain-language",
      title: "Use domain language",
      body: "Folder names should reflect the application's real concepts.",
      codeExamples: [
        {
          id: "domain-feature-example",
          title: "Examples",
          language: "bash",
          code: `features/
├── auth/
├── billing/
├── search/
├── learning/
├── bookmarks/
└── progress/`,
        },
      ],
    },

    {
      id: "production-notes",
      title: "Production notes",
      body: "Do not turn every tiny component into its own feature. A feature should represent a meaningful capability or domain boundary.",
    },

    {
      id: "practice",
      title: "Practice",
      body: "Design feature folders for an ecommerce application with products, cart, checkout and authentication. Decide what belongs inside each feature and what belongs in shared UI.",
    },

    {
      id: "interview",
      title: "Interview angle",
      body: "Be ready to explain cohesion and coupling: feature-based architecture keeps related code cohesive and reduces unnecessary dependencies.",
    },
  ],

  commonMistakes: [
    "Creating a feature for every tiny component.",
    "Allowing features to import deeply from one another's internals.",
    "Using domain folders but still keeping all logic globally elsewhere.",
    "Creating a generic shared folder that becomes a dumping ground.",
  ],

  notebookNote:
    "Feature-based architecture grupiše UI, hooks, services i types prema domain-u. Cilj je visoka cohesion unutar feature-a i što manji coupling između feature-a.",

  relatedLessonIds: ["react-project-structure", "react-state-ownership"],
};
