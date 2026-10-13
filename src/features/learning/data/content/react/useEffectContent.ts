import type { LessonContent } from "../../../types/learning";

export const useEffectContent: LessonContent = {
  lessonId: "react-use-effect",

  overview:
    "useEffect lets a React component synchronize with systems outside React, such as APIs, timers, event listeners, browser APIs, or subscriptions.",

  mentalModel:
    "Render describes the UI. Effects run after React commits the result to the DOM. An effect should synchronize something external with the current React state or props.",

  sections: [
    {
      id: "basic-syntax",
      title: "Basic syntax",
      body: "useEffect receives an effect function and optionally a dependency array. React runs the effect after rendering.",

      codeExamples: [
        {
          id: "basic-effect",
          title: "Basic useEffect",
          language: "tsx",
          code: `import { useEffect } from "react";

function Page() {
  useEffect(() => {
    document.title = "DevAtlas";
  }, []);

  return <h1>Home</h1>;
}`,
          explanation:
            "The empty dependency array means this effect runs after the initial mount.",
        },
      ],
    },

    {
      id: "dependencies",
      title: "Dependencies",
      body: "Values used inside the effect that come from the component scope should normally appear in the dependency array. React compares dependencies between renders and reruns the effect when they change.",

      codeExamples: [
        {
          id: "dependency-example",
          title: "Effect depending on a value",
          language: "tsx",
          code: `import { useEffect } from "react";

interface Props {
  title: string;
}

function Page({ title }: Props) {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return <h1>{title}</h1>;
}`,
        },
      ],
    },

    {
      id: "cleanup",
      title: "Cleanup",
      body: "An effect can return a cleanup function. Cleanup runs before the effect reruns and when the component unmounts.",

      codeExamples: [
        {
          id: "cleanup-example",
          title: "Event listener cleanup",
          language: "tsx",
          code: `import { useEffect } from "react";

function WindowTracker() {
  useEffect(() => {
    function handleResize() {
      console.log(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener(
        "resize",
        handleResize,
      );
    };
  }, []);

  return null;
}`,
          explanation:
            "The listener is removed during cleanup so the component does not leave stale subscriptions behind.",
        },
      ],
    },

    {
      id: "fetching",
      title: "Fetching data",
      body: "You can fetch data inside an effect, although production apps often use a server-state library such as TanStack Query for caching, retries and request lifecycle management.",

      codeExamples: [
        {
          id: "fetch-example",
          title: "Simple fetch",
          language: "tsx",
          code: `import {
  useEffect,
  useState,
} from "react";

interface User {
  id: number;
  name: string;
}

function UserProfile() {
  const [user, setUser] =
    useState<User | null>(null);

  useEffect(() => {
    async function loadUser() {
      const response = await fetch(
        "/api/users/1",
      );

      if (!response.ok) {
        throw new Error(
          "Failed to load user",
        );
      }

      const data: User =
        await response.json();

      setUser(data);
    }

    void loadUser();
  }, []);

  return (
    <p>
      {user
        ? user.name
        : "Loading..."}
    </p>
  );
}`,
        },
      ],
    },
  ],

  commonMistakes: [
    "Using useEffect for values that can be calculated during render.",
    "Forgetting dependencies used inside the effect.",
    "Creating an infinite loop by updating state that is also an unstable dependency.",
    "Forgetting cleanup for listeners, subscriptions, or timers.",
    "Using useEffect for ordinary user event logic that belongs directly in an event handler.",
  ],

  notebookNote:
    "useEffect koristimo kada React komponenta treba da sinhronizuje nešto van React renderovanja. Effect radi nakon rendera. Dependency array kontroliše kada se ponavlja, a cleanup uklanja prethodne subscription/listener/timer resurse.",

  relatedLessonIds: [
    "react-use-state",
    "react-use-ref",
    "react-use-effect-event",
  ],
};
