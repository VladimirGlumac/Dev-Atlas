import type { LessonContent } from "../../../types/learning";

export const normalizedStateContent: LessonContent = {
  lessonId: "redux-normalized-state",

  overview:
    "Normalized state stores entity collections by identifier instead of relying only on nested arrays. This can simplify lookup, updates and relationships in complex client state.",

  mentalModel:
    "Think of normalized Redux state like a small in-memory database table: entities are indexed by id.",

  sections: [
    {
      id: "array-state",
      title: "Simple array state",
      body: "Arrays are perfectly valid for small or simple collections.",
      codeExamples: [
        {
          id: "array-state-example",
          title: "Task array",
          language: "ts",
          code: `const tasks = [
  {
    id: 1,
    title: "React",
  },
  {
    id: 2,
    title: "Redux",
  },
];`,
        },
      ],
    },

    {
      id: "array-cost",
      title: "Repeated entity lookup",
      body: "When many operations target individual entities by id, array code repeatedly searches the collection.",
      codeExamples: [
        {
          id: "array-find-example",
          title: "Lookup",
          language: "ts",
          code: `const task =
  state.tasks.find(
    (task) =>
      task.id === taskId,
  );`,
        },
      ],
    },

    {
      id: "normalized-shape",
      title: "Normalized shape",
      body: "Normalized state separates entity identifiers from the entity lookup table.",
      codeExamples: [
        {
          id: "normalized-example",
          title: "Normalized tasks",
          language: "ts",
          code: `{
  ids: [1, 2],

  entities: {
    1: {
      id: 1,
      title: "React",
    },

    2: {
      id: 2,
      title: "Redux",
    },
  },
}`,
        },
      ],
    },

    {
      id: "lookup",
      title: "Direct lookup",
      body: "An entity can be accessed directly using its identifier.",
      codeExamples: [
        {
          id: "direct-lookup-example",
          title: "Lookup by id",
          language: "ts",
          code: `const task =
  state.entities[
    taskId
  ];`,
        },
      ],
    },

    {
      id: "relationships",
      title: "Relationships",
      body: "Normalized state also makes relationships easier to model by storing references with ids rather than deeply nesting duplicate entities.",
      codeExamples: [
        {
          id: "relationship-example",
          title: "Issue assignment",
          language: "ts",
          code: `issue: {
  id: 10,
  assigneeId: 2,
}

users.entities[2]`,
        },
      ],
    },

    {
      id: "when-not-needed",
      title: "Normalization is not always needed",
      body: "Small static collections or state that is rarely updated may be clearer as a normal array.",
    },

    {
      id: "production-notes",
      title: "Production notes",
      body: "Normalize when entity identity, frequent updates and relationships make the state easier to manage. Do not normalize everything mechanically.",
    },

    {
      id: "practice",
      title: "Practice",
      body: "Convert an array of users into ids + entities and implement direct lookup by id.",
    },

    {
      id: "interview",
      title: "Interview angle",
      body: "Be ready to explain why normalized state can improve entity lookup and reduce duplicated nested data.",
    },
  ],

  commonMistakes: [
    "Normalizing tiny simple arrays with no benefit.",
    "Duplicating the same entity in several nested structures.",
    "Storing full related objects where ids would create clearer relationships.",
    "Assuming normalization automatically improves every application.",
  ],

  notebookNote:
    "Normalized state = ids + entities lookup. Koristan za kolekcije sa identitetom, čestim update-ima i relationships. Razmišljaj kao mala in-memory tabela indeksirana po id-u.",

  relatedLessonIds: ["redux-entity-adapter", "redux-selectors"],
};
