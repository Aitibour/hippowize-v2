import Image from "next/image";

const BASE =
  "https://wp.w3layouts.com/execution/wp-content/uploads/sites/39/2021/04";

const posts = [
  { img: `${BASE}/blog1.jpg`, alt: "Why Every Organization Needs a VMO — article thumbnail", title: "Why Every Organization Needs a VMO" },
  { img: `${BASE}/blog2.jpg`, alt: "AI-Driven Transformation: Where to Start — article thumbnail", title: "AI-Driven Transformation: Where to Start" },
];

export default function Blog() {
  return (
    <section className="section blog">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Insights &amp; Thought Leadership</p>
            <h2>Latest Articles</h2>
          </div>
          <p className="heading-copy">
            Perspectives from our consultants on the trends, challenges, and
            opportunities shaping organizational transformation today.
          </p>
        </div>
        <div className="blog-grid">
          {posts.map((post) => (
            <article className="blog-card" key={post.title}>
              <div className="blog-card-image">
                <Image
                  src={post.img}
                  alt={post.alt}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
              <div className="blog-body">
                <span className="blog-title">{post.title}</span>
                <div className="blog-meta">
                  <span className="blog-coming-soon">Coming soon</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
