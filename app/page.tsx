import Process from "@/components/Process";
import Hero from "../components/Hero";
import Services from "@/components/Services";
import Section from "@/ui/Section";
import FeaturedAttributes from "@/components/FeaturedAttributes";
import Cheap from "@/components/Cheap";
import MoreBuy from "@/components/MoreBuy";
import Coverage from "@/components/Coverage";
import Warranty from "@/components/Warranty";
import StartBrowsing from "@/components/StartBrowsing";
import WhoWeAre from "@/components/WhoWeAre";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Section>
        <Hero/>
      </Section>
      <Section>
        <Process />
      </Section>
      <Section>
        <FeaturedAttributes />
      </Section>
      <Section>
        <Services />
      </Section>
      <Section>
        <Cheap />
      </Section>
      <Section>
        <MoreBuy />
      </Section>
      <Section>
        <Coverage />
      </Section>
      <Section>
        <Warranty />
      </Section>
      <Section>
        <WhoWeAre />
      </Section>
      <Section>
        <StartBrowsing />
      </Section>
    </main>
  )
}
