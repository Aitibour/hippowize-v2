import Hero from "@/components/Hero";
import About from "@/components/About";
import Brands from "@/components/Brands";
import Services from "@/components/Services";
import Creative from "@/components/Creative";
import Team from "@/components/Team";
import Cover from "@/components/Cover";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main id="top">
      <Hero />
      <About />
      <Brands />
      <Services />
      <Creative />
      <Team />
      <Cover />
      <Testimonials />
      <Blog />
      <Footer />
    </main>
  );
}
