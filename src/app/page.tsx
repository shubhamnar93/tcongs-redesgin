import { Familiar } from "@/components/Familiar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <Hero />
        <Familiar />
        <Services />
      </main>
    </div>
  );
}
