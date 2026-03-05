export default function sitemap() {
  const baseUrl = "https://www.raretech.co.in";

  const routes = [
    "",
    "/courses",
    "/about",
    "/contact",
    "/legal",
    "/certificate",
    "/courses/web-development",
    "/courses/graphic-designing",
    "/courses/digital-marketing",
    "/courses/tally-accounts",
    "/courses/dca-adca",
    "/courses/ms-office",
    "/courses/ccc-course",
    "/courses/dtp-designing",
    "/courses/ai-tools-training",
    "/courses/stock-market",
    "/courses/typing-data-entry",
    "/courses/hardware-repairing",
    "/courses/office-automation",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    priority: route === "" ? 1 : 0.8,
  }));
}