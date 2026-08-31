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
  ["/", "つまずきを、"],
  ["/support", "学び方と進み方"],
  ["/plans", "2つのプラン"],
  ["/story", "立て直した過程"],
  ["/results", "何の実績か"],
  ["/contact", "悩みを次の一歩"],
];

for (const [pathname, expected] of routes) {
  test(`server-renders ${pathname}`, async () => {
    const response = await render(pathname);
    assert.equal(response.status, 200);
    assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

    const html = await response.text();
    assert.match(html, /<html lang="ja">/i);
    assert.match(html, new RegExp(expected));
    assert.match(html, /src="\/rixa-logo\.png"/);
    assert.doesNotMatch(html, /EDUCATION PATHWAYS|本文を見る/);
    assert.match(html, /class="consultation-chat"/);
    assert.match(html, /個別戦略カウンセリング申込/);
    assert.match(html, /質問に答えず本人へ相談する/);
    assert.match(html, /お名前（フルネーム）を教えてください/);
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
  assert.match(html, /riku-yoneyama-profile-og\.png/);
  assert.match(html, /本人の2023年出願結果/);
  assert.match(html, /対応科目を、ひと目で/);
  assert.match(html, /Algebra \/ Calculus/);
  assert.match(html, /サイトでは、本人の結果と指導実績を混同しない形で掲載しています/);
});

test("support explains subject scope and custom combinations", async () => {
  const response = await render("/support");
  const html = await response.text();

  assert.match(html, /NCEA Subjects/);
  assert.match(html, /Chemistry・Biology Level 1/);
  assert.match(html, /サポートの組み合わせ例/);
  assert.match(html, /固定コースではなく一例です/);
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

test("results page renders real campus photography with attribution", async () => {
  const response = await render("/results");
  const html = await response.text();

  for (const image of [
    "/universities/melbourne.jpg",
    "/universities/auckland.jpg",
    "/universities/wellington.jpg",
    "/universities/adelaide.jpg",
    "/universities/massey.jpg",
  ]) {
    assert.ok(html.includes(image));
  }

  assert.match(html, /Campus photography via Wikimedia Commons/);
  assert.match(html, /CC BY-SA 2\.0/);
  assert.match(html, /CC BY-SA 4\.0/);
  assert.match(html, /CC BY 2\.0/);
});

test("contact page exposes working contact links", async () => {
  const response = await render("/contact");
  const html = await response.text();

  assert.match(html, /href="mailto:yoneriku19@gmail\.com/);
  assert.match(html, /href="tel:\+819012906147"/);
  assert.match(html, /無料相談から始まる4ステップ|相談から始まる4ステップ/);
});
