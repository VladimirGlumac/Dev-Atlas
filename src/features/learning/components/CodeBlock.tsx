import { Check, Copy } from "lucide-react";
import { useState } from "react";

interface CodeBlockProps {
  title?: string;
  language: string;
  code: string;
}

export default function CodeBlock({ title, language, code }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy(): Promise<void> {
    await navigator.clipboard.writeText(code);

    setCopied(true);

    window.setTimeout(() => {
      setCopied(false);
    }, 1500);
  }

  return (
    <div
      className="
        overflow-hidden rounded-2xl
        border border-slate-800
        bg-slate-950
        shadow-lg
      "
    >
      <div
        className="
          flex items-center
          justify-between
          border-b border-slate-800
          px-4 py-3
        "
      >
        <div>
          {title && (
            <p className="text-sm font-medium text-slate-200">{title}</p>
          )}

          <p className="text-xs uppercase tracking-wide text-slate-500">
            {language}
          </p>
        </div>

        <button
          type="button"
          onClick={handleCopy}
          className="
            inline-flex items-center
            gap-2 rounded-lg
            px-3 py-2
            text-xs font-medium
            text-slate-400
            transition
            hover:bg-slate-900
            hover:text-white
          "
        >
          {copied ? (
            <>
              <Check size={14} />
              Copied
            </>
          ) : (
            <>
              <Copy size={14} />
              Copy
            </>
          )}
        </button>
      </div>

      <pre
        className="
          overflow-x-auto
          p-5
          text-sm leading-7
          text-slate-200
        "
      >
        <code>{code}</code>
      </pre>
    </div>
  );
}
