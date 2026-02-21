const siteUrl = "https://septimuslab.com";

const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Organization",
            "@id": `${siteUrl}/#organization`,
            name: "SeptimusLab",
            alternateName: "Septimus Lab",
            url: siteUrl,
            logo: {
                "@type": "ImageObject",
                url: `${siteUrl}/assets/septimuslab.png`,
                width: 1024,
                height: 1024,
            },
            description: "İzmir merkezli bağımsız mobil yazılım stüdyosu. AI destekli mobil uygulamalar geliştiriyoruz.",
            foundingDate: "2025",
            foundingLocation: {
                "@type": "Place",
                name: "İzmir, Turkey",
            },
            sameAs: ["https://play.google.com/store/apps/developer?id=SeptimusLab", "https://www.instagram.com/septimus.lab/"],
            contactPoint: {
                "@type": "ContactPoint",
                email: "info@septimuslab.com",
                contactType: "customer support",
                availableLanguage: ["Turkish", "English"],
            },
            founder: {
                "@type": "Person",
                name: "Ahmet Demiroğlu",
                url: "https://ahmetdemiroglu.dev",
            },
        },
        {
            "@type": "WebSite",
            "@id": `${siteUrl}/#website`,
            url: siteUrl,
            name: "SeptimusLab",
            alternateName: "SeptimusLab - Mobil İnovasyon Stüdyosu",
            description: "AI destekli mobil uygulamalar geliştiren İzmir merkezli yazılım stüdyosu",
            publisher: { "@id": `${siteUrl}/#organization` },
            inLanguage: ["tr-TR", "en-US"],
        },
        {
            "@type": "LocalBusiness",
            "@id": `${siteUrl}/#localbusiness`,
            name: "SeptimusLab",
            description: "Mobil uygulama geliştirme stüdyosu - İzmir, Türkiye",
            url: siteUrl,
            email: "info@septimuslab.com",
            address: {
                "@type": "PostalAddress",
                addressLocality: "İzmir",
                addressCountry: "TR",
            },
            priceRange: "$$",
            image: `${siteUrl}/assets/septimuslab.png`,
            sameAs: ["https://play.google.com/store/apps/developer?id=SeptimusLab", "https://www.instagram.com/septimus.lab/"],
        },
        {
            "@type": "SoftwareApplication",
            name: "PureScan Cosmetics",
            alternateName: "PureScan Kozmetik İçerik Analizörü",
            description:
                "AI destekli kozmetik içerik analizörü. Ürün etiketlerini tarayın ve cilt bakım ürünlerinizin içinde ne olduğunu anında öğrenin.",
            applicationCategory: "HealthApplication",
            operatingSystem: "Android",
            offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "TRY",
            },
            installUrl: "https://play.google.com/store/apps/details?id=com.septimuslab.purescan",
            author: { "@id": `${siteUrl}/#organization` },
            image: `${siteUrl}/assets/purescan.png`,
        },
        {
            "@type": "SoftwareApplication",
            name: "Fintel",
            alternateName: "Fintel Akıllı Bütçe Asistanı",
            description:
                "AI destekli akıllı bütçe asistanı. Dönem bazlı bütçeler oluşturun ve Nova AI'dan kişiselleştirilmiş finansal bilgiler alın.",
            applicationCategory: "FinanceApplication",
            operatingSystem: "Android",
            offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "TRY",
            },
            installUrl: "https://play.google.com/store/apps/details?id=com.fintel.app",
            author: { "@id": `${siteUrl}/#organization` },
            image: `${siteUrl}/assets/fintel.png`,
        },
    ],
};

