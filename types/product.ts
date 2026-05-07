export type Language = "zh" | "en" | "ja";

export type Tier = "hang" | "top" | "elite" | "npc" | "trash";

export type CategoryId =
  | "digital"
  | "beauty"
  | "food"
  | "pet"
  | "sports"
  | "baby"
  | "appliances"
  | "home-appliance"
  | "home";

export type LocalizedText = Record<Language, string>;

export type Product = {
  id: string;
  category: CategoryId;
  subcategory?: string;
  leafCategory?: string;
  brand: string;
  model: string;
  productName: LocalizedText;
  tier: Tier;
  score: number;
  valueScore: number;
  qualityScore: number;
  audience: LocalizedText;
  summary: LocalizedText;
  why: LocalizedText;
  quickVerdict: LocalizedText;
  pros: LocalizedText[];
  cons: LocalizedText[];
  tags: LocalizedText[];
};

export type RankingSentiment = "positive" | "neutral" | "mixed" | "negative";

export type RecommendationLevel = "recommend" | "consider" | "avoid";

export type RankingMockItem = {
  id: string;
  brand: string;
  model: string;
  productName: string;
  tier: "夯" | "顶级" | "人上人" | "npc" | "拉完了";
  rank: number;
  summary: string;
  pros: string[];
  cons: string[];
  tags: string[];
  score: number;
  valueScore: number;
  qualityScore: number;
  sentiment: RankingSentiment;
  recommendationLevel: RecommendationLevel;
};
