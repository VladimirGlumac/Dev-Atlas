import type { LessonContent } from "../../../types/learning";

export const genericConstraintsKeyofContent: LessonContent = {
  lessonId: "typescript-generics-constraints-keyof",

  overview:
    "Generic constraints restrict what types are allowed while keeping an abstraction reusable. keyof produces a union of valid property names for an object type.",

  mentalModel:
    "A generic says 'give me some type'. A constraint says 'give me some type, but it must satisfy this minimum contract'. keyof says 'give me only keys that genuinely exist on this object type'.",

  sections: [
    {
      id: "generic-constraint",
      title: "Generic constraints",
      body: "Use extends to require a minimum structure from a generic type.",
      codeExamples: [
        {
          id: "constraint-example",
          title: "Requires id",
          language: "ts",
          code: `function getId<
  T extends { id: number },
>(
  item: T,
): number {
  return item.id;
}

getId({
  id: 1,
  name: "React",
});`,
          explanation:
            "T may contain additional properties, but it must at least contain id: number.",
        },
      ],
    },

    {
      id: "why-constraint",
      title: "Why constraints matter",
      body: "Without the constraint, TypeScript cannot know that an arbitrary T contains the property you want to use.",
      codeExamples: [
        {
          id: "constraint-reason",
          title: "Unconstrained vs constrained",
          language: "ts",
          code: `// Error
function readId<T>(
  value: T,
) {
  return value.id;
}

// Safe
function readId<
  T extends { id: number },
>(
  value: T,
) {
  return value.id;
}`,
        },
      ],
    },

    {
      id: "keyof",
      title: "keyof",
      body: "keyof creates a union containing the known keys of an object type.",
      codeExamples: [
        {
          id: "keyof-example",
          title: "User keys",
          language: "ts",
          code: `interface User {
  id: number;
  name: string;
  email: string;
}

type UserKey =
  keyof User;

// "id" | "name" | "email"`,
        },
      ],
    },

    {
      id: "generic-key-access",
      title: "Safe generic property access",
      body: "Combining generics and keyof allows reusable functions to access only valid object properties.",
      codeExamples: [
        {
          id: "get-property-example",
          title: "getProperty",
          language: "ts",
          code: `function getProperty<
  T,
  K extends keyof T,
>(
  object: T,
  key: K,
): T[K] {
  return object[key];
}

const user = {
  id: 1,
  name: "Ana",
};

const name =
  getProperty(
    user,
    "name",
  );
// string

const id =
  getProperty(
    user,
    "id",
  );
// number`,
        },
      ],
    },

    {
      id: "invalid-key",
      title: "Invalid keys are rejected",
      body: "The key generic is constrained to keyof T, so properties that do not exist are rejected during development.",
      codeExamples: [
        {
          id: "invalid-key-example",
          title: "Compile-time safety",
          language: "ts",
          code: `getProperty(
  user,
  "name",
);

// Error:
// getProperty(
//   user,
//   "password",
// );`,
        },
      ],
    },

    {
      id: "indexed-access",
      title: "Indexed access types",
      body: "T[K] means the type of property K on object type T.",
      codeExamples: [
        {
          id: "indexed-access-example",
          title: "Property value type",
          language: "ts",
          code: `type UserName =
  User["name"];
// string

type UserId =
  User["id"];
// number`,
        },
      ],
    },

    {
      id: "real-world-example",
      title: "Real-world reusable helper",
      body: "This pattern is useful for sorting, table columns, forms and reusable object utilities.",
      codeExamples: [
        {
          id: "sort-by-example",
          title: "Sort by object property",
          language: "ts",
          code: `function sortBy<
  T,
  K extends keyof T,
>(
  items: T[],
  key: K,
): T[] {
  return [...items].sort(
    (a, b) =>
      String(a[key]).localeCompare(
        String(b[key]),
      ),
  );
}`,
        },
      ],
    },

    {
      id: "production-notes",
      title: "Production notes",
      body: "Use constraints to express the minimum behavior or shape your abstraction requires. Prefer keyof-based APIs over arbitrary strings when a value represents a real property name.",
    },

    {
      id: "practice",
      title: "Practice",
      body: "Create a reusable pluck function that receives an array of objects and a valid key, then returns an array containing the values for that property.",
    },

    {
      id: "interview",
      title: "Interview angle",
      body: "Be ready to explain generic constraints, keyof and T[K]. A common interview exercise is implementing a type-safe getProperty helper.",
    },
  ],

  commonMistakes: [
    "Using string for a property key when keyof can restrict it safely.",
    "Adding overly strict constraints that make the generic unnecessarily difficult to reuse.",
    "Assuming extends in a generic means class inheritance.",
    "Forgetting that T[K] represents the property's value type.",
  ],

  notebookNote:
    "`T extends X` ograničava generic na tipove koji zadovoljavaju X. `keyof T` daje union validnih ključeva. `K extends keyof T` garantuje da je key stvarna property vrednost objekta. `T[K]` daje tip te property vrednosti.",

  relatedLessonIds: ["typescript-generics"],
};
