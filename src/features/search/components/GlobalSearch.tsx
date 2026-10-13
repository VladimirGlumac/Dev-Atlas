import { Search } from "lucide-react";

import { useEffect, useMemo, useRef, useState } from "react";

import { useNavigate } from "react-router";

import { searchLearningContent } from "../services/searchService";
import SearchResultItem from "./SearchResultItem";

export default function GlobalSearch() {
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const results = useMemo(() => searchLearningContent(query), [query]);

  const isOpen = query.trim().length > 0;

  function handleNavigate(route: string): void {
    navigate(route);

    setQuery("");
  }

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent): void {
      if (event.key === "Escape") {
        setQuery("");
        setActiveIndex(-1);

        inputRef.current?.blur();

        return;
      }

      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();

        inputRef.current?.focus();

        return;
      }

      if (document.activeElement !== inputRef.current) {
        return;
      }

      if (event.key === "ArrowDown") {
        event.preventDefault();

        setActiveIndex((currentIndex) =>
          Math.min(currentIndex + 1, results.length - 1),
        );

        return;
      }

      if (event.key === "ArrowUp") {
        event.preventDefault();

        setActiveIndex((currentIndex) => Math.max(currentIndex - 1, 0));

        return;
      }

      if (event.key === "Enter" && activeIndex >= 0) {
        const result = results[activeIndex];

        if (!result) {
          return;
        }

        event.preventDefault();

        handleNavigate(result.route);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex, results]);

  function handleQueryChange(value: string): void {
    setQuery(value);
    setActiveIndex(-1);
  }

  return (
    <div className="relative w-full max-w-2xl">
      <label
        className="
          flex items-center gap-3
          rounded-xl
          border border-slate-200
          bg-slate-50/90
          px-4 py-2.5
          text-slate-500
          shadow-sm
          transition
          focus-within:border-cyan-500
          focus-within:ring-2
          focus-within:ring-cyan-500/15
          dark:border-slate-800
          dark:bg-slate-900/80
          dark:text-slate-400
        "
      >
        <Search size={18} aria-hidden="true" />

        <input
          type="search"
          value={query}
          onChange={(event) => handleQueryChange(event.target.value)}
          ref={inputRef}
          placeholder="Search topics, lessons, technologies..."
          className="
            min-w-0 flex-1
            bg-transparent
            text-sm
            text-slate-900
            outline-none
            placeholder:text-slate-400
            dark:text-slate-100
            dark:placeholder:text-slate-500
          "
        />

        <kbd
          className="
            hidden rounded-md
            border border-slate-200
            bg-white
            px-2 py-1
            text-[11px]
            font-medium
            text-slate-500
            dark:border-slate-700
            dark:bg-slate-800
            dark:text-slate-400
            lg:inline
          "
        >
          Ctrl K
        </kbd>
      </label>

      {isOpen && (
        <div
          className="
            absolute left-0 right-0
            top-[calc(100%+0.5rem)]
            z-50
            overflow-hidden
            rounded-2xl
            border border-slate-200
            bg-white
            shadow-2xl
            dark:border-slate-800
            dark:bg-slate-900
          "
        >
          {results.length === 0 ? (
            <div className="p-5 text-sm text-slate-500">No results found.</div>
          ) : (
            <ul className="p-2">
              {results.map((result, index) => (
                <li key={result.id}>
                  <SearchResultItem
                    result={result}
                    isActive={index === activeIndex}
                    onSelect={() => handleNavigate(result.route)}
                  />
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
