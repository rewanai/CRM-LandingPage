import { Navbar17 } from "@/components/navbar";
import { Hero223 } from "@/components/hero";
import { Feature10 } from "@/components/feature";
import { Feature204 } from "@/components/feature-advanced";
import { Feature130 } from "@/components/feature-integrations";
import { Feature252 } from "@/components/feature252";
import { Footer8 } from "@/components/footer";
import { Pricing2 } from "@/components/feature128";
import { Feature278 } from "@/components/feature278";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Navbar17 />
      <Hero223 />
      <Feature10 />
      <Feature278 />
      <Pricing2 />
      <Feature130 />

      <Feature204 />

      <Feature252 />
      <Footer8 />
    </main>
  );
}
