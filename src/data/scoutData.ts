export type BrandKey = "man-matters" | "bebodywise" | "little-joys";
export type RecencyKey = "this-week" | "last-30" | "last-60";

export const brands: { key: BrandKey; label: string }[] = [
  { key: "man-matters", label: "Man Matters" },
  { key: "bebodywise", label: "Bebodywise" },
  { key: "little-joys", label: "Little Joys" },
];

export const emotionalAnglesPerBrand: Record<BrandKey, string[]> = {
  "man-matters": ["Doctor Authority", "Proof Over Promise", "Taboo Breaking", "Aspiration", "Transformation"],
  bebodywise: ["Ingredient Anxiety", "Indian Skin", "Clean Beauty", "Clinical Without Cost", "Pollution Damage"],
  "little-joys": ["Natural Ingredient Trust", "Child Acceptance", "Expert Validation", "Parental Guilt", "Academic Performance"],
};

// Keep legacy export for backwards compat if needed
export const emotionalAngles = ["Doctor Authority", "Proof Over Promise", "Taboo Breaking", "Aspiration", "Transformation"] as const;

type WeekData = Record<string, string | number>;

export const emotionalShiftData: Record<BrandKey, Record<RecencyKey, WeekData[]>> = {
  "man-matters": {
    "this-week": [
      { week: "Week 3", "Doctor Authority": 35, "Proof Over Promise": 40, "Taboo Breaking": 38, Aspiration: 22, Transformation: 0 },
      { week: "Week 4", "Doctor Authority": 25, "Proof Over Promise": 42, "Taboo Breaking": 45, Aspiration: 25, Transformation: 0 },
    ],
    "last-30": [
      { week: "Week 1", "Doctor Authority": 50, "Proof Over Promise": 30, "Taboo Breaking": 20, Aspiration: 15, Transformation: 0 },
      { week: "Week 2", "Doctor Authority": 45, "Proof Over Promise": 35, "Taboo Breaking": 30, Aspiration: 20, Transformation: 0 },
      { week: "Week 3", "Doctor Authority": 35, "Proof Over Promise": 40, "Taboo Breaking": 38, Aspiration: 22, Transformation: 0 },
      { week: "Week 4", "Doctor Authority": 25, "Proof Over Promise": 42, "Taboo Breaking": 45, Aspiration: 25, Transformation: 0 },
    ],
    "last-60": [
      { week: "Week 1", "Doctor Authority": 60, "Proof Over Promise": 22, "Taboo Breaking": 12, Aspiration: 10, Transformation: 0 },
      { week: "Week 2", "Doctor Authority": 58, "Proof Over Promise": 25, "Taboo Breaking": 15, Aspiration: 12, Transformation: 0 },
      { week: "Week 3", "Doctor Authority": 55, "Proof Over Promise": 28, "Taboo Breaking": 18, Aspiration: 13, Transformation: 0 },
      { week: "Week 4", "Doctor Authority": 50, "Proof Over Promise": 30, "Taboo Breaking": 20, Aspiration: 15, Transformation: 0 },
      { week: "Week 5", "Doctor Authority": 45, "Proof Over Promise": 35, "Taboo Breaking": 30, Aspiration: 20, Transformation: 0 },
      { week: "Week 6", "Doctor Authority": 25, "Proof Over Promise": 42, "Taboo Breaking": 45, Aspiration: 25, Transformation: 0 },
    ],
  },
  bebodywise: {
    "this-week": [
      { week: "Week 3", "Ingredient Anxiety": 52, "Indian Skin": 28, "Clean Beauty": 22, "Clinical Without Cost": 20, "Pollution Damage": 0 },
      { week: "Week 4", "Ingredient Anxiety": 55, "Indian Skin": 35, "Clean Beauty": 20, "Clinical Without Cost": 18, "Pollution Damage": 0 },
    ],
    "last-30": [
      { week: "Week 1", "Ingredient Anxiety": 40, "Indian Skin": 15, "Clean Beauty": 25, "Clinical Without Cost": 20, "Pollution Damage": 0 },
      { week: "Week 2", "Ingredient Anxiety": 48, "Indian Skin": 20, "Clean Beauty": 25, "Clinical Without Cost": 22, "Pollution Damage": 0 },
      { week: "Week 3", "Ingredient Anxiety": 52, "Indian Skin": 28, "Clean Beauty": 22, "Clinical Without Cost": 20, "Pollution Damage": 0 },
      { week: "Week 4", "Ingredient Anxiety": 55, "Indian Skin": 35, "Clean Beauty": 20, "Clinical Without Cost": 18, "Pollution Damage": 0 },
    ],
    "last-60": [
      { week: "Week 1", "Ingredient Anxiety": 30, "Indian Skin": 8, "Clean Beauty": 30, "Clinical Without Cost": 25, "Pollution Damage": 0 },
      { week: "Week 2", "Ingredient Anxiety": 33, "Indian Skin": 10, "Clean Beauty": 28, "Clinical Without Cost": 24, "Pollution Damage": 0 },
      { week: "Week 3", "Ingredient Anxiety": 36, "Indian Skin": 12, "Clean Beauty": 27, "Clinical Without Cost": 22, "Pollution Damage": 0 },
      { week: "Week 4", "Ingredient Anxiety": 40, "Indian Skin": 15, "Clean Beauty": 25, "Clinical Without Cost": 20, "Pollution Damage": 0 },
      { week: "Week 5", "Ingredient Anxiety": 48, "Indian Skin": 20, "Clean Beauty": 25, "Clinical Without Cost": 22, "Pollution Damage": 0 },
      { week: "Week 6", "Ingredient Anxiety": 55, "Indian Skin": 35, "Clean Beauty": 20, "Clinical Without Cost": 18, "Pollution Damage": 0 },
    ],
  },
  "little-joys": {
    "this-week": [
      { week: "Week 3", "Natural Ingredient Trust": 43, "Child Acceptance": 38, "Expert Validation": 18, "Parental Guilt": 15, "Academic Performance": 0 },
      { week: "Week 4", "Natural Ingredient Trust": 42, "Child Acceptance": 40, "Expert Validation": 17, "Parental Guilt": 18, "Academic Performance": 0 },
    ],
    "last-30": [
      { week: "Week 1", "Natural Ingredient Trust": 45, "Child Acceptance": 30, "Expert Validation": 20, "Parental Guilt": 10, "Academic Performance": 0 },
      { week: "Week 2", "Natural Ingredient Trust": 45, "Child Acceptance": 35, "Expert Validation": 18, "Parental Guilt": 12, "Academic Performance": 0 },
      { week: "Week 3", "Natural Ingredient Trust": 43, "Child Acceptance": 38, "Expert Validation": 18, "Parental Guilt": 15, "Academic Performance": 0 },
      { week: "Week 4", "Natural Ingredient Trust": 42, "Child Acceptance": 40, "Expert Validation": 17, "Parental Guilt": 18, "Academic Performance": 0 },
    ],
    "last-60": [
      { week: "Week 1", "Natural Ingredient Trust": 50, "Child Acceptance": 22, "Expert Validation": 25, "Parental Guilt": 5, "Academic Performance": 0 },
      { week: "Week 2", "Natural Ingredient Trust": 48, "Child Acceptance": 25, "Expert Validation": 23, "Parental Guilt": 7, "Academic Performance": 0 },
      { week: "Week 3", "Natural Ingredient Trust": 47, "Child Acceptance": 27, "Expert Validation": 22, "Parental Guilt": 8, "Academic Performance": 0 },
      { week: "Week 4", "Natural Ingredient Trust": 45, "Child Acceptance": 30, "Expert Validation": 20, "Parental Guilt": 10, "Academic Performance": 0 },
      { week: "Week 5", "Natural Ingredient Trust": 45, "Child Acceptance": 35, "Expert Validation": 18, "Parental Guilt": 12, "Academic Performance": 0 },
      { week: "Week 6", "Natural Ingredient Trust": 42, "Child Acceptance": 40, "Expert Validation": 17, "Parental Guilt": 18, "Academic Performance": 0 },
    ],
  },
};

