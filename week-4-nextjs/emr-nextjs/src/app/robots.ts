import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",

        allow: ["/", "/login"],

        disallow: [
          "/dashboard",
          "/patients",
          "/doctors",
          "/medical-records",
          "/api",
        ],
      },
    ],

    sitemap: "http://localhost:3000/sitemap.xml",
  };
}
