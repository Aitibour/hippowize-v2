import SubpageLayout from "@/components/SubpageLayout";

const solutions = [
  { icon: "fa-shield-halved",  title: "Financial Cybersecurity",  body: "SOC 2, PCI-DSS, and OSFI-aligned security programs protecting financial data and customer assets." },
  { icon: "fa-scale-balanced", title: "Regulatory Compliance",    body: "GRC frameworks and compliance automation for OSFI, FINTRAC, MiFID II, and Basel III obligations." },
  { icon: "fa-ticket",         title: "ServiceNow for FinServ",   body: "ITSM, GRC, and IRM modules configured for financial services workflows and audit requirements." },
  { icon: "fa-robot",          title: "AI & Risk Analytics",      body: "Fraud detection, credit risk modeling, and operational risk analytics powered by modern AI platforms." },
  { icon: "fa-arrows-spin",    title: "Agile at Scale",           body: "SAFe implementations that bring regulatory governance into agile delivery without sacrificing velocity." },
  { icon: "fa-cloud",          title: "Cloud Compliance",         body: "Compliant cloud migration strategies that satisfy regulatory requirements while reducing infrastructure costs." },
];

export default function FinancialServicesPage() {
  return (
    <SubpageLayout
      eyebrow="Industries"
      title="Financial Services"
      description="Hippowize helps banks, insurers, and financial institutions modernize operations, strengthen compliance, and accelerate digital banking strategies."
      breadcrumbs={[{ label: "Industry", href: "/industry/financial-services" }, { label: "Financial Services", href: "/industry/financial-services" }]}
      accent="#7C3AED"
    >
      <section className="sp-section">
        <div className="container">
          <div className="sp-intro-grid">
            <div>
              <p className="eyebrow">The Challenge</p>
              <h2>Compliance-first transformation in financial services</h2>
              <p>Financial institutions operate in one of the most heavily regulated and scrutinized environments in any industry. Every transformation initiative must balance innovation with regulatory obligation, operational resilience, and customer trust.</p>
              <p>Hippowize brings financial sector expertise and a compliance-first delivery model — helping you modernize without creating regulatory risk.</p>
              <a href="https://calendly.com/hippowize" target="_blank" rel="noreferrer" className="btn-primary" style={{ marginTop: 28 }}>Talk to a FinServ Specialist</a>
            </div>
            <div className="sp-highlight-box">
              <i className="fa-solid fa-landmark sp-highlight-icon" />
              <h3>Financial Sector Expertise</h3>
              <p>We understand the regulatory landscape — from OSFI and FINTRAC in Canada to PCI-DSS and MiFID II globally.</p>
              <ul className="sp-check-list">
                <li><i className="fa-solid fa-check" /> Regulatory compliance specialists</li>
                <li><i className="fa-solid fa-check" /> Core banking modernization</li>
                <li><i className="fa-solid fa-check" /> Risk & control frameworks</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="sp-section sp-alt">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p className="eyebrow">Solutions</p>
            <h2>What we deliver for financial services</h2>
          </div>
          <div className="sp-grid-3">
            {solutions.map((s) => (
              <div className="sp-capability-card" key={s.title}>
                <div className="sp-cap-icon"><i className={`fa-solid ${s.icon}`} /></div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="sp-cta-band">
        <div className="container">
          <h2>Let&apos;s modernize your financial operations</h2>
          <p>Book a discovery session with one of our financial services specialists.</p>
          <a href="https://calendly.com/hippowize" target="_blank" rel="noreferrer" className="btn-primary">Book a Free Consultation</a>
        </div>
      </section>
    </SubpageLayout>
  );
}
