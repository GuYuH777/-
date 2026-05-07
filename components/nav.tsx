"use client";

import Link from "next/link";
import { Heart, Search } from "lucide-react";
import { languages } from "@/lib/i18n";
import { useLanguage } from "@/components/language-provider";

export function Nav() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 border-b border-white/70 bg-white/72 backdrop-blur-2xl">
      <nav className="content-wrap flex min-h-16 items-center justify-between gap-4 py-3">
        <Link href="/" className="flex items-center gap-3" aria-label="夯榜 HangRank">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-ink text-lg font-black text-white shadow-soft">
            夯
          </span>
          <span className="leading-tight">
            <span className="block text-base font-black tracking-tight">夯榜</span>
            <span className="block text-xs text-slate-500">HangRank</span>
          </span>
        </Link>

        <div className="flex items-center gap-2">
          <Link
            href="/ranking"
            className="hidden items-center gap-2 rounded-full border border-line bg-white/75 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:bg-white sm:flex"
          >
            <Search className="h-4 w-4" />
            {t.ranking}
          </Link>
          <Link
            href="/favorites"
            className="grid h-10 w-10 place-items-center rounded-full border border-line bg-white/75 text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:bg-white"
            aria-label={t.favorites}
          >
            <Heart className="h-4 w-4" />
          </Link>
          <div className="flex rounded-full border border-line bg-white/75 p-1 shadow-sm">
            {languages.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setLanguage(item.id)}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
                  language === item.id
                    ? "bg-ink text-white"
                    : "text-slate-500 hover:text-ink"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