export const statsData: Record<BrandKey, {
  dominantAngle: string;
  dominantAngleTrend: string;
  ugcFormat: number;
  avgLongevity: number;
  evergreenAds: number;
  trends: { dominantAngle: "up" | "down" | "stable"; ugcFormat: "up" | "down"; avgLongevity: "up" | "down"; evergreenAds: "up" | "down" }
}> = {
  "man-matters": {
    dominantAngle: "Taboo Breaking",
    dominantAngleTrend: "+25%",
    ugcFormat: 40,
    avgLongevity: 47,
    evergreenAds: 3,
    trends: { dominantAngle: "up", ugcFormat: "up", avgLongevity: "up", evergreenAds: "up" },
  },
  bebodywise: {
    dominantAngle: "Ingredient Anxiety",
    dominantAngleTrend: "+15%",
    ugcFormat: 50,
    avgLongevity: 43,
    evergreenAds: 2,
    trends: { dominantAngle: "up", ugcFormat: "up", avgLongevity: "up", evergreenAds: "up" },
  },
  "little-joys": {
    dominantAngle: "Natural Ingredient Trust",
    dominantAngleTrend: "stable",
    ugcFormat: 50,
    avgLongevity: 45,
    evergreenAds: 2,
    trends: { dominantAngle: "stable", ugcFormat: "up", avgLongevity: "up", evergreenAds: "up" },
  },
};

