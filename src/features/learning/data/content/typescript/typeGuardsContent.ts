import type { LessonContent } from "../../../types/learning";

export const typeGuardsContent: LessonContent = {
  lessonId: "typescript-type-guards",

  overview:
    "Type guards are runtime checks that help TypeScript narrow broad or unknown values into more specific types. Custom type guards are especially useful at application boundaries where external data cannot be trusted automatically.",

  mentalModel:
    "A TypeScript type exists only during development. A type guard is actual runtime JavaScript evidence that proves a value has a particular shape.",

  sections: [
    {
      id: "built-in-guards",
      title: "Built-in guards",
      body: "TypeScript understands common JavaScript runtime checks such as typeof, instanceof and the in operator.",
      codeExamples: [
        {
          id: "built-in-guard-example",
          title: "Built-in narrowing",
          language: "ts",
          code: `function printValue(
  value: string | number,
): void {
  if (typeof value === "string") {
    console.log(
      value.toUpperCase(),
    );

    return;
  }

  console.log(
    value.toFixed(2),
  );
}`,
        },
      ],
    },

    {
      id: "custom-type-guard",
      title: "Custom type guards",
      body: "A custom type guard returns a type predicate such as value is User. When the function returns true, TypeScript narrows the value accordingly.",
      codeExamples: [
        {
          id: "custom-type-guard-example",
          title: "isUser",
          language: "ts",
          code: `interface User {
  id: number;
  name: string;
}

function isUser(
  value: unknown,
): value is User {
  if (
    typeof value !== "object" ||
    value === null
  ) {
    return false;
  }

  return (
    "id" in value &&
    typeof value.id === "number" &&
    "name" in value &&
    typeof value.name === "string"
  );
}`,
          explanation:
            "The return type value is User tells TypeScript what has been proven when the function returns true.",
        },
      ],
    },

    {
      id: "using-guard",
      title: "Using a type guard",
      body: "Once the guard succeeds, TypeScript treats the value as the narrowed type inside that control-flow branch.",
      codeExamples: [
        {
          id: "using-type-guard-example",
          title: "Safe external value",
          language: "ts",
          code: `const data: unknown =
  await response.json();

if (!isUser(data)) {
  throw new Error(
    "Invalid user data",
  );
}

console.log(
  data.name.toUpperCase(),
);`,
        },
      ],
    },

    {
      id: "array-filter-guard",
      title: "Type guards with arrays",
      body: "Type predicates can also be useful when filtering unions or nullable collections.",
      codeExamples: [
        {
          id: "filter-type-guard-example",
          title: "Remove null safely",
          language: "ts",
          code: `function isDefined<T>(
  value: T | null | undefined,
): value is T {
  return value != null;
}

const values = [
  "React",
  null,
  "TypeScript",
  undefined,
];

const technologies =
  values.filter(isDefined);

// string[]`,
        },
      ],
    },

    {
      id: "guard-vs-validation",
      title: "Type guard vs runtime schema validation",
      body: "Custom guards are useful for small and focused checks. For larger external schemas, a validation library such as Zod often provides clearer errors and more maintainable validation.",
      codeExamples: [
        {
          id: "guard-vs-zod",
          title: "Rule of thumb",
          language: "ts",
          code: `small runtime check
→ custom type guard

large API/form schema
→ schema validator such as Zod`,
        },
      ],
    },

    {
      id: "production-notes",
      title: "Production notes",
      body: "Do not write a type guard that simply returns true. The runtime implementation must genuinely prove the declared type. Treat external API data as unknown when runtime correctness matters.",
    },

    {
      id: "practice",
      title: "Practice",
      body: "Create an isIssue function that accepts unknown and checks that the value contains a numeric id, string title and valid status.",
    },

    {
      id: "interview",
      title: "Interview angle",
      body: "Be ready to explain the difference between narrowing, a custom type predicate and a type assertion. A guard proves the type at runtime; an assertion only tells the compiler what you believe.",
    },
  ],

  commonMistakes: [
    "Writing a type guard whose implementation does not actually validate the declared type.",
    "Using as Type instead of checking untrusted data.",
    "Forgetting that typeof null is object.",
    "Trying to manually validate very large schemas that would be clearer with a schema validation library.",
  ],

  notebookNote:
    "Type guard = runtime dokaz koji TypeScript koristi za narrowing. Custom guard koristi return type `value is Type`. Za male provere guard je odličan; za velike API/form schemas često je bolji Zod.",

  relatedLessonIds: ["typescript-unknown-narrowing", "typescript-generics"],
};
