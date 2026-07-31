import assert from "node:assert/strict";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set(
    "test",
    `${process.pid}-${Date.now()}-${pathname.replaceAll("/", "-")}`,
  );
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

const routes = [
  ["/", "つまずいた経験があるから", "日本から世界へ、選択肢を無限大に。"],
  ["/support", "学び方と進み方", "答えを教えるだけでなく、進める道筋をつくる。"],
  ["/plans", "2つのプラン", "学び方が変われば、結果までの距離は変えられる。"],
  ["/story", "立て直した過程", "遠回りした経験は、誰かの最短ルートになる。"],
  ["/results", "何の実績か", "才能ではなく、再現できる戦略で前へ。"],
  ["/contact", "悩みを次の一歩", "最初の一歩は、悩みを言葉にすることから。"],
];

for (const [pathname, expected, introQuote] of routes) {
  test(`server-renders ${pathname}`, async () => {
    const response = await render(pathname);
    assert.equal(response.status, 200);
    assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

    const html = await response.text();
    assert.match(html, /<html lang="ja">/i);
    assert.match(html, new RegExp(expected));
    assert.ok(html.includes(introQuote));
    assert.match(html, /class="brand-mark brand-mark-display brand-mark-inverse"/);
    assert.match(html, /class="intro-brand-copy"/);
    assert.match(html, /href="\/support"/);
    assert.match(html, /href="\/plans"/);
    assert.match(html, /href="\/story"/);
    assert.match(html, /href="\/results"/);
    assert.match(html, /href="\/contact"/);
    assert.doesNotMatch(
      html,
      /codex-preview|SkeletonPreview|react-loading-skeleton/i,
    );
  });
}

test("home uses the restrained profile card and identifies personal results", async () => {
  const response = await render("/");
  const html = await response.text();

  assert.match(
    html,
    /class="portrait-compact" role="img" aria-label="NCEA・海外大学進学メンター 米山陸"/,
  );
  assert.match(html, /本人の2023年出願結果/);
  assert.match(html, /サイトでは、本人の結果と指導実績を混同しない形で掲載しています/);
});

test("plans page renders the supplied pricing and course details", async () => {
  const response = await render("/plans");
  const html = await response.text();

  assert.match(html, /スタンダードコース/);
  assert.match(html, /18,000/);
  assert.match(html, /アドバンスコース/);
  assert.match(html, /33,000/);
  assert.match(html, /週1回・60分/);
  assert.match(html, /週1回・120分/);
  assert.match(html, /チャット相談（回数制限なし/);
});

test("contact page exposes working contact links", async () => {
  const response = await render("/contact");
  const html = await response.text();

  assert.match(html, /href="mailto:yoneriku19@gmail\.com/);
  assert.match(html, /href="tel:\+819012906147"/);
  assert.match(html, /無料相談から始まる4ステップ|相談から始まる4ステップ/);
});
