import type { LessonContent } from "../../../types/learning";

export const readonlyTuplesAsConstContent: LessonContent = {
  lessonId: "typescript-readonly-tuples-as-const",

  overview:
    "readonly communicates immutability at the type level, tuples model fixed-length arrays with known positions, and as const preserves literal values as narrowly as possible.",

  mentalModel:
    "Use readonly when mutation should be prevented, tuples when position matters, and as const when literal values should stay exact instead of widening to string or number.",

  sections: [
    {
      id: "readonly-property",
      title: "readonly properties",
      body: "A readonly property cannot be reassigned through that type.",
      codeExamples: [
        {
          id: "readonly-property-example",
          title: "Stable ID",
          language: "ts",
          code: `interface User {
  readonly id: number;
  name: string;
}

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
      id: "readonly-type",
      title: "Readonly<T>",
      body: "Readonly transforms every top-level property into a readonly property.",
      codeExamples: [
        {
          id: "readonly-type-example",
          title: "Readonly user",
          language: "ts",
          code: `type User = {
  id: number;
  name: string;
};

type ReadonlyUser =
  Readonly<User>;`,
        },
      ],
    },

    {
      id: "readonly-array",
      title: "Readonly arrays",
      body: "Readonly arrays prevent mutating array methods through that type.",
      codeExamples: [
        {
          id: "readonly-array-example",
          title: "Immutable collection contract",
          language: "ts",
          code: `const technologies:
  readonly string[] = [
    "React",
    "TypeScript",
  ];

// Error:
// technologies.push("Node");`,
        },
      ],
    },

    {
      id: "tuples",
      title: "Tuples",
      body: "A tuple describes a fixed-length array where each position has a known type.",
      codeExamples: [
        {
          id: "tuple-example",
          title: "Coordinate pair",
          language: "ts",
          code: `type Coordinate = [
  number,
  number,
];

const position:
  Coordinate = [
  45.25,
  19.84,
];`,
        },
      ],
    },

    {
      id: "named-tuples",
      title: "Named tuple elements",
      body: "Tuple positions can be labeled for readability.",
      codeExamples: [
        {
          id: "named-tuple-example",
          title: "Result tuple",
          language: "ts",
          code: `type Result = [
  data: string,
  success: boolean,
];`,
        },
      ],
    },

    {
      id: "as-const",
      title: "as const",
      body: "as const prevents literal widening and makes object/array values readonly at the inferred type level.",
      codeExamples: [
        {
          id: "as-const-example",
          title: "Preserve literals",
          language: "ts",
          code: `const statuses = [
  "open",
  "in-progress",
  "done",
] as const;

type IssueStatus =
  typeof statuses[number];

// "open"
// | "in-progress"
// | "done"`,
        },
      ],
    },

    {
      id: "config-as-const",
      title: "Useful config pattern",
      body: "as const is especially useful for stable configuration values and query-key factories.",
      codeExamples: [
        {
          id: "query-key-as-const",
          title: "Query key",
          language: "ts",
          code: `export const taskQueryKeys = {
  all: [
    "api-lab",
    "tasks",
  ] as const,
};`,
          explanation:
            "This preserves the array as a readonly tuple of exact literal values.",
        },
      ],
    },

    {
      id: "production-notes",
      title: "Production notes",
      body: "readonly is a compile-time constraint and does not deeply freeze JavaScript objects at runtime. Use tuples only when positions have real semantic meaning; otherwise an object is usually clearer.",
    },

    {
      id: "practice",
      title: "Practice",
      body: "Create a readonly list of technology names with as const and derive a Technology union from that array.",
    },

    {
      id: "interview",
      title: "Interview angle",
      body: "Know the difference between a normal array and a tuple, and explain how as const affects literal inference.",
    },
  ],

  commonMistakes: [
    "Assuming readonly freezes objects at runtime.",
    "Using tuples for complex data where named object properties would be clearer.",
    "Using as const everywhere without understanding why literal narrowing is needed.",
    "Forgetting that Readonly<T> is shallow.",
  ],

  notebookNote:
    "readonly sprečava reassignment kroz type system. Tuple = fixed-length array sa poznatim pozicijama. as const čuva exact literal tipove i pravi inferred vrednosti readonly. Odlično za config i query keys.",

  relatedLessonIds: ["typescript-utility-types"],
};
