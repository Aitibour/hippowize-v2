import Image from "next/image";

const BASE =
  "https://wp.w3layouts.com/execution/wp-content/themes/execution/assets/images";

const services = [
  {
    img: `${BASE}/s4.jpg`,
    alt: "Strategy consulting",
    tag: "warm",
    label: "Strategy",
    title: "Strategy Consulting",
    body: "Cybersecurity, GRC, and PMO-to-VMO transitions that align your technology investments with lasting business value.",
  },
  {
    img: `${BASE}/s5.jpg`,
    alt: "Digital transformation",
    tag: "blue",
    label: "Digital",
    title: "Digital Transformation",
    body: "ServiceNow, AI, Data, Cloud, and Automation — on-demand specialists who deliver, not just advise.",
  },
  {
    img: `${BASE}/s2.jpg`,
    alt: "Training and coaching",
    tag: "green",
    label: "Training",
    title: "Training & Coaching",
    body: "Jira, Confluence, Agile, Scrum, and SAFe — building the capability your teams need to sustain change.",
  },
];

export default function Services() {
  return (
    <section className="section services" id="services">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Our Expertise</p>
            <h2>Our Best Services</h2>
          </div>
          <p className="heading-copy">
            We deliver end-to-end consulting and transformation services tailored
            to your organization&apos;s unique challenges — from strategy and
            cybersecurity to digital platforms and workforce capability.
          </p>
        </div>
        <div className="services-grid">
          {services.map((s) => (
            <article className="service-card" key={s.title}>
              <Image src={s.img} alt={s.alt} width={800} height={500} />
              <div className="service-body">
                <span className={`tag ${s.tag}`}>{s.label}</span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
