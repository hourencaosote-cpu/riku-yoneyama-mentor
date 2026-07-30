import type { Metadata } from "next";
import {
  ContactBand,
  PageHero,
  SiteFooter,
  SiteHeader,
} from "../_components/SiteChrome";
import { universities } from "../_data/site";

export const metadata: Metadata = {
  title: "本人の実績",
  description:
    "米山陸本人が2023年に受け取った5大学の合格通知と奨学金オファー。指導実績と混同しない形で掲載しています。",
};

export default function ResultsPage() {
  return (
    <>
      <SiteHeader current="/results" />
      <main>
        <PageHero
          eyebrow="PERSONAL RESULTS"
          currentLabel="実績"
          title={
            <>
              数字を大きく見せるより、
              <br />
              <em>何の実績か</em>を明確に。
            </>
          }
          lead="以下は、米山陸本人が2023年に行った出願の結果です。指導を受けた生徒の実績ではなく、本人の経験を裏づける情報として掲載しています。"
        />

        <section className="result-summary" aria-label="本人の出願実績概要">
          <div className="section-shell result-summary-grid">
            <article>
              <span>APPLICATIONS</span>
              <strong>5</strong>
              <p>出願大学数</p>
            </article>
            <article>
              <span>OFFERS</span>
              <strong>5 / 5</strong>
              <p>5大学すべてに合格</p>
            </article>
            <article>
              <span>SCHOLARSHIPS</span>
              <strong>5</strong>
              <p>全大学から奨学金オファー</p>
            </article>
          </div>
        </section>

        <section className="section offer-section" aria-labelledby="offers-title">
          <div className="section-shell">
            <div className="section-head result-list-head">
              <div>
                <p className="eyebrow">UNIVERSITY OFFERS</p>
                <h2 id="offers-title">合格・奨学金オファーの詳細</h2>
              </div>
              <p>2023年 / 本人の出願結果</p>
            </div>
            <div className="university-list">
              {universities.map((university, index) => (
                <article key={university.name}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{university.name}</h3>
                    <p>{university.detail}</p>
                  </div>
                  <strong>{university.offer}</strong>
                </article>
              ))}
            </div>
            <p className="result-disclaimer">
              ※ 上記は米山陸本人が2023年に受け取った合格・奨学金オファーです。
              指導を受けた方の合格や奨学金獲得を保証するものではありません。
              奨学金の名称・条件は各大学の通知内容に基づいています。
            </p>
          </div>
        </section>

        <section className="experience-section" aria-labelledby="experience-title">
          <div className="section-shell experience-grid">
            <div>
              <p className="eyebrow light">FROM RESULT TO SUPPORT</p>
              <h2 id="experience-title">
                結果そのものより、
                <br />
                そこまでの判断を共有する。
              </h2>
            </div>
            <div className="experience-points">
              <article>
                <span>01</span>
                <h3>大学をどう比較したか</h3>
                <p>
                  ランキングだけでなく、専攻、学習環境、費用、卒業後の選択肢をどう見たか。
                </p>
              </article>
              <article>
                <span>02</span>
                <h3>何から準備したか</h3>
                <p>
                  成績、英語、書類、奨学金を同時に抱えず、期限から優先順位をどう決めたか。
                </p>
              </article>
              <article>
                <span>03</span>
                <h3>迷った時に何を戻り先にしたか</h3>
                <p>
                  目標管理と週次レビューで、計画が崩れた時にどう立て直したか。
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section evidence-note" aria-labelledby="evidence-title">
          <div className="section-shell evidence-grid">
            <div>
              <p className="eyebrow">TRANSPARENCY</p>
              <h2 id="evidence-title">誇張せず、確認できる形で伝える。</h2>
            </div>
            <p>
              大学ランキングは年度によって変動するため、このページでは順位を訴求に使っていません。
              また、本人の受験結果と、今後の生徒の成果は明確に分けています。
              初回相談では、必要に応じて経験の範囲とサポートできる内容を具体的にお伝えします。
            </p>
          </div>
        </section>

        <ContactBand />
      </main>
      <SiteFooter />
    </>
  );
}
