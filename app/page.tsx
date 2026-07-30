import type { Metadata } from "next";
import { ContactBand, SiteFooter, SiteHeader } from "./_components/SiteChrome";
import { concerns, plans } from "./_data/site";

export const metadata: Metadata = {
  title: "トップ",
  description:
    "NCEA学習、海外大学進学、留学生活を、現役メルボルン大学生の米山陸が1対1で伴走します。",
};

const paths = [
  {
    number: "01",
    label: "SUPPORT",
    title: "何を、どう支えるのか",
    text: "NCEA、海外大学進学、留学生活。3つの領域を、一人ひとりの目標に合わせて組み合わせます。",
    href: "/support",
    link: "サポート内容を見る",
  },
  {
    number: "02",
    label: "STORY",
    title: "なぜ、この支援をするのか",
    text: "Year 11で行き詰まったところから、学び方を組み直した本人の経験と指導への考え方。",
    href: "/story",
    link: "本人の経験を読む",
  },
  {
    number: "03",
    label: "RESULTS",
    title: "経験を裏づけるもの",
    text: "2023年に本人が出願した5大学からの合格・奨学金オファーを、条件とともに掲載しています。",
    href: "/results",
    link: "実績を確認する",
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader current="/" />
      <main>
        <section className="home-hero" aria-labelledby="hero-title">
          <div className="section-shell home-hero-grid">
            <div className="hero-copy motion-in">
              <p className="eyebrow">
                NCEA &amp; INTERNATIONAL UNIVERSITY MENTOR
              </p>
              <h1 id="hero-title">
                つまずいた経験があるから、
                <br />
                <em>進める道筋</em>を一緒につくれる。
              </h1>
              <p className="hero-lead">
                NCEA学習、海外大学進学、留学生活を別々に考えず、
                今の状況から次に取るべき行動まで、1対1で整理します。
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="/contact#inquiry">
                  無料相談を申し込む
                  <span aria-hidden="true">↗</span>
                </a>
                <a className="text-link" href="/support">
                  サポート内容を見る
                  <span aria-hidden="true">→</span>
                </a>
              </div>
              <p className="hero-note">
                オンライン個別サポート / 日本語対応 / 初回相談 約30分
              </p>
            </div>

            <aside className="portrait-card motion-in" aria-label="指導者プロフィール">
              <div
                className="portrait-compact"
                role="img"
                aria-label="NCEA・海外大学進学メンター 米山陸"
              />
              <div className="portrait-meta">
                <div>
                  <strong>米山 陸</strong>
                  <span>Riku Yoneyama</span>
                </div>
                <p>
                  University of Melbourne
                  <br />
                  Bachelor of Commerce
                </p>
                <a href="/story">プロフィールを見る →</a>
              </div>
            </aside>
          </div>
        </section>

        <section className="proof-strip" aria-label="本人の2023年出願実績">
          <div className="section-shell proof-grid">
            <div className="proof-intro">
              <span>PERSONAL RECORD</span>
              <p>本人の2023年出願結果</p>
            </div>
            <div className="proof-item">
              <strong>5 / 5</strong>
              <span>出願した5大学すべてに合格</span>
            </div>
            <div className="proof-item">
              <strong>5</strong>
              <span>全大学から奨学金オファー</span>
            </div>
            <div className="proof-item proof-item-wide">
              <strong>Melbourne</strong>
              <span>University of Melbourneへ進学</span>
            </div>
          </div>
        </section>

        <section className="section concerns-section" aria-labelledby="concerns-title">
          <div className="section-shell">
            <div className="section-head">
              <p className="eyebrow">START FROM HERE</p>
              <h2 id="concerns-title">
                「何をすればいいか分からない」
                <br />
                その状態から始められます。
              </h2>
              <p>
                情報を増やす前に、現在地と優先順位を整理する。
                個別サポートだからこそ、共通の正解ではなく、その人の次の一手から考えます。
              </p>
            </div>
            <div className="concern-grid">
              {concerns.map((concern) => (
                <article key={concern.number}>
                  <span>{concern.number}</span>
                  <h3>{concern.title}</h3>
                  <p>{concern.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section path-section" aria-labelledby="path-title">
          <div className="section-shell">
            <div className="section-head compact-head">
              <p className="eyebrow">EXPLORE</p>
              <h2 id="path-title">知りたいことから、お選びください。</h2>
            </div>
            <div className="path-grid">
              {paths.map((path) => (
                <a className="path-card" href={path.href} key={path.number}>
                  <div className="path-card-top">
                    <span>{path.number}</span>
                    <small>{path.label}</small>
                  </div>
                  <h3>{path.title}</h3>
                  <p>{path.text}</p>
                  <strong>
                    {path.link}
                    <span aria-hidden="true">↗</span>
                  </strong>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="story-preview">
          <div className="section-shell story-preview-grid">
            <div>
              <p className="eyebrow light">MY STORY</p>
              <p className="story-kicker">Year 11、完全に行き詰まる。</p>
            </div>
            <div>
              <h2>
                頑張り方ではなく、
                <br />
                学び続けられる仕組みを変えた。
              </h2>
              <p>
                30件のNot Achievedを記録し、英語も進路も見えなかった時期がありました。
                そこから評価基準、目標管理、週次レビューを一つずつ理解し、
                5大学への合格につなげました。
              </p>
              <a className="button button-outline-light" href="/story">
                経験と指導への考え方
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </section>

        <section className="section result-preview" aria-labelledby="result-preview-title">
          <div className="section-shell result-preview-grid">
            <div>
              <p className="eyebrow">PERSONAL RESULTS</p>
              <h2 id="result-preview-title">
                実績は、約束ではなく
                <br />
                経験の根拠として。
              </h2>
            </div>
            <div className="result-preview-copy">
              <p>
                University of Melbourneを含む5大学へ出願し、
                すべてから合格と奨学金オファーを受け取りました。
                サイトでは、本人の結果と指導実績を混同しない形で掲載しています。
              </p>
              <div className="result-preview-list" aria-label="主な実績">
                <span>University of Melbourne</span>
                <span>University of Auckland</span>
                <span>Victoria University of Wellington</span>
              </div>
              <a className="text-link" href="/results">
                5大学の詳細を見る
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </section>

        <section className="home-plan-preview" aria-labelledby="home-plans-title">
          <div className="section-shell home-plan-grid">
            <div>
              <p className="eyebrow light">PLANS &amp; PRICING</p>
              <h2 id="home-plans-title">
                伴走の深さに合わせた、
                <br />
                2つの月額プラン。
              </h2>
              <a className="button button-outline-light" href="/plans">
                プランの詳細を見る
                <span aria-hidden="true">→</span>
              </a>
            </div>
            <div className="home-plan-list">
              {plans.map((plan) => (
                <a href={`/plans#${plan.id}`} key={plan.id}>
                  <div>
                    <span>{plan.name}</span>
                    <strong>{plan.japaneseName}</strong>
                  </div>
                  <p>{plan.cadence}</p>
                  <p>
                    月額 <strong>{plan.price}</strong> 円
                  </p>
                  <i aria-hidden="true">→</i>
                </a>
              ))}
            </div>
          </div>
        </section>

        <ContactBand />
      </main>
      <SiteFooter />
    </>
  );
}
