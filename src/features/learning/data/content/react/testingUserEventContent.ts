import type { LessonContent } from "../../../types/learning";

export const testingUserEventContent: LessonContent = {
  lessonId: "react-testing-user-event",

  overview:
    "user-event simulates realistic user interactions such as clicking, typing and keyboard navigation. It is generally preferred over manually dispatching low-level DOM events.",

  mentalModel:
    "Interact with the application the way a user would instead of directly triggering implementation-level events.",

  sections: [
    {
      id: "setup",
      title: "Create a user instance",
      body: "userEvent.setup creates an interaction controller for the test.",
      codeExamples: [
        {
          id: "user-setup-example",
          title: "Setup",
          language: "tsx",
          code: `import userEvent from "@testing-library/user-event";

const user =
  userEvent.setup();`,
        },
      ],
    },

    {
      id: "click",
      title: "Click",
      body: "await user.click performs a realistic click interaction.",
      codeExamples: [
        {
          id: "click-example",
          title: "Counter",
          language: "tsx",
          code: `const user =
  userEvent.setup();

render(<Counter />);

await user.click(
  screen.getByRole(
    "button",
    { name: "+" },
  ),
);

expect(
  screen.getByText(
    "Count: 1",
  ),
).toBeInTheDocument();`,
        },
      ],
    },

    {
      id: "type",
      title: "Typing",
      body: "user.type simulates typing into a form control.",
      codeExamples: [
        {
          id: "type-example",
          title: "Enter email",
          language: "tsx",
          code: `const email =
  screen.getByLabelText(
    /email/i,
  );

await user.type(
  email,
  "user@example.com",
);

expect(email).toHaveValue(
  "user@example.com",
);`,
        },
      ],
    },

    {
      id: "clear",
      title: "Clear input",
      body: "user.clear simulates a user removing the input value.",
      codeExamples: [
        {
          id: "clear-example",
          title: "Clear field",
          language: "tsx",
          code: `await user.clear(
  email,
);

expect(email).toHaveValue("");`,
        },
      ],
    },

    {
      id: "keyboard",
      title: "Keyboard interaction",
      body: "Keyboard behavior can be tested directly, which is important for accessible interfaces.",
      codeExamples: [
        {
          id: "keyboard-example",
          title: "Press Escape",
          language: "tsx",
          code: `await user.keyboard(
  "{Escape}",
);`,
        },
      ],
    },

    {
      id: "why-await",
      title: "Why await?",
      body: "user-event interactions are asynchronous because realistic interactions may trigger several browser-like events and React updates.",
    },

    {
      id: "production-notes",
      title: "Production notes",
      body: "Use userEvent for normal user interaction tests. Low-level fireEvent still has valid specialized uses but should not be your default.",
    },

    {
      id: "practice",
      title: "Practice",
      body: "Test a search form: type a username, submit the form and verify that the expected result or loading state appears.",
    },

    {
      id: "interview",
      title: "Interview angle",
      body: "Be ready to explain why userEvent is generally preferred to directly firing isolated DOM events.",
    },
  ],

  commonMistakes: [
    "Forgetting await on userEvent interactions.",
    "Using fireEvent for every interaction without a reason.",
    "Calling handlers directly instead of interacting with the rendered UI.",
    "Testing mouse behavior while ignoring keyboard accessibility.",
  ],

  notebookNote:
    "userEvent simulira ponašanje korisnika: click, type, clear, keyboard. Većinu userEvent operacija await-uj. Test ne treba direktno da poziva component handler ako korisnik može da izazove isto ponašanje kroz UI.",

  relatedLessonIds: [
    "react-testing-rendering-queries",
    "react-testing-async-ui",
  ],
};
