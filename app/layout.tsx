import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import MoveTop from "@/components/MoveTop";
import Providers from "./providers";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Hippowize — Transform Today, Thrive Tomorrow",
  description:
    "Hippowize helps organizations turn strategy into measurable business outcomes — across cybersecurity, digital transformation, professional services, and training.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        />
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
