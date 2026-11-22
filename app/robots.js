export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://www.septimuslab.com/sitemap.xml",
    host: "https://www.septimuslab.com",
  };
}
