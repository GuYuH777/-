"use client";

import { useMemo } from "react";
import { products } from "@/lib/products";
import { RankingBoard } from "@/components/ranking-board";
import { useFavorites } from "@/components/favorites-provider";
import { useLanguage } from "@/components/language-provider";

export default function FavoritesPage() {
  const { favoriteIds } = useFavorites();
  const { t } = useLanguage();

  const favoriteProducts = useMemo(
    () => products.filter((product) => favoriteIds.includes(product.id)),
    [favoriteIds]
  );

  return (
    <main className="pt-10">
      <section className="content-wrap pb-8">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-rose-500">
          Local only
        </p>
        <h1 className="mt-2 text-4xl font-black tracking-tight text-ink sm:text-5xl">
          {t.favorites}
        </h1>
      </section>
      <RankingBoard favoriteProducts={favoriteProducts} />
    </main>
  );
}
