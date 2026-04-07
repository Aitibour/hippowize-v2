import Image from "next/image";

const BASE =
  "https://wp.w3layouts.com/execution/wp-content/themes/execution/assets/images";

const members = [
  { img: `${BASE}/team3.jpg`, name: "Alex Morgan", role: "Strategy Consultant", accent: false },
  { img: `${BASE}/team2.jpg`, name: "Jordan Lee", role: "Digital Transformation Lead", accent: true },
  { img: `${BASE}/team4.jpg`, name: "Taylor Smith", role: "Cybersecurity Specialist", accent: false },
  { img: `${BASE}/team1.jpg`, name: "Casey Park", role: "Training & Coaching Lead", accent: false },
];

export default function Team() {
  return (
    <section className="section team" id="team">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Our Teammates</p>
            <h2>Our Creative Team</h2>
          </div>
          <p className="heading-copy">
            Our consultants bring deep expertise across strategy, cybersecurity,
            digital transformation, and coaching — partnering with your
            organization to deliver outcomes that last.
          </p>
        </div>
        <div className="team-grid">
          {members.map((m) => (
            <article className="team-card" key={m.name}>
              <div className="team-media">
                <Image src={m.img} alt={m.name} width={400} height={400} />
                <div className="team-overlay">
                  <a href="#" aria-label="LinkedIn">
                    <i className="fa-brands fa-linkedin-in" />
                  </a>
                  <a href="#" aria-label="Twitter">
                    <i className="fa-brands fa-twitter" />
                  </a>
                  <a href="#" aria-label="Facebook">
                    <i className="fa-brands fa-facebook-f" />
                  </a>
                </div>
              </div>
              <div className="team-body">
                <h3 className={m.accent ? "accent" : undefined}>{m.name}</h3>
                <p>{m.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
