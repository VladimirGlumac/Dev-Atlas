import type { LessonContent } from "../../../types/learning";

export const mergeConflictsContent: LessonContent = {
  lessonId: "git-merge-conflicts",

  overview:
    "A merge conflict occurs when Git cannot safely determine how independent changes should be combined automatically. The developer must decide what the final code should contain.",

  mentalModel:
    "A conflict is not Git breaking. Git is deliberately refusing to guess which competing change is correct.",

  sections: [
    {
      id: "why-conflict",
      title: "Why conflicts happen",
      body: "Conflicts commonly happen when different branches modify overlapping lines or when one branch deletes a file another branch modifies.",
    },

    {
      id: "conflict-markers",
      title: "Conflict markers",
      body: "Git writes markers into conflicted files showing competing versions.",
      codeExamples: [
        {
          id: "conflict-marker-example",
          title: "Conflicted file",
          language: "ts",
          code: `<<<<<<< HEAD
const title = "Dashboard";
=======
const title = "Developer Dashboard";
>>>>>>> feature/dashboard`,
        },
      ],
    },

    {
      id: "resolve",
      title: "Resolve the conflict",
      body: "Edit the file into the final correct version and remove all Git conflict markers.",
      codeExamples: [
        {
          id: "resolved-example",
          title: "Resolved result",
          language: "ts",
          code: `const title =
  "Developer Dashboard";`,
        },
      ],
    },

    {
      id: "mark-resolved",
      title: "Mark conflict as resolved",
      body: "After editing the file, stage the resolved version.",
      codeExamples: [
        {
          id: "mark-resolved-example",
          title: "Stage resolution",
          language: "bash",
          code: `git add src/pages/DashboardPage.tsx`,
        },
      ],
    },

    {
      id: "finish-merge",
      title: "Finish the merge",
      body: "Once all conflicts are resolved and staged, finish the merge according to the current Git operation.",
      codeExamples: [
        {
          id: "merge-finish",
          title: "Check and continue",
          language: "bash",
          code: `git status

git commit`,
        },
      ],
    },

    {
      id: "abort",
      title: "Abort a problematic merge",
      body: "If you are not ready to resolve the merge, Git can restore the pre-merge state.",
      codeExamples: [
        {
          id: "abort-example",
          title: "Abort merge",
          language: "bash",
          code: `git merge --abort`,
        },
      ],
    },

    {
      id: "avoid-conflicts",
      title: "Reduce conflict frequency",
      body: "Keep branches focused and short-lived, synchronize with the base branch regularly and avoid unrelated edits to shared files.",
    },

    {
      id: "production-notes",
      title: "Production notes",
      body: "Never resolve conflicts by blindly selecting 'ours' or 'theirs'. Understand both changes and produce the correct combined result. Run tests after resolution.",
    },

    {
      id: "practice",
      title: "Practice",
      body: "Create two temporary branches from the same commit, change the same line differently on each branch and merge them to intentionally produce and resolve a conflict.",
    },

    {
      id: "interview",
      title: "Interview angle",
      body: "Be able to describe how a merge conflict happens and the steps used to resolve it safely.",
    },
  ],

  commonMistakes: [
    "Assuming a conflict means one branch is wrong.",
    "Leaving conflict markers in source code.",
    "Choosing one side without understanding the other change.",
    "Forgetting to test after resolving conflicts.",
    "Making huge long-lived branches that increase conflict risk.",
  ],

  notebookNote:
    "Merge conflict = Git ne zna bezbedno kako da spoji dve izmene. Pregledaj obe strane, ručno napravi finalni kod, ukloni markers, git add, pa završi merge.",

  relatedLessonIds: ["git-merge", "git-pull-requests"],
};
