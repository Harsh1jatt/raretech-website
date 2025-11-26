export default function sitemap() {
  const base = "https://raretech.co.in";
  const now = new Date();

  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/courses`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/certificate`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/legal`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];
}
