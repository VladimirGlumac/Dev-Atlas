import type { LessonContent } from "../../../types/learning";

export const conditionalTypesContent: LessonContent = {
  lessonId: "typescript-conditional-types",

  overview:
    "Conditional types choose one type or another based on a type relationship. infer lets a conditional type extract information from another type.",

  mentalModel:
    "Conditional type is an if statement for types: if T matches some structure, produce one type; otherwise produce another.",

  sections: [
    {
      id: "basic",
      title: "Conditional type",
      body: "Conditional types use extends as a type-level condition.",
      codeExamples: [
        {
          id: "conditional-example",
          title: "String check",
          language: "ts",
          code: `type IsString<T> =
  T extends string
    ? true
    : false;

type A =
  IsString<string>;
// true

type B =
  IsString<number>;
// false`,
        },
      ],
    },

    {
      id: "real-example",
      title: "Transform based on input type",
      body: "A conditional can map different input types to different result types.",
      codeExamples: [
        {
          id: "real-conditional-example",
          title: "API value",
          language: "ts",
          code: `type ApiValue<T> =
  T extends Date
    ? string
    : T;`,
        },
      ],
    },

    {
      id: "infer",
      title: "infer",
      body: "infer captures part of a matched type so it can be reused in the result.",
      codeExamples: [
        {
          id: "infer-example",
          title: "Extract Promise value",
          language: "ts",
          code: `type UnwrapPromise<T> =
  T extends Promise<
    infer Value
  >
    ? Value
    : T;

type Result =
  UnwrapPromise<
    Promise<User>
  >;

// User`,
        },
      ],
    },

    {
      id: "return-type",
      title: "Extract function return types",
      body: "infer can extract a function's return type.",
      codeExamples: [
        {
          id: "return-infer-example",
          title: "Custom ReturnType",
          language: "ts",
          code: `type MyReturnType<T> =
  T extends (
    ...args: never[]
  ) => infer R
    ? R
    : never;`,
        },
      ],
    },

    {
      id: "built-ins",
      title: "You already use conditional types",
      body: "Built-in helpers such as ReturnType, Awaited and Exclude use advanced conditional type machinery internally.",
    },

    {
      id: "production-notes",
      title: "Production notes",
      body: "Do not create complex type-level logic just to be clever. Conditional types are most valuable in reusable libraries, generic utilities and strongly typed APIs.",
    },

    {
      id: "practice",
      title: "Practice",
      body: "Create ArrayElement<T> that returns the element type when T is an array and returns T otherwise.",
    },

    {
      id: "interview",
      title: "Interview angle",
      body: "You should understand the T extends X ? Y : Z pattern and be able to explain infer conceptually.",
    },
  ],

  commonMistakes: [
    "Confusing conditional types with runtime if statements.",
    "Using infer outside a conditional type pattern.",
    "Building unreadable type puzzles where simpler types would work.",
    "Thinking advanced TypeScript means maximizing type complexity.",
  ],

  notebookNote:
    "Conditional type = `T extends X ? Y : Z`. `infer` izvlači deo type-a koji se match-uje. Koristan za reusable generic utilities, ali ne treba praviti type-level puzzle bez potrebe.",

  relatedLessonIds: [
    "typescript-generics",
    "typescript-mapped-types",
    "typescript-template-literal-types",
  ],
};
