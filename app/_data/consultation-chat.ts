export type ConsultationStepId =
  | "name"
  | "email"
  | "schoolStage"
  | "studyState"
  | "classConcern"
  | "futureConcern"
  | "supportRequest"
  | "detail"
  | "schedule"
  | "extra";

export type ConsultationAnswers = Partial<Record<ConsultationStepId, string>>;

export type ConsultationChoiceStep = {
  readonly kind: "choice";
  readonly prompt: string;
  readonly summaryLabel: string;
  readonly required: boolean;
  readonly options: readonly string[];
  readonly allowOther: boolean;
};

export type ConsultationInputStep = {
  readonly kind: "text" | "textarea";
  readonly prompt: string;
  readonly summaryLabel: string;
  readonly required: boolean;
  readonly placeholder: string;
  readonly inputType?: "text" | "email";
};

export type ConsultationStep = ConsultationChoiceStep | ConsultationInputStep;

export const consultationChat = {
  title: "個別戦略カウンセリング申込",
  description: "10の質問・約5分",
  welcome:
    "こんにちは。10の質問に答えると、そのまま無料カウンセリングのお申し込みができます。お名前とメールアドレスをお預かりし、内容は米山陸本人にのみ送信されます。",
  contactHref: "/contact#inquiry",
  contactLabel: "質問に答えず本人へ相談する",
  email: "yoneriku19@gmail.com",
  privacyNote:
    "いただいた内容は相談対応のみに使用し、本人以外へ共有しません。18歳未満の方は保護者の同意を得てから送信してください。",
} as const;

export const consultationFlow: readonly ConsultationStepId[] = [
  "name",
  "email",
  "schoolStage",
  "studyState",
  "classConcern",
  "futureConcern",
  "supportRequest",
  "detail",
  "schedule",
  "extra",
];

export const otherOptionLabel = "その他";

export const consultationSteps: Record<ConsultationStepId, ConsultationStep> = {
  name: {
    kind: "text",
    prompt: "お名前（フルネーム）を教えてください。",
    summaryLabel: "お名前",
    required: true,
    placeholder: "例：米山 陸",
    inputType: "text",
  },
  email: {
    kind: "text",
    prompt: "ご連絡先のメールアドレスを教えてください。",
    summaryLabel: "Email",
    required: true,
    placeholder: "例：you@example.com",
    inputType: "email",
  },
  schoolStage: {
    kind: "choice",
    prompt: "現在の学年を教えてください。",
    summaryLabel: "現在の学年",
    required: true,
    options: ["Year11", "Year12", "Year13"],
    allowOther: false,
  },
  studyState: {
    kind: "choice",
    prompt: "今の「テスト・課題」の状態はどれに近いですか？",
    summaryLabel: "テスト・課題の状態",
    required: true,
    options: [
      "何をどこから手をつければいいか分からず、机に座ってもスマホを見てしまう。",
      "締め切り直前に泣きながら課題を終わらせる。内容は「ただ出しただけ」。",
      "自分なりに頑張っているが、Merit止まりでExcellenceに届かない。",
      "得意な時はいいが、苦手なトピックだとガクッと成績が落ちる。安定感がない。",
      "評価基準を理解し計画的だが、さらに上の奨学金や難関大を狙いたい。",
    ],
    allowOther: false,
  },
  classConcern: {
    kind: "choice",
    prompt: "学校の先生や授業について、困っていることは？",
    summaryLabel: "授業の困りごと",
    required: true,
    options: [
      "先生の話すスピードが速く、内容の半分も理解できていない。",
      "わからないことがあっても、英語での質問の仕方がわからず「分かったふり」をしてしまう。",
      "エッセイの書き方（ストラクチャー）がわからず、白紙の前で時間が過ぎる。",
      "数学や会計などの計算はわかるが、記述問題（Explain問題）になると言葉が出てこない。",
      "グループワークで発言できず、現地の生徒に気まずさを感じている。",
    ],
    allowOther: true,
  },
  futureConcern: {
    kind: "choice",
    prompt: "「卒業後の自分」を想像して、不安な点は？",
    summaryLabel: "卒業後の不安",
    required: true,
    options: [
      "今の成績で志望大学に届くのか、計算方法も合格基準もわからない。",
      "大学進学に必要なランクスコア（NCEA等）を稼ぐための「科目選び」に自信がない。",
      "奨学金に興味はあるが、いつまでに何を準備すべきか誰も教えてくれない。",
      "自分の得意なことと、行きたい学部が一致しておらず進路がブレている。",
      "周りが準備を始めているのに、自分だけ取り残されている気がして焦っている。",
    ],
    allowOther: true,
  },
  supportRequest: {
    kind: "choice",
    prompt: "講師に、まず一番解決してほしいことや一緒に取り組みたいことは何？",
    summaryLabel: "講師に求めること",
    required: true,
    options: [
      "遅れている課題やボロボロの成績を、なんとか立て直してほしい。",
      "学校の課題の意図や、エッセイの書き方を日本語で噛み砕いて教えてほしい。",
      "一人だとサボるので、毎週の計画を一緒に立てて進捗を確認してほしい。",
      "メルボルン大学合格や奨学金獲得などの「勝ち方」を伝授してほしい。",
      "海外大学でトップを獲るためのマインドを教えてほしい。",
    ],
    allowOther: true,
  },
  detail: {
    kind: "textarea",
    prompt: "具体的に悩んでいることや、聞いてみたいことがあれば教えてください。",
    summaryLabel: "具体的な悩み",
    required: true,
    placeholder: "例：Level 2 のCalculusでExcellenceを取りたいが、勉強法が分からない。",
  },
  schedule: {
    kind: "textarea",
    prompt:
      "カウンセリングの希望日時を教えてください（小一時間程度）。第三希望までご記入ください。",
    summaryLabel: "希望日時",
    required: true,
    placeholder: "例：1) 12/3 19:00 2) 12/5 20:00 3) 12/7 10:00（NZ時間）",
  },
  extra: {
    kind: "textarea",
    prompt: "その他の質問などがあれば教えてください。（任意）",
    summaryLabel: "その他の質問",
    required: false,
    placeholder: "なければ「スキップ」で次へ進めます。",
  },
};
