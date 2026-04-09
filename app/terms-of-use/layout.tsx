import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Hippowize Terms of Use — the terms and conditions governing use of our website and services.",
  robots: { index: false, follow: false },
};

export default function TermsOfUseLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
