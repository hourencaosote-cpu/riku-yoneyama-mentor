export const navigation = [
  { href: "/support", label: "サポート" },
  { href: "/plans", label: "料金プラン" },
  { href: "/story", label: "本人の経験" },
  { href: "/results", label: "実績" },
  { href: "/contact", label: "相談の流れ" },
];

export const plans = [
  {
    id: "standard",
    name: "Standard",
    japaneseName: "スタンダードコース",
    price: "18,000",
    cadence: "週1回・60分",
    lead: "授業と課題レビューを軸に、自分で進める学習の土台をつくる。",
    features: [
      "科目ごとの勉強法・課題の進め方・テスト勉強計画を設計",
      "大学受験までの道筋を作成",
      "奨学金獲得に向けた準備の整理",
      "課題レビュー（添削＋改善アドバイス）",
      "チャット相談（回数制限なし／原則即日返信）",
    ],
  },
  {
    id: "advanced",
    name: "Advanced",
    japaneseName: "アドバンスコース",
    price: "33,000",
    cadence: "週1回・120分",
    lead: "学習計画・課題・振り返りまで、週単位で深く伴走する。",
    features: [
      "スタンダードコースの全内容",
      "学習相談・学習計画の作成と週単位の更新",
      "目標設定と学習スケジュールの継続的な調整・改善",
      "宿題・課題の作成とレビュー",
      "提出内容の詳細添削と理解不足の分析",
      "授業後の保護者向けレポート",
      "チャット相談（回数制限なし）＋カウンセリング",
    ],
  },
];

export const studentVoices = [
  {
    quote:
      "どこから手をつければいいか迷っていましたが、先生の分析で一気に視界が開けました。たった1か月で前回から1.5スコアを更新できて、本当に感謝しています。",
    name: "Tさん",
    detail: "Year 12",
  },
  {
    quote:
      "演習ではAchievement止まりで伸び悩んでいましたが、先生の戦略的な指導で苦手な数学を克服。本番でExcellenceを取ることができました。",
    name: "Nさん",
    detail: "ICU合格",
  },
];

export const concerns = [
  {
    number: "01",
    title: "NCEAの進め方が見えない",
    text: "評価基準や単位の仕組みが複雑で、何を優先すべきか判断できない。",
  },
  {
    number: "02",
    title: "進路を一人で決めきれない",
    text: "大学・専攻・奨学金・出願準備を、どの順番で考えればよいか分からない。",
  },
  {
    number: "03",
    title: "留学生活と勉強が両立しない",
    text: "時差や環境の変化の中で、学習習慣とモチベーションを保つことが難しい。",
  },
];

export const supportAreas = [
  {
    number: "01",
    title: "NCEA学習",
    lead: "評価基準から、次の一手を決める。",
    text: "Achievement・Merit・Excellenceの違いを整理し、目標から逆算。科目ごとの学習計画と定期レビューで、日々の行動まで具体化します。",
    tags: ["評価基準の理解", "科目別の攻略", "学習計画"],
  },
  {
    number: "02",
    title: "海外大学進学",
    lead: "選択肢を増やし、納得して選ぶ。",
    text: "大学・専攻選びから出願計画、奨学金、書類、面接準備まで。本人の5大学への出願経験をもとに、情報を一緒に整理します。",
    tags: ["進路設計", "出願戦略", "奨学金"],
  },
  {
    number: "03",
    title: "留学生活の伴走",
    lead: "勉強だけを切り離さない。",
    text: "生活、時間管理、モチベーションまで含めて継続できる形を設計。現地で学ぶ学生の目線から、孤立しやすい海外生活を支えます。",
    tags: ["生活適応", "習慣づくり", "定期面談"],
  },
];

export const subjectAreas = [
  {
    category: "MATH",
    title: "数学",
    subjects: ["Algebra", "Calculus"],
  },
  {
    category: "BUSINESS",
    title: "ビジネス",
    subjects: ["Accounting"],
  },
  {
    category: "LANGUAGE & HUMANITIES",
    title: "英語・人文",
    subjects: ["English", "ESOL", "History"],
  },
  {
    category: "SCIENCE",
    title: "理科",
    subjects: ["Chemistry・Biology Level 1"],
  },
];

export const programExamples = [
  {
    number: "01",
    title: "数学科目 + 学習計画",
    subjects: "Algebra / Calculus",
    text: "評価基準を確認し、課題・テストに向けた週ごとの学習計画まで一緒に整理します。",
  },
  {
    number: "02",
    title: "英語・人文 + 課題レビュー",
    subjects: "English / ESOL / History",
    text: "文章の構成や読解の進め方を確認し、提出物の振り返りと次の改善につなげます。",
  },
  {
    number: "03",
    title: "科目サポート + 進路設計",
    subjects: "NCEA Subjects / University Planning",
    text: "今の科目選択と成績を、大学・専攻・奨学金の検討まで一つの道筋として考えます。",
  },
];

export const methods = [
  {
    number: "01",
    title: "ゴールを先に決める",
    text: "合格や成績目標から、期限と必要な状態を逆算します。",
  },
  {
    number: "02",
    title: "行動まで細かくする",
    text: "迷わず始められるよう、週・日単位のタスクに分解します。",
  },
  {
    number: "03",
    title: "弱点を放置しない",
    text: "ミスを分類・記録し、同じ失敗を繰り返さない仕組みをつくります。",
  },
  {
    number: "04",
    title: "説明できるまで理解する",
    text: "暗記で終わらせず、自分の言葉で説明できる状態を目指します。",
  },
  {
    number: "05",
    title: "毎週、計画を直す",
    text: "進捗に合わせて量と方法を調整し、続けられる計画へ更新します。",
  },
];

