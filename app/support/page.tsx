import type { Metadata } from "next";
import {
  ContactBand,
  PageHero,
  SiteFooter,
  SiteHeader,
} from "../_components/SiteChrome";
import { SiteIntro } from "../_components/SiteIntro";
import {
  methods,
  programExamples,
  subjectAreas,
  supportAreas,
} from "../_data/site";

export const metadata: Metadata = {
  title: "サポート内容",
  description:
    "NCEA学習、海外大学進学、留学生活を一つの計画にまとめる、米山陸のオンライン個別サポート。",
};

const subjectGroups = [
  {
    title: "University & Scholarship",
    text: "大学・専攻選び / 出願計画 / 奨学金戦略 / 書類の確認・添削 / 面接準備",
    note: "本人の5大学への出願経験をもとに情報を整理します。",
  },
  {
    title: "Study & Life",
    text: "学習習慣 / 時間管理 / 週次レビュー / 現地生活への適応 / 保護者への進捗共有",
    note: "学習と生活を切り離さず、継続しやすい形を考えます。",
  },
];

export default function SupportPage() {
  return (
    <>
      <SiteIntro />
      <SiteHeader current="/support" />
      <main>
        <PageHero
          eyebrow="SUPPORT"
          currentLabel="サポート"
          title={
            <>
              <span className="page-title-line">教科だけでなく、</span>
              <br className="display-break" />
              <span className="page-title-line">
                <em>学び方と進み方</em>を
              </span>
              <span className="page-title-tail">整える。</span>
            </>
          }
          lead="成績、進路、留学生活は別々の問題ではありません。目標から逆算し、日々の勉強から出願準備までを一つの計画にまとめます。"
        />

        <section className="section audience-section" aria-labelledby="audience-title">
          <div className="section-shell audience-grid">
            <div className="section-head sticky-head">
              <p className="eyebrow">FOR WHOM</p>
              <h2 id="audience-title">こんな悩みを持つ方へ。</h2>
              <p>
                正解を一方的に渡すのではなく、今の状況を理解し、
                自分で進める状態を一緒につくるサポートです。
              </p>
            </div>
            <ul className="audience-list">
              <li>
                <span>01</span>
                <p>NCEAの評価基準や単位の仕組みから理解したい</p>
              </li>
              <li>
                <span>02</span>
                <p>自分に合う大学・専攻・奨学金の選択肢を整理したい</p>
              </li>
              <li>
                <span>03</span>
                <p>計画を立てても続かず、学習習慣から見直したい</p>
              </li>
              <li>
                <span>04</span>
                <p>海外生活の不安も含め、現地経験者に相談したい</p>
              </li>
            </ul>
          </div>
        </section>

        <section className="support-pillars" aria-labelledby="pillars-title">
          <div className="section-shell">
            <div className="section-head light-head">
              <p className="eyebrow light">THREE PILLARS</p>
              <h2 id="pillars-title">3つの領域を、必要に応じて組み合わせる。</h2>
            </div>
            <div className="pillar-grid">
              {supportAreas.map((area) => (
                <article key={area.number}>
                  <span className="pillar-number">{area.number}</span>
                  <p className="pillar-label">{area.title}</p>
                  <h3>{area.lead}</h3>
                  <p>{area.text}</p>
                  <ul>
                    {area.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section method-section" aria-labelledby="method-title">
          <div className="section-shell method-layout">
            <div className="method-title">
              <p className="eyebrow">THE METHOD</p>
              <h2 id="method-title">
                才能ではなく、
                <br className="display-break" />
                <em>再現できる仕組み</em>で進む。
              </h2>
              <p>
                「もっと頑張ろう」で終わらせず、目標、行動、理解、
                振り返りを一つずつ見える形にします。
              </p>
            </div>
            <ol className="method-list">
              {methods.map((method) => (
                <li key={method.number}>
                  <span>{method.number}</span>
                  <div>
                    <h3>{method.title}</h3>
                    <p>{method.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="scope-section" aria-labelledby="scope-title">
          <div className="section-shell">
            <div className="section-head light-head compact-head">
              <p className="eyebrow light">SCOPE</p>
              <h2 id="scope-title">主な指導・相談領域</h2>
            </div>
            <div className="scope-subject-board" aria-label="対応科目一覧">
              <div className="scope-subject-intro">
                <h3>NCEA Subjects</h3>
                <p>
                  1科目から複数科目まで、必要な内容を組み合わせられます。
                </p>
              </div>
              <div className="scope-subject-groups">
                {subjectAreas.map((area) => (
                  <article key={area.category}>
                    <span>{area.title}</span>
                    <p>{area.subjects.join(" / ")}</p>
                  </article>
                ))}
              </div>
              <small>学年・Level・課題内容は初回相談で確認します。</small>
            </div>
            <div className="scope-list">
              {subjectGroups.map((group) => (
                <article key={group.title}>
                  <h3>{group.title}</h3>
                  <p>{group.text}</p>
                  <small>{group.note}</small>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="section program-examples"
          id="program-examples"
          aria-labelledby="program-examples-title"
        >
          <div className="section-shell">
            <div className="section-head">
              <div>
                <p className="eyebrow">PROGRAM EXAMPLES</p>
                <h2 id="program-examples-title">サポートの組み合わせ例</h2>
              </div>
              <p>
                以下は固定コースではなく一例です。得意・苦手、学校の予定、
                進路の優先順位に合わせて内容を調整します。
              </p>
            </div>
            <div className="program-example-grid">
              {programExamples.map((example) => (
                <article key={example.number}>
                  <span>{example.number}</span>
                  <p>{example.subjects}</p>
                  <h3>{example.title}</h3>
                  <small>{example.text}</small>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section boundaries" aria-labelledby="boundaries-title">
          <div className="section-shell boundary-grid">
            <div>
              <p className="eyebrow">A CLEAR PROMISE</p>
              <h2 id="boundaries-title">支援することと、しないこと。</h2>
            </div>
            <div className="boundary-columns">
              <article>
                <span>DO</span>
                <h3>考え方と準備を支える</h3>
                <p>
                  現在地を整理し、選択肢を比較し、実行できる計画へ落とし込みます。
                  書類や課題は、本人の考えが伝わるよう対話しながら改善します。
                </p>
              </article>
              <article>
                <span>DON&apos;T</span>
                <h3>結果を保証・代行しない</h3>
                <p>
                  合格や奨学金の獲得を保証するものではありません。
                  課題や出願書類を本人に代わって作成することも行いません。
                </p>
              </article>
            </div>
          </div>
        </section>

        <ContactBand />
      </main>
      <SiteFooter />
    </>
  );
}
