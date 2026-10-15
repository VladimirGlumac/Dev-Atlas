import type { LessonContent } from "../../../types/learning";

export const mappedTypesContent: LessonContent = {
  lessonId: "typescript-mapped-types",

  overview:
    "Mapped types create new object types by iterating over the keys of another type. Many built-in utility types are based on this mechanism.",

  mentalModel:
    "Take every key from an existing type and transform its property definition.",

  sections: [
    {
      id: "basic",
      title: "Basic mapped type",
      body: "A mapped type iterates through a union of property keys.",
      codeExamples: [
        {
          id: "basic-mapped-example",
          title: "Boolean flags",
          language: "ts",
          code: `type FeatureFlags<T> = {
  [K in keyof T]: boolean;
};`,
        },
      ],
    },

    {
      id: "example",
      title: "Transform an object type",
      body: "The resulting type keeps the same keys but changes every value type.",
      codeExamples: [
        {
          id: "mapped-result-example",
          title: "Permissions",
          language: "ts",
          code: `interface Permissions {
  read: string;
  write: string;
}

type PermissionFlags =
  FeatureFlags<
    Permissions
  >;

// {
//   read: boolean;
//   write: boolean;
// }`,
        },
      ],
    },

    {
      id: "optional",
      title: "Modify optionality",
      body: "Mapped types can add or remove property modifiers.",
      codeExamples: [
        {
          id: "optional-example",
          title: "Custom Partial",
          language: "ts",
          code: `type MyPartial<T> = {
  [K in keyof T]?:
    T[K];
};`,
        },
      ],
    },

    {
      id: "readonly",
      title: "Modify readonly",
      body: "The same mechanism can transform readonly behavior.",
      codeExamples: [
        {
          id: "readonly-example",
          title: "Custom Readonly",
          language: "ts",
          code: `type MyReadonly<T> = {
  readonly [
    K in keyof T
  ]: T[K];
};`,
        },
      ],
    },

    {
      id: "utility-types",
      title: "Utility types make more sense now",
      body: "Partial, Required, Readonly, Pick and related helpers are based on advanced type transformations such as mapped types.",
    },

    {
      id: "production-notes",
      title: "Production notes",
      body: "Prefer built-in utility types when they already express your intent. Write custom mapped types when the domain needs a transformation the standard utilities do not provide.",
    },

    {
      id: "practice",
      title: "Practice",
      body: "Create Nullable<T> that transforms every property of T into T[K] | null.",
    },

    {
      id: "interview",
      title: "Interview angle",
      body: "Explain that mapped types iterate through keys and transform properties, and connect them to utility types such as Partial.",
    },
  ],

  commonMistakes: [
    "Recreating built-in utility types unnecessarily.",
    "Using mapped types where a normal interface would be clearer.",
    "Forgetting that K represents each property key.",
  ],

  notebookNote:
    "Mapped type: `[K in keyof T]` prolazi kroz keys postojećeg type-a i pravi novi object type. Utility Types su praktična primena ovog principa.",

  relatedLessonIds: [
    "typescript-utility-types",
    "typescript-conditional-types",
  ],
};
