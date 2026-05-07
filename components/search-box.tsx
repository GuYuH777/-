"use client";

import { Search, X } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

export function SearchBox({
  value,
  onChange,
  autoFocus = false
}: {
  value: string;
  onChange: (value: string) => void;
  autoFocus?: boolean;
}) {
  const { t } = useLanguage();

  return (
    <label className="group relative block">
      <Search className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
      <input
        autoFocus={autoFocus}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={t.searchPlaceholder}
        className="h-16 w-full rounded-[2rem] border border-white bg-white/86 pl-14 pr-14 text-base font-medium text-ink shadow-soft outline-none transition placeholder:text-slate-400 focus:border-orange-200 focus:ring-4 focus:ring-orange-100"
      />
      {value ? (
        <button
          type="button"
          onClick={() => onChange("")}
          className="absolute right-4 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full text-slate-400 transition hover:bg-slate-100 hover:text-ink"
          aria-label="Clear search"
        >
          <X className="h-4 w-4" />
        </button>
      ) : null}
    </label>
  );
}
