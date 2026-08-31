/* eslint-disable @next/next/no-html-link-for-pages */
import { navigation } from "../_data/site";
import { BrandMark } from "./BrandMark";

type SiteHeaderProps = {
  current?: string;
};

export function SiteHeader({ current = "/" }: SiteHeaderProps) {
  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="wordmark" href="/" aria-label="トップページへ">
          <BrandMark />
        </a>

        <nav className="desktop-nav" aria-label="メインナビゲーション">
          {navigation.map((item) => (
            <a
              href={item.href}
              key={item.href}
              aria-current={current === item.href ? "page" : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a className="header-cta" href="/contact#inquiry">
          無料相談
          <span aria-hidden="true">↗</span>
        </a>

        <details className="mobile-menu">
          <summary aria-label="メニューを開く">
            <span />
            <span />
          </summary>
          <nav aria-label="モバイルナビゲーション">
            <a href="/" aria-current={current === "/" ? "page" : undefined}>
              トップ
            </a>
            {navigation.map((item) => (
              <a
                href={item.href}
                key={item.href}
                aria-current={current === item.href ? "page" : undefined}
              >
                {item.label}
              </a>
            ))}
            <a className="mobile-menu-cta" href="/contact#inquiry">
              無料相談を申し込む
            </a>
          </nav>
        </details>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="section-shell footer-grid">
        <div className="footer-brand">
          <BrandMark inverse />
          <strong>Riku Yoneyama</strong>
          <p>NCEA・海外大学進学 オンライン個別サポート</p>
        </div>
        <nav aria-label="フッターナビゲーション">
          {navigation.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="footer-meta">
          <p>University of Melbourne</p>
          <p>Online / Japanese</p>
          <p>© {new Date().getFullYear()} Riku Yoneyama</p>
        </div>
      </div>
    </footer>
  );
}

export function ContactBand() {
  return (
    <section className="contact-band" aria-labelledby="contact-band-title">
      <div className="section-shell contact-band-grid">
        <div>
          <p className="eyebrow light">FREE CONSULTATION</p>
          <h2 id="contact-band-title">
            まだ言葉になっていない悩みから、
            <br className="display-break" />
            一緒に整理します。
          </h2>
        </div>
        <div className="contact-band-copy">
          <p>
            初回相談では、現在地と次の一歩を約30分で確認します。
            相談したからといって、すぐに始める必要はありません。
          </p>
          <a
            className="button button-light"
            href="mailto:yoneriku19@gmail.com?subject=無料相談について"
          >
            メールで無料相談
            <span aria-hidden="true">↗</span>
          </a>
          <div className="contact-details">
            <a href="mailto:yoneriku19@gmail.com">yoneriku19@gmail.com</a>
            <a href="tel:+819012906147">090-1290-6147</a>
          </div>
        </div>
      </div>
    </section>
  );
}

type PageHeroProps = {
  eyebrow: string;
  title: React.ReactNode;
  lead: string;
  currentLabel: string;
};

export function PageHero({
  eyebrow,
  title,
  lead,
  currentLabel,
}: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="section-shell">
        <p className="breadcrumb">
          <a href="/">トップ</a>
          <span aria-hidden="true">/</span>
          <span>{currentLabel}</span>
        </p>
        <div className="page-hero-copy motion-in">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p>{lead}</p>
        </div>
      </div>
    </section>
  );
}
