import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/layout/BackToTop";
import FloatingCall from "@/components/layout/FloatingCall";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import LoadingScreen from "@/components/LoadingScreen";
import SmoothScroll from "@/components/SmoothScroll";
import { services } from "@/data/services";
import "./globals.css";

const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
const metadataBaseUrl = configuredSiteUrl ?? "http://localhost:3000";
const mapUrl = "https://maps.app.goo.gl/UBkZ5Eic6BT5xGGu5";
const logoPath = "/amos-logo-transparent.png";
const socialImagePath = "/wedding-two.jpeg";
const businessId = configuredSiteUrl ? `${configuredSiteUrl}/#business` : "#business";

export const metadata: Metadata = {
  metadataBase: new URL(metadataBaseUrl),
  title: {
    default: "Aamos Wedding Planners | Erumeli, Kerala",
    template: "%s | Aamos Wedding Planners",
  },
  description:
    "Aamos Wedding Planners creates thoughtful, elegant weddings, destination celebrations and family events in Erumeli, Kerala.",
  keywords: [
    "wedding planner in Erumeli",
    "wedding planner in Kerala",
    "Erumeli wedding planner",
    "destination wedding planning Kerala",
    "wedding decoration Erumeli",
    "event planning Kerala",
    "Aamos Wedding Planners",
  ],
  applicationName: "Aamos Wedding Planners",
  authors: [{ name: "Aamos Wedding Planners" }],
  creator: "Aamos Wedding Planners",
  publisher: "Aamos Wedding Planners",
  category: "wedding planning",
  alternates: configuredSiteUrl ? { canonical: "/" } : undefined,
  icons: {
    icon: logoPath,
    apple: logoPath,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Aamos Wedding Planners",
    title: "Aamos Wedding Planners | Erumeli, Kerala",
    description:
      "Thoughtful wedding planning, destination celebrations and elegant family events in Erumeli, Kerala.",
    images: [{ url: socialImagePath, alt: "Aamos Wedding Planners celebration" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aamos Wedding Planners | Erumeli, Kerala",
    description:
      "Thoughtful wedding planning, destination celebrations and elegant family events in Erumeli, Kerala.",
    images: [socialImagePath],
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
  other: {
    "content-language": "en-IN",
    "geo.region": "IN-KL",
    "geo.placename": "Erumeli, Kerala, India",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": businessId,
      name: "Aamos Wedding Planners",
      description:
        "Wedding planning, destination celebrations, decor styling and event coordination in Erumeli, Kerala.",
      logo: logoPath,
      image: socialImagePath,
      telephone: "+91 6235314140",
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Erumeli",
        addressRegion: "Kerala",
        addressCountry: "IN",
      },
      areaServed: [
        { "@type": "City", name: "Erumeli" },
        { "@type": "State", name: "Kerala" },
      ],
      hasMap: mapUrl,
      sameAs: ["https://www.instagram.com/aamos_weddingplanners?stkn=eDM4ZWM5cTM3ODZv"],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91 6235314140",
        contactType: "customer service",
        availableLanguage: ["English", "Malayalam"],
      },
      knowsAbout: [
        "Wedding planning",
        "Destination weddings",
        "Wedding decor and styling",
        "Guest management",
        "Photography coordination",
      ],
    },
    {
      "@type": "WebSite",
      "@id": configuredSiteUrl ? `${configuredSiteUrl}/#website` : "#website",
      name: "Aamos Wedding Planners",
      description:
        "Wedding planning and celebration design for couples and families in Erumeli, Kerala.",
      inLanguage: "en-IN",
      publisher: { "@id": businessId },
    },
    {
      "@type": "WebPage",
      "@id": configuredSiteUrl ? `${configuredSiteUrl}/#webpage` : "#webpage",
      name: "Aamos Wedding Planners | Erumeli, Kerala",
      description:
        "Thoughtful wedding planning, destination celebrations and elegant family events in Erumeli, Kerala.",
      inLanguage: "en-IN",
      isPartOf: {
        "@id": configuredSiteUrl ? `${configuredSiteUrl}/#website` : "#website",
      },
      about: { "@id": businessId },
    },
    {
      "@type": "ItemList",
      name: "Aamos Wedding Planners services",
      itemListElement: services.map((service, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Service",
          name: service.title,
          description: service.description,
          provider: { "@id": businessId },
          areaServed: { "@type": "State", name: "Kerala" },
        },
      })),
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-screen antialiased">
        <LoadingScreen />
        <SmoothScroll />
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingCall />
        <FloatingWhatsApp />
        <BackToTop />
      </body>
    </html>
  );
}
