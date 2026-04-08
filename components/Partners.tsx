const partners = [
  { name: "ServiceNow", icon: "fa-solid fa-gears",      color: "#62D84E", bg: "rgba(98,216,78,0.08)"  },
  { name: "AWS",        icon: "fa-brands fa-aws",        color: "#FF9900", bg: "rgba(255,153,0,0.08)" },
  { name: "Microsoft",  icon: "fa-brands fa-microsoft",  color: "#00A4EF", bg: "rgba(0,164,239,0.08)" },
  { name: "Google",     icon: "fa-brands fa-google",     color: "#4285F4", bg: "rgba(66,133,244,0.08)"},
  { name: "Salesforce", icon: "fa-brands fa-salesforce", color: "#00A1E0", bg: "rgba(0,161,224,0.08)" },
  { name: "Atlassian",  icon: "fa-brands fa-atlassian",  color: "#0052CC", bg: "rgba(0,82,204,0.08)"  },
];

export default function Partners() {
  return (
    <section className="partners-clean">
      <div className="container">
        <div className="partners-clean-header">
          <p className="eyebrow">Technology Partners</p>
          <h2>Powered by the world&apos;s leading platforms</h2>
          <p className="partners-clean-desc">
            We implement, optimize, and integrate the technologies that drive enterprise transformation.
          </p>
        </div>

        <div className="partners-clean-grid">
          {partners.map((p) => (
            <div
              key={p.name}
              className="partner-clean-card"
              style={{ "--partner-bg": p.bg, "--partner-color": p.color } as React.CSSProperties}
            >
              <div className="partner-clean-icon-wrap">
                <i className={`${p.icon} partner-clean-icon`} style={{ color: p.color }} />
              </div>
              <span className="partner-clean-name">{p.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