export const opportunityData: Record<BrandKey, string[]> = {
  "man-matters": [
    "Transformation and Recovery is completely unclaimed. Zero competitors are showing what life looks like after hair recovery.",
    "Every brand leads with the problem — nobody owns the solution moment.",
    "Doctor Authority messaging is collapsing. UGC is rising.",
    "Brief your creative team on \"Month 3 — what different looks like\" by Friday. Window before saturation: 2-3 weeks.",
  ],
  bebodywise: [
    "Pollution and Urban Damage is completely unclaimed. No competitor addresses PM2.5, hard water, or urban stress in their messaging.",
    "This is a uniquely Indian anxiety that Bebodywise is positioned to own.",
    "Indian Skin angle rising fast — 2 new brands entered this month.",
    "Window: 3-4 weeks.",
  ],
  "little-joys": [
    "Academic Performance and Brain Development is completely unclaimed. Zero competitors are addressing the Indian parent's most intense anxiety.",
    "Every competitor focuses on nutrition and taste. Nobody is talking about focus and learning.",
    "Little Joys gummy format is perfectly positioned.",
    "Window: 4-6 weeks.",
  ],
};

export const gapData: Record<BrandKey, { angles: string[]; formats: string[]; platforms: string[] }> = {
  "man-matters": {
    angles: ["Transformation and Recovery (0% all 4 weeks)", "Value Validation (0%)"],
    formats: ["Animation (zero competitors)", "Emotional Carousel (zero competitors)"],
    platforms: ["YouTube Pre-Roll (zero competitors)"],
  },
  bebodywise: {
    angles: ["Pollution and Urban Damage (0% all 4 weeks)", "Dermatology Democratised (1 brand only)"],
    formats: ["Animation Explainer (zero competitors)", "Dermatologist Talking Head (declining)"],
    platforms: ["YouTube long-form ingredient education (zero competitors)"],
  },
  "little-joys": {
    angles: ["Academic Performance and Brain Development (0% all 4 weeks)", "Traditional Ingredient + Modern Format (underused)"],
    formats: ["Paediatrician Talking Head (zero competitors)", "Educational Animation (zero competitors)"],
    platforms: ["YouTube Pre-Roll targeting parenting content (zero competitors)"],
  },
};

