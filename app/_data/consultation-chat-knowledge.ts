/**
 * 受領資料とサイト掲載内容をもとに、運営側で確認した案内文です。
 * 選択式相談ではこの範囲だけを表示し、未確認情報を生成しません。
 */
export const approvedConsultationAnswerGuide = {
  subjects:
    "対応科目はAlgebra、Calculus、Accounting、English、ESOL、History、Chemistry・Biology Level 1などです。複数科目と学習計画、課題レビュー、進路設計を組み合わせられます。学年・Level・課題内容は初回相談で確認します。",
  ncea:
    "NCEAが初めてでも、Achievement・Merit・Excellenceの違い、単位、評価基準から整理できます。目標から週・日単位の行動へ分解し、課題やテスト後に計画を見直します。",
  university:
    "大学・専攻選び、出願計画、奨学金、書類確認、面接準備を整理します。最新の入学条件や奨学金条件は変わるため、断定せず公式情報と本人確認へ案内します。",
  studyAbroadLife:
    "留学生活では、生活・時間管理・学習習慣・モチベーションを切り離さず、継続できる形を一緒に整理します。緊急性のある心身の相談は、学校や専門機関、信頼できる大人へ相談してください。",
  plans:
    "スタンダードは月額18,000円・週1回60分、アドバンスは月額33,000円・週1回120分です。無料相談、個別プラン設計、1〜2週間の体験・確認を経てサポートを開始します。",
} as const;

export type ApprovedConsultationTopic = keyof typeof approvedConsultationAnswerGuide;

/**
 * 「講師に求めること」の選択肢から、対応する案内文を引き当てます。
 * 「その他」など対応表にない回答では案内文を表示しません。
 */
const supportRequestGuideMap: Record<string, ApprovedConsultationTopic> = {
  "遅れている課題やボロボロの成績を、なんとか立て直してほしい。": "ncea",
  "学校の課題の意図や、エッセイの書き方を日本語で噛み砕いて教えてほしい。":
    "subjects",
  "一人だとサボるので、毎週の計画を一緒に立てて進捗を確認してほしい。":
    "studyAbroadLife",
  "メルボルン大学合格や奨学金獲得などの「勝ち方」を伝授してほしい。":
    "university",
  "海外大学でトップを獲るためのマインドを教えてほしい。": "university",
};

export function findApprovedConsultationGuide(supportRequest?: string) {
  if (!supportRequest) {
    return null;
  }

  const topic = supportRequestGuideMap[supportRequest];
  return topic ? approvedConsultationAnswerGuide[topic] : null;
}
