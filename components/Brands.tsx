import Image from "next/image";

const BASE =
  "https://wp.w3layouts.com/execution/wp-content/themes/execution/assets/images";

const logos = [
  { src: `${BASE}/logo1.png`, alt: "Technology partner logo" },
  { src: `${BASE}/logo2.png`, alt: "Strategic partner logo" },
  { src: `${BASE}/logo3.png`, alt: "Platform partner logo" },
  { src: `${BASE}/logo4.png`, alt: "Solution partner logo" },
  { src: `${BASE}/logo5.png`, alt: "Industry partner logo" },
  { src: `${BASE}/logo1.png`, alt: "Alliance partner logo" },
];

export default function Brands() {
  return (
    <section className="section brands">
      <div className="container">
        <div className="brand-grid">
          {logos.map((logo) => (
            <Image
              key={logo.alt}
              src={logo.src}
              alt={logo.alt}
              width={120}
              height={50}
              style={{ margin: "0 auto", opacity: 0.85 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
