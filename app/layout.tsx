import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import MoveTop from "@/components/MoveTop";
import Providers from "./providers";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "700", "800"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hippowize-v2.netlify.app"),
  title: {
    default: "Hippowize — Transform Today, Thrive Tomorrow",
    template: "%s | Hippowize",
  },
  description:
    "Hippowize helps organizations turn strategy into measurable business outcomes — across cybersecurity, digital transformation, professional services, and training.",
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://hippowize-v2.netlify.app",
    siteName: "Hippowize",
    title: "Hippowize — Transform Today, Thrive Tomorrow",
    description:
      "Hippowize helps organizations turn strategy into measurable business outcomes — across cybersecurity, digital transformation, professional services, and training.",
    images: [
      {
        url: "/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Hippowize — Transform Today, Thrive Tomorrow",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hippowize — Transform Today, Thrive Tomorrow",
    description:
      "Hippowize helps organizations turn strategy into measurable business outcomes.",
    images: ["/og-default.jpg"],
  },
  robots: { index: true, follow: true },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Hippowize",
  url: "https://hippowize-v2.netlify.app",
  logo: "https://hippowize-v2.netlify.app/logo.svg",
  contactPoint: [
    { "@type": "ContactPoint", email: "info@hippowize.com", contactType: "customer service" },
    { "@type": "ContactPoint", email: "sales@hippowize.com", contactType: "sales" },
  ],
  areaServed: "Worldwide",
  knowsAbout: ["Cybersecurity", "Digital Transformation", "Strategy Consulting", "Professional Services", "Training and Coaching"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://calendly.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
          integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        {/* JSON-LD: hardcoded static object, no user input */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      </head>
      <body className={inter.variable}>
        <Providers>
          <Header />
          {children}
          <MoveTop />
        </Providers>
      </body>
    </html>
  );
}
