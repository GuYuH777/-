import type { CategoryId, Language, Tier } from "@/types/product";

export const languages: { id: Language; label: string }[] = [
  { id: "zh", label: "中文" },
  { id: "en", label: "English" },
  { id: "ja", label: "日本語" }
];

export const copy = {
  zh: {
    searchPlaceholder: "搜索品类或产品，比如：降噪耳机、防晒、猫砂",
    heroTitle: "把全网推荐压成一张干净榜单",
    heroSubtitle: "从大品类一路下钻到具体榜单，少刷十个视频，少看二十篇种草。",
    hotCategories: "热门品类",
    ranking: "榜单",
    favorites: "收藏",
    directory: "目录",
    all: "全部",
    value: "性价比",
    quality: "质量",
    audience: "适合",
    detail: "详情",
    empty: "没有找到结果，换个关键词试试。",
    favoriteEmpty: "还没有收藏。看到顺眼的榜单卡片，点一下心形就行。",
    whyTier: "为什么在这一档",
    pros: "优点",
    cons: "缺点",
    bestFor: "适合谁",
    verdict: "一句话结论",
    productInfo: "产品信息",
    back: "返回榜单"
  },
  en: {
    searchPlaceholder: "Search category or product, e.g. ANC headphones, sunscreen",
    heroTitle: "Turn messy internet advice into one clean ranking",
    heroSubtitle: "Drill from a major category to a specific ranking, without chasing endless recommendation posts.",
    hotCategories: "Hot Categories",
    ranking: "Ranking",
    favorites: "Favorites",
    directory: "Directory",
    all: "All",
    value: "Value",
    quality: "Quality",
    audience: "Best for",
    detail: "Details",
    empty: "No results. Try another keyword.",
    favoriteEmpty: "No favorites yet. Tap the heart on a ranking card.",
    whyTier: "Why this tier",
    pros: "Pros",
    cons: "Cons",
    bestFor: "Best for",
    verdict: "Quick verdict",
    productInfo: "Product info",
    back: "Back to ranking"
  },
  ja: {
    searchPlaceholder: "カテゴリや商品を検索。例：ANCヘッドホン、日焼け止め",
    heroTitle: "散らかった口コミを、きれいなランキングへ",
    heroSubtitle: "大カテゴリから具体的なランキングまで、迷わず段階的に探せます。",
    hotCategories: "人気カテゴリ",
    ranking: "ランキング",
    favorites: "お気に入り",
    directory: "目录",
    all: "すべて",
    value: "コスパ",
    quality: "品質",
    audience: "向いている人",
    detail: "詳細",
    empty: "結果がありません。別のキーワードを試してください。",
    favoriteEmpty: "お気に入りはまだありません。カードのハートを押してください。",
    whyTier: "このランクの理由",
    pros: "良い点",
    cons: "注意点",
    bestFor: "おすすめの人",
    verdict: "ひとこと結論",
    productInfo: "商品情報",
    back: "ランキングへ戻る"
  }
} satisfies Record<Language, Record<string, string>>;

export const categories: { id: CategoryId; labels: Record<Language, string>; query: string }[] = [
  {
    id: "digital",
    labels: { zh: "数码电子", en: "Digital & Electronics", ja: "デジタル家電" },
    query: "digital"
  },
  {
    id: "beauty",
    labels: { zh: "美妆护肤", en: "Beauty & Skincare", ja: "美容・スキンケア" },
    query: "beauty"
  },
  {
    id: "food",
    labels: { zh: "食品饮料 / 零食", en: "Food, Drinks & Snacks", ja: "食品・飲料・お菓子" },
    query: "food"
  },
  {
    id: "pet",
    labels: { zh: "宠物用品", en: "Pet Products", ja: "ペット用品" },
    query: "pet"
  },
  {
    id: "sports",
    labels: { zh: "运动户外装备", en: "Sports & Outdoor Gear", ja: "スポーツ・アウトドア" },
    query: "sports"
  },
  {
    id: "baby",
    labels: { zh: "母婴用品", en: "Baby & Maternity", ja: "ベビー・マタニティ" },
    query: "baby"
  },
  {
    id: "home-appliance",
    labels: { zh: "家用电器", en: "Home Appliances", ja: "生活家電" },
    query: "home-appliance"
  },
  {
    id: "home",
    labels: { zh: "家居家装", en: "Home & Interior", ja: "家具・インテリア" },
    query: "home"
  }
];

export const tierLabels: Record<Tier, Record<Language, string>> = {
  hang: { zh: "夯", en: "Hang", ja: "最強" },
  top: { zh: "顶级", en: "Top", ja: "トップ" },
  elite: { zh: "人上人", en: "Elite", ja: "上位勢" },
  npc: { zh: "npc", en: "NPC", ja: "NPC" },
  trash: { zh: "拉完了", en: "Cooked", ja: "厳しい" }
};

export const tierOrder: Tier[] = ["hang", "top", "elite", "npc", "trash"];
