import type { LessonContent } from "../../../types/learning";

export const typeAliasesInterfacesContent: LessonContent = {
  lessonId: "typescript-aliases-interfaces",

  overview:
    "Type aliases and interfaces let you give meaningful names to reusable data contracts. Both can model object shapes, but type aliases can also represent unions, primitives and more complex type expressions.",

  mentalModel:
    "Use named types to describe domain concepts. A User, Issue or API response should usually have a meaningful reusable contract instead of an anonymous object shape repeated throughout the application.",

  sections: [
    {
      id: "type-alias",
      title: "Type alias",
      body: "A type alias gives a reusable name to any TypeScript type.",
      codeExamples: [
        {
          id: "type-alias-example",
          title: "Developer type",
          language: "ts",
          code: `type Developer = {
  id: number;
  name: string;
  technology: string;
};`,
        },
      ],
    },

    {
      id: "interface",
      title: "Interface",
      body: "An interface primarily describes object contracts and can be extended by other interfaces.",
      codeExamples: [
        {
          id: "interface-example",
          title: "User interface",
          language: "ts",
          code: `interface User {
  id: number;
  name: string;
  email: string;
}`,
        },
      ],
    },

    {
      id: "type-can-model-more",
      title: "Type aliases can model more than objects",
      body: "Type aliases can represent unions, primitive aliases, tuples and other composed types.",
      codeExamples: [
        {
          id: "type-union-example",
          title: "Status union",
          language: "ts",
          code: `type IssueStatus =
  | "open"
  | "in-progress"
  | "done";`,
        },
      ],
    },

    {
      id: "extension",
      title: "Extending contracts",
      body: "Interfaces use extends. Type aliases commonly compose object types using intersections.",
      codeExamples: [
        {
          id: "interface-extends",
          title: "Interface extension",
          language: "ts",
          code: `interface Person {
  name: string;
}

interface Developer extends Person {
  technology: string;
}`,
        },
        {
          id: "type-intersection",
          title: "Type intersection",
          language: "ts",
          code: `type Person = {
  name: string;
};

type Developer =
  Person & {
    technology: string;
  };`,
        },
      ],
    },

    {
      id: "which-one",
      title: "Which should you use?",
      body: "For ordinary application code, both are valid for object shapes. Consistency matters more than arguing that one is always superior. Use type aliases when you need unions or composed type expressions. Interfaces are natural for extendable object contracts.",
      codeExamples: [
        {
          id: "selection-rule",
          title: "Practical rule",
          language: "ts",
          code: `// Object contract
interface User {
  id: number;
  name: string;
}

// Union / composition
type Status =
  | "idle"
  | "loading"
  | "success"
  | "error";`,
        },
      ],
    },

    {
      id: "domain-modeling",
      title: "Domain modeling",
      body: "Good type names communicate business meaning and make function signatures much easier to understand.",
      codeExamples: [
        {
          id: "domain-model-example",
          title: "Meaningful domain types",
          language: "ts",
          code: `type IssueId = number;

interface Issue {
  id: IssueId;
  title: string;
  status: IssueStatus;
}

function closeIssue(
  issue: Issue,
): Issue {
  return {
    ...issue,
    status: "done",
  };
}`,
        },
      ],
    },

    {
      id: "declaration-merging",
      title: "Interface declaration merging",
      body: "Interfaces can participate in declaration merging, while type aliases cannot. This is useful in some library and framework extension scenarios, but it is rarely the main reason to choose one in ordinary feature code.",
      codeExamples: [
        {
          id: "declaration-merging-example",
          title: "Interface merging",
          language: "ts",
          code: `interface Window {
  appVersion: string;
}

interface Window {
  environment: string;
}`,
        },
      ],
    },

    {
      id: "production-notes",
      title: "Production notes",
      body: "Use meaningful domain names and avoid duplicating identical anonymous structures. Do not create aliases for every primitive unless the alias adds genuine semantic meaning. Pick a consistent project convention rather than mixing styles randomly.",
    },

    {
      id: "practice",
      title: "Practice",
      body: "Create a Technology union and a Developer contract that uses it. Then create a SeniorDeveloper contract that adds yearsOfExperience without duplicating the base Developer properties.",
    },

    {
      id: "interview",
      title: "Interview angle",
      body: "Be able to explain that interfaces and type aliases overlap heavily for object shapes, while type aliases can model unions and other type expressions. Mention declaration merging as an interface-specific behavior.",
    },
  ],

  commonMistakes: [
    "Treating type vs interface as an absolute rule instead of a design choice.",
    "Duplicating object shapes instead of creating reusable contracts.",
    "Using string where a constrained union better represents the domain.",
    "Creating meaningless primitive aliases that add no clarity.",
    "Using intersection composition without considering whether the resulting model remains understandable.",
  ],

  notebookNote:
    "type i interface oba mogu opisati object shape. type je fleksibilniji za unions i composition. interface je prirodan za extendable object contracts i podržava declaration merging. Najvažniji su jasan domain model i konzistentnost.",

  relatedLessonIds: [
    "typescript-arrays-objects",
    "typescript-union-literal-types",
  ],
};
