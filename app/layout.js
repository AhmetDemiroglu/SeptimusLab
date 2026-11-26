// Asil adres www: Vercel septimuslab.com'u www'ye yonlendiriyor. Kanonik yonlenen adresi gosterirse
// Google www sayfasini "alternatif sayfa" sayip dizine eklemiyor (Search Console, Mart 2026).
const siteUrl = "https://www.septimuslab.com";

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
                url: `${siteUrl}/assets/brand/septimuslab-isaret-acik-zemin-1024.png`,
                width: 1024,
                height: 1024,
            },
            description: "Yapay zeka destekli iOS ve Android uygulamaları geliştiren bağımsız mobil uygulama stüdyosu. PureScan Foods, PureScan Cosmetics, Fintel ve Pause Menu.",
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
                sameAs: ["https://www.linkedin.com/in/ahmetdemiroglu/"],
            },
        },
        {
            "@type": "WebSite",
            "@id": `${siteUrl}/#website`,
            url: siteUrl,
            name: "SeptimusLab",
            alternateName: "Septimus Lab",
            description: "Yapay zeka destekli mobil uygulamalar geliştiren bağımsız yazılım stüdyosu",
            publisher: { "@id": `${siteUrl}/#organization` },
            inLanguage: ["tr-TR", "en-US"],
        },
        {
            "@type": "LocalBusiness",
            "@id": `${siteUrl}/#localbusiness`,
            name: "SeptimusLab",
            description: "Yapay zeka destekli mobil uygulama stüdyosu",
            url: siteUrl,
            email: "info@septimuslab.com",
            address: {
                "@type": "PostalAddress",
                addressLocality: "İzmir",
                addressCountry: "TR",
            },
            priceRange: "$$",
            image: `${siteUrl}/assets/brand/septimuslab-isaret-acik-zemin-1024.png`,
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
            name: "PureScan Foods",
            alternateName: "PureScan Gıda İçerik Analizörü",
            description:
                "AI destekli gıda içerik analizörü. Ürün etiketlerini ve barkodları tarayın; alerjenleri, katkı maddelerini ve besin değerlerini anında öğrenin.",
            applicationCategory: "HealthApplication",
            operatingSystem: "Android, iOS",
            offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "TRY",
            },
            installUrl: "https://apps.apple.com/us/app/purescan-foods/id6778348937",
            author: { "@id": `${siteUrl}/#organization` },
            image: `${siteUrl}/assets/purescan2.png`,
        },
        {
            "@type": "SoftwareApplication",
            name: "Pause Menu",
            alternateName: "Pause Menu - Oyuncu Sosyal Platformu",
            description:
                "Oyuncular için yeni nesil sosyal platform. Oyunları keşfedin, puanlayıp kendi listelerinizi oluşturun, incelemeler yazın ve farklı karakterlere sahip yapay zeka personalarının yer aldığı AI Kulübü'nde sohbete katılın. Web ve mobilde, tek çatı altında.",
            applicationCategory: "GameApplication",
            operatingSystem: "iOS, Android, Web",
            offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "TRY",
            },
            installUrl: "https://apps.apple.com/app/id6781281375",
            url: "https://pausemenu.app",
            author: { "@id": `${siteUrl}/#organization` },
            image: `${siteUrl}/assets/pausemenu.png`,
        },
        {
            "@type": "SoftwareApplication",
            name: "Fintel",
            alternateName: "Fintel Aile Bütçesi",
            description:
                "Maaş dönemi, günlük limit, taksit ve fiş okuma ile aile bütçesi uygulaması. Nova ile harcama raporu ve sohbet.",
            applicationCategory: "FinanceApplication",
            operatingSystem: "Android, iOS",
            offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "TRY",
            },
            installUrl: "https://play.google.com/store/apps/details?id=com.fintel.app",
            author: { "@id": `${siteUrl}/#organization` },
            image: `${siteUrl}/assets/fintel.webp`,
        },
    ],
};

