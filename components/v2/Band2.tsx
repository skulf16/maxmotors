import Image from "next/image";

type Props = {
  id?: string;
  image: string;
  alt: string;
  center?: boolean;
  children: React.ReactNode;
};

/** Vollbild-Bildband mit dunklem Verlauf und Text-Overlay. */
export default function Band2({ id, image, alt, center = false, children }: Props) {
  return (
    <section className={`c-band ${center ? "c-band--center" : ""}`} id={id}>
      <div className="c-band__media">
        <Image src={image} alt={alt} fill sizes="100vw" quality={80} />
      </div>
      <div className="c-band__scrim" aria-hidden />
      <div className="c-band__in">
        <div className="c-band__content">{children}</div>
      </div>
    </section>
  );
}
