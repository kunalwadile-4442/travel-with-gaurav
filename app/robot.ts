import { MetadataRoute } from "next";
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [],
    },
    sitemap: `https://next-website-demo.vercel.app/sitemap.xml`,
    host: `https://next-website-demo.vercel.app/`,
  };
}