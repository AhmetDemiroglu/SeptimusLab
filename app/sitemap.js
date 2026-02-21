export default function sitemap() {
  return [
    {
      url: "https://septimuslab.com",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: {
          "tr-TR": "https://septimuslab.com",
          "en-US": "https://septimuslab.com",
        },
      },
    },
  ];
}
