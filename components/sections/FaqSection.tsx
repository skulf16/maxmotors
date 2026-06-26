import { faq } from "@/lib/content";
import Faq from "../Faq";
import Reveal from "../Reveal";
import SectionHead from "../SectionHead";

export default function FaqSection() {
  return (
    <section className="section" id="faq">
      <div className="container">
        <SectionHead
          index={faq.index}
          kicker={faq.kicker}
          headline={faq.headline}
          subhead={faq.subhead}
        />
        <Reveal>
          <Faq items={faq.items} />
        </Reveal>
      </div>
    </section>
  );
}
