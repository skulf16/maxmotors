import Reveal from "./Reveal";

type Props = {
  index: string;
  kicker: string;
  headline: string;
  subhead?: string;
};

export default function SectionHead({ index, kicker, headline, subhead }: Props) {
  return (
    <Reveal className="sec-head">
      <div className="sec-head__top">
        <span className="idx">{index}</span>
        <span className="kicker">{kicker}</span>
      </div>
      <h2 className="h-sec">{headline}</h2>
      {subhead && <p className="lead">{subhead}</p>}
    </Reveal>
  );
}
