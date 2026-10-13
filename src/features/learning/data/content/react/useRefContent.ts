import type { LessonContent } from "../../../types/learning";

export const useRefContent: LessonContent = {
  lessonId: "react-use-ref",

  overview:
    "useRef stores a mutable value that survives renders without causing a new render when it changes. It is also commonly used to access DOM elements.",

  mentalModel:
    "A ref is like a persistent box with a .current property. React keeps the same ref object between renders, but changing .current does not tell React to render again.",

  sections: [
    {
      id: "basic-syntax",
      title: "Basic syntax",
      body: "useRef returns an object whose .current value can be read or changed.",
      codeExamples: [
        {
          id: "use-ref-basic",
          title: "Mutable value",
          language: "tsx",
          code: `import { useRef } from "react";

const renderCountRef = useRef(0);

renderCountRef.current += 1;`,
        },
      ],
    },

    {
      id: "dom-references",
      title: "DOM references",
      body: "A common use case is accessing a DOM element directly, for example to focus an input.",
      codeExamples: [
        {
          id: "use-ref-dom",
          title: "Focus an input",
          language: "tsx",
          code: `import { useRef } from "react";

export default function Search() {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleFocus(): void {
    inputRef.current?.focus();
  }

  return (
    <>
      <input ref={inputRef} />
      <button type="button" onClick={handleFocus}>
        Focus
      </button>
    </>
  );
}`,
        },
      ],
    },

    {
      id: "ref-vs-state",
      title: "Ref vs state",
      body: "Use state when changing a value should update the UI. Use a ref when the value must survive renders but changing it should not trigger a render.",
      codeExamples: [
        {
          id: "ref-state-comparison",
          title: "Mental model",
          language: "ts",
          code: `// State
// change -> render

// Ref
// change -> no render`,
        },
      ],
    },

    {
      id: "previous-values",
      title: "Keeping previous values",
      body: "Refs are useful for values such as timer IDs, previous values, external library instances or mutable values used by event handlers.",
    },

    {
      id: "when-not-to-use",
      title: "When not to use useRef",
      body: "Do not hide UI state inside refs. If changing a value should be visible in the rendered interface, it usually belongs in state.",
    },

    {
      id: "production-notes",
      title: "Production notes",
      body: "Use DOM refs for imperative operations that React cannot express declaratively, such as focusing, scrolling or integrating with a non-React library. Keep imperative DOM manipulation limited.",
    },

    {
      id: "practice",
      title: "Practice",
      body: "Create a search input with a button that focuses the input. Then store the previous search value in another ref without causing additional renders.",
    },

    {
      id: "interview",
      title: "Interview angle",
      body: "Know the key difference between useRef and useState: both survive renders, but only state updates schedule rendering.",
    },
  ],

  commonMistakes: [
    "Expecting a ref update to rerender the UI.",
    "Using refs instead of state for visible UI values.",
    "Reading or writing DOM elements before the ref exists.",
    "Using manual DOM manipulation where declarative React would be simpler.",
  ],

  notebookNote:
    "useRef čuva vrednost između rendera, ali promena ref.current ne izaziva novi render. Koristi ga za DOM reference, timer ID, prethodne vrednosti i mutable podatke koji ne pripadaju UI state-u.",

  relatedLessonIds: ["react-use-state", "react-use-effect"],
};
