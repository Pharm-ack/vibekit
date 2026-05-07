"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

type CopyBlockProps = {
  label?: string;
  language?: string;
  code: string;
  className?: string;
  filename?: string;
};

export function CopyBlock({ label, language = "", code, className, filename }: CopyBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // ignore clipboard errors silently
    }
  };

  return (
    <div className={cn("relative overflow-hidden rounded-md border border-[color:var(--border)] bg-[color:var(--bg-elevated)]", className)}>
      <div className="flex items-center justify-between gap-3 border-b border-[color:var(--border)] bg-[color:var(--bg-subtle)] px-4 py-2.5">
        <div className="flex items-center gap-2 min-w-0">
          {filename ? (
            <code className="font-mono text-[11px] uppercase tracking-wider text-[color:var(--text-tertiary)] truncate">
              {filename}
            </code>
          ) : null}
          {label ? (
            <span className="font-mono text-[11px] uppercase tracking-wider text-[color:var(--text-tertiary)]">
              {label}
            </span>
          ) : null}
          {language ? (
            <span className="font-mono text-[10px] uppercase tracking-wider text-[color:var(--text-tertiary)]/70">
              {language}
            </span>
          ) : null}
        </div>
        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex items-center gap-1.5 rounded border border-[color:var(--border)] bg-[color:var(--bg-elevated)] px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-[color:var(--text-secondary)] transition-colors hover:border-[color:var(--border-strong)] hover:text-[color:var(--text-primary)]"
          aria-label={copied ? "Copied" : "Copy to clipboard"}
        >
          {copied ? (
            <>
              <Check className="h-3 w-3 text-[color:var(--accent)]" />
              Copied
            </>
          ) : (
            <>
              <Copy className="h-3 w-3" />
              Copy
            </>
          )}
        </button>
      </div>
      <pre className="overflow-x-auto p-4 sm:p-5 font-mono text-[12.5px] leading-relaxed text-[color:var(--text-primary)] max-h-[460px]">
        <code>{code}</code>
      </pre>
    </div>
  );
}
