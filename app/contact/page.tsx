import type { Metadata } from "next";
import {
  PageHero,
  SiteFooter,
  SiteHeader,
} from "../_components/SiteChrome";
import { SiteIntro } from "../_components/SiteIntro";
import { faqs, steps } from "../_data/site";

export const metadata: Metadata = {
  title: "相談の流れ",
  description:
    "米山陸のNCEA・海外大学進学個別サポート。無料相談から体験、サポート開始までの流れとよくある質問。",
};

export default function ContactPage() {
  return (
    <>
      <SiteIntro
        number="06"
        section="HOW TO START"
        quote="最初の一歩は、悩みを言葉にすることから。"
        detail="相談、個別設計、体験、開始。納得しながら進める四段階。"
        tone="sand"
      />
      <SiteHeader current="/contact" />
      <main>
        <PageHero
          eyebrow="HOW TO START"
          currentLabel="相談の流れ"
          title={
            <>
              最初の30分で、
              <br />
              <em>悩みを次の一歩</em>に変える。
            </>
          }
          lead="いきなり契約する必要はありません。まずは現在地を整理し、このサポートが本当に必要かどうかを一緒に確認します。"
        />

        <section className="section process-section" aria-labelledby="process-title">
          <div className="section-shell">
            <div className="section-head process-head">
              <div>
                <p className="eyebrow">THE PROCESS</p>
                <h2 id="process-title">相談から始まる4ステップ</h2>
              </div>
              <p>
                無料相談、個別設計、体験、開始の順に、
                相性と必要性を確かめながら進めるシンプルな流れです。
              </p>
            </div>
            <ol className="process-list">
              {steps.map((step) => (
                <li key={step.number}>
                  <span>{step.number}</span>
                  <div>
                    <small>{step.meta}</small>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="consultation-section" id="inquiry" aria-labelledby="inquiry-title">
          <div className="section-shell inquiry-grid">
            <div>
              <p className="eyebrow light">FREE CONSULTATION</p>
              <h2 id="inquiry-title">
                今困っていることを、
                <br />
                聞かせてください。
              </h2>
            </div>
            <div className="inquiry-copy">
              <p>
                NCEA、進路、留学生活。まだ悩みが言葉になっていなくても大丈夫です。
                メールには、学年・在住国・相談したいことを分かる範囲でお書きください。
              </p>
              <a
                className="button button-light"
                href="mailto:yoneriku19@gmail.com?subject=無料相談について&body=お名前：%0D%0A学年：%0D%0A在住国：%0D%0A相談したいこと："
              >
                メールで無料相談
                <span aria-hidden="true">↗</span>
              </a>
              <dl className="inquiry-details">
                <div>
                  <dt>Email</dt>
                  <dd>
                    <a href="mailto:yoneriku19@gmail.com">
                      yoneriku19@gmail.com
                    </a>
                  </dd>
                </div>
                <div>
                  <dt>Phone</dt>
                  <dd>
                    <a href="tel:+819012906147">090-1290-6147</a>
                  </dd>
                </div>
                <div>
                  <dt>Format</dt>
                  <dd>Online / Japanese</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        <section className="section faq-section" aria-labelledby="faq-title">
          <div className="section-shell faq-layout">
            <div className="section-head sticky-head">
              <p className="eyebrow">FAQ</p>
              <h2 id="faq-title">よくある質問</h2>
              <p>そのほかの疑問は、初回相談の前でもメールでお尋ねいただけます。</p>
            </div>
            <div className="faq-list">
              {faqs.map((faq) => (
                <details key={faq.question}>
                  <summary>
                    <span>{faq.question}</span>
                    <i aria-hidden="true" />
                  </summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="closing-note">
          <div className="section-shell closing-note-inner">
            <p>NO PRESSURE</p>
            <h2>
              話してみて違うと感じたら、
              <br />
              そこで終えて大丈夫です。
            </h2>
            <p>
              初回相談は、状況を整理するための時間です。
              サポートの開始を前提にはしていません。
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
