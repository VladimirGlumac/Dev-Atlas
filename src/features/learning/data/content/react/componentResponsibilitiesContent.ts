import type { LessonContent } from "../../../types/learning";

export const componentResponsibilitiesContent: LessonContent = {
  lessonId: "react-component-responsibilities",

  overview:
    "Components are easier to maintain when each has a clear responsibility. Large components often become difficult because they fetch data, transform it, manage unrelated state, render complex UI and perform side effects in one place.",

  mentalModel:
    "A component should answer a relatively small question: what does this part of the interface render and how does the user interact with it?",

  sections: [
    {
      id: "large-component",
      title: "Signs a component does too much",
      body: "Length alone is not the problem. The warning sign is multiple unrelated responsibilities.",
      codeExamples: [
        {
          id: "component-smells",
          title: "Common signals",
          language: "ts",
          code: `Component handles:

API request
+
form validation
+
modal state
+
sorting
+
permissions
+
large markup
+
analytics

→ likely too many responsibilities`,
        },
      ],
    },

    {
      id: "split-by-responsibility",
      title: "Split by responsibility",
      body: "Extract components when a portion of UI has its own meaningful responsibility, reusable behavior or complexity.",
      codeExamples: [
        {
          id: "component-split-example",
          title: "Issue page",
          language: "bash",
          code: `IssuePage
├── IssueHeader
├── IssueDetails
├── IssueComments
└── IssueActions`,
        },
      ],
    },

    {
      id: "props",
      title: "Use explicit props contracts",
      body: "Props should communicate exactly what the child needs rather than passing giant unrelated objects by convenience.",
      codeExamples: [
        {
          id: "props-example",
          title: "Focused props",
          language: "tsx",
          code: `interface UserAvatarProps {
  name: string;
  avatarUrl: string;
}

function UserAvatar({
  name,
  avatarUrl,
}: UserAvatarProps) {
  ...
}`,
        },
      ],
    },

    {
      id: "data-flow",
      title: "Predictable data flow",
      body: "Parents commonly pass data down and callbacks down for child interactions. Avoid hidden communication between unrelated components.",
      codeExamples: [
        {
          id: "data-flow-example",
          title: "Explicit interaction",
          language: "tsx",
          code: `<IssueCard
  issue={issue}
  onSelect={handleSelect}
/>`,
        },
      ],
    },

    {
      id: "container-thinking",
      title: "Separate orchestration from presentation when useful",
      body: "A page or feature component may orchestrate queries and state while smaller components focus on presentation. This is a guideline, not a requirement to create artificial container/presentational pairs everywhere.",
    },

    {
      id: "derived-values",
      title: "Keep simple derivation near usage",
      body: "Do not extract every calculation. Simple derived values can remain close to the component when that keeps code easier to follow.",
    },

    {
      id: "composition",
      title: "Prefer composition",
      body: "Composition often scales better than creating highly configurable mega-components with dozens of boolean props.",
      codeExamples: [
        {
          id: "composition-example",
          title: "Composition",
          language: "tsx",
          code: `<Card>
  <CardHeader>
    ...
  </CardHeader>

  <CardContent>
    ...
  </CardContent>
</Card>`,
        },
      ],
    },

    {
      id: "production-notes",
      title: "Production notes",
      body: "Do not split components mechanically based on line count. Extract around meaningful responsibilities, reuse, testing boundaries or readability.",
    },

    {
      id: "practice",
      title: "Practice",
      body: "Review a large dashboard component and identify which parts are orchestration, domain behavior and presentation. Split only where a meaningful responsibility boundary exists.",
    },

    {
      id: "interview",
      title: "Interview angle",
      body: "Be ready to discuss separation of concerns, component composition and why smaller components are not automatically better components.",
    },
  ],

  commonMistakes: [
    "Splitting every ten lines into another component.",
    "Building one enormous component that owns unrelated responsibilities.",
    "Passing entire objects when a child needs only one or two values.",
    "Creating mega-components controlled by many boolean props.",
    "Extracting abstractions only to reduce file length.",
  ],

  notebookNote:
    "Komponentu deli po responsibility granicama, ne po broju linija. Page/feature može da orchestrate state i data, dok manji UI delovi renderuju fokusirane odgovornosti. Preferiraj composition nad mega-komponentama.",

  relatedLessonIds: [
    "react-project-structure",
    "react-custom-hooks-architecture",
    "react-state-ownership",
  ],
};
