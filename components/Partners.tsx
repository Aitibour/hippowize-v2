export default function Partners() {
  const partners = [
    { name: "ServiceNow",       icon: "fa-cloud"              },
    { name: "IBM",              icon: "fa-server"             },
    { name: "Microsoft Azure",  icon: "fa-microsoft"          },
    { name: "AWS",              icon: "fa-aws"                },
    { name: "Google Cloud",     icon: "fa-google"             },
    { name: "Atlassian",        icon: "fa-jira"               },
    { name: "Salesforce",       icon: "fa-salesforce"         },
    { name: "SAP",              icon: "fa-sap"                },
  ];

  // Duplicate for seamless loop
  const all = [...partners, ...partners];

  return (
    <section className="partners-section">
      <div className="partners-label">
        <span>Trusted Technology Partners</span>
      </div>
      <div className="partners-track-wrap" aria-label="Partner logos">
        <div className="partners-track">
          {all.map((p, i) => (
            <div className="partner-item" key={`${p.name}-${i}`}>
              <i className={`fa-brands ${p.icon}`} />
              <span>{p.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
