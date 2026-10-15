import type { LessonContent } from "../../../types/learning";

export const functionsContent: LessonContent = {
  lessonId: "typescript-functions",

  overview:
    "Functions are one of the most important type boundaries in an application. Type parameters describe what a function accepts, while return types describe what callers can expect back.",

  mentalModel:
    "A function signature is a contract: these inputs are allowed, and this is the result the function promises to return.",

  sections: [
    {
      id: "parameters",
      title: "Typed parameters",
      body: "Function parameters should normally have explicit types.",
      codeExamples: [
        {
          id: "typed-parameters-example",
          title: "Calculate total",
          language: "ts",
          code: `function calculateTotal(
  price: number,
  quantity: number,
): number {
  return price * quantity;
}`,
        },
      ],
    },

    {
      id: "return-inference",
      title: "Return inference",
      body: "TypeScript can often infer return types, but explicit return types are useful for public functions and important application boundaries.",
      codeExamples: [
        {
          id: "return-type-example",
          title: "Explicit return type",
          language: "ts",
          code: `function getFullName(
  firstName: string,
  lastName: string,
): string {
  return \`\${firstName} \${lastName}\`;
}`,
        },
      ],
    },

    {
      id: "optional-params",
      title: "Optional parameters",
      body: "Use ? when a parameter may legitimately be omitted.",
      codeExamples: [
        {
          id: "optional-param-example",
          title: "Optional prefix",
          language: "ts",
          code: `function greet(
  name: string,
  prefix?: string,
): string {
  return prefix
    ? \`\${prefix} \${name}\`
    : name;
}`,
        },
      ],
    },

    {
      id: "default-values",
      title: "Default parameters",
      body: "Default values are useful when there is a clear fallback behavior.",
      codeExamples: [
        {
          id: "default-param-example",
          title: "Default page size",
          language: "ts",
          code: `function getPageSize(
  size = 20,
): number {
  return size;
}`,
        },
      ],
    },

    {
      id: "callback-types",
      title: "Callback types",
      body: "Callbacks should have clear parameter and return contracts.",
      codeExamples: [
        {
          id: "callback-type-example",
          title: "Execute callback",
          language: "ts",
          code: `function processUser(
  name: string,
  callback: (value: string) => void,
): void {
  callback(name);
}`,
        },
      ],
    },

    {
      id: "production-notes",
      title: "Production notes",
      body: "Keep function contracts narrow and intentional. Avoid parameters typed as any. Prefer meaningful domain types over broad primitives when that improves clarity.",
    },

    {
      id: "practice",
      title: "Practice",
      body: "Create a function updateIssueStatus that accepts an Issue and an IssueStatus and returns a new Issue without mutating the original object.",
    },

    {
      id: "interview",
      title: "Interview angle",
      body: "Be able to explain parameter types, return types, optional parameters, default parameters and callback signatures.",
    },
  ],

  commonMistakes: [
    "Leaving parameters implicitly any.",
    "Returning different unrelated shapes from the same function.",
    "Using optional parameters when a union or overload would model intent better.",
    "Mutating input objects unexpectedly.",
  ],

  notebookNote:
    "Function signature je contract: input tipovi + return tip. Parametri gotovo uvek treba da budu eksplicitno tipizirani. Public funkcije često imaju smisla sa eksplicitnim return tipom.",

  relatedLessonIds: ["typescript-union-literal-types"],
};
