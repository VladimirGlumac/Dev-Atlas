import type { LessonContent } from "../../../types/learning";

export const unionLiteralTypesContent: LessonContent = {
  lessonId: "typescript-union-literal-types",

  overview:
    "Union types let a value represent one of several possible types. Literal types constrain values to an exact set of allowed strings, numbers or booleans.",

  mentalModel:
    "Instead of saying 'this is any string', use unions when your domain actually allows only a fixed set of states.",

  sections: [
    {
      id: "basic-union",
      title: "Basic union",
      body: "A union means a value can be one of several allowed types.",
      codeExamples: [
        {
          id: "basic-union-example",
          title: "String or number",
          language: "ts",
          code: `let id: string | number;

id = 1;
id = "abc";`,
        },
      ],
    },

    {
      id: "literal-types",
      title: "Literal types",
      body: "Literal types represent exact allowed values.",
      codeExamples: [
        {
          id: "literal-type-example",
          title: "Issue status",
          language: "ts",
          code: `type IssueStatus =
  | "open"
  | "in-progress"
  | "done";`,
        },
      ],
    },

    {
      id: "better-domain-model",
      title: "Prefer constrained domain values",
      body: "A union often models domain state better than a broad string.",
      codeExamples: [
        {
          id: "status-bad-good",
          title: "string vs union",
          language: "ts",
          code: `// Too broad
type Issue = {
  status: string;
};

// Better
type IssueStatus =
  | "open"
  | "in-progress"
  | "done";

type Issue = {
  status: IssueStatus;
};`,
        },
      ],
    },

    {
      id: "function-union",
      title: "Union parameters",
      body: "Functions can accept several valid input shapes, but the implementation must narrow before using type-specific operations.",
      codeExamples: [
        {
          id: "union-function-example",
          title: "Format identifier",
          language: "ts",
          code: `function formatId(
  id: string | number,
): string {
  if (typeof id === "number") {
    return id.toString();
  }

  return id.toUpperCase();
}`,
        },
      ],
    },

    {
      id: "production-notes",
      title: "Production notes",
      body: "Use literal unions for statuses, variants, roles and other constrained values. Avoid plain string when the domain has a known finite set of valid values.",
    },

    {
      id: "practice",
      title: "Practice",
      body: "Create a Technology union with React, TypeScript, Node and PostgreSQL. Then create a function that accepts only those values.",
    },

    {
      id: "interview",
      title: "Interview angle",
      body: "Be ready to explain the difference between a union of primitive types and a literal union used for domain modeling.",
    },
  ],

  commonMistakes: [
    "Using string when the domain has a fixed set of values.",
    "Forgetting to narrow before using type-specific methods.",
    "Creating huge unions that should really be modeled as structured objects.",
  ],

  notebookNote:
    "Union = jedna vrednost može biti više dozvoljenih tipova. Literal union = ograničen skup konkretnih vrednosti. Odličan za status, role, variant i domain state.",

  relatedLessonIds: ["typescript-basic-types", "typescript-aliases-interfaces"],
};
