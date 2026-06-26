import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Hero from "@/components/sections/Hero";
import TrustMarquee from "@/components/sections/TrustMarquee";
import Usp from "@/components/sections/Usp";
import Positionierung from "@/components/sections/Positionierung";
import Leistungen from "@/components/sections/Leistungen";
import Feature from "@/components/sections/Feature";
import Motorsport from "@/components/sections/Motorsport";
import Kapazitaet from "@/components/sections/Kapazitaet";
import Ablauf from "@/components/sections/Ablauf";
import Warum from "@/components/sections/Warum";
import FaqSection from "@/components/sections/FaqSection";
import Kontakt from "@/components/sections/Kontakt";
import { lackiererei, motorenbau, performance } from "@/lib/content";

export default function Home() {
  return (
    <>
      <span className="edge-rule" aria-hidden />
      <SiteHeader />
      <main>
        <Hero />
        <TrustMarquee />
        <Usp />
        <Positionierung />
        <Leistungen />

        <Feature
          id="motorenbau"
          index={motorenbau.index}
          kicker={motorenbau.kicker}
          headline={motorenbau.headline}
          subhead={motorenbau.subhead}
          paragraphs={motorenbau.paragraphs}
          items={motorenbau.items}
          cta={motorenbau.cta}
        />

        <Feature
          id="performance"
          index={performance.index}
          kicker={performance.kicker}
          headline={performance.headline}
          subhead={performance.subhead}
          paragraphs={performance.paragraphs}
          items={performance.items}
          cta={performance.cta}
          reversed
        />

        <Feature
          id="lackiererei"
          index={lackiererei.index}
          kicker={lackiererei.kicker}
          headline={lackiererei.headline}
          subhead={lackiererei.subhead}
          paragraphs={lackiererei.paragraphs}
          items={lackiererei.items}
          cta={lackiererei.cta}
        />

        <Motorsport />
        <Kapazitaet />
        <Ablauf />
        <Warum />
        <FaqSection />
        <Kontakt />
      </main>
      <SiteFooter />
    </>
  );
}
