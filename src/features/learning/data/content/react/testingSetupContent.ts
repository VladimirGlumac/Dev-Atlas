import type { LessonContent } from "../../../types/learning";

export const testingSetupContent: LessonContent = {
  lessonId: "react-testing-setup",

  overview:
    "Vitest runs tests while React Testing Library provides utilities for rendering and interacting with React components. jsdom simulates the browser DOM inside the test environment.",

  mentalModel:
    "Vitest runs and asserts tests. React Testing Library interacts with rendered UI. jsdom provides the browser-like environment.",

  sections: [
    {
      id: "tools",
      title: "Testing stack",
      body: "A common Vite React testing stack combines Vitest, React Testing Library, jest-dom and user-event.",
      codeExamples: [
        {
          id: "install-testing",
          title: "Install dependencies",
          language: "bash",
          code: `npm install -D vitest jsdom @testing-library/react @testing-library/jest-dom @testing-library/user-event`,
        },
      ],
    },

    {
      id: "vitest-config",
      title: "Vitest configuration",
      body: "React component tests need a DOM environment rather than the default Node environment.",
      codeExamples: [
        {
          id: "vitest-config-example",
          title: "Vite config",
          language: "ts",
          code: `test: {
  environment: "jsdom",
  setupFiles: "./src/test/setup.ts",
},`,
        },
      ],
    },

    {
      id: "setup-file",
      title: "Test setup file",
      body: "jest-dom adds useful DOM-specific assertions such as toBeInTheDocument and toBeDisabled.",
      codeExamples: [
        {
          id: "setup-example",
          title: "src/test/setup.ts",
          language: "ts",
          code: `import "@testing-library/jest-dom/vitest";`,
        },
      ],
    },

    {
      id: "test-script",
      title: "Test scripts",
      body: "Add scripts so tests are easy to run locally and later in CI.",
      codeExamples: [
        {
          id: "script-example",
          title: "package.json",
          language: "json",
          code: `{
  "scripts": {
    "test": "vitest",
    "test:run": "vitest run"
  }
}`,
        },
      ],
    },

    {
      id: "first-test",
      title: "Basic test structure",
      body: "Vitest provides describe, it/test and expect for organizing assertions.",
      codeExamples: [
        {
          id: "first-test-example",
          title: "Simple test",
          language: "ts",
          code: `import {
  describe,
  expect,
  it,
} from "vitest";

describe("sum", () => {
  it("adds two numbers", () => {
    expect(2 + 2).toBe(4);
  });
});`,
        },
      ],
    },

    {
      id: "production-notes",
      title: "Production notes",
      body: "Keep test configuration centralized. Run the full test suite in CI using a non-watch command such as vitest run.",
    },

    {
      id: "practice",
      title: "Practice",
      body: "Verify the DevAtlas testing configuration by creating one simple utility test and one component-rendering test.",
    },

    {
      id: "interview",
      title: "Interview angle",
      body: "Know the roles of Vitest, React Testing Library, jsdom and jest-dom.",
    },
  ],

  commonMistakes: [
    "Running component tests in a Node-only environment.",
    "Forgetting jest-dom setup and wondering why DOM matchers are missing.",
    "Treating React Testing Library as the test runner.",
    "Using watch mode in CI.",
  ],

  notebookNote:
    "Vitest = test runner/assertions. RTL = render/interakcija sa React UI. jsdom = browser-like DOM. jest-dom = DOM matchers. user-event = realistične user interakcije.",

  relatedLessonIds: [
    "react-testing-philosophy",
    "react-testing-rendering-queries",
  ],
};
