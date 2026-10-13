import { ArrowLeft, Search } from "lucide-react";

import { useEffect, useMemo, useRef, useState } from "react";

import { useNavigate } from "react-router";

import { searchLearningContent } from "../services/searchService";

import SearchResultItem from "./SearchResultItem";

interface MobileSearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileSearchOverlay({
  isOpen,
  onClose,
}: MobileSearchOverlayProps) {
  const [query, setQuery] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  const results = useMemo(() => searchLearningContent(query), [query]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    inputRef.current?.focus();

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent): void {
      if (event.key === "Escape") {
        onClose();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;

      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  function handleNavigate(route: string): void {
    navigate(route);

    setQuery("");
  }

  function handleClose(): void {
    setQuery("");
    onClose();
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Global search"
      className="
    fixed inset-0 z-110
    bg-white
    dark:bg-slate-950
    md:hidden
  "
    >
      <div
        className="
          flex h-16 items-center
          gap-3
          border-b border-slate-200
          px-4
          dark:border-slate-800
        "
      >
        <button
          type="button"
          onClick={handleClose}
          aria-label="Close search"
          className="
            rounded-xl
            p-2
            text-slate-600
            dark:text-slate-300
          "
        >
          <ArrowLeft size={20} />
        </button>

        <div
          className="
            flex flex-1
            items-center gap-3
            rounded-xl
            border border-slate-200
            bg-slate-50
            px-3 py-2.5
            dark:border-slate-800
            dark:bg-slate-900
          "
        >
          <Search size={18} className="text-slate-400" />

          <input
            ref={inputRef}
            type="search"
            value={query}
            aria-label="Search DevAtlas"
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search DevAtlas..."
            className="
              min-w-0 flex-1
              bg-transparent
              text-sm
              outline-none
            "
          />
        </div>
      </div>

      <div className="h-[calc(100dvh-4rem)] overflow-y-auto p-4">
        {!query.trim() ? (
          <div className="py-12 text-center text-sm text-slate-500">
            Search technologies, sections and lessons.
          </div>
        ) : results.length === 0 ? (
          <div className="py-12 text-center text-sm text-slate-500">
            No results found.
          </div>
        ) : (
          <ul className="space-y-1">
            {results.map((result) => (
              <li key={result.id}>
                <SearchResultItem
                  result={result}
                  onSelect={() => handleNavigate(result.route)}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
