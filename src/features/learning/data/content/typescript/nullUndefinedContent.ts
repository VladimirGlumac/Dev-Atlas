import type { LessonContent } from "../../../types/learning";

export const nullUndefinedContent: LessonContent = {
  lessonId: "typescript-null-undefined",

  overview:
    "null and undefined represent missing values, but they commonly appear in different situations. TypeScript forces you to handle them explicitly when strict null checking is enabled.",

  mentalModel:
    "Missing data is part of the type. If a value may not exist, model that possibility instead of pretending the value is always present.",

  sections: [
    {
      id: "nullable-values",
      title: "Nullable values",
      body: "Use a union when a value may explicitly be null.",
      codeExamples: [
        {
          id: "nullable-example",
          title: "Selected user",
          language: "ts",
          code: `let selectedUser:
  User | null = null;`,
        },
      ],
    },

    {
      id: "optional-values",
      title: "undefined and optional values",
      body: "Optional properties and methods such as find commonly introduce undefined.",
      codeExamples: [
        {
          id: "undefined-example",
          title: "find result",
          language: "ts",
          code: `const user =
  users.find(
    (item) =>
      item.id === userId,
  );

// User | undefined`,
        },
      ],
    },

    {
      id: "optional-chaining",
      title: "Optional chaining",
      body: "Optional chaining stops property access when the value on the left is null or undefined.",
      codeExamples: [
        {
          id: "optional-chaining-example",
          title: "Safe nested access",
          language: "ts",
          code: `const city =
  user.profile
    ?.address
    ?.city;`,
        },
      ],
    },

    {
      id: "nullish-coalescing",
      title: "Nullish coalescing",
      body: "The ?? operator provides a fallback only when the left side is null or undefined.",
      codeExamples: [
        {
          id: "nullish-example",
          title: "Fallback value",
          language: "ts",
          code: `const displayName =
  user.name ??
  "Anonymous";`,
        },
      ],
    },

    {
      id: "or-vs-nullish",
      title: "|| vs ??",
      body: "|| falls back for any falsy value, while ?? falls back only for null or undefined.",
      codeExamples: [
        {
          id: "or-nullish-example",
          title: "Important difference",
          language: "ts",
          code: `const count = 0;

const withOr =
  count || 10;
// 10

const withNullish =
  count ?? 10;
// 0`,
        },
      ],
    },

    {
      id: "non-null-assertion",
      title: "Non-null assertion",
      body: "The ! operator tells TypeScript a value cannot be null or undefined, but it does not perform any runtime validation.",
      codeExamples: [
        {
          id: "non-null-example",
          title: "Use cautiously",
          language: "ts",
          code: `const root =
  document.getElementById(
    "root",
  )!;`,
          explanation:
            "Use this only when you genuinely know the value must exist. It is a compiler assertion, not a safety check.",
        },
      ],
    },

    {
      id: "explicit-guard",
      title: "Guard missing values",
      body: "When absence should stop execution, an explicit guard is often clearer than optional chaining.",
      codeExamples: [
        {
          id: "missing-value-guard",
          title: "Early return",
          language: "ts",
          code: `const user =
  users.find(
    (item) =>
      item.id === userId,
  );

if (!user) {
  return;
}

console.log(user.name);`,
        },
      ],
    },

    {
      id: "production-notes",
      title: "Production notes",
      body: "Model absence explicitly. Prefer guards when missing data changes control flow, optional chaining when absence is acceptable, and ?? when you genuinely need a null/undefined fallback.",
    },

    {
      id: "practice",
      title: "Practice",
      body: "Given a User with optional profile and nullable name, safely read the city and create a displayName fallback without treating an empty string or zero as missing.",
    },

    {
      id: "interview",
      title: "Interview angle",
      body: "Be able to explain null vs undefined, optional chaining, the difference between ?? and ||, and why the non-null assertion does not validate anything at runtime.",
    },
  ],

  commonMistakes: [
    "Using ! merely to silence TypeScript.",
    "Using || when 0, false or an empty string are valid values.",
    "Using optional chaining where missing data should actually produce an error or early return.",
    "Ignoring undefined returned by find.",
  ],

  notebookNote:
    "Ako vrednost može nedostajati, to treba da bude deo tipa. `?.` = safe access kroz null/undefined. `??` = fallback samo za null/undefined. `!` ne proverava runtime i koristi se oprezno.",

  relatedLessonIds: [
    "typescript-async-api-response",
    "typescript-unknown-narrowing",
  ],
};
