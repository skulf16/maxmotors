import type { Metadata, Viewport } from "next";
import { Oswald, Inter, IBM_Plex_Mono } from "next/font/google";
import { meta, site } from "@/lib/content";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});
const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono-plex",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://max-motors-berlin.de"),
  title: {
    default: meta.title,
    template: "%s · Max Motors Berlin",
  },
  description: meta.description,
  keywords: [
    "Werkstatt Berlin",
    "Autowerkstatt Berlin",
    "Kfz Meisterbetrieb Berlin",
    "Motorenbau Berlin",
    "Chiptuning Berlin",
    "Tuning Werkstatt Berlin",
    "Lackiererei Berlin",
    "Performance Werkstatt Berlin",
  ],
  openGraph: {
    title: meta.title,
    description: meta.description,
    locale: "de_DE",
    type: "website",
    siteName: "Max Motors Berlin",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#0e0f11",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: "Max Motors",
  description: meta.description,
  areaServed: "Berlin",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.street,
    postalCode: site.zip,
    addressLocality: "Berlin",
    addressCountry: "DE",
  },
  telephone: site.phoneLabel,
  email: site.email,
  priceRange: "€€",
  openingHours: ["Mo-Fr 07:30-18:00", "Sa 09:00-14:00"],
  makesOffer: [
    "Inspektion & Wartung",
    "HU/AU",
    "Motorenbau & Motoreninstandsetzung",
    "Chiptuning & Leistungssteigerung",
    "Lackiererei & Karosserie",
    "Unfallinstandsetzung",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={`${oswald.variable} ${inter.variable} ${plexMono.variable}`}>
      <body suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div id="app">{children}</div>
      </body>
    </html>
  );
}
