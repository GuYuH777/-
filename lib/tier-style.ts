import type { Tier } from "@/types/product";

export const tierStyles: Record<
  Tier,
  {
    card: string;
    badge: string;
    rail: string;
    text: string;
    intensity: string;
  }
> = {
  hang: {
    card: "border-orange-200/80 bg-gradient-to-br from-white via-orange-50/70 to-rose-50/60 shadow-glow",
    badge: "bg-gradient-to-r from-orange-500 to-rose-500 text-white",
    rail: "from-orange-500 to-rose-500",
    text: "text-orange-700",
    intensity: "Premium consensus"
  },
  top: {
    card: "border-blue-200/80 bg-gradient-to-br from-white to-blue-50/70",
    badge: "bg-blue-600 text-white",
    rail: "from-blue-500 to-cyan-500",
    text: "text-blue-700",
    intensity: "Top tier"
  },
  elite: {
    card: "border-emerald-200/80 bg-gradient-to-br from-white to-emerald-50/70",
    badge: "bg-emerald-600 text-white",
    rail: "from-emerald-500 to-teal-500",
    text: "text-emerald-700",
    intensity: "Strong pick"
  },
  npc: {
    card: "border-slate-200 bg-white/82",
    badge: "bg-slate-700 text-white",
    rail: "from-slate-400 to-slate-500",
    text: "text-slate-600",
    intensity: "Ordinary"
  },
  trash: {
    card: "border-zinc-200 bg-zinc-50/80 opacity-90",
    badge: "bg-zinc-900 text-zinc-100",
    rail: "from-zinc-500 to-zinc-700",
    text: "text-zinc-600",
    intensity: "Low value"
  }
};
