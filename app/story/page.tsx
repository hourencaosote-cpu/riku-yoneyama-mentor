import type { Metadata } from "next";
import {
  ContactBand,
  PageHero,
  SiteFooter,
  SiteHeader,
} from "../_components/SiteChrome";

export const metadata: Metadata = {
  title: "本人の経験",
  description:
    "Year 11で行き詰まった米山陸が、学び方を組み直し、メルボルン大学進学へ至るまでの経験と指導方針。",
};

const story = [
  {
    number: "01",
    label: "THE CRISIS",
    title: "Year 11、完全に行き詰まる。",
    text: "30件のNot Achieved。IELTSは未受験で推定4.0程度。NCEAの仕組みも大学の選び方も分からず、計画的に学ぶ習慣もありませんでした。",
  },
  {
    number: "02",
    label: "THE TURNING POINT",
    title: "頑張り方ではなく、仕組みを変えた。",
    text: "NCEAの評価基準を理解し、目標管理シートを作成。週ごとに計画・実行・確認・改善を繰り返し、勉強を「続けられる行動」まで分解しました。",
  },
  {
    number: "03",
    label: "THE RESULT",
    title: "5大学すべてに合格。すべてから奨学金オファー。",
    text: "University of Melbourneを含む5大学から合格通知を受け取りました。得られたのは、才能への自信ではなく、成果につながる学び方を再現する力でした。",
  },
];

export default function StoryPage() {
  return (
    <>
      <SiteHeader current="/story" />
      <main>
        <PageHero
          eyebrow="MY STORY"
          currentLabel="本人の経験"
          title={
            <>
              成功談よりも、
              <br className="display-break" />
              <em>立て直した過程</em>を伝えたい。
            </>
          }
          lead="最初から勉強が得意だったわけではありません。何も分からなかった時期に、何を見直し、どう進み直したのか。その経験が指導の出発点です。"
        />

        <section className="section profile-section" aria-labelledby="profile-title">
          <div className="section-shell profile-layout">
            <aside className="profile-card">
              <div
                className="profile-photo"
                role="img"
                aria-label="米山陸のプロフィール写真"
              />
              <div>
                <strong>米山 陸</strong>
                <span>Riku Yoneyama</span>
                <p>
                  University of Melbourne
                  <br />
                  Bachelor of Commerce
                </p>
              </div>
            </aside>
            <div className="profile-copy">
              <p className="eyebrow">PROFILE</p>
              <h2 id="profile-title">
                分からなかった側の目線を、
                <br className="display-break" />
                置き去りにしない。
              </h2>
              <p className="large-copy">
                海外進学では、情報が足りないだけでなく、
                「誰に、何を聞けばいいか分からない」こと自体が大きな壁になります。
              </p>
              <p>
                僕自身、NCEAの評価方法、英語力、大学選び、生活の整え方のすべてで迷いました。
                だから指導では、できていないことを責めるのではなく、
                まず状況を言葉にし、次にできる行動まで一緒に小さくします。
              </p>
              <dl className="profile-facts">
                <div>
                  <dt>現在</dt>
                  <dd>メルボルン大学 商学部</dd>
                </div>
                <div>
                  <dt>支援領域</dt>
                  <dd>NCEA・海外大学進学・留学生活</dd>
                </div>
                <div>
                  <dt>形式</dt>
                  <dd>オンライン / 日本語</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        <section className="story-section" aria-labelledby="story-title">
          <div className="section-shell story-layout">
            <div className="section-head light-head sticky-head">
              <p className="eyebrow light">FROM CRISIS TO CLARITY</p>
              <h2 id="story-title">迷いから、道筋が見えるまで。</h2>
            </div>
            <div className="story-list">
              {story.map((item) => (
                <article key={item.number}>
                  <div className="story-index">
                    <span>{item.number}</span>
                    <i />
                  </div>
                  <div>
                    <p className="story-label">{item.label}</p>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section belief-section" aria-labelledby="belief-title">
          <div className="section-shell belief-grid">
            <div>
              <p className="eyebrow">WHAT I BELIEVE</p>
              <h2 id="belief-title">
                答えを渡すより、
                <br className="display-break" />
                自分で選べる状態をつくる。
              </h2>
            </div>
            <blockquote>
              <p>
                目指すのは、指導がないと進めない状態ではありません。
                評価基準を読み、目標から逆算し、自分で計画を直せるようになること。
                海外大学への合格だけでなく、その先でも使える力を残したいと考えています。
              </p>
            </blockquote>
          </div>
        </section>

        <section className="next-page">
          <div className="section-shell next-page-inner">
            <p>Next</p>
            <a href="/results">
              本人の合格・奨学金実績
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </section>

        <ContactBand />
      </main>
      <SiteFooter />
    </>
  );
}