export const briefData: Record<BrandKey, { whatWeSaw: string; opportunity: string; brief: string; deadline: string }> = {
  "man-matters": {
    whatWeSaw: "Fear and taboo-based ads dominate at 60% of competitor creatives, up 18% this month. Traya celebrity video running 89 days — their longest ever. UGC testimonials rising fast — 40% of all ads, up from 20%.",
    opportunity: "Zero competitors are running Transformation and Recovery creative. Every brand leads with the problem. Nobody shows what month 3 looks like.",
    brief: "Concept — \"Month 3. This is what different looks like.\"\nFormat — UGC style. Real customer. Shot on phone. No studio, no filter.\nHook — Man touching his hairline, looking surprised, not sad.\nCTA — \"Your month 3 starts today.\"",
    deadline: "Confirm brief by Thursday. Window before competitor saturation: 2-3 weeks.",
  },
  bebodywise: {
    whatWeSaw: "Ingredient transparency dominates at 55% of competitor creatives. Minimalist evergreen ad running 78 days. Indian Skin angle rising fast — entered by 2 new brands this month.",
    opportunity: "Pollution and Urban Damage has zero competitor presence. No brand is speaking to the urban Indian woman's actual environment.",
    brief: "Concept — \"Your skin lives in Delhi. Your skincare should not pretend it lives in Paris.\"\nFormat — Talking head with dermatologist. Location — real Indian urban environment.\nHook — Show the city before showing the product.",
    deadline: "Confirm brief by Thursday. Window: 3-4 weeks.",
  },
  "little-joys": {
    whatWeSaw: "Natural Ingredient Trust dominates at 42% but declining. Child Acceptance rising fast — 40% this week, up from 30% last month. Momfluencer UGC dominant format at 50% of all ads.",
    opportunity: "Academic Performance and Brain Development has zero competitor presence. Every Indian parent worries about this. No brand in this category is speaking to it.",
    brief: "Concept — \"The only thing harder than getting them to eat healthy is helping them focus.\"\nFormat — UGC momfluencer. Real child at a desk. Real parent relief.\nHook — Show the homework struggle before showing the product.",
    deadline: "Confirm brief by Thursday. Window: 4-6 weeks.",
  },
};

export const competitorCards: Record<BrandKey, { name: string; dominantAngle: string; longestAdDays: number; summary: string }[]> = {
  "man-matters": [
    { name: "Traya", dominantAngle: "Doctor Authority", longestAdDays: 89, summary: "Doubling down on root cause messaging with Rajkummar Rao" },
    { name: "Bold Care", dominantAngle: "Taboo Breaking", longestAdDays: 45, summary: "Fastest growing emotional angle in category" },
    { name: "Mars by GHC", dominantAngle: "Doctor Authority", longestAdDays: 34, summary: "Teleconsultation model mirroring Man Matters exactly" },
    { name: "Bombay Shaving Co", dominantAngle: "Aspiration", longestAdDays: 71, summary: "Grooming identity angle stable and converting" },
    { name: "The Man Company", dominantAngle: "Aspiration", longestAdDays: 38, summary: "Premium positioning testing UGC this month" },
  ],
  bebodywise: [
    { name: "Minimalist", dominantAngle: "Ingredient Anxiety", longestAdDays: 78, summary: "Radical transparency strategy dominant and converting" },
    { name: "The Derma Co", dominantAngle: "Indian Skin Relevance", longestAdDays: 52, summary: "Dermatologist authority for Indian skin types rising" },
    { name: "Plum", dominantAngle: "Clean Beauty", longestAdDays: 67, summary: "Vegan and cruelty-free angle stable" },
    { name: "Dot and Key", dominantAngle: "Proof Over Promise", longestAdDays: 41, summary: "Playful UGC tone contrasting with clinical competitors" },
    { name: "Foxtale", dominantAngle: "Indian Skin Relevance", longestAdDays: 33, summary: "Newest and most aggressive advertiser in category" },
  ],
  "little-joys": [
    { name: "Slurrp Farm", dominantAngle: "Child Acceptance", longestAdDays: 73, summary: "Momfluencer UGC dominating this category" },
    { name: "The Moms Co", dominantAngle: "Expert Validation", longestAdDays: 56, summary: "Celebrity endorsement with Sonam Kapoor converting" },
    { name: "Timios", dominantAngle: "Child Acceptance", longestAdDays: 44, summary: "Taste first messaging winning practical parent anxiety" },
    { name: "Troovy", dominantAngle: "Parental Guilt", longestAdDays: 21, summary: "Newest funded entrant most aggressive strategy watch closely" },
    { name: "Nourish Organics", dominantAngle: "Natural Ingredient Trust", longestAdDays: 61, summary: "Clean label grandmother approved messaging" },
  ],
};