export const metadata = {
    metadataBase: new URL(siteUrl),
    title: {
        default: "SeptimusLab | Yapay zeka destekli mobil uygulamalar",
        template: "%s | SeptimusLab",
    },
    description:
        "Yapay zeka destekli iOS ve Android uygulamaları geliştiren bağımsız mobil uygulama stüdyosu. PureScan Foods, PureScan Cosmetics, Fintel ve Pause Menu.",
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
    },
    icons: {
        icon: [
            { url: "/assets/brand/favicon.ico?v=2", sizes: "48x48" },
            { url: "/assets/brand/favicon.svg?v=2", type: "image/svg+xml" },
        ],
        shortcut: "/assets/brand/favicon.ico?v=2",
        apple: "/assets/brand/apple-touch-icon.png?v=2",
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
        title: "SeptimusLab | Yapay zeka destekli mobil uygulamalar",
        description:
            "Yapay zeka destekli iOS ve Android uygulamaları geliştiren bağımsız mobil uygulama stüdyosu. PureScan Foods, PureScan Cosmetics, Fintel ve Pause Menu.",
        images: [
            {
                url: "/assets/brand/og-septimuslab-v2.png",
                width: 1200,
                height: 630,
                alt: "SeptimusLab: yapay zeka destekli mobil uygulamalar",
                type: "image/png",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "SeptimusLab | Yapay zeka destekli mobil uygulamalar",
        description: "Yapay zeka destekli iOS ve Android uygulamaları geliştiren bağımsız mobil uygulama stüdyosu. PureScan Foods, PureScan Cosmetics, Fintel ve Pause Menu.",
        images: ["/assets/brand/og-septimuslab-v2.png"],
    },
    category: "technology",
    // Next 13.5 viewport export'unu okumuyor, theme-color buradan basılır
    themeColor: "#F2F5FA",
};

export const viewport = {
    width: "device-width",
    initialScale: 1,
    themeColor: "#F2F5FA",
};

export default function RootLayout({ children }) {
    return (
        <html lang="tr" suppressHydrationWarning>
            <head>
                {/* Kayitli koyu tema ilk boyamadan once uygulanir: sayfa acik temada yanip sonmez,
                    uygulama ekranlari da dogrudan koyu surumle gelir. */}
                <script
                    dangerouslySetInnerHTML={{
                        __html: `try{if(localStorage.getItem('septimus-theme')==='dark')document.documentElement.setAttribute('data-theme','dark')}catch(e){}`,
                    }}
                />
                {/* Google Analytics 4: kuyruk hemen kurulur (sayfa gorunumu kaybolmaz), 180 KB'lik
                    gtag.js ise ilk etkilesimde ya da yuklemeden 3 sn sonra gelir, ilk boyamayla yarismaz. */}
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-G5RB1ESJLY');
              (function(){
                var done = false, evs = ['pointerdown','keydown','touchstart','scroll'];
                function load(){
                  if (done) return; done = true;
                  evs.forEach(function(e){ removeEventListener(e, load); });
                  var s = document.createElement('script');
                  s.async = true;
                  s.src = 'https://www.googletagmanager.com/gtag/js?id=G-G5RB1ESJLY';
                  document.head.appendChild(s);
                }
                evs.forEach(function(e){ addEventListener(e, load, { once: true, passive: true }); });
                addEventListener('load', function(){ setTimeout(load, 3000); });
              })();
            `,
                    }}
                />

                {/* Font siteden sunulur; ilk ekrandaki dik kesim dosyalar onceden istenir */}
                <link rel="preload" href="/fonts/chakra-petch-400-latin.woff2" as="font" type="font/woff2" crossOrigin="" />
                <link rel="preload" href="/fonts/chakra-petch-600-latin.woff2" as="font" type="font/woff2" crossOrigin="" />
                <link rel="preload" href="/fonts/chakra-petch-400-latin-ext.woff2" as="font" type="font/woff2" crossOrigin="" />
                <link rel="preload" href="/fonts/chakra-petch-600-latin-ext.woff2" as="font" type="font/woff2" crossOrigin="" />

                <link rel="stylesheet" href="/styles/landing.min.css" />

                {/* JSON-LD Structured Data */}
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            </head>
            <body>{children}</body>
        </html>
    );
}
