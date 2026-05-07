"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { categories, tierLabels } from "@/lib/i18n";
import { getProduct } from "@/lib/products";
import { tierStyles } from "@/lib/tier-style";
import { useLanguage } from "@/components/language-provider";
import { FavoriteButton } from "@/components/favorite-button";
import { ScoreMeter } from "@/components/score-meter";

export default function ProductDetailPage() {
  const params = useParams<{ id: string }>();
  const product = getProduct(params.id);
  const { language, t } = useLanguage();

  if (!product) {
    return (
      <main className="content-wrap py-16">
        <Link
          href="/ranking"
          className="inline-flex items-center gap-2 rounded-full border border-line bg-white/78 px-4 py-2 text-sm font-bold text-slate-600 shadow-sm transition hover:bg-white"
        >
          <ArrowLeft className="h-4 w-4" />
          {t.back}
        </Link>
        <div className="mt-8 rounded-[2rem] border border-line bg-white/78 p-10 text-center text-slate-500 shadow-soft">
          Product not found.
        </div>
      </main>
    );
  }

  const style = tierStyles[product.tier];
  const category = categories.find((item) => item.id === product.category);

  return (
    <main className="content-wrap py-10">
      <Link
        href="/ranking"
        className="mb-7 inline-flex items-center gap-2 rounded-full border border-line bg-white/78 px-4 py-2 text-sm font-bold text-slate-600 shadow-sm transition hover:bg-white"
      >
        <ArrowLeft className="h-4 w-4" />
        {t.back}
      </Link>

      <section className={`relative overflow-hidden rounded-[2rem] border p-6 shadow-soft sm:p-8 ${style.card}`}>
        <div className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${style.rail}`} />
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className={`rounded-full px-4 py-1.5 text-base font-black ${style.badge}`}>
                {tierLabels[product.tier][language]}
              </span>
              <span className="text-sm font-semibold text-slate-500">
                {category?.labels[language]}
              </span>
            </div>
            <p className="text-sm font-bold text-slate-500">{product.brand} / {product.model}</p>
            <h1 className="mt-2 text-4xl font-black tracking-tight text-ink sm:text-6xl">
              {product.productName[language]}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              {product.summary[language]}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {product.tags.map((tag) => (
                <span key={tag.zh} className="rounded-full border border-white bg-white/66 px-3 py-1 text-sm font-bold text-slate-600">
                  {tag[language]}
                </span>
              ))}
            </div>
          </div>

          <aside className="rounded-[1.75rem] border border-white bg-white/70 p-5 shadow-sm">
            <div className="mb-5 flex items-start justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                  Consensus score
                </p>
                <p className={`mt-1 text-6xl font-black ${style.text}`}>{product.score}</p>
              </div>
              <FavoriteButton productId={product.id} />
            </div>
            <div className="space-y-4">
              <ScoreMeter label={t.value} value={product.valueScore} />
              <ScoreMeter label={t.quality} value={product.qualityScore} />
            </div>
          </aside>
        </div>
      </section>

      <section className="grid gap-4 py-8 lg:grid-cols-3">
        <InfoPanel title={t.productInfo}>
          <dl className="space-y-3 text-sm">
            <div className="flex justify-between gap-4">
              <dt className="text-slate-500">Brand</dt>
              <dd className="font-bold text-ink">{product.brand}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-slate-500">Model</dt>
              <dd className="font-bold text-ink">{product.model}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-slate-500">Category</dt>
              <dd className="font-bold text-ink">{category?.labels[language]}</dd>
            </div>
          </dl>
        </InfoPanel>
        <InfoPanel title={t.whyTier}>
          <p>{product.why[language]}</p>
        </InfoPanel>
        <InfoPanel title={t.bestFor}>
          <p>{product.audience[language]}</p>
        </InfoPanel>
      </section>

      <section className="grid gap-4 lg:grid-cols-3">
        <InfoPanel title={t.pros}>
          <ul className="space-y-2">
            {product.pros.map((item) => (
              <li key={item.zh}>{item[language]}</li>
            ))}
          </ul>
        </InfoPanel>
        <InfoPanel title={t.cons}>
          <ul className="space-y-2">
            {product.cons.map((item) => (
              <li key={item.zh}>{item[language]}</li>
            ))}
          </ul>
        </InfoPanel>
        <InfoPanel title={t.verdict}>
          <p className="text-lg font-black text-ink">{product.quickVerdict[language]}</p>
        </InfoPanel>
      </section>
    </main>
  );
}

function InfoPanel({
  title,
  children
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <article className="rounded-[1.5rem] border border-line bg-white/78 p-5 text-sm leading-6 text-slate-600 shadow-sm">
      <h2 className="mb-3 text-lg font-black tracking-tight text-ink">{title}</h2>
      {children}
    </article>
  );
}
