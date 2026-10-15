import type { LessonContent } from "../../../types/learning";

export const templateLiteralTypesContent: LessonContent = {
  lessonId: "typescript-template-literal-types",

  overview:
    "Template literal types create precise string unions by combining literal types. They are useful when string values follow a predictable domain pattern.",

  mentalModel:
    "JavaScript template strings build runtime strings. TypeScript template literal types build allowed string patterns at compile time.",

  sections: [
    {
      id: "basic",
      title: "Basic template literal type",
      body: "Literal unions can be interpolated into string patterns.",
      codeExamples: [
        {
          id: "basic-template-example",
          title: "Event names",
          language: "ts",
          code: `type Entity =
  | "user"
  | "issue";

type Event =
  \`\${Entity}:created\`;

// "user:created"
// | "issue:created"`,
        },
      ],
    },

    {
      id: "multiple-unions",
      title: "Combine unions",
      body: "Multiple literal unions produce all valid combinations.",
      codeExamples: [
        {
          id: "multiple-template-example",
          title: "Permission names",
          language: "ts",
          code: `type Resource =
  | "user"
  | "issue";

type Action =
  | "read"
  | "write";

type Permission =
  \`\${Resource}:\${Action}\`;

// user:read
// user:write
// issue:read
// issue:write`,
        },
      ],
    },

    {
      id: "keyof",
      title: "Combine with keyof",
      body: "Template literals can derive names from object keys.",
      codeExamples: [
        {
          id: "key-template-example",
          title: "Change events",
          language: "ts",
          code: `interface User {
  name: string;
  email: string;
}

type UserField =
  keyof User;

type UserEvent =
  \`\${UserField}Changed\`;

// "nameChanged"
// | "emailChanged"`,
        },
      ],
    },

    {
      id: "utility-types",
      title: "String manipulation helpers",
      body: "TypeScript also provides Uppercase, Lowercase, Capitalize and Uncapitalize for string literal types.",
      codeExamples: [
        {
          id: "capitalize-example",
          title: "Capitalized keys",
          language: "ts",
          code: `type Name =
  Capitalize<
    "user"
  >;

// "User"`,
        },
      ],
    },

    {
      id: "production-notes",
      title: "Production notes",
      body: "Template literal types are useful for event names, permission strings and other structured string APIs. Avoid them when a plain union or object model is clearer.",
    },

    {
      id: "practice",
      title: "Practice",
      body: "Create HTTP event strings using resources user | issue and actions created | updated | deleted.",
    },

    {
      id: "interview",
      title: "Interview angle",
      body: "Know that template literal types produce compile-time string patterns from literal unions.",
    },
  ],

  commonMistakes: [
    "Using string instead of a useful constrained string union.",
    "Building huge unreadable combinations.",
    "Confusing runtime template strings with type-level template literals.",
  ],

  notebookNote:
    "Template Literal Types prave compile-time string patterns: `\`\${A}:\${B}\``. Korisno za events, permissions i druge strukturirane string vrednosti.",

  relatedLessonIds: [
    "typescript-union-literal-types",
    "typescript-indexed-access-typeof",
  ],
};
