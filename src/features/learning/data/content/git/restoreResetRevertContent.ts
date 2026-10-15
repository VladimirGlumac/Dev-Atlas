import type { LessonContent } from "../../../types/learning";

export const restoreResetRevertContent: LessonContent = {
  lessonId: "git-reset-revert-restore",

  overview:
    "Git provides different undo tools for different situations. restore works mainly with file changes, reset moves Git references and staging state, while revert safely creates a new commit that reverses an older commit.",

  mentalModel:
    "Before undoing anything, ask: am I undoing an uncommitted file change, changing staging, rewriting local history, or reversing already shared history?",

  sections: [
    {
      id: "restore-working",
      title: "git restore",
      body: "restore can discard uncommitted changes in a file and return it to the committed version.",
      codeExamples: [
        {
          id: "restore-file",
          title: "Discard file changes",
          language: "bash",
          code: `git restore src/pages/HomePage.tsx`,
          explanation:
            "Be careful: uncommitted changes in that file are discarded.",
        },
      ],
    },

    {
      id: "unstage",
      title: "Unstage a file",
      body: "restore can also remove a file from staging while preserving its working-directory changes.",
      codeExamples: [
        {
          id: "restore-staged",
          title: "Remove from staging",
          language: "bash",
          code: `git restore --staged src/pages/HomePage.tsx`,
        },
      ],
    },

    {
      id: "reset",
      title: "git reset",
      body: "reset moves the current branch reference and can affect staging and working-directory state depending on the selected mode.",
      codeExamples: [
        {
          id: "reset-soft",
          title: "Undo commit, keep staged changes",
          language: "bash",
          code: `git reset --soft HEAD~1`,
        },
        {
          id: "reset-mixed",
          title: "Undo commit, keep unstaged changes",
          language: "bash",
          code: `git reset HEAD~1`,
        },
      ],
    },

    {
      id: "hard-reset",
      title: "reset --hard",
      body: "A hard reset can discard both commits and working-directory changes. It is powerful and should be used deliberately.",
      codeExamples: [
        {
          id: "hard-reset-example",
          title: "Dangerous reset",
          language: "bash",
          code: `git reset --hard HEAD~1`,
          explanation:
            "Avoid running this casually because local work can be lost.",
        },
      ],
    },

    {
      id: "revert",
      title: "git revert",
      body: "revert creates a new commit that applies the opposite change of an existing commit. This preserves shared history.",
      codeExamples: [
        {
          id: "revert-example",
          title: "Reverse a commit safely",
          language: "bash",
          code: `git revert abc1234`,
        },
      ],
    },

    {
      id: "when-to-use",
      title: "Which one should I use?",
      body: "Choose the command based on whether changes are committed and whether history has already been shared.",
      codeExamples: [
        {
          id: "undo-cheat-sheet",
          title: "Quick rule",
          language: "bash",
          code: `Uncommitted file change
→ git restore

Accidentally staged file
→ git restore --staged

Local commit not shared
→ reset may be appropriate

Commit already shared
→ prefer git revert`,
        },
      ],
    },

    {
      id: "production-notes",
      title: "Production notes",
      body: "Avoid rewriting shared branch history unless your team explicitly expects it. Revert is usually safer for commits already pushed to shared branches.",
    },

    {
      id: "practice",
      title: "Practice",
      body: "On a temporary practice branch, modify a file and restore it. Then create a commit, undo it with --soft reset, recommit it, and finally create another commit and reverse it using revert.",
    },

    {
      id: "interview",
      title: "Interview angle",
      body: "Be able to explain why revert is generally safer than reset for shared history.",
    },
  ],

  commonMistakes: [
    "Using reset --hard without understanding what will be discarded.",
    "Resetting shared history and then force-pushing casually.",
    "Confusing unstage with discard.",
    "Using revert when you actually only need to discard an uncommitted file.",
  ],

  notebookNote:
    "restore = working/staging changes. reset = pomera history/state i koristi se pažljivo. revert = pravi novi commit koji poništava stari; najbezbedniji za već deljenu istoriju.",

  relatedLessonIds: ["git-stash", "git-essential-commands"],
};
