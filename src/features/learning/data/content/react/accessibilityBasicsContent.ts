import type { LessonContent } from "../../../types/learning";

export const accessibilityBasicsContent: LessonContent = {
  lessonId: "react-accessibility-basics",

  overview:
    "Accessible React interfaces start with semantic HTML, keyboard operability, clear labels and predictable focus behavior. ARIA should support semantics, not replace correct HTML unnecessarily.",

  mentalModel:
    "Build the interface so users can understand and operate it without depending only on a mouse or visual styling.",

  sections: [
    {
      id: "semantic-html",
      title: "Prefer semantic HTML",
      body: "Use native elements when they already provide the required meaning and behavior.",
      codeExamples: [
        {
          id: "button-example",
          title: "Use a real button",
          language: "tsx",
          code: `// Prefer
<button
  type="button"
  onClick={handleOpen}
>
  Open
</button>

// Usually avoid
<div
  onClick={handleOpen}
>
  Open
</div>`,
        },
      ],
    },

    {
      id: "labels",
      title: "Label form controls",
      body: "Inputs should have accessible names through labels or another valid accessible naming method.",
      codeExamples: [
        {
          id: "label-example",
          title: "Associated label",
          language: "tsx",
          code: `<label htmlFor="email">
  Email
</label>

<input
  id="email"
  type="email"
/>`,
        },
      ],
    },

    {
      id: "keyboard",
      title: "Keyboard support",
      body: "Interactive controls must be operable through keyboard interaction, including focus navigation and activation.",
    },

    {
      id: "focus",
      title: "Focus management",
      body: "Dialogs, drawers and route-like UI transitions may need deliberate focus management so keyboard and screen-reader users understand where interaction moved.",
    },

    {
      id: "aria",
      title: "Use ARIA intentionally",
      body: "Use ARIA when native semantics do not fully express the required behavior. Incorrect ARIA can make an interface less accessible.",
      codeExamples: [
        {
          id: "aria-rule",
          title: "Rule of thumb",
          language: "ts",
          code: `native semantic HTML
→ first choice

ARIA
→ supplement when needed`,
        },
      ],
    },

    {
      id: "status-messages",
      title: "Dynamic feedback",
      body: "Important async or validation messages may require appropriate live-region semantics so assistive technologies receive updates.",
    },

    {
      id: "production-notes",
      title: "Production notes",
      body: "Accessibility should be part of component design and testing, not a final cleanup step before release.",
    },

    {
      id: "practice",
      title: "Practice",
      body: "Review a modal with a close button, heading and form. Identify semantic, keyboard, labeling and focus requirements.",
    },

    {
      id: "interview",
      title: "Interview angle",
      body: "Be ready to explain semantic HTML, keyboard accessibility, accessible names and why native controls are usually preferable to recreating controls with divs.",
    },
  ],

  commonMistakes: [
    "Using clickable divs instead of native controls.",
    "Adding ARIA without understanding its semantics.",
    "Building forms without labels.",
    "Ignoring focus after opening dialogs or drawers.",
    "Testing only mouse interaction.",
  ],

  notebookNote:
    "Accessibility production rule: semantic HTML first, keyboard operability, accessible names, intentional focus management i ARIA samo kada native semantics nisu dovoljni.",

  relatedLessonIds: [
    "react-testing-rendering-queries",
    "react-testing-user-event",
  ],
};
