import type { Metadata } from "next";
import {
  ContactBand,
  PageHero,
  SiteFooter,
  SiteHeader,
} from "../_components/SiteChrome";
import { plans, studentVoices } from "../_data/site";

export const metadata: Metadata = {
  title: "料金プラン",
  description:
    "週1回60分のスタンダードコースと、週1回120分のアドバンスコース。料金、授業内容、サポート範囲を分かりやすく掲載しています。",
};

const comparison = [
  {
    label: "オンライン授業",
    standard: "週1回・60分",
    advanced: "週1回・120分",
  },
  {
    label: "学習計画",
    standard: "目標に合わせて設計",
    advanced: "週単位で作成・更新",
  },
  {
    label: "課題サポート",
    standard: "添削＋改善アドバイス",
    advanced: "作成・添削・理解不足の分析",
  },
  {
    label: "チャット相談",
    standard: "回数制限なし",
    advanced: "回数制限なし＋カウンセリング",
  },
  {
    label: "保護者向け共有",
    standard: "必要に応じて相談",
    advanced: "授業後レポート",
  },
];

export default function PlansPage() {
  return (
    <>
      <SiteHeader current="/plans" />
      <main>
        <PageHero
          eyebrow="PLANS & PRICING"
          currentLabel="料金プラン"
          title={
            <>
              必要な伴走の深さで、
              <br />
              <em>2つのプラン</em>から選ぶ。
            </>
          }
          lead="毎週の授業を軸に進めるスタンダードと、計画・課題・振り返りまで深く伴走するアドバンス。初回相談で、今の状況に必要な支援を一緒に確認します。"
        />

        <section className="section plan-section" aria-labelledby="plans-title">
          <div className="section-shell">
            <div className="section-head plan-head">
              <div>
                <p className="eyebrow">MONTHLY PLANS</p>
                <h2 id="plans-title">料金とサポート内容</h2>
              </div>
              <p>
                どちらもオンラインで実施します。アドバンスは、
                テスト前の授業時間変更についても相談できます。
              </p>
            </div>

            <div className="plan-grid">
              {plans.map((plan, index) => (
                <article
                  className={plan.id === "advanced" ? "featured-plan" : ""}
                  id={plan.id}
                  key={plan.id}
                >
                  <div className="plan-topline">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    {plan.id === "advanced" && <small>DEEP SUPPORT</small>}
                  </div>
                  <p className="plan-en">{plan.name}</p>
                  <h3>{plan.japaneseName}</h3>
                  <div className="plan-price">
                    <span>月額</span>
                    <strong>{plan.price}</strong>
                    <span>円</span>
                  </div>
                  <p className="plan-cadence">{plan.cadence}・オンライン</p>
                  <p className="plan-lead">{plan.lead}</p>
                  <ul>
                    {plan.features.map((feature) => (
                      <li key={feature}>
                        <i aria-hidden="true">✓</i>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a className="button button-primary" href="/contact#inquiry">
                    このプランを相談する
                    <span aria-hidden="true">↗</span>
                  </a>
                </article>
              ))}
            </div>

            <div className="price-notes">
              <p>
                ※ 料金の税込・税別、支払方法、開始時期は初回相談時にご確認ください。
              </p>
              <p>
                ※ チャットの返信時間は時差や相談内容により前後する場合があります。
              </p>
              <p>※ 受け入れ可能人数に達した場合は、募集を終了します。</p>
            </div>
          </div>
        </section>

        <section className="comparison-section" aria-labelledby="comparison-title">
          <div className="section-shell">
            <div className="section-head light-head comparison-head">
              <div>
                <p className="eyebrow light">COMPARE</p>
                <h2 id="comparison-title">2つのプランを比較する</h2>
              </div>
              <p>支援範囲の違いを、項目ごとに確認できます。</p>
            </div>
            <div className="comparison-labels" aria-hidden="true">
              <span>項目</span>
              <span>Standard</span>
              <span>Advanced</span>
            </div>
            <div className="comparison-list">
              {comparison.map((item) => (
                <article key={item.label}>
                  <h3>{item.label}</h3>
                  <p>
                    <small>Standard</small>
                    {item.standard}
                  </p>
                  <p>
                    <small>Advanced</small>
                    {item.advanced}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section trial-section" aria-labelledby="trial-title">
          <div className="section-shell trial-grid">
            <div>
              <p className="eyebrow">TRIAL LESSON</p>
              <h2 id="trial-title">
                まずは、無料体験で
                <br />
                進め方を確かめる。
              </h2>
            </div>
            <div>
              <p>
                現在の課題を整理し、実際の考え方や学習計画のつくり方を体験できます。
                プランを決めてから相談する必要はありません。
              </p>
              <a className="text-link" href="/contact#inquiry">
                無料体験について相談する
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </section>

        <section className="voice-section" aria-labelledby="voices-title">
          <div className="section-shell">
            <div className="section-head light-head compact-head">
              <p className="eyebrow light">STUDENT VOICES</p>
              <h2 id="voices-title">掲載資料に寄せられた声</h2>
            </div>
            <div className="voice-grid">
              {studentVoices.map((voice) => (
                <article key={voice.name}>
                  <span aria-hidden="true">“</span>
                  <blockquote>{voice.quote}</blockquote>
                  <p>
                    {voice.name}
                    <small>{voice.detail}</small>
                  </p>
                </article>
              ))}
            </div>
            <p className="voice-note">
              ※ 個人の感想であり、同様の成果を保証するものではありません。
            </p>
          </div>
        </section>

        <ContactBand />
      </main>
      <SiteFooter />
    </>
  );
}
