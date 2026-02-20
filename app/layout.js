const siteUrl = "https://septimuslab.com";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "SeptimusLab - Mobil İnovasyon Stüdyosu",
    template: "%s | SeptimusLab",
  },
  description:
    "İzmir merkezli mobil yazılım stüdyosu. AI destekli mobil uygulamalar geliştiriyoruz.",
  keywords: [
    "SeptimusLab",
    "mobil uygulama geliştirme",
    "AI uygulama",
    "PureScan",
    "Fintel",
    "İzmir yazılım",
    "mobile innovation studio",
  ],
  authors: [{ name: "SeptimusLab" }],
  creator: "SeptimusLab",
  publisher: "SeptimusLab",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/assets/favicon.ico",
    shortcut: "/assets/favicon.ico",
    apple: "/assets/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "SeptimusLab",
    locale: "tr_TR",
    title: "SeptimusLab - Mobil İnovasyon Stüdyosu",
    description:
      "AI destekli mobil uygulamalar geliştiren İzmir merkezli bağımsız mobil yazılım stüdyosu.",
    images: [
      {
        url: "/assets/septimuslab.png",
        width: 1024,
        height: 1024,
        alt: "SeptimusLab",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SeptimusLab - Mobil İnovasyon Stüdyosu",
    description:
      "AI destekli mobil uygulamalar geliştiren İzmir merkezli bağımsız mobil yazılım stüdyosu.",
    images: ["/assets/septimuslab.png"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F8F7F4",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600&family=Cormorant+Garamond:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/styles/landing.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
