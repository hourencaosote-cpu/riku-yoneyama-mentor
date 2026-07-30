const universities = [
  {
    name: "University of Melbourne",
    detail: "Bachelor of Commerce",
    offer: "AUD 45,000 Scholarship Offer",
  },
  {
    name: "University of Auckland",
    detail: "Business / Science",
    offer: "Full Tuition Scholarship Offer",
  },
  {
    name: "Victoria University of Wellington",
    detail: "Commerce / Law",
    offer: "50% Tuition Scholarship Offer",
  },
  {
    name: "University of Adelaide",
    detail: "Business / Economics",
    offer: "Merit-based Scholarship",
  },
  {
    name: "Massey University",
    detail: "Business / Applied Science",
    offer: "International Excellence Award",
  },
];

const supportAreas = [
  {
    number: "01",
    title: "NCEA学習",
    text: "評価基準を読み解き、目標から逆算。科目ごとの学習計画と週次レビューで、次にやることを明確にします。",
    tags: ["評価基準", "科目別戦略", "学習計画"],
  },
  {
    number: "02",
    title: "海外大学進学",
    text: "大学・専攻選びから、出願書類、奨学金、面接準備まで。本人の5大学出願経験をもとに一緒に整理します。",
    tags: ["進路設計", "出願戦略", "奨学金"],
  },
  {
    number: "03",
    title: "留学生活の伴走",
    text: "勉強だけを切り離さず、生活、時間管理、モチベーションを含めて設計。現地学生の目線で継続を支えます。",
    tags: ["生活適応", "習慣づくり", "定期面談"],
  },
];

const methods = [
  ["ゴールを先に決める", "合格や成績目標から、期限と必要な状態を逆算します。"],
  ["行動まで細かくする", "迷わず始められるよう、週・日単位のタスクに分解します。"],
  ["弱点を放置しない", "ミスを分類して記録し、同じ失敗を繰り返さない仕組みを作ります。"],
  ["説明できるまで理解する", "暗記で終わらせず、自分の言葉で説明できる状態を目指します。"],
  ["毎週、計画を直す", "進捗を見て学習量と方法を調整。続けられる計画に更新します。"],
];

const steps = [
  ["01", "無料相談", "今困っていること、目標、現在の状況を30分ほど伺います。"],
  ["02", "プラン設計", "必要な支援と優先順位を整理し、個別の進め方をご提案します。"],
  ["03", "体験・確認", "実際の指導を通して、相性と学習の進め方を確認します。"],
  ["04", "サポート開始", "定期授業と振り返りを始め、状況に合わせて改善を続けます。"],
];

const faqs = [
  {
    question: "NCEAの仕組みがほとんど分からなくても大丈夫ですか？",
    answer:
      "大丈夫です。Achievement・Merit・Excellenceの違いや単位の考え方から整理し、現在地と目標に合う進め方を一緒に作ります。",
  },
  {
    question: "日本国外からも受講できますか？",
    answer:
      "オンラインを中心に対応しています。時差を確認したうえで、無理なく継続できる時間を相談して決めます。",
  },
  {
    question: "保護者も相談できますか？",
    answer:
      "はい。初回相談は保護者の方だけでも、生徒ご本人と一緒でも構いません。必要に応じて進捗共有の方法もご相談いただけます。",
  },
  {
    question: "大学合格や奨学金は保証されますか？",
    answer:
      "合格や奨学金を保証するサービスではありません。本人の実体験をもとに、選択肢の整理と準備の質を高める支援を行います。",
  },
];

