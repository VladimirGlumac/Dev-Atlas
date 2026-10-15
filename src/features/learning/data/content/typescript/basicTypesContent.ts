import type { LessonContent } from "../../../types/learning";

export const basicTypesContent: LessonContent = {
  lessonId: "typescript-basic-types",

  overview:
    "TypeScript adds static type checking on top of JavaScript. Basic types describe the shape of primitive values and help catch invalid assignments before runtime.",

  mentalModel:
    "TypeScript does not change JavaScript runtime behavior. It analyzes your code before execution and checks whether values match the types your program expects.",

  sections: [
    {
      id: "type-inference",
      title: "Type inference",
      body: "TypeScript can often infer primitive types automatically. Explicit annotations are useful when inference is not enough or when the type communicates important intent.",
      codeExamples: [
        {
          id: "basic-inference",
          title: "Inference vs explicit type",
          language: "ts",
          code: `const username = "Vladimir";
// inferred: string

let score = 100;
// inferred: number

let isLoggedIn: boolean = false;`,
          explanation:
            "Do not annotate every obvious value. Let TypeScript infer simple local primitives where possible.",
        },
      ],
    },

    {
      id: "primitive-types",
      title: "Primitive types",
      body: "The most common primitive types are string, number, boolean, bigint, symbol, null and undefined.",
      codeExamples: [
        {
          id: "primitive-types-example",
          title: "Common primitives",
          language: "ts",
          code: `const name: string = "Ana";

const age: number = 29;

const active: boolean = true;

const nothing: null = null;

const missing: undefined = undefined;`,
        },
      ],
    },

    {
      id: "any",
      title: "Avoid any by default",
      body: "any disables type safety for the value it represents. It is sometimes useful during migrations or when dealing with badly typed libraries, but it should not be your default escape hatch.",
      codeExamples: [
        {
          id: "avoid-any",
          title: "any removes safety",
          language: "ts",
          code: `let value: any = "hello";

value = 42;

value.foo.bar.baz();
// TypeScript allows this`,
        },
      ],
    },

    {
      id: "unknown",
      title: "Prefer unknown for unknown input",
      body: "unknown means the value may be anything, but TypeScript forces you to inspect or narrow it before using it.",
      codeExamples: [
        {
          id: "unknown-example",
          title: "Safe unknown",
          language: "ts",
          code: `function printValue(value: unknown) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  }
}`,
          explanation:
            "unknown preserves safety because the value cannot be used as a string until TypeScript knows it is a string.",
        },
      ],
    },

    {
      id: "void",
      title: "void",
      body: "void commonly describes a function whose result is intentionally not used.",
      codeExamples: [
        {
          id: "void-example",
          title: "No useful return value",
          language: "ts",
          code: `function logMessage(
  message: string,
): void {
  console.log(message);
}`,
        },
      ],
    },

    {
      id: "never",
      title: "never",
      body: "never represents a value that can never exist. It commonly appears in functions that always throw and in exhaustive type checking.",
      codeExamples: [
        {
          id: "never-basic",
          title: "Function that never returns",
          language: "ts",
          code: `function fail(
  message: string,
): never {
  throw new Error(message);
}`,
        },
      ],
    },

    {
      id: "annotation-vs-inference",
      title: "When to annotate explicitly",
      body: "Explicit types are especially useful for function parameters, public APIs, exported values and places where inference would produce a type that is too broad or unclear.",
      codeExamples: [
        {
          id: "annotation-example",
          title: "Good explicit boundaries",
          language: "ts",
          code: `export function calculateTotal(
  price: number,
  quantity: number,
): number {
  return price * quantity;
}`,
        },
      ],
    },

    {
      id: "production-notes",
      title: "Production notes",
      body: "Use inference for obvious local values and explicit types at important boundaries. Avoid any unless you have a concrete reason. Treat external input as unknown until it is validated or narrowed.",
    },

    {
      id: "practice",
      title: "Practice",
      body: "Create variables for a username, age, loading flag and unknown API error. Let TypeScript infer obvious local types, then safely narrow the unknown error before reading its message.",
    },

    {
      id: "interview",
      title: "Interview angle",
      body: "Be ready to explain the difference between any and unknown, what type inference is and why TypeScript types disappear at runtime.",
    },
  ],

  commonMistakes: [
    "Annotating every obvious primitive unnecessarily.",
    "Using any to silence TypeScript errors instead of understanding them.",
    "Assuming TypeScript validates runtime API responses.",
    "Confusing void with undefined.",
    "Using type assertions when narrowing would be safer.",
  ],

  notebookNote:
    "TypeScript proverava tipove pre runtime-a. Koristi inference za očigledne lokalne vrednosti, eksplicitne tipove na bitnim granicama, unknown za nepoznate podatke i izbegavaj any kao default rešenje.",

  relatedLessonIds: [
    "typescript-arrays-objects",
    "typescript-union-literal-types",
  ],
};
