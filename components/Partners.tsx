const partners = [
  {
    name: "ServiceNow",
    logo: "https://cdn.simpleicons.org/servicenow/62D84E",
    url: "#",
  },
  {
    name: "AWS",
    logo: "https://cdn.simpleicons.org/amazonwebservices/FF9900",
    url: "#",
  },
  {
    name: "Microsoft",
    logo: "https://cdn.simpleicons.org/microsoft/00A4EF",
    url: "#",
  },
  {
    name: "Google Cloud",
    logo: "https://cdn.simpleicons.org/googlecloud/4285F4",
    url: "#",
  },
  {
    name: "Salesforce",
    logo: "https://cdn.simpleicons.org/salesforce/00A1E0",
    url: "#",
  },
  {
    name: "Atlassian",
    logo: "https://cdn.simpleicons.org/atlassian/0052CC",
    url: "#",
  },
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
            <div key={p.name} className="partner-clean-card">
              <div className="partner-clean-logo-wrap">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.logo}
                  alt={p.name}
                  width={72}
                  height={72}
                  className="partner-clean-img"
                />
              </div>
              <span className="partner-clean-name">{p.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
