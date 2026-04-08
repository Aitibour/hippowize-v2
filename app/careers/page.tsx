import SubpageLayout from "@/components/SubpageLayout";

const openings = [
  { title: "ServiceNow Architect",        location: "Toronto, CA (Remote)",  type: "Full-time",  dept: "Digital Transformation" },
  { title: "GRC Consultant",              location: "Dubai, UAE (Hybrid)",   type: "Full-time",  dept: "Strategy Consulting"    },
  { title: "SAFe Program Consultant",     location: "Montreal, CA (Remote)", type: "Contract",   dept: "Training & Coaching"    },
  { title: "Cloud Migration Engineer",    location: "London, UK (Hybrid)",   type: "Full-time",  dept: "Digital Transformation" },
  { title: "Cybersecurity Analyst",       location: "Toronto, CA (Hybrid)",  type: "Full-time",  dept: "Strategy Consulting"    },
  { title: "Agile Coach",                 location: "Global (Remote)",       type: "Contract",   dept: "Training & Coaching"    },
];

const values = [
  { icon: "fa-earth-americas", title: "Global Impact",     body: "Work on meaningful transformation projects across six continents with clients in 15+ countries." },
  { icon: "fa-rocket",         title: "Grow Fast",          body: "Accelerate your career with direct client exposure, certifications, and mentorship." },
  { icon: "fa-people-group",   title: "Diverse Teams",      body: "Join a team that reflects the global diversity of the clients and communities we serve." },
  { icon: "fa-laptop-house",   title: "Flexible Work",      body: "Remote-first culture with options to work from client sites and regional offices." },
];

export default function CareersPage() {
  return (
    <SubpageLayout
      eyebrow="Join Our Team"
      title="Careers at Hippowize"
      description="We're building a global team of consultants, technologists, and coaches who are passionate about transforming organizations. Come build something meaningful."
      breadcrumbs={[{ label: "Careers", href: "/careers" }]}
      accent="#2563EB"
      compact
    >
      {/* Values */}
      <section className="sp-section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p className="eyebrow">Why Hippowize</p>
            <h2>Why join our team?</h2>
          </div>
          <div className="sp-grid-4">
            {values.map((v) => (
              <div className="sp-capability-card" key={v.title}>
                <div className="sp-cap-icon"><i className={`fa-solid ${v.icon}`} /></div>
                <h3>{v.title}</h3>
                <p>{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open roles */}
      <section className="sp-section sp-alt">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p className="eyebrow">Open Roles</p>
            <h2>Current opportunities</h2>
          </div>
          <div className="careers-list">
            {openings.map((o) => (
              <div className="career-row" key={o.title}>
                <div className="career-info">
                  <h3>{o.title}</h3>
                  <div className="career-meta">
                    <span><i className="fa-solid fa-location-dot" /> {o.location}</span>
                    <span><i className="fa-solid fa-briefcase" /> {o.dept}</span>
                    <span className={`career-type ${o.type === "Contract" ? "contract" : "fulltime"}`}>{o.type}</span>
                  </div>
                </div>
                <a href="mailto:careers@hippowize.com" className="btn-primary" style={{ marginTop: 0, whiteSpace: "nowrap" }}>Apply Now</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spontaneous application */}
      <section className="sp-section">
        <div className="container">
          <div className="sp-intro-grid">
            <div>
              <p className="eyebrow">Don&apos;t See Your Role?</p>
              <h2>Send us a spontaneous application</h2>
              <p>We&apos;re always looking for exceptional consultants, architects, and coaches. If you don&apos;t see the right role listed, send us your profile and tell us how you can contribute.</p>
              <a href="mailto:careers@hippowize.com" className="btn-primary" style={{ marginTop: 24 }}>
                <i className="fa-solid fa-envelope" style={{ marginRight: 8 }} />
                careers@hippowize.com
              </a>
            </div>
            <div className="sp-highlight-box">
              <i className="fa-solid fa-globe sp-highlight-icon" />
              <h3>We Hire Globally</h3>
              <p>Our team is distributed across Toronto, Montreal, London, Dubai, Johannesburg, and São Paulo. We work with clients in 15+ countries.</p>
              <ul className="sp-check-list">
                <li><i className="fa-solid fa-check" /> Competitive compensation</li>
                <li><i className="fa-solid fa-check" /> Certification support</li>
                <li><i className="fa-solid fa-check" /> Global exposure</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </SubpageLayout>
  );
}
