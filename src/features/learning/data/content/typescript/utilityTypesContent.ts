import type { LessonContent } from "../../../types/learning";

export const utilityTypesContent: LessonContent = {
  lessonId: "typescript-utility-types",

  overview:
    "Utility types transform existing types into new variations without duplicating object shapes. They are especially useful for forms, updates, API payloads and reusable domain models.",

  mentalModel:
    "Do not rewrite the same object shape repeatedly. Start from an existing type and derive the variation you need.",

  sections: [
    {
      id: "partial",
      title: "Partial<T>",
      body: "Partial makes every property optional.",
      codeExamples: [
        {
          id: "partial-example",
          title: "Update payload",
          language: "ts",
          code: `interface User {
  id: number;
  name: string;
  email: string;
}

type UserUpdate =
  Partial<User>;

// {
//   id?: number;
//   name?: string;
//   email?: string;
// }`,
        },
      ],
    },

    {
      id: "required",
      title: "Required<T>",
      body: "Required makes all optional properties required.",
      codeExamples: [
        {
          id: "required-example",
          title: "Complete configuration",
          language: "ts",
          code: `interface Config {
  apiUrl?: string;
  timeout?: number;
}

type CompleteConfig =
  Required<Config>;`,
        },
      ],
    },

    {
      id: "pick",
      title: "Pick<T, K>",
      body: "Pick creates a type containing only selected properties.",
      codeExamples: [
        {
          id: "pick-example",
          title: "Public user data",
          language: "ts",
          code: `type PublicUser =
  Pick<
    User,
    "id" | "name"
  >;`,
        },
      ],
    },

    {
      id: "omit",
      title: "Omit<T, K>",
      body: "Omit creates a type by removing selected properties.",
      codeExamples: [
        {
          id: "omit-example",
          title: "Create input",
          language: "ts",
          code: `interface Issue {
  id: number;
  title: string;
  createdAt: string;
}

type CreateIssueInput =
  Omit<
    Issue,
    "id" | "createdAt"
  >;`,
        },
      ],
    },

    {
      id: "record",
      title: "Record<K, V>",
      body: "Record creates an object type where keys come from K and values follow V.",
      codeExamples: [
        {
          id: "record-example",
          title: "Status labels",
          language: "ts",
          code: `type IssueStatus =
  | "open"
  | "in-progress"
  | "done";

const labels:
  Record<IssueStatus, string> = {
    open: "Open",
    "in-progress": "In progress",
    done: "Done",
  };`,
        },
      ],
    },

    {
      id: "exclude-extract",
      title: "Exclude & Extract",
      body: "Exclude removes members from a union, while Extract keeps only matching members.",
      codeExamples: [
        {
          id: "exclude-extract-example",
          title: "Transform unions",
          language: "ts",
          code: `type Status =
  | "idle"
  | "loading"
  | "success"
  | "error";

type FinishedStatus =
  Exclude<
    Status,
    "idle" | "loading"
  >;

// "success" | "error"

type ErrorStatus =
  Extract<
    Status,
    "error"
  >;

// "error"`,
        },
      ],
    },

    {
      id: "return-type",
      title: "ReturnType<T>",
      body: "ReturnType extracts the return type of a function.",
      codeExamples: [
        {
          id: "return-type-example",
          title: "Infer function result",
          language: "ts",
          code: `function createUser() {
  return {
    id: 1,
    name: "Ana",
  };
}

type CreatedUser =
  ReturnType<
    typeof createUser
  >;`,
        },
      ],
    },

    {
      id: "production-notes",
      title: "Production notes",
      body: "Use utility types when the new type genuinely represents a variation of an existing domain model. Avoid chaining too many utilities if the final type becomes difficult to understand.",
    },

    {
      id: "practice",
      title: "Practice",
      body: "Create a User type. Derive CreateUserInput without id, UserUpdate with optional fields and PublicUser with only id and name.",
    },

    {
      id: "interview",
      title: "Interview angle",
      body: "Be ready to explain Partial, Pick, Omit and Record because they appear frequently in real TypeScript code.",
    },
  ],

  commonMistakes: [
    "Duplicating types instead of deriving them.",
    "Using Partial for updates without considering which properties should really be editable.",
    "Creating deeply nested utility-type expressions that are hard to read.",
    "Using Record with broad string keys when the key set can be constrained.",
  ],

  notebookNote:
    "Utility Types transformišu postojeće tipove. Najbitniji: Partial, Required, Pick, Omit, Record. Koristi ih da izbegneš duplicate object shapes, ali nemoj praviti nečitljive type izraze.",

  relatedLessonIds: [
    "typescript-readonly-tuples-as-const",
    "typescript-generics-constraints-keyof",
  ],
};
