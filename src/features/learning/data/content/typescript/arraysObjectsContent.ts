import type { LessonContent } from "../../../types/learning";

export const arraysObjectsContent: LessonContent = {
  lessonId: "typescript-arrays-objects",

  overview:
    "Arrays and objects are the foundation of most application data. TypeScript lets you define exactly what values an array contains and what properties an object must expose.",

  mentalModel:
    "The goal is not to describe only individual values, but the shape of the data flowing through your application.",

  sections: [
    {
      id: "typed-arrays",
      title: "Typed arrays",
      body: "Array types describe what kind of values an array may contain.",
      codeExamples: [
        {
          id: "array-syntax",
          title: "Array syntax",
          language: "ts",
          code: `const technologies: string[] = [
  "React",
  "TypeScript",
  "Node",
];

const scores: Array<number> = [
  10,
  20,
  30,
];`,
          explanation:
            "T[] and Array<T> describe the same basic idea. T[] is usually more common for simple arrays.",
        },
      ],
    },

    {
      id: "object-types",
      title: "Object types",
      body: "Object types define the required structure of an object.",
      codeExamples: [
        {
          id: "object-basic",
          title: "Typed object",
          language: "ts",
          code: `const developer: {
  id: number;
  name: string;
  active: boolean;
} = {
  id: 1,
  name: "Ana",
  active: true,
};`,
        },
      ],
    },

    {
      id: "array-of-objects",
      title: "Arrays of objects",
      body: "Most application data is represented as collections of structured objects.",
      codeExamples: [
        {
          id: "array-object-example",
          title: "Developers collection",
          language: "ts",
          code: `type Developer = {
  id: number;
  name: string;
  technology: string;
};

const developers: Developer[] = [
  {
    id: 1,
    name: "Ana",
    technology: "React",
  },
  {
    id: 2,
    name: "Marko",
    technology: "Node",
  },
];`,
        },
      ],
    },

    {
      id: "optional-properties",
      title: "Optional properties",
      body: "A property marked with ? may be absent. This is different from a required property whose value can explicitly be undefined.",
      codeExamples: [
        {
          id: "optional-property-example",
          title: "Optional assignee",
          language: "ts",
          code: `type Issue = {
  id: number;
  title: string;
  assignee?: string;
};`,
        },
      ],
    },

    {
      id: "readonly-properties",
      title: "Readonly properties",
      body: "readonly communicates that a property should not be reassigned through that type.",
      codeExamples: [
        {
          id: "readonly-property-example",
          title: "Stable identifier",
          language: "ts",
          code: `type User = {
  readonly id: number;
  name: string;
};

const user: User = {
  id: 1,
  name: "Ana",
};

user.name = "Sara";

// Error:
// user.id = 2;`,
        },
      ],
    },

    {
      id: "immutable-array-updates",
      title: "Immutable array updates",
      body: "React and modern application code often benefit from creating new arrays instead of mutating existing collections.",
      codeExamples: [
        {
          id: "immutable-array-example",
          title: "Add and update immutably",
          language: "ts",
          code: `const withNewDeveloper = [
  ...developers,
  newDeveloper,
];

const updatedDevelopers =
  developers.map((developer) =>
    developer.id === updatedDeveloper.id
      ? updatedDeveloper
      : developer,
  );`,
        },
      ],
    },

    {
      id: "nested-objects",
      title: "Nested objects",
      body: "Complex data should still be modeled explicitly instead of falling back to generic object or any.",
      codeExamples: [
        {
          id: "nested-object-example",
          title: "Nested profile",
          language: "ts",
          code: `type Profile = {
  id: number;
  name: string;

  address: {
    city: string;
    country: string;
  };
};`,
        },
      ],
    },

    {
      id: "production-notes",
      title: "Production notes",
      body: "Avoid broad types such as object when you know the real structure. Reuse named types when shapes become meaningful domain concepts. Prefer immutable transformations when updating collections used by React state or query caches.",
    },

    {
      id: "practice",
      title: "Practice",
      body: "Model a Project with id, title, optional description and an array of members. Add a new member without mutating the original members array.",
    },

    {
      id: "interview",
      title: "Interview angle",
      body: "Be ready to explain optional properties, readonly properties and why immutable array transformations are common in React applications.",
    },
  ],

  commonMistakes: [
    "Using object instead of defining the real object shape.",
    "Using any[] for collections with known element structure.",
    "Mutating arrays used by React state directly.",
    "Confusing an optional property with a required property typed as undefined.",
    "Duplicating the same object shape repeatedly instead of extracting a reusable type.",
  ],

  notebookNote:
    "Array tip opisuje elemente kolekcije, object tip opisuje shape objekta. Za ozbiljne domain objekte koristi reusable type/interface. U React/TanStack kodu preferiraj immutable map/filter/spread update-e.",

  relatedLessonIds: ["typescript-basic-types", "typescript-aliases-interfaces"],
};
