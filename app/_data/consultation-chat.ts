export type ConsultationTopic =
  | "subjects"
  | "ncea"
  | "university"
  | "studyAbroadLife"
  | "plans";

export type ConsultationStepId =
  | "audience"
  | "schoolStage"
  | "topic"
  | "concern"
  | "timing";

export type ConsultationAnswers = Partial<
  Record<ConsultationStepId, string>
> & {
  topic?: ConsultationTopic;
};

export const consultationChat = {
  title: "かんたん事前相談",
  description: "選ぶだけ・約3分",
  welcome:
    "こんにちは。5つの質問に答えると、相談したいことを整理できます。お名前や生徒番号などの個人情報は入力しません。",
  contactHref: "/contact#inquiry",
  contactLabel: "質問に答えず本人へ相談する",
  email: "yoneriku19@gmail.com",
} as const;

export const consultationSteps = {
  audience: {
    prompt: "どなたからのご相談ですか？",
    summaryLabel: "相談者",
    options: ["生徒本人", "保護者", "生徒・保護者で一緒に"] as const,
  },
  schoolStage: {
    prompt: "現在の学年・状況を教えてください。",
    summaryLabel: "学年・状況",
    options: [
      "Year 11",
      "Year 12",
      "Year 13",
      "留学・NCEA開始前",
      "その他・まだ分からない",
    ] as const,
  },
  topic: {
    prompt: "一番相談したいテーマはどれですか？",
    summaryLabel: "相談テーマ",
    options: [
      { id: "subjects", label: "対応科目・複数科目" },
      { id: "ncea", label: "NCEA・成績・勉強法" },
      { id: "university", label: "大学・進路・奨学金" },
      { id: "studyAbroadLife", label: "留学生活・学習習慣" },
      { id: "plans", label: "料金・サポートの進め方" },
    ] as const,
  },
  timing: {
    prompt: "いつ頃から相談・サポートを検討していますか？",
    summaryLabel: "希望時期",
    options: [
      "できるだけ早く",
      "1か月以内",
      "3か月以内",
      "時期は未定・まず話を聞きたい",
    ] as const,
  },
} as const;

export const consultationConcerns: Record<
  ConsultationTopic,
  readonly string[]
> = {
  subjects: [
    "1科目を重点的に学びたい",
    "複数科目を組み合わせたい",
    "課題・テスト対策を相談したい",
    "自分に合う科目構成を知りたい",
  ],
  ncea: [
    "NCEAの仕組みが分からない",
    "Achievementから成績を上げたい",
    "Excellenceの取り方を知りたい",
    "学習計画・時間管理を整えたい",
  ],
  university: [
    "大学・専攻の選び方に迷っている",
    "出願までの計画を立てたい",
    "奨学金について整理したい",
    "書類・面接の準備を相談したい",
  ],
  studyAbroadLife: [
    "留学生活に不安がある",
    "学習習慣をつくりたい",
    "時間管理・モチベーションに悩んでいる",
    "現地経験者に相談したい",
  ],
  plans: [
    "料金の違いを知りたい",
    "自分に合うプランを知りたい",
    "無料相談・体験の流れを知りたい",
    "保護者だけで相談したい",
  ],
};
