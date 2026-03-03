export type BrandKey = "man-matters" | "bebodywise" | "little-joys";

export const brands: { key: BrandKey; label: string }[] = [
  { key: "man-matters", label: "Man Matters" },
  { key: "bebodywise", label: "Bebodywise" },
  { key: "little-joys", label: "Little Joys" },
];

export const emotionalAngles = ["Fear", "Aspiration", "Social Proof", "Humor", "Urgency"] as const;

export const emotionalShiftData: Record<BrandKey, { week: string; Fear: number; Aspiration: number; "Social Proof": number; Humor: number; Urgency: number }[]> = {
  "man-matters": [
    { week: "Week 1", Fear: 35, Aspiration: 50, "Social Proof": 40, Humor: 20, Urgency: 10 },
    { week: "Week 2", Fear: 30, Aspiration: 55, "Social Proof": 45, Humor: 25, Urgency: 15 },
    { week: "Week 3", Fear: 25, Aspiration: 60, "Social Proof": 50, Humor: 30, Urgency: 12 },
    { week: "Week 4", Fear: 20, Aspiration: 70, "Social Proof": 48, Humor: 35, Urgency: 18 },
  ],
  bebodywise: [
    { week: "Week 1", Fear: 20, Aspiration: 60, "Social Proof": 55, Humor: 10, Urgency: 30 },
    { week: "Week 2", Fear: 25, Aspiration: 58, "Social Proof": 52, Humor: 15, Urgency: 35 },
    { week: "Week 3", Fear: 22, Aspiration: 65, "Social Proof": 48, Humor: 12, Urgency: 40 },
    { week: "Week 4", Fear: 18, Aspiration: 72, "Social Proof": 50, Humor: 18, Urgency: 38 },
  ],
  "little-joys": [
    { week: "Week 1", Fear: 10, Aspiration: 40, "Social Proof": 30, Humor: 55, Urgency: 20 },
    { week: "Week 2", Fear: 12, Aspiration: 45, "Social Proof": 35, Humor: 50, Urgency: 25 },
    { week: "Week 3", Fear: 8, Aspiration: 50, "Social Proof": 38, Humor: 60, Urgency: 22 },
    { week: "Week 4", Fear: 15, Aspiration: 48, "Social Proof": 42, Humor: 65, Urgency: 28 },
  ],
};

export const statsData: Record<BrandKey, { dominantAngle: string; ugcFormat: number; avgLongevity: number; evergreenAds: number; trends: { dominantAngle: "up" | "down"; ugcFormat: "up" | "down"; avgLongevity: "up" | "down"; evergreenAds: "up" | "down" } }> = {
  "man-matters": { dominantAngle: "Aspiration", ugcFormat: 62, avgLongevity: 18, evergreenAds: 4, trends: { dominantAngle: "up", ugcFormat: "up", avgLongevity: "down", evergreenAds: "up" } },
  bebodywise: { dominantAngle: "Social Proof", ugcFormat: 48, avgLongevity: 24, evergreenAds: 6, trends: { dominantAngle: "up", ugcFormat: "down", avgLongevity: "up", evergreenAds: "up" } },
  "little-joys": { dominantAngle: "Humor", ugcFormat: 71, avgLongevity: 12, evergreenAds: 2, trends: { dominantAngle: "up", ugcFormat: "up", avgLongevity: "down", evergreenAds: "down" } },
};

export const opportunityData: Record<BrandKey, string[]> = {
  "man-matters": [
    "Man Matters is doubling down on aspiration-led creatives — up 20% in 4 weeks.",
    "Their UGC-heavy format is resonating but humor remains underused (<35%).",
    "There's a clear opening for fear-based messaging in hair care — they pulled back significantly.",
    "Action: Test 2-3 fear + social proof hybrid creatives this week targeting hair loss.",
  ],
  bebodywise: [
    "Bebodywise shifted hard into urgency messaging — up 8% this month.",
    "Aspiration creatives are plateauing but still dominant at 72%.",
    "Humor is almost nonexistent in their mix — major white space.",
    "Action: Launch humor-driven wellness ads targeting their skincare audience.",
  ],
  "little-joys": [
    "Little Joys is leaning heavily into humor (65%) — it's their signature.",
    "Fear-based messaging is nearly absent — potential for disruption.",
    "Their social proof usage is climbing but still below industry average.",
    "Action: Create testimonial-heavy ads with a fear angle on bath & body products.",
  ],
};

