"use client";

import { categories } from "@/lib/i18n";
import type { CategoryId } from "@/types/product";
import { useLanguage } from "@/components/language-provider";

export function CategoryPills({
  activeCategory,
  onChange
}: {
  activeCategory: CategoryId | "all";
  onChange: (category: CategoryId | "all") => void;
}) {
  const { language, t } = useLanguage();

  return (
    <div className="flex gap-2 overflow-x-auto pb-2">
      <button
        type="button"
        onClick={() => onChange("all")}
        className={`shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition ${
          activeCategory === "all"
            ? "border-ink bg-ink text-white"
            : "border-line bg-white/78 text-slate-600 hover:bg-white"
        }`}
      >
        {t.all}
      </button>
      {categories.map((category) => (
        <button
          key={category.id}
          type="button"
          onClick={() => onChange(category.id)}
          className={`shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition ${
            activeCategory === category.id
              ? "border-ink bg-ink text-white"
              : "border-line bg-white/78 text-slate-600 hover:bg-white"
          }`}
        >
          {category.labels[language]}
        </button>
      ))}
    </div>
  );
}