export default function Home() {
  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="トップへ戻る">
          <span>RY</span>
          <strong>Riku Yoneyama</strong>
        </a>
        <nav className="desktop-nav" aria-label="メインナビゲーション">
          <a href="#support">サポート</a>
          <a href="#story">ストーリー</a>
          <a href="#results">実績</a>
          <a href="#method">指導方針</a>
        </nav>
        <a className="header-cta" href="#contact">
          無料相談
          <span aria-hidden="true">↗</span>
        </a>
      </header>

      <main id="top">
        <section className="hero section-shell" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">NCEA &amp; INTERNATIONAL UNIVERSITY MENTOR</p>
            <h1 id="hero-title">
              つまずいた経験があるから、
              <br />
              <em>進める道筋</em>を一緒につくれる。
            </h1>
            <p className="hero-lead">
              Year 11で学業・英語・進路に行き詰まった経験から、
              学び方そのものを一から設計し直しました。現在はメルボルン大学で学びながら、
              NCEA対策から海外大学進学、留学生活まで1対1で伴走します。
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">
                無料相談を申し込む
                <span aria-hidden="true">↗</span>
              </a>
              <a className="text-link" href="#story">
                私の経験を見る
                <span aria-hidden="true">↓</span>
              </a>
            </div>
            <p className="hero-note">オンライン個別サポート / 日本語対応</p>
          </div>

          <div className="portrait-column">
            <div className="portrait-frame">
              <div
                className="portrait-image"
                role="img"
                aria-label="NCEA・海外大学進学メンター 米山陸"
              />
            </div>
            <div className="portrait-caption">
              <div>
                <strong>米山 陸</strong>
                <span>Riku Yoneyama</span>
              </div>
              <p>
                University of Melbourne
                <br />
                Bachelor of Commerce
              </p>
            </div>
          </div>
        </section>

        <section className="proof-strip" aria-label="本人の実績">
          <div className="section-shell proof-grid">
            <div className="proof-intro">
              <span>PERSONAL RECORD</span>
              <p>本人の2023年出願実績</p>
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

        <section className="concerns section-shell" aria-labelledby="concerns-title">
          <div className="section-heading">
            <p className="eyebrow">WHERE ARE YOU NOW?</p>
            <h2 id="concerns-title">
              「何をすればいいか分からない」
              <br />
              その状態から始められます。
            </h2>
          </div>
          <div className="concern-list">
            <article>
              <span>01</span>
              <h3>進路が見えない</h3>
              <p>
                自分に合う大学や専攻が分からない。奨学金、出願書類、IELTSの優先順位も整理できない。
              </p>
            </article>
            <article>
              <span>02</span>
              <h3>留学生活が不安</h3>
              <p>
                現地の環境に慣れず、相談できる人もいない。生活と勉強をどう両立すればよいか分からない。
              </p>
            </article>
            <article>
              <span>03</span>
              <h3>成績が伸びない</h3>
              <p>
                NCEAの評価方法が複雑で、時間をかけても結果につながらない。計画を続けることも難しい。
              </p>
            </article>
          </div>
        </section>

        <section className="support-section" id="support" aria-labelledby="support-title">
          <div className="section-shell">
            <div className="section-heading split-heading">
              <div>
                <p className="eyebrow light">THREE PILLARS</p>
                <h2 id="support-title">
                  教科だけではなく、
                  <br />
                  学び方と進み方を整える。
                </h2>
              </div>
              <p>
                成績、進路、留学生活は別々の問題ではありません。
                目標から逆算し、日々の勉強から出願準備まで、一つの計画にまとめます。
              </p>
            </div>
            <div className="support-grid">
              {supportAreas.map((area) => (
                <article key={area.number} className="support-card">
                  <span className="support-number">{area.number}</span>
                  <h3>{area.title}</h3>
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

        <section className="story section-shell" id="story" aria-labelledby="story-title">
          <div className="story-heading">
            <p className="eyebrow">MY STORY</p>
            <h2 id="story-title">
              僕も最初から、
              <br />
              勉強ができたわけではありません。
            </h2>
            <p>
              成功談だけではなく、何も分からなかったところから、
              何を変えたのかをお伝えします。
            </p>
          </div>
          <div className="story-timeline">
            <article>
              <div className="timeline-marker">
                <span>01</span>
                <i />
              </div>
              <div>
                <p className="timeline-label">THE CRISIS</p>
                <h3>Year 11、完全に行き詰まる。</h3>
                <p>
                  30件のNot Achieved。IELTSは未受験で推定4.0程度。
                  NCEAの仕組みも大学の選び方も分からず、計画的に勉強する習慣もありませんでした。
                </p>
              </div>
            </article>
            <article>
              <div className="timeline-marker">
                <span>02</span>
                <i />
              </div>
              <div>
                <p className="timeline-label">THE TURNING POINT</p>
                <h3>頑張り方ではなく、仕組みを変えた。</h3>
                <p>
                  NCEAの評価基準を理解し、目標管理シートを作成。
                  週ごとに計画・実行・確認・改善を繰り返し、勉強を「続けられる行動」まで分解しました。
                </p>
              </div>
            </article>
            <article>
              <div className="timeline-marker">
                <span>03</span>
              </div>
              <div>
                <p className="timeline-label">THE RESULT</p>
                <h3>5大学すべてに合格。すべてから奨学金オファー。</h3>
                <p>
                  メルボルン大学を含む5大学から合格通知を受け取りました。
                  この経験で得たのは、才能ではなく、成果につながる学び方を再現する力です。
                </p>
              </div>
            </article>
          </div>
        </section>

        <section className="results" id="results" aria-labelledby="results-title">
          <div className="section-shell">
            <div className="section-heading result-heading">
              <div>
                <p className="eyebrow">UNIVERSITY OFFERS</p>
                <h2 id="results-title">本人の合格・奨学金実績</h2>
              </div>
              <p>2023年の本人による出願結果</p>
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
            </p>
          </div>
        </section>

        <section className="method section-shell" id="method" aria-labelledby="method-title">
          <div className="method-intro">
            <p className="eyebrow">THE METHOD</p>
            <h2 id="method-title">
              才能ではなく、
              <br />
              <em>再現できる仕組み</em>で進む。
            </h2>
            <p>
              感覚的な「もっと頑張ろう」ではなく、
              目標、行動、理解、振り返りを一つずつ見える形にします。
            </p>
          </div>
          <ol className="method-list">
            {methods.map(([title, description], index) => (
              <li key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="subjects" aria-labelledby="subjects-title">
          <div className="section-shell subjects-grid">
            <div>
              <p className="eyebrow light">WHAT I CAN HELP WITH</p>
              <h2 id="subjects-title">主な指導・相談領域</h2>
            </div>
            <div className="subject-groups">
              <article>
                <h3>NCEA Subjects</h3>
                <p>
                  Algebra / Calculus / Accounting / English / History / ESOL
                  / Chemistry・Biology Level 1
                </p>
                <small>対応Levelは初回相談時に確認します。</small>
              </article>
              <article>
                <h3>University &amp; Scholarship</h3>
                <p>
                  大学・専攻選び / 出願計画 / 奨学金戦略 / 書類添削 / 面接準備
                </p>
              </article>
              <article>
                <h3>Study &amp; Life</h3>
                <p>
                  学習習慣 / 時間管理 / 週次レビュー / 現地生活への適応 / 保護者への進捗共有
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="process section-shell" aria-labelledby="process-title">
          <div className="section-heading split-heading dark-text">
            <div>
              <p className="eyebrow">HOW TO START</p>
              <h2 id="process-title">相談から始まる4ステップ</h2>
            </div>
            <p>
              いきなり契約する必要はありません。まずは現在地を整理し、
              サポートが本当に必要かを一緒に確認します。
            </p>
          </div>
          <div className="step-grid">
            {steps.map(([number, title, description]) => (
              <article key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="faq section-shell" aria-labelledby="faq-title">
          <div className="faq-heading">
            <p className="eyebrow">FAQ</p>
            <h2 id="faq-title">よくある質問</h2>
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
        </section>

        <section className="contact" id="contact" aria-labelledby="contact-title">
          <div className="section-shell contact-grid">
            <div>
              <p className="eyebrow light">FREE CONSULTATION</p>
              <h2 id="contact-title">
                まずは、今困っていることを
                <br />
                聞かせてください。
              </h2>
            </div>
            <div className="contact-copy">
              <p>
                NCEA、進路、留学生活。まだ悩みが言葉になっていなくても大丈夫です。
                初回相談で、現在地と次の一歩を一緒に整理します。
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
      </main>

      <footer>
        <div className="section-shell footer-grid">
          <div>
            <strong>Riku Yoneyama</strong>
            <p>NCEA・海外大学進学 オンライン個別サポート</p>
          </div>
          <div>
            <p>University of Melbourne</p>
            <p>Online / Japanese</p>
          </div>
          <p className="copyright">© {new Date().getFullYear()} Riku Yoneyama</p>
        </div>
      </footer>
    </>
  );
}
