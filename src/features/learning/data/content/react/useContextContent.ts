import type { LessonContent } from "../../../types/learning";

export const useContextContent: LessonContent = {
  lessonId: "react-use-context",

  overview:
    "useContext lets a component read a value provided by a Context Provider higher in the React tree without passing the value manually through every intermediate component.",

  mentalModel:
    "Context is dependency injection through the component tree. A provider exposes a value and descendants that consume that context react to changes in the provided value.",

  sections: [
    {
      id: "basic-setup",
      title: "Basic setup",
      body: "Create a context, provide a value and consume it inside descendants.",
      codeExamples: [
        {
          id: "context-basic",
          title: "Theme context",
          language: "tsx",
          code: `import {
  createContext,
  useContext,
} from "react";

type Theme = "light" | "dark";

const ThemeContext =
  createContext<Theme>("light");

function Toolbar() {
  const theme =
    useContext(ThemeContext);

  return <p>{theme}</p>;
}`,
        },
      ],
    },

    {
      id: "custom-hook",
      title: "Wrap context access in a custom hook",
      body: "For application contexts, a custom hook gives consumers a cleaner API and centralizes the error thrown when the provider is missing.",
      codeExamples: [
        {
          id: "context-custom-hook",
          title: "useTheme",
          language: "tsx",
          code: `export function useTheme() {
  const context =
    useContext(ThemeContext);

  if (!context) {
    throw new Error(
      "useTheme must be used inside ThemeProvider",
    );
  }

  return context;
}`,
        },
      ],
    },

    {
      id: "provider-value",
      title: "Provider value",
      body: "Every consumer using the context can rerender when the provider value changes. Keep provider values focused and avoid placing unrelated frequently changing state into one giant context.",
    },

    {
      id: "when-to-use",
      title: "When to use Context",
      body: "Context works well for values needed across a subtree such as theme, authenticated user information, locale or feature-level dependencies.",
    },

    {
      id: "when-not-to-use",
      title: "When not to use Context",
      body: "Context is not automatically a replacement for every state management solution. Highly dynamic global application state may be easier to manage with a dedicated store, while remote server data belongs in a server-state cache such as TanStack Query.",
    },

    {
      id: "production-notes",
      title: "Production notes",
      body: "Split contexts by responsibility. Keep the consumer API behind custom hooks. Consider the rerender impact of frequently changing provider values.",
    },

    {
      id: "practice",
      title: "Practice",
      body: "Create an AuthContext containing a user and logout function. Add a useAuth custom hook that throws when used outside the provider.",
    },

    {
      id: "interview",
      title: "Interview angle",
      body: "Be ready to explain prop drilling, what problem Context solves, and why using Context for every global value can create unnecessary coupling and rerenders.",
    },
  ],

  commonMistakes: [
    "Using Context for all global state by default.",
    "Forgetting to wrap consumers with the provider.",
    "Creating one giant context containing unrelated state.",
    "Calling useContext directly everywhere instead of centralizing application-specific behavior in a custom hook.",
  ],

  notebookNote:
    "Context deli vrednost kroz component tree bez prop drilling-a. Provider daje vrednost, useContext je čita. Za app context napravi custom hook poput useTheme/useAuth i podeli context-e po odgovornosti.",

  relatedLessonIds: ["react-use-state"],
};