const publishedAssetBase =
  "https://raw.githubusercontent.com/hourencaosote-cpu/riku-yoneyama-mentor/8d4366f3bd9b967a325760ad47d1bdf20ef5e83b/public";

export const universities = [
  {
    name: "University of Melbourne",
    detail: "Bachelor of Commerce",
    offer: "AUD 45,000 Scholarship Offer",
    image: `${publishedAssetBase}/universities/melbourne.jpg`,
    imageAlt: "University of Melbourneの歴史的なキャンパス建築",
    imagePosition: "center 52%",
    photoAuthor: "Geoff Penaluna",
    photoSource:
      "https://commons.wikimedia.org/wiki/File:Melbourne_University_grand_building.jpg",
    photoLicense: "CC BY-SA 2.0",
    photoLicenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/",
  },
  {
    name: "University of Auckland",
    detail: "Business / Science",
    offer: "Full Tuition Scholarship Offer",
    image: `${publishedAssetBase}/universities/auckland.jpg`,
    imageAlt: "University of AucklandのClockTower",
    imagePosition: "center 43%",
    photoAuthor: "Uhooep",
    photoSource:
      "https://commons.wikimedia.org/wiki/File:Clock_Tower,_University_of_Auckland.jpg",
    photoLicense: "CC BY-SA 4.0",
    photoLicenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
  },
  {
    name: "Victoria University of Wellington",
    detail: "Commerce / Law",
    offer: "50% Tuition Scholarship Offer",
    image: `${publishedAssetBase}/universities/wellington.jpg`,
    imageAlt: "Victoria University of WellingtonのHunter Building",
    imagePosition: "center 48%",
    photoAuthor: "Khirol Amir",
    photoSource:
      "https://commons.wikimedia.org/wiki/File:Hunter_Building.jpg",
    photoLicense: "CC BY 2.0",
    photoLicenseUrl: "https://creativecommons.org/licenses/by/2.0/",
  },
  {
    name: "University of Adelaide",
    detail: "Business / Economics",
    offer: "Merit-based Scholarship",
    image: `${publishedAssetBase}/universities/adelaide.jpg`,
    imageAlt: "University of AdelaideのBonython Hall",
    imagePosition: "center 52%",
    photoAuthor: "Paleontour",
    photoSource:
      "https://commons.wikimedia.org/wiki/File:The_University_of_Adelaide.jpg",
    photoLicense: "CC BY 2.0",
    photoLicenseUrl: "https://creativecommons.org/licenses/by/2.0/",
  },
  {
    name: "Massey University",
    detail: "Business / Applied Science",
    offer: "International Excellence Award",
    image: `${publishedAssetBase}/universities/massey.jpg`,
    imageAlt: "Massey University Manawatūキャンパスの大学建築",
    imagePosition: "center 48%",
    photoAuthor: "Michal Klajban",
    photoSource:
      "https://commons.wikimedia.org/wiki/File:Massey_University,_Palmerston_North_Campus,_New_Zealand_03.jpg",
    photoLicense: "CC BY-SA 4.0",
    photoLicenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
  },
];

export const steps = [
  {
    number: "01",
    title: "無料相談",
    meta: "約30分",
    text: "困っていること、目標、現在の状況を伺います。まだ悩みが整理できていなくても大丈夫です。",
  },
  {
    number: "02",
    title: "プラン設計",
    meta: "個別にご提案",
    text: "必要な支援と優先順位を整理し、進め方・頻度・条件を分かりやすくお伝えします。",
  },
  {
    number: "03",
    title: "体験・確認",
    meta: "1〜2週間",
    text: "実際の支援を通して、相性と進め方を確認。学習計画の立案と振り返りを体験します。",
  },
  {
    number: "04",
    title: "サポート開始",
    meta: "継続レビュー",
    text: "定期授業と振り返りを始め、学校や出願の状況に合わせて計画を更新します。",
  },
];

export const faqs = [
  {
    question: "NCEAの仕組みがほとんど分からなくても大丈夫ですか？",
    answer:
      "大丈夫です。Achievement・Merit・Excellenceの違いや単位の考え方から整理し、現在地と目標に合う進め方を一緒につくります。",
  },
  {
    question: "日本国外からも受講できますか？",
    answer:
      "オンラインを中心に対応しています。時差を確認したうえで、無理なく継続できる時間を相談して決めます。",
  },
  {
    question: "保護者だけでも相談できますか？",
    answer:
      "はい。初回相談は保護者の方だけでも、生徒ご本人と一緒でも構いません。必要に応じて進捗共有の方法もご相談いただけます。",
  },
  {
    question: "どの科目に対応していますか？",
    answer:
      "Algebra、Calculus、Accounting、English、History、ESOL、Chemistry・Biology Level 1などです。学年・Level・課題内容を初回相談で確認します。",
  },
  {
    question: "大学合格や奨学金は保証されますか？",
    answer:
      "合格や奨学金を保証するサービスではありません。本人の実体験をもとに、選択肢の整理と準備の質を高める支援を行います。",
  },
];
