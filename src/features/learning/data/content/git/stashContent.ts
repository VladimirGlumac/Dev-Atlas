import type { LessonContent } from "../../../types/learning";

export const stashContent: LessonContent = {
  lessonId: "git-stash",

  overview:
    "Git stash temporarily stores unfinished changes so you can return the working directory to a clean state without creating an unfinished commit.",

  mentalModel:
    "Stash is a temporary shelf for work you are not ready to commit but need to move out of the way.",

  sections: [
    {
      id: "basic-stash",
      title: "Create a stash",
      body: "git stash stores tracked working-directory and staged changes.",
      codeExamples: [
        {
          id: "stash-basic",
          title: "Temporarily save work",
          language: "bash",
          code: `git stash`,
        },
      ],
    },

    {
      id: "named-stash",
      title: "Add a useful message",
      body: "A message helps identify the purpose of the saved work.",
      codeExamples: [
        {
          id: "stash-message",
          title: "Named stash",
          language: "bash",
          code: `git stash push -m "WIP dashboard filters"`,
        },
      ],
    },

    {
      id: "stash-list",
      title: "Inspect stashes",
      body: "A repository can contain multiple stash entries.",
      codeExamples: [
        {
          id: "stash-list-example",
          title: "List stashes",
          language: "bash",
          code: `git stash list`,
        },
      ],
    },

    {
      id: "stash-pop",
      title: "Restore and remove",
      body: "git stash pop reapplies the newest stash and removes it from the stash list if successful.",
      codeExamples: [
        {
          id: "stash-pop-example",
          title: "Restore latest stash",
          language: "bash",
          code: `git stash pop`,
        },
      ],
    },

    {
      id: "stash-apply",
      title: "Restore without removing",
      body: "git stash apply reapplies stash changes while keeping the stash entry.",
      codeExamples: [
        {
          id: "stash-apply-example",
          title: "Apply and keep",
          language: "bash",
          code: `git stash apply`,
        },
      ],
    },

    {
      id: "use-case",
      title: "Real use case",
      body: "Stash is useful when urgent work requires switching branches while your current feature is incomplete.",
      codeExamples: [
        {
          id: "stash-workflow",
          title: "Emergency fix workflow",
          language: "bash",
          code: `git status

git stash push -m "WIP feature"

git switch main

# urgent fix...

git switch feature/dashboard

git stash pop`,
        },
      ],
    },

    {
      id: "production-notes",
      title: "Production notes",
      body: "Stash is temporary storage, not long-term project management. Do not accumulate unidentified stashes for weeks.",
    },

    {
      id: "practice",
      title: "Practice",
      body: "Change a file without committing, stash it, verify the working directory becomes clean, then restore the change.",
    },

    {
      id: "interview",
      title: "Interview angle",
      body: "Know the difference between stash pop and stash apply and give an example of when stash is useful.",
    },
  ],

  commonMistakes: [
    "Using stash as long-term storage.",
    "Forgetting what a stash contains.",
    "Assuming pop can never create conflicts.",
    "Stashing when a small logical commit would actually be better.",
  ],

  notebookNote:
    "git stash = privremeno skloni unfinished changes. pop = vrati + ukloni stash. apply = vrati ali zadrži stash. Koristi za kratkotrajni WIP, ne kao trajnu istoriju.",

  relatedLessonIds: ["git-reset-revert-restore", "git-branches"],
};
