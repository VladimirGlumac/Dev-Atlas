import type { LessonContent } from "../../../types/learning";

export const reduxProjectStructureContent: LessonContent = {
  lessonId: "redux-project-structure",

  overview:
    "Redux code scales better when slices, selectors and domain-specific logic live near the feature they belong to, while store configuration remains centralized.",

  mentalModel:
    "The store is global infrastructure. Slice logic belongs to the feature that owns the state.",

  sections: [
    {
      id: "recommended-structure",
      title: "Feature-based Redux structure",
      body: "A practical React + Redux Toolkit application can keep feature-owned Redux code close to the rest of that feature.",
      codeExamples: [
        {
          id: "structure-example",
          title: "Example structure",
          language: "bash",
          code: `src/
├── app/
│   └── App.tsx
│
├── store/
│   ├── store.ts
│   └── hooks.ts
│
├── features/
│   ├── editor/
│   │   ├── components/
│   │   ├── editorSlice.ts
│   │   ├── editorSelectors.ts
│   │   └── types.ts
│   │
│   ├── settings/
│   │   ├── settingsSlice.ts
│   │   └── settingsSelectors.ts
│   │
│   └── auth/
│
└── main.tsx`,
        },
      ],
    },

    {
      id: "store-folder",
      title: "What belongs in store/",
      body: "Keep global Redux infrastructure in the store folder rather than feature-specific reducer logic.",
      codeExamples: [
        {
          id: "store-folder-example",
          title: "Store responsibilities",
          language: "bash",
          code: `store/
├── store.ts
└── hooks.ts

store.ts
→ configureStore
→ RootState
→ AppDispatch

hooks.ts
→ useAppSelector
→ useAppDispatch`,
        },
      ],
    },

    {
      id: "slice-ownership",
      title: "Slice ownership",
      body: "A slice should live with the domain that owns its state.",
      codeExamples: [
        {
          id: "slice-ownership-example",
          title: "Ownership",
          language: "ts",
          code: `editorSlice
→ features/editor

settingsSlice
→ features/settings

cartSlice
→ features/cart`,
        },
      ],
    },

    {
      id: "selectors-file",
      title: "Selectors",
      body: "Small slices may keep selectors in the same file. Larger domains may benefit from a dedicated selectors file.",
      codeExamples: [
        {
          id: "selectors-file-example",
          title: "Scaling rule",
          language: "bash",
          code: `small feature:
editorSlice.ts

larger feature:
editorSlice.ts
editorSelectors.ts`,
        },
      ],
    },

    {
      id: "avoid-global-folders",
      title: "Avoid global reducer dumping grounds",
      body: "Putting every slice, action and selector into giant global folders makes domain ownership harder to understand.",
      codeExamples: [
        {
          id: "bad-structure",
          title: "Usually avoid",
          language: "bash",
          code: `redux/
├── reducers/
├── actions/
├── selectors/
└── constants/

# feature relationships
# become scattered`,
        },
      ],
    },

    {
      id: "devatlas-example",
      title: "DevAtlas-style structure",
      body: "If DevAtlas later needs Redux for a complex client-owned feature, the slice should live inside that feature rather than creating a new global Redux domain.",
      codeExamples: [
        {
          id: "devatlas-redux-example",
          title: "Example",
          language: "bash",
          code: `features/
└── playground/
    ├── components/
    ├── hooks/
    ├── playgroundSlice.ts
    └── playgroundSelectors.ts`,
        },
      ],
    },

    {
      id: "production-notes",
      title: "Production notes",
      body: "Prefer feature ownership and co-location. Do not create elaborate Redux folder structures copied from older tutorials when Redux Toolkit already groups actions and reducers through slices.",
    },

    {
      id: "practice",
      title: "Practice",
      body: "Design Redux folders for a project with cart, checkout workflow and editor settings. Keep store configuration separate from feature state.",
    },

    {
      id: "interview",
      title: "Interview angle",
      body: "Explain why modern Redux Toolkit projects often organize Redux logic by feature instead of separate global actions and reducers directories.",
    },
  ],

  commonMistakes: [
    "Putting every slice into one global slices folder regardless of ownership.",
    "Separating actions and reducers in old-style Redux boilerplate unnecessarily.",
    "Creating circular dependencies between feature slices.",
    "Putting server-state query data into Redux folders just for consistency.",
  ],

  notebookNote:
    "Redux project structure: store/ = global infrastructure. Feature slice/selectors ostaju uz feature koji poseduje state. Moderni RTK favorizuje feature-based organizaciju.",

  relatedLessonIds: [
    "redux-best-practices",
    "react-feature-based-architecture",
  ],
};