export const metadata = {
    metadataBase: new URL(siteUrl),
    title: {
        default: "SeptimusLab - Mobil Uygulama Geliştirme Stüdyosu | İzmir",
        template: "%s | SeptimusLab",
    },
    description:
        "İzmir merkezli mobil uygulama geliştirme stüdyosu. AI destekli Android uygulamalar: PureScan kozmetik içerik analizörü ve Fintel akıllı bütçe asistanı. Yapay zeka ile mobil inovasyon.",
    keywords: [
        "SeptimusLab",
        "Septimus Lab",
        "septimuslab.com",
        "mobil uygulama",
        "mobil uygulama geliştirme",
        "android uygulama",
        "android uygulama geliştirme",
        "android yazılım",
        "mobil yazılım",
        "mobil yazılım stüdyosu",
        "mobil uygulama şirketi",
        "uygulama geliştirme",
        "uygulama yapımı",
        "yapay zeka uygulama",
        "AI uygulama",
        "AI destekli uygulama",
        "yapay zeka mobil",
        "akıllı uygulama",
        "PureScan",
        "PureScan Cosmetics",
        "kozmetik içerik analizi",
        "kozmetik analiz uygulaması",
        "cilt bakım analizi",
        "kozmetik güvenlik",
        "Fintel",
        "Fintel bütçe",
        "bütçe uygulaması",
        "akıllı bütçe",
        "para yönetimi uygulaması",
        "kişisel finans uygulaması",
        "PureScan Foods",
        "gıda içerik analizi",
        "İzmir yazılım",
        "İzmir mobil uygulama",
        "İzmir uygulama geliştirme",
        "Türkiye mobil uygulama",
        "Türk yazılım şirketi",
        "mobile app development",
        "mobile app development turkey",
        "android app development",
        "mobile innovation studio",
        "AI mobile app",
        "AI powered app",
        "izmir mobile developer",
        "turkey app developer",
        "cosmetic ingredient analyzer",
        "skincare ingredient scanner",
        "budget app",
        "smart budget assistant",
        "food ingredient analyzer",
    ],
    authors: [{ name: "SeptimusLab", url: siteUrl }],
    creator: "SeptimusLab",
    publisher: "SeptimusLab",
    alternates: {
        canonical: "/",
        languages: {
            "tr-TR": "/",
            "en-US": "/",
            "x-default": "/",
        },
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
    verification: {
        google: "F5S3kdR1fQWYODdUxgiOZDLJYjxVW6ATCUe3yEXHIGU",
    },
    openGraph: {
        type: "website",
        url: siteUrl,
        siteName: "SeptimusLab",
        locale: "tr_TR",
        alternateLocale: ["en_US"],
        title: "SeptimusLab - Mobil Uygulama Geliştirme | AI Destekli Android Uygulamalar",
        description:
            "İzmir merkezli bağımsız mobil yazılım stüdyosu. PureScan ile kozmetik içerik analizi, Fintel ile akıllı bütçe yönetimi. Yapay zeka destekli Android uygulamalar geliştiriyoruz.",
        images: [
            {
                url: "/assets/septimuslab.png",
                width: 1024,
                height: 1024,
                alt: "SeptimusLab - Mobil Uygulama Geliştirme Stüdyosu Logo",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "SeptimusLab - AI Destekli Mobil Uygulamalar | İzmir",
        description: "Kozmetik analizi (PureScan) ve akıllı bütçe yönetimi (Fintel). İzmir merkezli yapay zeka destekli Android uygulama stüdyosu.",
        images: ["/assets/septimuslab.png"],
    },
    category: "technology",
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
                {/* Google Analytics 4 */}
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-G5RB1ESJLY" />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-G5RB1ESJLY');
            `,
                    }}
                />

                <script src="https://cdn.tailwindcss.com"></script>

                {/* Preconnects */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                <link rel="preconnect" href="https://www.googletagmanager.com" />
                <link rel="preconnect" href="https://www.google-analytics.com" />

                <link
                    href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600&family=Cormorant+Garamond:wght@500;600;700&display=swap"
                    rel="stylesheet"
                />
                <link rel="stylesheet" href="/styles/landing.css" />

                {/* JSON-LD Structured Data */}
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            </head>
            <body>{children}</body>
        </html>
    );
}
