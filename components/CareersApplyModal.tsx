"use client";

import { useState, useEffect, useRef } from "react";

interface Props {
  job: string;
  onClose: () => void;
}

const COUNTRIES = [
  "Canada", "United States", "United Kingdom", "Australia", "France", "Germany",
  "Netherlands", "Belgium", "Switzerland", "Sweden", "Norway", "Denmark",
  "UAE", "Saudi Arabia", "Qatar", "Kuwait", "Bahrain", "Oman",
  "India", "Singapore", "Malaysia", "Philippines", "Indonesia",
  "Nigeria", "Kenya", "Ghana", "South Africa", "Egypt", "Morocco",
  "Brazil", "Mexico", "Colombia", "Argentina", "Chile",
  "Japan", "South Korea", "China", "Hong Kong",
  "New Zealand", "Ireland", "Spain", "Italy", "Portugal",
  "Other",
];

export default function CareersApplyModal({ job, onClose }: Props) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const firstFieldRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    firstFieldRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const [fileError, setFileError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFileError(null);

    const form = e.currentTarget;
    const cvInput = form.elements.namedItem("cv") as HTMLInputElement;
    const cvFile = cvInput?.files?.[0];

    if (cvFile) {
      const allowed = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      if (!allowed.includes(cvFile.type)) {
        setFileError("Only PDF, DOC or DOCX files are accepted.");
        return;
      }
      if (cvFile.size > 10 * 1024 * 1024) {
        setFileError("File exceeds the 10 MB limit. Please compress or upload a smaller file.");
        return;
      }
    }

    setStatus("submitting");
    const data = new FormData(form);
    try {
      const res = await fetch("/", { method: "POST", body: data });
      if (res.ok) setStatus("success");
      else setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div
      className="apply-overlay"
      role="presentation"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        className="apply-modal"
        role="dialog"
        aria-modal="true"
        aria-label={`Apply for ${job}`}
      >
        <button className="apply-modal-close" onClick={onClose} aria-label="Close dialog">
          <i className="fa-solid fa-xmark" />
        </button>

        {status === "success" ? (
          <div className="apply-success">
            <i className="fa-solid fa-circle-check apply-success-icon" />
            <h3>Application Submitted!</h3>
            <p>
              Thank you for applying for <strong>{job}</strong>. Our team will
              review your profile and reach out if there&apos;s a match.
            </p>
            <button className="btn-primary" onClick={onClose}>Close</button>
          </div>
        ) : (
          <>
            <div className="apply-modal-header">
              <p className="eyebrow">Apply Now</p>
              <h3>{job}</h3>
            </div>

            <form
              name="job-application"
              method="POST"
              encType="multipart/form-data"
              onSubmit={handleSubmit}
              className="apply-form"
              {...{ "data-netlify": "true", "netlify-honeypot": "bot-field" } as Record<string, string>}
            >
              <input type="hidden" name="form-name" value="job-application" />
              <input type="hidden" name="position" value={job} />
              {/* Honeypot — hidden from humans, traps bots */}
              <p style={{ display: "none" }} aria-hidden="true">
                <label>Leave this blank: <input name="bot-field" tabIndex={-1} /></label>
              </p>

              <div className="apply-field-row">
                <div className="apply-field">
                  <label htmlFor="apply-fullname">Full Name <span className="apply-req">*</span></label>
                  <input
                    ref={firstFieldRef}
                    id="apply-fullname"
                    name="full-name"
                    type="text"
                    required
                    placeholder="Jane Smith"
                    autoComplete="name"
                  />
                </div>
                <div className="apply-field">
                  <label htmlFor="apply-email">Email <span className="apply-req">*</span></label>
                  <input
                    id="apply-email"
                    name="email"
                    type="email"
                    required
                    placeholder="jane@example.com"
                    autoComplete="email"
                  />
                </div>
              </div>

              <div className="apply-field-row">
                <div className="apply-field">
                  <label htmlFor="apply-phone">Phone Number <span className="apply-req">*</span></label>
                  <input
                    id="apply-phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="+1 416 000 0000"
                    autoComplete="tel"
                  />
                </div>
                <div className="apply-field">
                  <label htmlFor="apply-country">Country <span className="apply-req">*</span></label>
                  <select id="apply-country" name="country" required defaultValue="">
                    <option value="" disabled>Select country…</option>
                    {COUNTRIES.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="apply-field">
                <label htmlFor="apply-linkedin">
                  LinkedIn Profile{" "}
                  <span className="apply-optional">(optional)</span>
                </label>
                <input
                  id="apply-linkedin"
                  name="linkedin"
                  type="url"
                  placeholder="https://linkedin.com/in/yourname"
                />
              </div>

              <div className="apply-field">
                <label htmlFor="apply-cv">
                  CV / Resume <span className="apply-req">*</span>
                </label>
                <label htmlFor="apply-cv" className="apply-file-label">
                  <i className="fa-solid fa-paperclip" />
                  <span className="apply-file-text">Choose file…</span>
                  <input
                    id="apply-cv"
                    name="cv"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    required
                    className="apply-file-input"
                    onChange={(e) => {
                      const span = e.currentTarget.closest("label")?.querySelector(".apply-file-text");
                      if (span) span.textContent = e.currentTarget.files?.[0]?.name ?? "Choose file…";
                    }}
                  />
                </label>
                <p className="apply-file-hint">PDF, DOC or DOCX · Max 10 MB</p>
                {fileError && <p className="apply-error" style={{ marginTop: 4 }}>{fileError}</p>}
              </div>

              {status === "error" && (
                <p className="apply-error">
                  <i className="fa-solid fa-triangle-exclamation" /> Something went wrong. Please try again or email{" "}
                  <a href="mailto:careers@hippowize.com">careers@hippowize.com</a>.
                </p>
              )}

              <div className="apply-actions">
                <button type="button" className="btn-outline" onClick={onClose}>
                  Cancel
                </button>
                <button type="submit" className="btn-primary" disabled={status === "submitting"}>
                  {status === "submitting" ? (
                    <><i className="fa-solid fa-spinner fa-spin" style={{ marginRight: 8 }} />Sending…</>
                  ) : (
                    <><i className="fa-solid fa-paper-plane" style={{ marginRight: 8 }} />Submit Application</>
                  )}
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
