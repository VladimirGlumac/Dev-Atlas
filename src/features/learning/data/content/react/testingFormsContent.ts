import type { LessonContent } from "../../../types/learning";

export const testingFormsContent: LessonContent = {
  lessonId: "react-testing-forms",

  overview:
    "Form tests should verify that users can enter data, trigger validation, submit valid values and receive meaningful feedback.",

  mentalModel:
    "Test the form as a user sees it: labels, fields, buttons, validation messages and submit results.",

  sections: [
    {
      id: "type-values",
      title: "Enter form values",
      body: "Use userEvent to interact with fields through their accessible labels.",
      codeExamples: [
        {
          id: "form-type-example",
          title: "Type email",
          language: "tsx",
          code: `const user =
  userEvent.setup();

render(<LoginForm />);

const email =
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
      id: "validation",
      title: "Validation errors",
      body: "Trigger validation through normal user behavior instead of calling validation functions directly.",
      codeExamples: [
        {
          id: "validation-example",
          title: "Required field",
          language: "tsx",
          code: `await user.click(
  screen.getByRole(
    "button",
    { name: /submit/i },
  ),
);

expect(
  await screen.findByText(
    /email is required/i,
  ),
).toBeInTheDocument();`,
        },
      ],
    },

    {
      id: "valid-submit",
      title: "Valid submission",
      body: "A valid form test should fill the fields and verify the observable result of submission.",
      codeExamples: [
        {
          id: "valid-submit-example",
          title: "Successful submit",
          language: "tsx",
          code: `await user.type(
  screen.getByLabelText(/email/i),
  "user@example.com",
);

await user.type(
  screen.getByLabelText(/password/i),
  "secret123",
);

await user.click(
  screen.getByRole(
    "button",
    { name: /sign in/i },
  ),
);

expect(
  await screen.findByText(
    /welcome/i,
  ),
).toBeInTheDocument();`,
        },
      ],
    },

    {
      id: "rhf",
      title: "React Hook Form",
      body: "When using React Hook Form and Zod, test the rendered validation behavior rather than internal form state.",
      codeExamples: [
        {
          id: "rhf-rule",
          title: "What matters",
          language: "ts",
          code: `Do not test:
formState.errors directly

Test:
user action
→ validation message
→ submit behavior`,
        },
      ],
    },

    {
      id: "production-notes",
      title: "Production notes",
      body: "Prioritize important validation rules and successful submission flows. Avoid creating a test for every tiny schema rule unless that rule represents meaningful business behavior.",
    },

    {
      id: "practice",
      title: "Practice",
      body: "Test an IssueForm with required title validation, valid submission and one invalid status or field scenario.",
    },

    {
      id: "interview",
      title: "Interview angle",
      body: "Be ready to explain why form tests should interact through fields and visible validation rather than directly testing internal form-library state.",
    },
  ],

  commonMistakes: [
    "Calling submit handlers directly.",
    "Testing Zod internals through the React component.",
    "Using placeholder text when an accessible label exists.",
    "Ignoring validation and error feedback.",
  ],

  notebookNote:
    "Form test: user unosi vrednosti → submit → proveri validation ili success rezultat. Testiraj ponašanje forme, ne React Hook Form internals.",

  relatedLessonIds: ["react-testing-user-event", "react-testing-async-ui"],
};
