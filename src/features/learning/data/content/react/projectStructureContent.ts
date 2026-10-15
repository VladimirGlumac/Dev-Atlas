import type { LessonContent } from "../../../types/learning";

export const projectStructureContent: LessonContent = {
  lessonId: "react-project-structure",

  overview:
    "A good project structure makes code predictable. Developers should be able to guess where a component, service, hook or domain type belongs without searching the entire codebase.",

  mentalModel:
    "Project structure should communicate responsibilities. Organize code around what it does and what feature owns it, not only around file extensions.",

  sections: [
    {
      id: "small-app",
      title: "Small applications",
      body: "Small applications can start with a simple technical structure. Avoid introducing many architectural layers before the project needs them.",
      codeExamples: [
        {
          id: "small-project-example",
          title: "Simple structure",
          language: "bash",
          code: `src/
├── components/
├── hooks/
├── pages/
├── services/
├── styles/
├── types/
├── App.tsx
└── main.tsx`,
        },
      ],
    },

    {
      id: "growing-app",
      title: "As the application grows",
      body: "When many files belong to the same domain, grouping everything only by technical type becomes harder to navigate.",
      codeExamples: [
        {
          id: "large-technical-structure",
          title: "Structure that becomes harder to scale",
          language: "bash",
          code: `components/
  UserCard.tsx
  IssueCard.tsx
  LoginForm.tsx
  TaskCard.tsx

hooks/
  useUsers.ts
  useIssues.ts
  useAuth.ts
  useTasks.ts

services/
  userService.ts
  issueService.ts
  authService.ts
  taskService.ts`,
          explanation:
            "Related feature files become scattered across the entire project.",
        },
      ],
    },

    {
      id: "feature-structure",
      title: "Feature-based structure",
      body: "A medium or large React application often benefits from grouping feature-specific code together.",
      codeExamples: [
        {
          id: "feature-structure-example",
          title: "Feature-oriented structure",
          language: "bash",
          code: `src/
├── app/
│   ├── router.tsx
│   └── providers.tsx
│
├── components/
│   └── ui/
│
├── features/
│   ├── auth/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── services/
│   │   └── types/
│   │
│   ├── issues/
│   └── users/
│
├── lib/
├── pages/
├── styles/
└── main.tsx`,
        },
      ],
    },

    {
      id: "shared-vs-feature",
      title: "Shared vs feature-specific code",
      body: "Keep code inside a feature when it belongs only to that domain. Move it to a shared location only when multiple independent features genuinely reuse it.",
      codeExamples: [
        {
          id: "shared-rule",
          title: "Ownership rule",
          language: "ts",
          code: `IssueStatusBadge
→ features/issues

Button
→ components/ui

useIssues
→ features/issues/hooks

formatDate
→ lib`,
        },
      ],
    },

    {
      id: "avoid-premature-shared",
      title: "Do not make everything shared",
      body: "Moving code into shared folders too early makes ownership unclear. Reuse should be discovered from real duplication, not predicted everywhere in advance.",
    },

    {
      id: "production-notes",
      title: "Production notes",
      body: "The best structure is the smallest structure that keeps responsibilities clear. Prefer consistency and feature ownership over complex folder trees.",
    },

    {
      id: "practice",
      title: "Practice",
      body: "Take a project with auth, issues and users. Decide which files belong inside each feature and which truly belong in shared UI or lib folders.",
    },

    {
      id: "interview",
      title: "Interview angle",
      body: "Be ready to explain why feature-based architecture scales better than grouping every component, hook and service globally.",
    },
  ],

  commonMistakes: [
    "Creating dozens of folders before the application needs them.",
    "Putting every component into one global components folder.",
    "Moving feature-specific code into shared folders too early.",
    "Using inconsistent folder rules across the project.",
    "Creating layers that add complexity without improving ownership.",
  ],

  notebookNote:
    "Mali app može imati jednostavnu strukturu. Kako raste, grupiši kod po feature/domain ownership-u. Feature-specific kod ostaje u feature-u; shared postaje tek kada ga više nezavisnih delova stvarno koristi.",

  relatedLessonIds: [
    "react-feature-based-architecture",
    "react-state-ownership",
  ],
};
