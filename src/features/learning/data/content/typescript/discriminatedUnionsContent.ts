import type { LessonContent } from "../../../types/learning";

export const discriminatedUnionsContent: LessonContent = {
  lessonId: "typescript-discriminated-unions",

  overview:
    "Discriminated unions model a finite set of object states using a shared literal property. They are ideal for application state where each case has different valid data.",

  mentalModel:
    "Instead of one object containing many optional properties, model each valid state separately and let a discriminant tell TypeScript which shape is active.",

  sections: [
    {
      id: "problem-with-optionals",
      title: "The optional-property problem",
      body: "A single object with many optional fields can represent impossible states.",
      codeExamples: [
        {
          id: "bad-state-example",
          title: "Weak model",
          language: "ts",
          code: `type RequestState = {
  status:
    | "idle"
    | "loading"
    | "success"
    | "error";

  data?: User[];
  error?: string;
};`,
          explanation:
            "This model allows status: success with no data, or status: loading with an error message.",
        },
      ],
    },

    {
      id: "discriminated-union",
      title: "Discriminated union",
      body: "Each state gets its own object shape, while the status property acts as the discriminant.",
      codeExamples: [
        {
          id: "good-state-example",
          title: "Valid states only",
          language: "ts",
          code: `type RequestState =
  | {
      status: "idle";
    }
  | {
      status: "loading";
    }
  | {
      status: "success";
      data: User[];
    }
  | {
      status: "error";
      error: string;
    };`,
        },
      ],
    },

    {
      id: "automatic-narrowing",
      title: "Automatic narrowing",
      body: "Checking the discriminant automatically narrows the object to the correct member of the union.",
      codeExamples: [
        {
          id: "state-narrowing-example",
          title: "Switch by status",
          language: "ts",
          code: `function renderState(
  state: RequestState,
): string {
  switch (state.status) {
    case "idle":
      return "Idle";

    case "loading":
      return "Loading";

    case "success":
      return \`\${state.data.length} users\`;

    case "error":
      return state.error;
  }
}`,
        },
      ],
    },

    {
      id: "never-exhaustive",
      title: "Exhaustive checking with never",
      body: "A never check can make TypeScript report an error when a new union member is added but not handled.",
      codeExamples: [
        {
          id: "assert-never-example",
          title: "Exhaustive switch",
          language: "ts",
          code: `function assertNever(
  value: never,
): never {
  throw new Error(
    \`Unexpected value: \${value}\`,
  );
}

function renderState(
  state: RequestState,
): string {
  switch (state.status) {
    case "idle":
      return "Idle";

    case "loading":
      return "Loading";

    case "success":
      return "Success";

    case "error":
      return state.error;

    default:
      return assertNever(
        state,
      );
  }
}`,
        },
      ],
    },

    {
      id: "real-world-result",
      title: "Result pattern",
      body: "Discriminated unions are useful for functions that can succeed or fail with different data.",
      codeExamples: [
        {
          id: "result-example",
          title: "Typed result",
          language: "ts",
          code: `type Result<T> =
  | {
      success: true;
      data: T;
    }
  | {
      success: false;
      error: string;
    };

function handleResult(
  result: Result<User>,
) {
  if (result.success) {
    console.log(
      result.data.name,
    );

    return;
  }

  console.error(
    result.error,
  );
}`,
        },
      ],
    },

    {
      id: "production-notes",
      title: "Production notes",
      body: "Use discriminated unions when states are mutually exclusive and carry different data. They often produce cleaner code than several booleans or many optional properties.",
    },

    {
      id: "practice",
      title: "Practice",
      body: "Model a SaveState with idle, saving, success and error states. Only success should contain savedAt, and only error should contain an error message.",
    },

    {
      id: "interview",
      title: "Interview angle",
      body: "Be ready to explain what makes a union discriminated, why it prevents impossible states and how never enables exhaustive checking.",
    },
  ],

  commonMistakes: [
    "Using several booleans for mutually exclusive states.",
    "Putting every property on one object as optional.",
    "Forgetting exhaustive handling when the union grows.",
    "Using never without understanding that it represents an impossible value.",
  ],

  notebookNote:
    "Discriminated union modeluje svaki validan state zasebno preko zajedničkog literal polja, npr. `status`. `never` omogućava exhaustive checking i hvata zaboravljen case kada union kasnije proširimo.",

  relatedLessonIds: [
    "typescript-union-literal-types",
    "typescript-runtime-validation",
  ],
};
