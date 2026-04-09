"use client";

import { useState } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
      });
      if (res.ok) { setState("success"); form.reset(); }
      else setState("error");
    } catch {
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div className="contact-success">
        <i className="fa-solid fa-circle-check contact-success-icon" />
        <h3>Message sent!</h3>
        <p>We&apos;ll get back to you within one business day.</p>
        <button className="btn-primary" style={{ marginTop: 16 }} onClick={() => setState("idle")}>
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="contact-form"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p className="contact-honeypot" aria-hidden="true">
        <label>Don&apos;t fill this out: <input name="bot-field" /></label>
      </p>

      <div className="contact-form-row">
        <div className="contact-field">
          <label htmlFor="cf-name">Full Name <span aria-hidden="true">*</span></label>
          <input id="cf-name" name="name" type="text" required placeholder="Jane Smith" />
        </div>
        <div className="contact-field">
          <label htmlFor="cf-org">Organization</label>
          <input id="cf-org" name="organization" type="text" placeholder="Acme Corp" />
        </div>
      </div>

      <div className="contact-form-row">
        <div className="contact-field">
          <label htmlFor="cf-email">Email <span aria-hidden="true">*</span></label>
          <input id="cf-email" name="email" type="email" required placeholder="jane@example.com" />
        </div>
        <div className="contact-field">
          <label htmlFor="cf-service">Service of Interest</label>
          <select id="cf-service" name="service">
            <option value="">Select a service…</option>
            <option>Strategy Consulting</option>
            <option>Digital Transformation</option>
            <option>Cybersecurity &amp; GRC</option>
            <option>Professional Services</option>
            <option>Training &amp; Coaching</option>
            <option>Other</option>
          </select>
        </div>
      </div>

      <div className="contact-field">
        <label htmlFor="cf-message">Message <span aria-hidden="true">*</span></label>
        <textarea
          id="cf-message"
          name="message"
          required
          rows={5}
          placeholder="Tell us about your project, challenge, or question…"
        />
      </div>

      {state === "error" && (
        <p className="contact-error">Something went wrong. Please try again or email us directly.</p>
      )}

      <button type="submit" className="btn-primary" disabled={state === "submitting"}>
        {state === "submitting"
          ? <><i className="fa-solid fa-spinner fa-spin" /> Sending…</>
          : <><i className="fa-solid fa-paper-plane" /> Send Message</>
        }
      </button>
    </form>
  );
}
