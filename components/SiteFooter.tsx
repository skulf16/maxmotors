import { footer, nav, site } from "@/lib/content";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <p className="footer-claim">{footer.claim}</p>
          </div>
          <div>
            <p className="footer-blurb">{footer.blurb}</p>
            <div className="footer-cols">
              <div className="footer-col">
                <h4>Werkstatt</h4>
                {nav.map((l) => (
                  <a key={l.href} href={l.href}>
                    {l.label}
                  </a>
                ))}
              </div>
              <div className="footer-col">
                <h4>Kontakt</h4>
                <a href={site.phoneHref}>{site.phoneLabel}</a>
                <a href={`mailto:${site.email}`}>{site.email}</a>
                <p>
                  {site.street}
                  <br />
                  {site.zip} Berlin
                </p>
              </div>
              <div className="footer-col">
                <h4>Rechtliches</h4>
                {footer.legal.map((l) => (
                  <a key={l.href} href={l.href}>
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {site.name}, Berlin · Freie Kfz-Meisterwerkstatt
          </span>
          <span className="mono">
            Made with Benzin im Blut — vom Alltagsauto bis 300+ PS
          </span>
        </div>
      </div>
    </footer>
  );
}
