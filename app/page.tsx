import Hero from "@/components/Hero";
import About from "@/components/About";
import Partners from "@/components/Partners";
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
      <Partners />
      <Services />
      <Creative />
      <Testimonials />
      <Cover />
      <Footer />
    </main>
  );
}
