"use client";

import Image from "next/image";
import { useState } from "react";

const BASE =
  "https://wp.w3layouts.com/execution/wp-content/themes/execution/assets/images";

const slides = [
  {
    quote: "Strategy that delivered real outcomes",
    body: "Hippowize helped us transition from a project-based PMO to a value-driven VMO. The impact on executive alignment and delivery speed was immediate.",
    img: `${BASE}/testi1.jpg`,
    name: "Sarah Thompson",
    location: "Toronto, Canada",
  },
  {
    quote: "Our ServiceNow rollout exceeded expectations",
    body: "The Hippowize team embedded with us from day one. Their delivery expertise and practical approach made our ServiceNow implementation a success.",
    img: `${BASE}/testi2.jpg`,
    name: "Marcus Osei",
    location: "Montreal, Canada",
  },
  {
    quote: "Best Agile coaching we've experienced",
    body: "The training program was tailored to our team's maturity level. We now operate with genuine agility — not just the vocabulary.",
    img: `${BASE}/testi3.jpg`,
    name: "Priya Nair",
    location: "Dubai, UAE",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  function goTo(index: number) {
    setCurrent((index + slides.length) % slides.length);
  }

  return (
    <section className="section testimonials" id="testimonials">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Our Clients&apos; Testimonials</p>
            <h2>What People Say</h2>
          </div>
          <p className="heading-copy">
            We measure our success by the outcomes our clients achieve. Here&apos;s
            what leaders across sectors say about working with Hippowize.
          </p>
        </div>

        <div className="testimonial-shell">
          <button
            className="slider-arrow"
            aria-label="Previous testimonial"
            onClick={() => goTo(current - 1)}
          >
            <i className="fa-solid fa-arrow-left" />
          </button>

          <div className="testimonial-viewport">
            <div
              className="testimonial-track"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {slides.map((s) => (
                <article className="testimonial-card" key={s.name}>
                  <div className="quote-box">
                    <i className="fa-solid fa-quote-left" />
                    <h3>{s.quote}</h3>
                    <p>{s.body}</p>
                  </div>
                  <div className="person">
                    <Image
                      src={s.img}
                      alt={s.name}
                      width={70}
                      height={70}
                      style={{ borderRadius: "50%", objectFit: "cover" }}
                    />
                    <div>
                      <strong>{s.name}</strong>
                      <span>{s.location}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <button
            className="slider-arrow"
            aria-label="Next testimonial"
            onClick={() => goTo(current + 1)}
          >
            <i className="fa-solid fa-arrow-right" />
          </button>
        </div>

        <div className="slider-dots" aria-label="Testimonial navigation">
          {slides.map((s, i) => (
            <button
              key={s.name}
              className={i === current ? "active" : undefined}
              aria-label={`Go to testimonial ${i + 1}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
