"use client";

import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import type { CategoryId } from "@/types/product";
import { categories } from "@/lib/i18n";
import { RankingBoard } from "@/components/ranking-board";
import { useLanguage } from "@/components/language-provider";

export function RankingExperience() {
  const params = useSearchParams();
  const { t } = useLanguage();

  const initialQuery = useMemo(() => {
    const query = params.get("q") ?? "";
    const category = params.get("category") as CategoryId | null;
    const categoryLabel = categories.find((item) => item.id === category)?.labels.zh ?? "";
    return query || categoryLabel;
  }, [params]);

  return (
    <main className="pt-10">
      <section className="content-wrap pb-8">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-500">
          HangRank
        </p>
        <h1 className="mt-2 text-4xl font-black tracking-tight text-ink sm:text-5xl">
          {t.ranking}
        </h1>
      </section>
      <RankingBoard key={initialQuery} initialQuery={initialQuery} />
    </main>
  );
}
