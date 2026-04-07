import Image from "next/image";

const BASE =
  "https://wp.w3layouts.com/execution/wp-content/themes/execution/assets/images";

const logos = [
  { src: `${BASE}/logo1.png`, alt: "Partner logo 1" },
  { src: `${BASE}/logo2.png`, alt: "Partner logo 2" },
  { src: `${BASE}/logo3.png`, alt: "Partner logo 3" },
  { src: `${BASE}/logo4.png`, alt: "Partner logo 4" },
  { src: `${BASE}/logo5.png`, alt: "Partner logo 5" },
  { src: `${BASE}/logo1.png`, alt: "Partner logo 6" },
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
