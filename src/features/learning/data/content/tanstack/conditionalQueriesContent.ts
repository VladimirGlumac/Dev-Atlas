import type { LessonContent } from "../../../types/learning";

export const conditionalQueriesContent: LessonContent = {
  lessonId: "tanstack-conditional-queries",

  overview:
    "Conditional queries prevent requests from running until required data or application conditions are available.",

  mentalModel:
    "The query exists, but enabled determines whether it is currently allowed to fetch.",

  sections: [
    {
      id: "enabled",
      title: "enabled",
      body: "Use enabled when a query depends on some required condition.",
      codeExamples: [
        {
          id: "enabled-example",
          title: "User query",
          language: "tsx",
          code: `const userQuery =
  useQuery({
    queryKey: [
      "user",
      userId,
    ],

    queryFn: () =>
      fetchUser(userId!),

    enabled:
      userId != null,
  });`,
        },
      ],
    },

    {
      id: "search",
      title: "Search only after submit",
      body: "Search inputs often use separate input and committed search values so the query does not run on every keystroke.",
      codeExamples: [
        {
          id: "search-example",
          title: "Committed search state",
          language: "tsx",
          code: `const [input, setInput] =
  useState("");

const [
  username,
  setUsername,
] = useState("");

const query =
  useGitHubUser(
    username,
  );

function handleSubmit() {
  setUsername(
    input.trim(),
  );
}`,
        },
      ],
    },

    {
      id: "query-key",
      title: "Keep conditions reflected in the query key",
      body: "When the condition changes which data is requested, that input normally belongs in the query key too.",
      codeExamples: [
        {
          id: "key-example",
          title: "Identity",
          language: "ts",
          code: `queryKey: [
  "github-user",
  username,
]`,
        },
      ],
    },

    {
      id: "manual-refetch",
      title: "enabled is not just manual mode",
      body: "Disabling a query and manually calling refetch everywhere is usually less declarative than letting query inputs and enabled describe when fetching should happen.",
    },

    {
      id: "production-notes",
      title: "Production notes",
      body: "Use enabled for genuine dependencies or readiness conditions. Do not make every query disabled by default and turn TanStack Query into an imperative fetch wrapper.",
    },

    {
      id: "practice",
      title: "Practice",
      body: "Create a query for project details that executes only when projectId exists.",
    },

    {
      id: "interview",
      title: "Interview angle",
      body: "Explain how enabled affects query execution and why query identity still belongs in the query key.",
    },
  ],

  commonMistakes: [
    "Calling a query with invalid undefined identifiers.",
    "Using manual refetch for every request.",
    "Forgetting required parameters in the query key.",
    "Fetching on every input keystroke when that is not intended.",
  ],

  notebookNote:
    "`enabled` kontroliše da li query sme da fetch-uje. Koristi ga kada dependency još nije spreman. Data identity i dalje mora biti deo queryKey-a.",

  relatedLessonIds: ["tanstack-dependent-queries", "tanstack-query-keys"],
};
