"use client";

import { Heart } from "lucide-react";
import { useFavorites } from "@/components/favorites-provider";

export function FavoriteButton({ productId }: { productId: string }) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const active = isFavorite(productId);

  return (
    <button
      type="button"
      onClick={(event) => {
        event.preventDefault();
        toggleFavorite(productId);
      }}
      className={`grid h-10 w-10 place-items-center rounded-full border transition ${
        active
          ? "border-rose-200 bg-rose-50 text-rose-500"
          : "border-line bg-white/80 text-slate-400 hover:text-rose-500"
      }`}
      aria-label={active ? "Remove favorite" : "Add favorite"}
    >
      <Heart className={`h-4 w-4 ${active ? "fill-current" : ""}`} />
    </button>
  );
}
