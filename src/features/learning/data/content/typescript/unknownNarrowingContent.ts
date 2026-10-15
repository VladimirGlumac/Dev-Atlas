import type { LessonContent } from "../../../types/learning";

export const unknownNarrowingContent: LessonContent = {
  lessonId: "typescript-unknown-narrowing",

  overview:
    "unknown is the safe type for values whose structure is not yet known. Narrowing lets TypeScript refine a broad type into a more specific one through runtime checks.",

  mentalModel:
    "unknown says: I genuinely do not know what this value is yet. Before using it, prove what it is.",

  sections: [
    {
      id: "unknown-vs-any",
      title: "unknown vs any",
      body: "any disables safety. unknown keeps the value flexible but requires validation before use.",
      codeExamples: [
        {
          id: "unknown-any-example",
          title: "Safety difference",
          language: "ts",
          code: `let unsafe: any = "hello";
unsafe.foo.bar();

let safe: unknown = "hello";

// Error:
// safe.toUpperCase();

if (typeof safe === "string") {
  safe.toUpperCase();
}`,
        },
      ],
    },

    {
      id: "typeof-narrowing",
      title: "typeof narrowing",
      body: "typeof is the simplest way to narrow primitive union and unknown values.",
      codeExamples: [
        {
          id: "typeof-example",
          title: "Narrow string or number",
          language: "ts",
          code: `function formatValue(
  value: unknown,
): string {
  if (typeof value === "string") {
    return value.toUpperCase();
  }

  if (typeof value === "number") {
    return value.toFixed(2);
  }

  return "Unsupported";
}`,
        },
      ],
    },

    {
      id: "error-handling",
      title: "Catch errors as unknown",
      body: "Caught errors should be treated as unknown because JavaScript allows throwing any value.",
      codeExamples: [
        {
          id: "catch-error-example",
          title: "Safe error handling",
          language: "ts",
          code: `try {
  await loadData();
} catch (error: unknown) {
  if (error instanceof Error) {
    console.error(error.message);
  } else {
    console.error(
      "Unknown error",
    );
  }
}`,
        },
      ],
    },

    {
      id: "control-flow",
      title: "Control-flow analysis",
      body: "TypeScript tracks your runtime checks and narrows the value inside the safe branch.",
      codeExamples: [
        {
          id: "control-flow-example",
          title: "Union narrowing",
          language: "ts",
          code: `function printId(
  id: string | number,
): void {
  if (typeof id === "string") {
    console.log(
      id.toUpperCase(),
    );

    return;
  }

  console.log(
    id.toFixed(0),
  );
}`,
        },
      ],
    },

    {
      id: "production-notes",
      title: "Production notes",
      body: "Use unknown at external boundaries such as parsed JSON, error handling and untrusted input. Narrow with runtime checks or validation libraries before treating values as domain objects.",
    },

    {
      id: "practice",
      title: "Practice",
      body: "Write a function that accepts unknown and returns a user-friendly string for strings, numbers and Error objects, with a fallback for everything else.",
    },

    {
      id: "interview",
      title: "Interview angle",
      body: "Be ready to explain why unknown is safer than any and how TypeScript narrowing works through typeof, instanceof and control flow.",
    },
  ],

  commonMistakes: [
    "Using any for API or error data just to avoid narrowing.",
    "Casting unknown immediately instead of validating it.",
    "Assuming caught errors are always Error instances.",
    "Forgetting that TypeScript narrowing depends on runtime evidence.",
  ],

  notebookNote:
    "unknown = ne znam tip, ali želim safety. Pre korišćenja mora narrowing: typeof, instanceof ili custom type guard. Za external input i catch error preferiraj unknown umesto any.",

  relatedLessonIds: ["typescript-union-literal-types"],
};
