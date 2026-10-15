import type { LessonContent } from "../../../types/learning";

export const serviceLayerContent: LessonContent = {
  lessonId: "react-service-layer",

  overview:
    "A service layer keeps network requests and external-system concerns outside React components. Components should focus on rendering and user interaction rather than transport details.",

  mentalModel:
    "Components describe UI. Services communicate with external systems. Hooks connect reusable application behavior to React.",

  sections: [
    {
      id: "problem",
      title: "The problem with fetching inside components",
      body: "Network logic mixed directly into UI components makes components harder to read, reuse and test.",
      codeExamples: [
        {
          id: "component-fetch-bad",
          title: "Too much responsibility",
          language: "tsx",
          code: `function UsersPage() {
  useEffect(() => {
    fetch("/api/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            "Failed to load users",
          );
        }

        return response.json();
      })
      .then(...);
  }, []);

  return ...;
}`,
        },
      ],
    },

    {
      id: "service-function",
      title: "Extract a service",
      body: "Move transport logic into a focused function with a clear typed contract.",
      codeExamples: [
        {
          id: "service-example",
          title: "User service",
          language: "ts",
          code: `export async function fetchUsers():
  Promise<User[]> {
  const response =
    await fetch("/api/users");

  if (!response.ok) {
    throw new Error(
      "Failed to load users",
    );
  }

  return response.json();
}`,
        },
      ],
    },

    {
      id: "react-consumption",
      title: "React consumes the service",
      body: "React-specific data tools such as TanStack Query can call the service without caring about the underlying HTTP details.",
      codeExamples: [
        {
          id: "query-service-example",
          title: "Query hook",
          language: "tsx",
          code: `export function useUsers() {
  return useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });
}`,
        },
      ],
    },

    {
      id: "responsibilities",
      title: "Separate responsibilities",
      body: "The service should understand transport and external data. The hook should understand React/TanStack behavior. The component should understand presentation and interaction.",
      codeExamples: [
        {
          id: "service-responsibility-flow",
          title: "Layer responsibilities",
          language: "ts",
          code: `Component
→ UI

useUsers()
→ React / query behavior

fetchUsers()
→ HTTP / external system`,
        },
      ],
    },

    {
      id: "validation",
      title: "Validation belongs near the boundary",
      body: "If external JSON requires runtime validation, the service layer is a natural place to validate before returning trusted domain data.",
      codeExamples: [
        {
          id: "validated-service",
          title: "Validated response",
          language: "ts",
          code: `const data: unknown =
  await response.json();

return usersSchema.parse(
  data,
);`,
        },
      ],
    },

    {
      id: "not-only-http",
      title: "Services are not only HTTP",
      body: "A service may communicate with localStorage, browser APIs, analytics, files or other external systems.",
      codeExamples: [
        {
          id: "service-examples",
          title: "External boundaries",
          language: "ts",
          code: `authService
bookmarkService
storageService
analyticsService
issueApi`,
        },
      ],
    },

    {
      id: "production-notes",
      title: "Production notes",
      body: "Do not create a service layer just to wrap one trivial line with no architectural benefit. Use it when separating external-system concerns improves clarity, reuse or testability.",
    },

    {
      id: "practice",
      title: "Practice",
      body: "Take a component that fetches issues directly. Extract fetchIssues into a service, then create useIssues using TanStack Query and leave the component responsible only for UI states.",
    },

    {
      id: "interview",
      title: "Interview angle",
      body: "Be ready to explain why transport logic should generally not dominate presentation components and how service layers improve separation of concerns.",
    },
  ],

  commonMistakes: [
    "Putting fetch logic directly into every component.",
    "Making service functions depend on React hooks.",
    "Mixing UI concerns into API services.",
    "Creating huge service files containing unrelated domains.",
    "Adding abstraction that provides no real benefit.",
  ],

  notebookNote:
    "Component = UI. Hook = React/application behavior. Service = komunikacija sa external system-om. API, localStorage i slične granice drži van presentation komponenti.",

  relatedLessonIds: [
    "react-custom-hooks-architecture",
    "react-state-ownership",
  ],
};
