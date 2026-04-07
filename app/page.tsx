import Hero from "@/components/Hero";
import About from "@/components/About";
import Brands from "@/components/Brands";
import Services from "@/components/Services";
import Creative from "@/components/Creative";
import Cover from "@/components/Cover";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main id="top">
      <Hero />
      <About />
      <Brands />
      <Services />
      <Creative />
      <Cover />
      <Testimonials />
      <Footer />
    </main>
  );
}
