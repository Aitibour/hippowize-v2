const row1 = [
  { name: "ServiceNow", icon: "fa-solid fa-gears",          color: "#62D84E" },
  { name: "AWS",        icon: "fa-brands fa-aws",            color: "#FF9900" },
  { name: "Microsoft",  icon: "fa-brands fa-microsoft",      color: "#0078D4" },
  { name: "Google",     icon: "fa-brands fa-google",         color: "#4285F4" },
  { name: "Salesforce", icon: "fa-brands fa-salesforce",     color: "#00A1E0" },
  { name: "SAP",        icon: "fa-solid fa-chart-column",    color: "#0FAAFF" },
  { name: "IBM",        icon: "fa-solid fa-server",          color: "#052FAD" },
];

const row2 = [
  { name: "Atlassian",  icon: "fa-brands fa-atlassian",      color: "#0052CC" },
  { name: "Jira",       icon: "fa-brands fa-jira",           color: "#0065FF" },
  { name: "GitHub",     icon: "fa-brands fa-github",         color: "#24292F" },
  { name: "Docker",     icon: "fa-brands fa-docker",         color: "#2496ED" },
  { name: "Slack",      icon: "fa-brands fa-slack",          color: "#611f69" },
  { name: "Kubernetes", icon: "fa-solid fa-dharmachakra",    color: "#326CE5" },
  { name: "Oracle",     icon: "fa-solid fa-database",        color: "#C74634" },
];

// Doubled for seamless infinite loop
const track1 = [...row1, ...row1];
const track2 = [...row2, ...row2];

export default function Partners() {
  return (
    <section className="partners-v2">
      <div className="container">
        <div className="partners-heading">
          <span className="partners-heading-line" />
          <h2 className="partners-heading-txt">Trusted Technology Partners</h2>
          <span className="partners-heading-line" />
        </div>
        <p className="partners-sub">We deliver transformation through the world&apos;s leading technology platforms.</p>
      </div>

      {/* Row 1 — scrolls left */}
      <div className="partners-marquee" aria-hidden="true">
        <div className="partners-track partners-track--fwd">
          {track1.map((p, i) => (
            <div className="partner-chip" key={i}>
              <i className={`${p.icon} partner-chip-icon`} style={{ color: p.color }} />
              <span className="partner-chip-name">{p.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls right */}
      <div className="partners-marquee" aria-hidden="true">
        <div className="partners-track partners-track--rev">
          {track2.map((p, i) => (
            <div className="partner-chip" key={i}>
              <i className={`${p.icon} partner-chip-icon`} style={{ color: p.color }} />
              <span className="partner-chip-name">{p.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
