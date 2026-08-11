import type { Metadata } from "next";
import { ContactBand, SiteFooter, SiteHeader } from "./_components/SiteChrome";
import { SiteIntro } from "./_components/SiteIntro";
import { concerns, plans, subjectAreas } from "./_data/site";

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
      <SiteIntro
        number="01"
        section="WELCOME"
        quote="日本から世界へ、選択肢を無限大に。"
        detail="NCEA・海外大学進学・留学生活を、一つの道筋に。"
        tone="sky"
      />
      <SiteHeader current="/" />
      <main>
        <section className="home-hero" aria-labelledby="hero-title">
          <div className="section-shell home-hero-grid">
            <div className="hero-copy motion-in">
              <p className="eyebrow">
                NCEA &amp; INTERNATIONAL UNIVERSITY MENTOR
              </p>
              <h1 id="hero-title">
                <span className="hero-line">つまずいた経験から、</span>
                <br className="hero-break" />
                <span className="hero-line">
                  <em>進める道筋</em>を、
                </span>
                <span className="hero-mobile-tail">一緒に。</span>
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
                オンライン個別サポート / 日本語対応 / {" "}
                <span>初回相談 約30分</span>
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

        <section className="subject-overview" aria-labelledby="subjects-title">
          <div className="section-shell">
            <div className="subject-overview-head">
              <div>
                <p className="eyebrow">SUBJECTS AT A GLANCE</p>
                <h2 id="subjects-title">対応科目を、ひと目で。</h2>
              </div>
              <p>
                1科目だけでも、複数科目と進路相談を組み合わせても大丈夫です。
                現在地と目標に合わせて、必要な内容を一緒に組み立てます。
              </p>
            </div>
            <div className="subject-overview-grid">
              {subjectAreas.map((area) => (
                <article key={area.category}>
                  <span>{area.category}</span>
                  <h3>{area.title}</h3>
                  <p>{area.subjects.join(" / ")}</p>
                </article>
              ))}
            </div>
            <div className="subject-overview-footer">
              <p>学年・Level・課題内容は、初回相談で確認します。</p>
              <a className="text-link" href="/support#program-examples">
                科目の組み合わせ例を見る
                <span aria-hidden="true">→</span>
              </a>
            </div>
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
                <br className="display-break" />
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
                <br className="display-break" />
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
                <br className="display-break" />
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
                <br className="display-break" />
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
