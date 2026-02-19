

import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";

function cleanRoute(route: string) {
  if (!route) return "/";

  let r = route.replace(/\([^)]*\)/g, "");
  r = r.replace(/\[.*?\]/g, "");
  r = r.replace(/\\/g, "/").replace(/\/+/g, "/");
  if (r !== "/" && r.endsWith("/")) r = r.slice(0, -1);
  if (!r.startsWith("/")) r = "/" + r;
  return r;
}
function getAllRoutes() {
  const appDir = path.join(process.cwd(), "app");

  const collectRoutes = (dir: string, basePath = ""): string[] => {
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    return entries.flatMap((entry) => {
      const name = entry.name;

      if (
        name.startsWith("_") ||
        name.startsWith(".") ||
        name === "api" ||
        name === "components"
      ) {
        return [];
      }

      const fullPath = path.join(dir, name);
      const routePath = path.join(basePath, name);

      if (entry.isDirectory()) {
        return collectRoutes(fullPath, routePath);
      }

      if (name === "page.tsx" || name === "page.jsx" || name === "page.js") {
        const cleanRoute = basePath || "/";
        return [cleanRoute.replace(/\\/g, "/")];
      }

      return [];
    });
  };

  return collectRoutes(appDir);
}
export default function sitemap(): MetadataRoute.Sitemap {
  const rawRoutes = getAllRoutes();

  const cleanedRoutes = Array.from(
    new Set(rawRoutes.map((r) => cleanRoute(r)))
  ); // ✅ exact only

  return cleanedRoutes.map((route) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: route === "/" ? 1 : 0.7,
  }));
}
