// Tum rotalar statik ve CDN'den sunuluyor; engellenecek yol yok.
// Ileride adlandirilmis bot grubu eklenirse her grup Disallow satirlarini kendisi tekrar etmeli
// (bot yalniz kendine en uygun grubu okur, * grubunu miras almaz).
export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://www.septimuslab.com/sitemap.xml",
  };
}
