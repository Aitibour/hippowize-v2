const partners = [
  { name: "ServiceNow",      slug: "servicenow",      color: "#62D84E" },
  { name: "Microsoft Azure", slug: "microsoftazure",  color: "#0078D4" },
  { name: "AWS",             slug: "amazonaws",       color: "#FF9900" },
  { name: "Google Cloud",    slug: "googlecloud",     color: "#4285F4" },
  { name: "IBM",             slug: "ibm",             color: "#052FAD" },
  { name: "Atlassian",       slug: "atlassian",       color: "#0052CC" },
  { name: "Salesforce",      slug: "salesforce",      color: "#00A1E0" },
  { name: "SAP",             slug: "sap",             color: "#0FAAFF" },
  { name: "GitHub",          slug: "github",          color: "#181717" },
  { name: "Slack",           slug: "slack",           color: "#4A154B" },
  { name: "Docker",          slug: "docker",          color: "#2496ED" },
  { name: "Kubernetes",      slug: "kubernetes",      color: "#326CE5" },
];

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

        <div className="partners-grid">
          {partners.map(p => (
            <div className="partner-card" key={p.name}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://cdn.simpleicons.org/${p.slug}/${p.color.replace("#", "")}`}
                alt={`${p.name} logo`}
                width={36}
                height={36}
                loading="lazy"
                className="partner-logo-img"
              />
              <span className="partner-name">{p.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
