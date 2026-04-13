"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

const CareersApplyModal = dynamic(() => import("./CareersApplyModal"), { ssr: false });

const openings = [
  { title: "ServiceNow Architect",     location: "Toronto, CA (Remote)", type: "Full-time", dept: "Digital Transformation" },
  { title: "GRC Consultant",           location: "Toronto, CA (Hybrid)", type: "Full-time", dept: "Strategy Consulting"    },
  { title: "SAFe Program Consultant",  location: "Toronto, CA (Remote)", type: "Contract",  dept: "Training & Coaching"    },
  { title: "Cloud Migration Engineer", location: "Toronto, CA (Hybrid)", type: "Full-time", dept: "Digital Transformation" },
  { title: "Cybersecurity Analyst",    location: "Toronto, CA (Hybrid)", type: "Full-time", dept: "Strategy Consulting"    },
  { title: "Agile Coach",              location: "Global (Remote)",      type: "Contract",  dept: "Training & Coaching"    },
];

interface Props {
  spontaneous?: boolean;
}

export default function CareersOpenings({ spontaneous }: Props) {
  const [activeJob, setActiveJob] = useState<string | null>(null);

  if (spontaneous) {
    return (
      <>
        <button
          className="btn-primary"
          style={{ marginTop: 24 }}
          onClick={() => setActiveJob("Spontaneous Application")}
        >
          <i className="fa-solid fa-file-arrow-up" style={{ marginRight: 8 }} />
          Send Your Application
        </button>
        {activeJob && (
          <CareersApplyModal job={activeJob} onClose={() => setActiveJob(null)} />
        )}
      </>
    );
  }

  return (
    <>
      <div className="careers-list">
        {openings.map((o) => (
          <div className="career-row" key={o.title}>
            <div className="career-info">
              <h3>{o.title}</h3>
              <div className="career-meta">
                <span><i className="fa-solid fa-location-dot" /> {o.location}</span>
                <span><i className="fa-solid fa-briefcase" /> {o.dept}</span>
                <span className={`career-type ${o.type === "Contract" ? "contract" : "fulltime"}`}>
                  {o.type}
                </span>
              </div>
            </div>
            <button
              className="btn-primary"
              style={{ marginTop: 0, whiteSpace: "nowrap" }}
              onClick={() => setActiveJob(o.title)}
            >
              Apply Now
            </button>
          </div>
        ))}
      </div>

      {activeJob && (
        <CareersApplyModal job={activeJob} onClose={() => setActiveJob(null)} />
      )}
    </>
  );
}
