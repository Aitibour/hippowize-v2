import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <main className="not-found-page">
      <div className="container not-found-inner">
        <p className="not-found-code">404</p>
        <h1>Page Not Found</h1>
        <p className="not-found-msg">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="not-found-actions">
          <Link href="/" className="btn-primary">Back to Home</Link>
          <Link href="/services/strategy-consulting" className="btn-outline">Our Services</Link>
        </div>
      </div>
    </main>
  );
}
