"use client";

import { useMemo, useState } from "react";
import { categories, tierLabels, tierOrder } from "@/lib/i18n";
import { products } from "@/lib/products";
import type { CategoryId, Product } from "@/types/product";
import { useLanguage } from "@/components/language-provider";
import { SearchBox } from "@/components/search-box";
import { CategoryPills } from "@/components/category-pills";
import { ProductCard } from "@/components/product-card";

export function RankingBoard({
  initialQuery = "",
  favoriteProducts
}: {
  initialQuery?: string;
  favoriteProducts?: Product[];
}) {
  const { language, t } = useLanguage();
  const [query, setQuery] = useState(initialQuery);
  const [activeCategory, setActiveCategory] = useState<CategoryId | "all">("all");
  const source = favoriteProducts ?? products;

  const filteredProducts = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return source.filter((product) => {
      const category = categories.find((item) => item.id === product.category);
      const haystack = [
        product.brand,
        product.model,
        product.productName.zh,
        product.productName.en,
        product.productName.ja,
        product.summary.zh,
        product.summary.en,
        product.summary.ja,
        category?.labels.zh,
        category?.labels.en,
        category?.labels.ja
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      const matchesQuery = !normalized || haystack.includes(normalized);
      const matchesCategory = activeCategory === "all" || product.category === activeCategory;
      return matchesQuery && matchesCategory;
    });
  }, [activeCategory, query, source]);

  return (
    <section className="content-wrap pb-20">
      <div className="mb-6 grid gap-4">
        <SearchBox value={query} onChange={setQuery} autoFocus />
        <CategoryPills activeCategory={activeCategory} onChange={setActiveCategory} />
      </div>

      <div className="space-y-8">
        {tierOrder.map((tier) => {
          const tierProducts = filteredProducts.filter((product) => product.tier === tier);
          if (!tierProducts.length) {
            return null;
          }

          return (
            <section key={tier}>
              <div className="mb-3 flex items-end justify-between">
                <div>
                  <h2 className="text-2xl font-black tracking-tight text-ink">
                    {tierLabels[tier][language]}
                  </h2>
                  <p className="text-sm text-slate-500">{tierProducts.length} items</p>
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {tierProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </section>
          );
        })}
        {!filteredProducts.length ? (
          <div className="rounded-[2rem] border border-line bg-white/78 p-10 text-center text-slate-500 shadow-soft">
            {favoriteProducts ? t.favoriteEmpty : t.empty}
          </div>
        ) : null}
      </div>
    </section>
  );
}
