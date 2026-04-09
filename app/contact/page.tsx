import type { Metadata } from "next";
import SubpageLayout from "@/components/SubpageLayout";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with the Hippowize team. Book a discovery call or send us a message — we respond within one business day.",
  alternates: { canonical: "https://hippowize-v2.netlify.app/contact" },
  openGraph: { title: "Contact Us", description: "Get in touch with the Hippowize team. Book a discovery call or send us a message." },
};

export default function ContactPage() {
  return (
    <SubpageLayout
      eyebrow="Get in Touch"
      title="Let's Start a Conversation"
      description="Whether you have a specific project in mind or just want to explore the possibilities — we'd love to hear from you."
      breadcrumbs={[{ label: "Contact", href: "/contact" }]}
      accent="#2563EB"
      compact
    >
      <section className="sp-section">
        <div className="container">
          <div className="contact-layout">

            {/* Left — form */}
            <div className="contact-form-col">
              <p className="eyebrow">Send a Message</p>
              <h2>Tell us about your project</h2>
              <p className="contact-sub">Fill in the form and our team will get back to you within one business day.</p>
              <ContactForm />
            </div>

            {/* Right — info */}
            <div className="contact-info-col">
              <div className="contact-info-card">
                <i className="fa-solid fa-envelope contact-info-icon" />
                <h4>General Inquiries</h4>
                <a href="mailto:info@hippowize.com">info@hippowize.com</a>
              </div>
              <div className="contact-info-card">
                <i className="fa-solid fa-handshake contact-info-icon" />
                <h4>Sales &amp; Partnerships</h4>
                <a href="mailto:sales@hippowize.com">sales@hippowize.com</a>
              </div>
              <div className="contact-info-card">
                <i className="fa-solid fa-users contact-info-icon" />
                <h4>Careers</h4>
                <a href="mailto:careers@hippowize.com">careers@hippowize.com</a>
              </div>
              <div className="contact-info-card">
                <i className="fa-solid fa-calendar-check contact-info-icon" />
                <h4>Book a Discovery Call</h4>
                <a href="https://calendly.com/hippowize" target="_blank" rel="noreferrer" className="btn-primary" style={{ marginTop: 12, display: "inline-flex" }}>
                  Schedule on Calendly
                </a>
              </div>
              <div className="contact-info-card">
                <i className="fa-solid fa-location-dot contact-info-icon" />
                <h4>Headquarters</h4>
                <p>Toronto, Ontario, Canada</p>
                <p style={{ marginTop: 4, opacity: 0.7, fontSize: 13 }}>Serving clients worldwide</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </SubpageLayout>
  );
}
