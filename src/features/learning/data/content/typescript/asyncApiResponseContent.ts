import type { LessonContent } from "../../../types/learning";

export const asyncApiResponseContent: LessonContent = {
  lessonId: "typescript-async-api-response",

  overview:
    "Async functions always return Promises. TypeScript lets you describe the resolved value with Promise<T>, which makes API services and asynchronous application code much safer.",

  mentalModel:
    "An async function does not return T directly. It returns a Promise that may eventually resolve to T or reject with an error.",

  sections: [
    {
      id: "async-return-type",
      title: "Async return types",
      body: "An async function returning a User should be typed as Promise<User>.",
      codeExamples: [
        {
          id: "async-return-example",
          title: "Typed async function",
          language: "ts",
          code: `async function getUser(
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

  return response.json();
}`,
        },
      ],
    },

    {
      id: "promise-type",
      title: "Promise<T>",
      body: "Promise<T> describes the value that will be produced when the asynchronous operation succeeds.",
      codeExamples: [
        {
          id: "promise-type-example",
          title: "Promise result",
          language: "ts",
          code: `const userPromise:
  Promise<User> =
  getUser(1);

const user:
  User =
  await userPromise;`,
        },
      ],
    },

    {
      id: "generic-api-response",
      title: "Generic API response",
      body: "Generics are useful when many endpoints share the same response envelope but contain different data.",
      codeExamples: [
        {
          id: "api-response-example",
          title: "Reusable response shape",
          language: "ts",
          code: `interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

type UserResponse =
  ApiResponse<User>;

type IssuesResponse =
  ApiResponse<Issue[]>;`,
        },
      ],
    },

    {
      id: "typed-api-service",
      title: "Typed API service",
      body: "Keep request logic in a service and expose a precise Promise return type to the rest of the application.",
      codeExamples: [
        {
          id: "typed-service-example",
          title: "Fetch issues",
          language: "ts",
          code: `export async function fetchIssues():
  Promise<Issue[]> {
  const response =
    await fetch("/api/issues");

  if (!response.ok) {
    throw new Error(
      "Failed to fetch issues",
    );
  }

  return response.json();
}`,
        },
      ],
    },

    {
      id: "json-is-not-validation",
      title: "Typing JSON is not validation",
      body: "A return type only tells TypeScript what your function claims to return. It does not prove the server actually sent that shape at runtime.",
      codeExamples: [
        {
          id: "json-validation-warning",
          title: "Compile-time claim",
          language: "ts",
          code: `const data:
  User =
  await response.json();

// TypeScript trusts us.
// Runtime data may still be invalid.`,
        },
      ],
    },

    {
      id: "production-notes",
      title: "Production notes",
      body: "Use explicit Promise return types on important service boundaries. Check response.ok when using fetch. Treat external JSON as untrusted when runtime correctness matters.",
    },

    {
      id: "practice",
      title: "Practice",
      body: "Create fetchTechnology(id) returning Promise<Technology>. Handle non-OK HTTP responses and then create a generic ApiResponse<T> that can wrap Technology or Technology[].",
    },

    {
      id: "interview",
      title: "Interview angle",
      body: "Be ready to explain why an async function returns Promise<T>, why fetch does not throw automatically for HTTP 404/500, and why TypeScript return types do not validate runtime JSON.",
    },
  ],

  commonMistakes: [
    "Typing an async function as T instead of Promise<T>.",
    "Ignoring response.ok when using fetch.",
    "Assuming response.json() is automatically type-safe.",
    "Putting all request logic directly inside UI components.",
    "Using any for API responses.",
  ],

  notebookNote:
    "async funkcija vraća Promise<T>. `await` izvlači T iz Promise-a. TypeScript return type ne validira runtime JSON, zato external data treba proveravati kada je pouzdanost bitna.",

  relatedLessonIds: [
    "typescript-null-undefined",
    "typescript-runtime-validation",
  ],
};
