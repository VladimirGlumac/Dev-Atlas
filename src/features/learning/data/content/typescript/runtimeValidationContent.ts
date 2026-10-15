import type { LessonContent } from "../../../types/learning";

export const runtimeValidationContent: LessonContent = {
  lessonId: "typescript-runtime-validation",

  overview:
    "TypeScript types disappear at runtime. Data from APIs, localStorage, forms and external systems can still be invalid, so application boundaries sometimes need runtime validation.",

  mentalModel:
    "TypeScript protects code you control. Runtime validation protects your application from data you do not control.",

  sections: [
    {
      id: "unsafe-api-cast",
      title: "The unsafe assumption",
      body: "Assigning API data to a TypeScript type does not make the value valid.",
      codeExamples: [
        {
          id: "unsafe-api-example",
          title: "Trusted too early",
          language: "ts",
          code: `const data =
  await response.json();

const user =
  data as User;

// No runtime validation happened.`,
        },
      ],
    },

    {
      id: "unknown-boundary",
      title: "Start with unknown",
      body: "When you genuinely do not know whether external data matches your domain model, unknown expresses that uncertainty safely.",
      codeExamples: [
        {
          id: "unknown-api-example",
          title: "External boundary",
          language: "ts",
          code: `const data: unknown =
  await response.json();

if (!isUser(data)) {
  throw new Error(
    "Invalid user response",
  );
}

return data;`,
        },
      ],
    },

    {
      id: "zod-validation",
      title: "Schema validation",
      body: "For larger schemas, a runtime validation library such as Zod can validate the data and infer TypeScript types from the schema.",
      codeExamples: [
        {
          id: "zod-example",
          title: "Validate a user",
          language: "ts",
          code: `import { z } from "zod";

const userSchema =
  z.object({
    id: z.number(),
    name: z.string(),
    email: z.string().email(),
  });

const data: unknown =
  await response.json();

const user =
  userSchema.parse(data);`,
        },
      ],
    },

    {
      id: "safe-parse",
      title: "safeParse",
      body: "safeParse is useful when invalid input should be handled as a normal application state instead of throwing immediately.",
      codeExamples: [
        {
          id: "safe-parse-example",
          title: "Controlled validation",
          language: "ts",
          code: `const result =
  userSchema.safeParse(data);

if (!result.success) {
  return {
    success: false,
    error: result.error,
  };
}

const user =
  result.data;`,
        },
      ],
    },

    {
      id: "where-validation-matters",
      title: "Where runtime validation matters",
      body: "Typical boundaries include API responses, localStorage, URL parameters, environment configuration, file uploads and form submissions.",
    },

    {
      id: "production-notes",
      title: "Production notes",
      body: "Do not validate every internal object repeatedly. Validate at trust boundaries, then let the rest of the application work with validated domain types.",
    },

    {
      id: "practice",
      title: "Practice",
      body: "Create a Zod schema for Issue with id, title and status. Parse an unknown value and handle both success and validation failure.",
    },

    {
      id: "interview",
      title: "Interview angle",
      body: "Be ready to explain the difference between compile-time type checking and runtime validation, and why `as User` is not validation.",
    },
  ],

  commonMistakes: [
    "Using type assertions as runtime validation.",
    "Trusting API responses simply because a function has a typed return value.",
    "Validating the same already-trusted domain object everywhere.",
    "Using any instead of unknown at external boundaries.",
  ],

  notebookNote:
    "TypeScript nestaje u runtime-u. External data prvo tretiraj kao unknown, validiraj na trust boundary-ju, pa tek onda koristi kao domain type. `as Type` nije validacija.",

  relatedLessonIds: ["typescript-type-guards", "typescript-async-api-response"],
};
