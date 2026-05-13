import { Navbar } from "@/components/ui/Navbar";
import { Hero } from "@/components/sections/Hero";
import { SystemsNominal } from "@/components/sections/SystemsNominal";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SystemsNominal />
        <Projects />
        <Experience />
      </main>
      <Footer />
    </>
  );
}
