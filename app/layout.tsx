import type { Metadata } from "next";
import { headers } from "next/headers";
import { ConsultationChat } from "./_components/ConsultationChat";
import { MotionRuntime } from "./_components/MotionRuntime";
import { SiteIntro } from "./_components/SiteIntro";
import "./globals.css";

const siteName = "RIXA｜NCEA・海外大学進学 個別サポート";
const description =
  "現役メルボルン大学生・米山陸による、NCEA学習、海外大学進学、留学生活のオンライン個別サポート。";
const ogImageUrl = "/riku-yoneyama-profile-og.png";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ??
    requestHeaders.get("host") ??
    "localhost";
  const protocol =
    requestHeaders.get("x-forwarded-proto")?.split(",")[0]?.trim() ??
    (host.includes("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;

  return {
    metadataBase: new URL(origin),
    title: {
      default: siteName,
      template: `%s｜${siteName}`,
    },
    description,
    keywords: [
      "RIXA",
      "NCEA",
      "海外大学進学",
      "オンライン家庭教師",
      "留学メンター",
      "奨学金",
      "米山陸",
    ],
    icons: {
      icon: "/rixa-logo.png",
      shortcut: "/rixa-logo.png",
    },
    openGraph: {
      type: "website",
      locale: "ja_JP",
      title: siteName,
      description:
        "つまずいた経験があるから、進める道筋を一緒につくれる。NCEA学習から海外大学進学、留学生活まで1対1で伴走します。",
      images: [
        {
          url: ogImageUrl,
          width: 652,
          height: 802,
          alt: "ネイビーのスーツとネクタイを着用した米山陸のプロフィール写真",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: siteName,
      description,
      images: [ogImageUrl],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@500;600;700;800&family=Noto+Sans+JP:wght@400;500;700;900&family=Source+Serif+4:opsz,wght@8..60,400;8..60,600&display=swap"
        />
      </head>
      <body>
        <SiteIntro />
        <MotionRuntime />
        {children}
        <ConsultationChat />
      </body>
    </html>
  );
}
