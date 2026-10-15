import type { LessonContent } from "../../../types/learning";

export const genericsContent: LessonContent = {
  lessonId: "typescript-generics",

  overview:
    "Generics let you write reusable code without throwing away type information. Instead of hardcoding one specific type or using any, a generic allows the caller's type to flow through the abstraction.",

  mentalModel:
    "A generic is a type parameter. Just as a normal function receives values through parameters, generic code receives types through type parameters.",

  sections: [
    {
      id: "generic-function",
      title: "Generic functions",
      body: "The simplest generic function receives a value of type T and returns the same type T.",
      codeExamples: [
        {
          id: "identity-example",
          title: "Identity function",
          language: "ts",
          code: `function identity<T>(
  value: T,
): T {
  return value;
}

const name =
  identity("React");
// string

const score =
  identity(100);
// number`,
          explanation:
            "TypeScript infers T from the value passed by the caller.",
        },
      ],
    },

    {
      id: "generic-vs-any",
      title: "Generic vs any",
      body: "any accepts everything but loses information. A generic accepts different types while preserving the exact relationship between input and output.",
      codeExamples: [
        {
          id: "generic-any-comparison",
          title: "Preserving type information",
          language: "ts",
          code: `function unsafe(
  value: any,
): any {
  return value;
}

function safe<T>(
  value: T,
): T {
  return value;
}

const unsafeResult =
  unsafe("React");
// any

const safeResult =
  safe("React");
// string`,
        },
      ],
    },

    {
      id: "generic-arrays",
      title: "Generics with arrays",
      body: "Generics are extremely common when reusable logic works with collections.",
      codeExamples: [
        {
          id: "generic-first-item",
          title: "Get first item",
          language: "ts",
          code: `function getFirst<T>(
  items: T[],
): T | undefined {
  return items[0];
}

const firstTechnology =
  getFirst([
    "React",
    "TypeScript",
  ]);
// string | undefined`,
        },
      ],
    },

    {
      id: "multiple-generics",
      title: "Multiple generic parameters",
      body: "A reusable abstraction may need to preserve relationships between several independent types.",
      codeExamples: [
        {
          id: "multiple-generics-example",
          title: "Key/value pair",
          language: "ts",
          code: `function createPair<T, U>(
  first: T,
  second: U,
): [T, U] {
  return [
    first,
    second,
  ];
}

const pair =
  createPair(
    "React",
    19,
  );

// [string, number]`,
        },
      ],
    },

    {
      id: "generic-interface",
      title: "Generic data models",
      body: "Interfaces and type aliases can also accept generic type parameters.",
      codeExamples: [
        {
          id: "api-response-generic",
          title: "Reusable API response",
          language: "ts",
          code: `interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}

type UserResponse =
  ApiResponse<User>;

type IssueResponse =
  ApiResponse<Issue>;`,
        },
      ],
    },

    {
      id: "react-generic-example",
      title: "Generics in real libraries",
      body: "You already use generics constantly even when you do not write them manually.",
      codeExamples: [
        {
          id: "real-generic-example",
          title: "Examples you already know",
          language: "tsx",
          code: `useState<User[]>([]);

queryClient
  .getQueryData<Task[]>(
    taskQueryKeys.all,
  );

Promise<User[]>`,
          explanation:
            "User[], Task[] and User[] here are type arguments passed into generic APIs.",
        },
      ],
    },

    {
      id: "production-notes",
      title: "Production notes",
      body: "Create generics when callers need the same reusable behavior for multiple types and the type relationship matters. Do not introduce a generic merely to make code look advanced.",
    },

    {
      id: "practice",
      title: "Practice",
      body: "Create a generic function wrapInArray<T> that takes one value and returns T[]. Then create a generic ApiResponse<T> and use it with User and Issue.",
    },

    {
      id: "interview",
      title: "Interview angle",
      body: "Be ready to explain why generics preserve type relationships while any loses them, and give examples from React or API response modeling.",
    },
  ],

  commonMistakes: [
    "Using a generic where one concrete type would be simpler.",
    "Replacing any with T without preserving a meaningful relationship between values.",
    "Forgetting that T is a type parameter, not a runtime variable.",
    "Creating too many generic parameters that make an API harder to understand.",
  ],

  notebookNote:
    "Generic = type parameter. Omogućava reusable kod bez gubitka type information. `any` kaže 'ne proveravaj', dok `<T>` kaže 'tip može biti različit, ali zapamti koji je'.",

  relatedLessonIds: [
    "typescript-generics-constraints-keyof",
    "typescript-type-guards",
  ],
};
