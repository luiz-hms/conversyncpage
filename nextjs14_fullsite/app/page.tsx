import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";
import Plans from "../components/Plans";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Plans />
      <Services />
      <Gallery />
      <Contact />
    </>
  );
}
