export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://septimuslab.com/sitemap.xml",
    host: "https://septimuslab.com",
  };
}
