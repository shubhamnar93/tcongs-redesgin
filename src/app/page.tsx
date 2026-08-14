import { Familiar } from "@/components/Familiar";
import { Faqs } from "@/components/Faqs";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Why } from "@/components/Why";

export default function Home() {
  return (
    <div>
      <main>
        <Hero />
        <Familiar />
        <Services />
        <Why />
        <Faqs />
        <Footer />
      </main>
    </div>
  );
}
