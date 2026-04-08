const row1 = [
  { name: "ServiceNow",      icon: "fa-cloud"       },
  { name: "Microsoft Azure", icon: "fa-microsoft"   },
  { name: "AWS",             icon: "fa-aws"         },
  { name: "Google Cloud",    icon: "fa-google"      },
  { name: "IBM",             icon: "fa-server"      },
  { name: "Atlassian",       icon: "fa-jira"        },
];

const row2 = [
  { name: "Salesforce",      icon: "fa-salesforce"  },
  { name: "SAP",             icon: "fa-sap"         },
  { name: "GitHub",          icon: "fa-github"      },
  { name: "Slack",           icon: "fa-slack"       },
  { name: "Docker",          icon: "fa-docker"      },
  { name: "Kubernetes",      icon: "fa-dharmachakra"},
];

export default function Partners() {
  const r1 = [...row1, ...row1];
  const r2 = [...row2, ...row2];

  return (
    <section className="partners-v2">
      <div className="container partners-header">
        <span className="partners-line" />
        <p className="partners-label">Trusted Technology Partners</p>
        <span className="partners-line" />
      </div>

      {/* Row 1 — left to right */}
      <div className="partners-track-wrap" aria-label="Technology partners">
        <div className="partners-track">
          {r1.map((p, i) => (
            <div className="partner-chip" key={`r1-${i}`}>
              <i className={`fa-brands ${p.icon}`} />
              <span>{p.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 — right to left */}
      <div className="partners-track-wrap" aria-label="More technology partners">
        <div className="partners-track partners-track-rev">
          {r2.map((p, i) => (
            <div className="partner-chip" key={`r2-${i}`}>
              <i className={`fa-brands ${p.icon}`} />
              <span>{p.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