export const gapData: Record<BrandKey, { angles: string[]; formats: string[]; platforms: string[] }> = {
  "man-matters": {
    angles: ["Nostalgia", "Community / Belonging", "Expert Authority"],
    formats: ["Carousel ads", "Interactive polls", "Before/After static"],
    platforms: ["Snapchat", "Reddit", "LinkedIn"],
  },
  bebodywise: {
    angles: ["Humor", "Fear of Missing Out", "Empowerment"],
    formats: ["Podcast sponsorships", "Meme-style creatives", "Long-form video (3min+)"],
    platforms: ["Pinterest", "Twitter/X", "Connected TV"],
  },
  "little-joys": {
    angles: ["Fear / Anxiety", "Clinical Authority", "Urgency / Scarcity"],
    formats: ["Whiteboard explainers", "Doctor-led UGC", "Comparison ads"],
    platforms: ["LinkedIn", "Snapchat", "OTT Pre-rolls"],
  },
};

export const briefData: Record<BrandKey, { whatWeSaw: string; opportunity: string; brief: string; deadline: string }> = {
  "man-matters": {
    whatWeSaw: "Man Matters pulled back on fear-based hair loss ads and doubled down on aspirational lifestyle creatives. UGC formats dominate at 62%. Humor is rising but still below 35%.",
    opportunity: "The fear angle in hair care is wide open. No major competitor is running clinical fear + social proof ads right now. This is a 2-week window before Q2 pushes begin.",
    brief: "Create 3 UGC-style video ads (15-30s) featuring real users discussing hair loss anxiety, paired with before/after results. Tone: empathetic, not alarmist. Include dermatologist sound bite. Target: Meta + YouTube Shorts.",
    deadline: "Creative review by Friday. Live by next Monday.",
  },
  bebodywise: {
    whatWeSaw: "Bebodywise is running 72% aspiration ads and increasing urgency-based messaging. Humor is almost zero. Their evergreen library has 6 ads running 60+ days — all skincare.",
    opportunity: "Humor-driven skincare ads are completely unclaimed. Their audience is 18-28F — prime demographic for relatable, funny content. Nobody is doing it.",
    brief: "Produce 2 meme-style static ads and 1 short-form reel using trending audio. Theme: skincare routine chaos. Tone: self-deprecating, warm. Target: Instagram Reels + YouTube Shorts.",
    deadline: "First drafts by Wednesday. Final assets by Friday.",
  },
  "little-joys": {
    whatWeSaw: "Little Joys relies heavily on humor (65%) and is underinvesting in credibility-building formats. Social proof is growing but lacks clinical authority. Fear messaging is nearly absent.",
    opportunity: "Clinical authority + fear-based messaging in bath & body is unclaimed territory. Parents are the key buyer — safety and ingredient anxiety are high-intent triggers.",
    brief: "Create 2 doctor-led UGC videos (30-45s) covering ingredient safety in kids' bath products. Pair with 3 static comparison ads (us vs. generic). Tone: authoritative but friendly. Target: Meta + Pinterest.",
    deadline: "Script approval by Thursday. Shoot by next Tuesday.",
  },
};

export const competitorCards: Record<BrandKey, { name: string; dominantAngle: string; longestAdDays: number; summary: string }[]> = {
  "man-matters": [
    { name: "Traya Health", dominantAngle: "Fear + Clinical", longestAdDays: 72, summary: "Running aggressive hair loss fear ads with dermatologist endorsements." },
    { name: "Vedix", dominantAngle: "Personalization", longestAdDays: 45, summary: "Customization-first messaging with quiz-driven funnels." },
    { name: "Ustraa", dominantAngle: "Humor + Masculinity", longestAdDays: 38, summary: "Leaning into masculine humor with celeb-driven short-form content." },
    { name: "Boldcare", dominantAngle: "Aspiration", longestAdDays: 65, summary: "Premium positioning with clean lifestyle visuals and doctor credibility." },
  ],
  bebodywise: [
    { name: "Plum Goodness", dominantAngle: "Clean Beauty", longestAdDays: 58, summary: "Ingredient transparency and sustainability-first messaging." },
    { name: "Wow Skin Science", dominantAngle: "Social Proof", longestAdDays: 80, summary: "Heavy influencer-driven UGC with result-focused testimonials." },
    { name: "Minimalist", dominantAngle: "Science / Authority", longestAdDays: 44, summary: "Clinical, ingredient-led ads with a no-nonsense tone." },
    { name: "Dot & Key", dominantAngle: "Fun + Aspiration", longestAdDays: 35, summary: "Colorful, Gen-Z targeted creatives with trending formats." },
  ],
  "little-joys": [
    { name: "Mamaearth", dominantAngle: "Safety + Trust", longestAdDays: 90, summary: "Toxin-free messaging dominates with heavy celebrity endorsement." },
    { name: "The Moms Co", dominantAngle: "Expert Authority", longestAdDays: 52, summary: "Pediatrician-backed claims with clean, pastel-toned creatives." },
    { name: "Chicnutrix", dominantAngle: "Aspiration + Glow", longestAdDays: 40, summary: "Premium beauty supplement positioning with influencer collabs." },
    { name: "Juicy Chemistry", dominantAngle: "Purity", longestAdDays: 68, summary: "Organic-first messaging with farm-to-face storytelling." },
  ],
};
