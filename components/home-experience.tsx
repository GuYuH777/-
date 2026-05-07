"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight, Flame, Sparkles } from "lucide-react";
import { categories } from "@/lib/i18n";
import { products } from "@/lib/products";
import { useLanguage } from "@/components/language-provider";
import { SearchBox } from "@/components/search-box";
import { ProductCard } from "@/components/product-card";

export function HomeExperience() {
  const { language, t } = useLanguage();
  const [query, setQuery] = useState("");

  const filteredProducts = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) {
      return products.filter((product) => product.tier === "hang" || product.tier === "top").slice(0, 6);
    }

    return products
      .filter((product) => {
        const category = categories.find((item) => item.id === product.category);
        return [
          product.brand,
          product.model,
          product.productName.zh,
          product.productName.en,
          product.productName.ja,
          category?.labels.zh,
          category?.labels.en,
          category?.labels.ja
        ]
          .filter(Boolean)
          .join(" ")
          .toLowerCase()
          .includes(normalized);
      })
      .slice(0, 6);
  }, [query]);

  return (
    <main>
      <section className="content-wrap flex min-h-[calc(100vh-5rem)] flex-col justify-center py-14">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white bg-white/72 px-4 py-2 text-sm font-bold text-slate-600 shadow-sm">
            <Sparkles className="h-4 w-4 text-orange-500" />
            Internet consensus ranking
          </div>
          <h1 className="text-balance text-5xl font-black tracking-tight text-ink sm:text-7xl">
            {t.heroTitle}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-balance text-lg leading-8 text-slate-600">
            {t.heroSubtitle}
          </p>
          <div className="mx-auto mt-10 max-w-2xl">
            <SearchBox value={query} onChange={setQuery} />
          </div>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/ranking?category=${category.id}`}
              className="group rounded-[1.5rem] border border-white bg-white/72 p-4 text-left shadow-sm transition hover:-translate-y-1 hover:bg-white hover:shadow-soft"
            >
              <div className="mb-4 grid h-11 w-11 place-items-center rounded-2xl bg-ink text-white">
                <Flame className="h-5 w-5" />
              </div>
              <h2 className="text-sm font-black text-ink">{category.labels[language]}</h2>
              <p className="mt-1 text-xs font-medium text-slate-500">Consensus sorted</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="content-wrap pb-20">
        <div className="mb-5 flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-500">
              {t.hotCategories}
            </p>
            <h2 className="mt-1 text-3xl font-black tracking-tight text-ink">Hot right now</h2>
          </div>
          <Link
            href={`/ranking${query ? `?q=${encodeURIComponent(query)}` : ""}`}
            className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-sm font-bold text-white transition hover:-translate-y-0.5"
          >
            {t.ranking}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
