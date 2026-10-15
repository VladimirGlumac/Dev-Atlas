import type { LessonContent } from "../../../types/learning";

export const reusableComponentDesignContent: LessonContent = {
  lessonId: "react-reusable-components",

  overview:
    "Reusable components should expose a small, intentional API and avoid knowing too much about the feature that uses them. Reuse works best when responsibilities are clear and composition is preferred over endless configuration props.",

  mentalModel:
    "A reusable component should solve one clear UI problem without becoming a universal component that knows every use case.",

  sections: [
    {
      id: "focused-api",
      title: "Keep the public API focused",
      body: "A component should receive only the information and actions it actually needs.",
      codeExamples: [
        {
          id: "focused-api-example",
          title: "Focused Button API",
          language: "tsx",
          code: `interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}`,
        },
      ],
    },

    {
      id: "composition",
      title: "Prefer composition",
      body: "Composition keeps components flexible without adding many boolean props.",
      codeExamples: [
        {
          id: "composition-example",
          title: "Card composition",
          language: "tsx",
          code: `<Card>
  <CardHeader>
    Issue details
  </CardHeader>

  <CardContent>
    ...
  </CardContent>
</Card>`,
        },
      ],
    },

    {
      id: "boolean-explosion",
      title: "Avoid boolean prop explosion",
      body: "A component with many flags often represents several different components hidden inside one API.",
      codeExamples: [
        {
          id: "boolean-explosion-example",
          title: "Usually avoid",
          language: "tsx",
          code: `<Button
  primary
  danger
  compact
  rounded
  iconOnly
  loading
/>`,
        },
      ],
    },

    {
      id: "variants",
      title: "Use meaningful variants",
      body: "When visual variants are real design-system concepts, model them explicitly instead of combining many unrelated booleans.",
      codeExamples: [
        {
          id: "variant-example",
          title: "Variant prop",
          language: "tsx",
          code: `type ButtonVariant =
  | "primary"
  | "secondary"
  | "danger";

interface ButtonProps {
  variant?: ButtonVariant;
}`,
        },
      ],
    },

    {
      id: "feature-vs-shared",
      title: "Do not generalize too early",
      body: "Keep feature-specific components inside the feature until real reuse appears.",
      codeExamples: [
        {
          id: "reuse-ownership-example",
          title: "Ownership",
          language: "ts",
          code: `IssueStatusBadge
→ features/issues

Generic Badge
→ components/ui`,
        },
      ],
    },

    {
      id: "children",
      title: "Use children for composition",
      body: "children can keep shared containers flexible without requiring the component to understand every nested content type.",
    },

    {
      id: "controlled-api",
      title: "Controlled reusable components",
      body: "Reusable components often work best when important state is controlled by the parent.",
      codeExamples: [
        {
          id: "controlled-dialog-example",
          title: "Controlled dialog",
          language: "tsx",
          code: `<Dialog
  open={isOpen}
  onOpenChange={setIsOpen}
>
  ...
</Dialog>`,
        },
      ],
    },

    {
      id: "accessibility",
      title: "Accessibility belongs in the component contract",
      body: "Shared UI components should provide correct semantics, keyboard behavior and accessible naming so every consumer benefits.",
    },

    {
      id: "production-notes",
      title: "Production notes",
      body: "Reuse should reduce duplication and improve consistency. If abstraction makes normal use harder to understand, the API may be too generic.",
    },

    {
      id: "practice",
      title: "Practice",
      body: "Design a reusable Button and Card API. Then identify which IssueTracker components should remain feature-specific instead of becoming shared.",
    },

    {
      id: "interview",
      title: "Interview angle",
      body: "Be ready to explain composition, controlled components and why premature abstraction can create more complexity than duplication.",
    },
  ],

  commonMistakes: [
    "Creating universal components with dozens of props.",
    "Moving feature components into shared UI before real reuse exists.",
    "Using many boolean props for mutually exclusive variants.",
    "Making reusable components responsible for business logic.",
    "Ignoring accessibility in shared components.",
  ],

  notebookNote:
    "Reusable component treba mali i jasan API. Preferiraj composition i meaningful variants. Ne generalizuj feature-specific komponentu dok realna potreba za reuse ne postoji.",

  relatedLessonIds: [
    "react-component-responsibilities",
    "react-accessibility-basics",
  ],
};
