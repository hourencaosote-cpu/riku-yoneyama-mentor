import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

const title = "米山 陸｜NCEA・海外大学進学 個別サポート";
const description =
  "現役メルボルン大学生・米山陸による、NCEA学習、海外大学進学、留学生活のオンライン個別サポート。";

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
    title,
    description,
    keywords: [
      "NCEA",
      "海外大学進学",
      "オンライン家庭教師",
      "留学メンター",
      "奨学金",
      "米山陸",
    ],
    icons: {
      icon: "/favicon.svg",
      shortcut: "/favicon.svg",
    },
    openGraph: {
      type: "website",
      locale: "ja_JP",
      title,
      description:
        "つまずいた経験があるから、進める道筋を一緒につくれる。NCEA学習から海外大学進学、留学生活まで1対1で伴走します。",
      images: [
        {
          url: `${origin}/og.png`,
          width: 1728,
          height: 909,
          alt: "米山陸 NCEA・海外大学進学 個別サポート",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${origin}/og.png`],
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
      <body>{children}</body>
    </html>
  );
}
