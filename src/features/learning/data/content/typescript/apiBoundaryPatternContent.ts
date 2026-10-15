import type { LessonContent } from "../../../types/learning";

export const apiBoundaryPatternContent: LessonContent = {
  lessonId: "typescript-api-boundary-pattern",

  overview:
    "A strong production pattern is to keep untrusted external data at the boundary, validate it once, and expose clean domain types to the rest of the application.",

  mentalModel:
    "Outside world → unknown → validation → trusted domain model → application.",

  sections: [
    {
      id: "boundary-flow",
      title: "Boundary flow",
      body: "External data should become trusted only after runtime validation.",
      codeExamples: [
        {
          id: "boundary-flow-example",
          title: "Mental model",
          language: "ts",
          code: `API
↓
unknown
↓
schema validation
↓
User
↓
application code`,
        },
      ],
    },

    {
      id: "schema",
      title: "Define the runtime schema",
      body: "The schema describes what the external response must contain.",
      codeExamples: [
        {
          id: "boundary-schema-example",
          title: "User schema",
          language: "ts",
          code: `import { z } from "zod";

const userSchema =
  z.object({
    id: z.number(),
    name: z.string(),
    email: z.string().email(),
  });

type User =
  z.infer<
    typeof userSchema
  >;`,
        },
      ],
    },

    {
      id: "service",
      title: "Validate in the service layer",
      body: "The service receives external JSON and returns a trusted domain type.",
      codeExamples: [
        {
          id: "validated-service-example",
          title: "Safe fetchUser",
          language: "ts",
          code: `export async function fetchUser(
  id: number,
): Promise<User> {
  const response =
    await fetch(
      \`/api/users/\${id}\`,
    );

  if (!response.ok) {
    throw new Error(
      "Failed to fetch user",
    );
  }

  const data: unknown =
    await response.json();

  return userSchema.parse(
    data,
  );
}`,
        },
      ],
    },

    {
      id: "result-pattern",
      title: "Optional Result pattern",
      body: "When failures should be represented as values instead of exceptions, a discriminated result type can make control flow explicit.",
      codeExamples: [
        {
          id: "result-pattern-example",
          title: "Result<T>",
          language: "ts",
          code: `type Result<T> =
  | {
      success: true;
      data: T;
    }
  | {
      success: false;
      error: string;
    };`,
        },
      ],
    },

    {
      id: "why-this-matters",
      title: "Why this pattern matters",
      body: "The rest of the application no longer needs to repeatedly wonder whether the API object is valid. The trust decision happens once at the boundary.",
    },

    {
      id: "production-notes",
      title: "Production notes",
      body: "Do not over-engineer every request. Use runtime validation where invalid external data would matter. Keep validation and transport concerns away from presentation components.",
    },

    {
      id: "practice",
      title: "Practice",
      body: "Create an Issue schema and a fetchIssue service that returns Promise<Issue>. Then expose the service to a TanStack Query hook without putting validation logic in the component.",
    },

    {
      id: "interview",
      title: "Interview angle",
      body: "Be ready to describe a safe data boundary from HTTP response to validated domain model and explain why this is stronger than simply casting response.json().",
    },
  ],

  commonMistakes: [
    "Parsing external data in every UI component.",
    "Using `as Type` after response.json().",
    "Duplicating validation across the application.",
    "Mixing transport, validation and UI concerns in one large component.",
  ],

  notebookNote:
    "Production API boundary: external data → unknown → runtime validation → trusted domain type. Validaciju radi na granici sistema, ne svuda kroz aplikaciju.",

  relatedLessonIds: [
    "typescript-runtime-validation",
    "typescript-async-api-response",
    "typescript-discriminated-unions",
  ],
};
