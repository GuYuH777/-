"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { tierLabels } from "@/lib/i18n";
import { tierStyles } from "@/lib/tier-style";
import type { Product } from "@/types/product";
import { useLanguage } from "@/components/language-provider";
import { FavoriteButton } from "@/components/favorite-button";
import { ScoreMeter } from "@/components/score-meter";

export function ProductCard({ product }: { product: Product }) {
  const { language, t } = useLanguage();
  const style = tierStyles[product.tier];

  return (
    <Link
      href={`/product/${product.id}`}
      className={`group relative overflow-hidden rounded-[1.75rem] border p-5 shadow-soft transition duration-300 hover:-translate-y-1 ${style.card}`}
    >
      <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${style.rail}`} />
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <span className={`inline-flex rounded-full px-3 py-1 text-sm font-black ${style.badge}`}>
            {tierLabels[product.tier][language]}
          </span>
          <div className="mt-4">
            <p className="text-sm font-semibold text-slate-500">{product.brand} / {product.model}</p>
            <h3 className="mt-1 text-xl font-black tracking-tight text-ink">
              {product.productName[language]}
            </h3>
          </div>
        </div>
        <FavoriteButton productId={product.id} />
      </div>

      <p className="min-h-12 text-sm leading-6 text-slate-600">{product.summary[language]}</p>

      <div className="my-5 grid grid-cols-[86px_1fr] items-center gap-4">
        <div className="grid h-20 w-20 place-items-center rounded-3xl bg-white/72 shadow-sm">
          <span className={`text-3xl font-black ${style.text}`}>{product.score}</span>
        </div>
        <div className="space-y-3">
          <ScoreMeter label={t.value} value={product.valueScore} />
          <ScoreMeter label={t.quality} value={product.qualityScore} />
        </div>
      </div>

      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
        {t.audience}
      </p>
      <p className="mt-1 text-sm font-medium text-slate-700">{product.audience[language]}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {product.tags.slice(0, 3).map((tag) => (
          <span key={tag.zh} className="rounded-full border border-white bg-white/66 px-3 py-1 text-xs font-semibold text-slate-600">
            {tag[language]}
          </span>
        ))}
      </div>

      <div className="mt-5 flex items-center justify-between text-sm font-bold text-ink">
        <span>{t.detail}</span>
        <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
    </Link>
  );
}
