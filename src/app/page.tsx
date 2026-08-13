import { Familiar } from "@/components/Familiar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Why } from "@/components/Why";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <Hero />
        <Familiar />
        <Services />
        <Why />
      </main>
    </div>
  );
}
